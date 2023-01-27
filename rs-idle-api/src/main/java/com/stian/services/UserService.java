package com.stian.services;

import com.stian.entities.User;
import com.stian.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    /**
     * 
     * Method required by Spring Security
     * 
     * @param username The username used to find a user from the database
     * @return The User object if found
     * @throws UsernameNotFoundException If no user with the given username was found
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByUsername(username).orElse(null);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return (UserDetails) user;
    }

    public User getUserByUsername(String username) {
        User user = userRepo.findByUsername(username).orElse(null);
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        return user;
    }

    public User getUserByEmail(String email) {
        User user = userRepo.findByEmail(email).orElse(null);
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        return user;
    }

    /**
     *
     * Method for getting a user based on the user's id
     *
     * @param id The user id being looked for
     * @return The user that matches the id
     */
    public User getUserById(Integer id) {
        User user = userRepo.findById(id).orElse(null);
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        return user;
    }

    /**
     *
     * Method to create a new user
     * Uses UserUtils to check if the input object is value, if not, an exception is thrown
     *
     * @param user The user object that is being saved in the database
     * @return The user entity that has been saved in the database
     */
    public User createUser(User user) {
        if (userRepo.findByEmail(user.getEmail()).orElse(null) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    public User getCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!(principal instanceof UserDetails)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        return getUserByUsername(((UserDetails) principal).getUsername());
    }
}

package com.stian.utils;

import com.stian.entities.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public final class UserUtils {

    private static boolean isValidUsername(String username) {
        if(username == null || username.trim().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username can not be empty");
        }
        return true;
    }

    private static boolean isValidEmail(String email) {
        if(email == null || email.trim().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email can not be empty");
        }
        return true;
    }

    private static boolean isValidPassword(String password) {
        if (password == null || password.trim().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password can not be empty");
        }
        return true;
    }

    private static boolean isValueUser(User user) {
        return isValidUsername(user.getUsername())
                && isValidEmail(user.getEmail())
                && isValidPassword(user.getPassword());
    }
}

const API_BASE_URL = "https://back-moment.onrender.com/api";

// ========================================
// Common API Handler
// ========================================

const apiRequest = async (endpoint, options = {}) => {
    try {

        const response = await fetch(
            `${API_BASE_URL}${endpoint}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    ...(options.headers || {}),
                },
                ...options,
            }
        );


        const data = await response.json();


        if (!response.ok) {
            throw new Error(
                data.message || "Something went wrong."
            );
        }


        return data;

    } catch (error) {

        console.error(
            "API Error:",
            error.message
        );

        throw error;
    }
};


// ========================================
// AUTH
// ========================================


// Signup
export const signupUser = async ({
    name,
    email,
    password,
}) => {

    return apiRequest(
        "/auth/signup",
        {
            method: "POST",

            body: JSON.stringify({
                name,
                email,
                password,
            }),
        }
    );
};


// Login
export const loginUser = async ({
    email,
    password,
}) => {

    return apiRequest(
        "/auth/login",
        {
            method: "POST",

            body: JSON.stringify({
                email,
                password,
            }),
        }
    );
};


// Logout
export const logoutUser = async (token) => {

    return apiRequest(
        "/auth/logout",
        {
            method: "POST",

            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};


// ========================================
// BOOKING
// ========================================

export const createBooking = async ({
    name,
    email,
    phone,
    service,
    eventDate,
    message,
}) => {

    return apiRequest(
        "/bookings",
        {
            method: "POST",

            body: JSON.stringify({
                name,
                email,
                phone,
                service,
                eventDate,
                message,
            }),
        }
    );
};


// ========================================
// AUTH TOKEN HELPER
// ========================================

export const getAuthToken = () => {

    return localStorage.getItem(
        "mcf_token"
    );

};


// Save token
export const saveAuthToken = (token) => {

    localStorage.setItem(
        "mcf_token",
        token
    );

};


// Remove token
export const removeAuthToken = () => {

    localStorage.removeItem(
        "mcf_token"
    );

};


// ========================================
// USER HELPER
// ========================================

// Save logged-in user
export const saveUser = (user) => {

    localStorage.setItem(
        "mcf_user",
        JSON.stringify(user)
    );

};


// Get logged-in user
export const getUser = () => {

    const user =
        localStorage.getItem("mcf_user");

    return user
        ? JSON.parse(user)
        : null;

};


// Remove user
export const removeUser = () => {

    localStorage.removeItem(
        "mcf_user"
    );

};


// ========================================
// Complete Logout
// ========================================

export const clearAuth = () => {

    removeAuthToken();
    removeUser();

};
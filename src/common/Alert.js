import React from 'react';

/** Presentationl componenet for showing bootstrap-style-aleerts
 * 
 * { LoginForm, SignupForm, ProfileForm } -> Alert
 */

export default function Alert({ type = "danger", messages = [] }) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {messages.map(error => (
                <p className="mb-0 small" key={error}>
                    {error}
                </p>
            ))}            
        </div>
    );
}

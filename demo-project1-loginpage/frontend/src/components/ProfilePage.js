import React, { useCallback, useEffect } from 'react'; // Thêm useCallback vào đây
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const ProfilePage = ({ currentUser, onLogout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/login');
        }
    }, [currentUser, navigate]);

    const handleDeleteAccount = useCallback(async () => {
        try {
            const response = await AuthService.deleteUser(currentUser.username);
            if (response.status === 200) {
                onLogout();
                navigate('/login');
            }
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    }, [currentUser, navigate, onLogout]);

    return (
        <div>
            {currentUser && (
                <div>
                    <h1>Profile</h1>
                    <p>Username: {currentUser.username}</p>
                    {/* Display other user information here */}
                    <button onClick={handleDeleteAccount}>Delete My Account</button>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;

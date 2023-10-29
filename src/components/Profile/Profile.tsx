import React, { Suspense } from 'react';

interface ProfileProps {
    username: string;
    email: string;
    bio: string;
    hobbies: string[];
}

const LazyComponent = React.lazy(() => import('@/components/LazyComponent/LazyComponent'));

function Profile({ username, email, bio, hobbies }: ProfileProps) {
    if (!username || !email) {
        return null; // Умовний рендеринг з null
    }

    return (
        <div>
            <h2>{username ? username : 'Анонімний користувач'}</h2> {/* Умовний рендеринг */}
            <p>{email}</p>
            <p>{bio}</p>
            <ul> {/* Список елементів */}
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
            <table> {/* Віртуальні елементи */}
                <tbody>
                {hobbies.map((hobby, index) => (
                    <tr key={index}>
                        <td>{hobby}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {username ? ( // Умовний рендеринг без null
                <Suspense fallback={<div>Завантаження...</div>}> {/* Лінивий компонент */}
                    <LazyComponent />
                </Suspense>
            ) : (
                <div>Будь ласка, увійдіть в систему, щоб побачити цей контент</div>
            )}
        </div>
    );
}

export default Profile;

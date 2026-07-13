import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <h1>Welcome to the About Page</h1>
            {/* Nested Navigation */}
            <nav className='flex space-x-4 mt-4 hover:underline'>
                <Link href={"about/contact"}>Contact</Link>
                <Link href={"about/teams"}>Teams</Link>
            </nav>
        </div>
    );
};

export default About;
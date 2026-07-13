import { Link } from 'lucide-react';
import React from 'react';

const NotFound404 = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-3 '>
            <h1>404 | Your Page Not Found MOJO</h1>
            <Link href={"/"} className='underline'>Go to Home</Link>
        </div>
    );
};

export default NotFound404;
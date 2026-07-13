import { Link } from 'lucide-react';
import React from 'react';

const NavLink = ({href, children}) => {
    return (
        <div>
            <Link href={href}>{children}</Link>  
        </div>
    );
};

export default NavLink;
import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const SignedInMenu = ({ signOut, profile, auth }) => {
   return (
      <Menu.Item position="right">
         <Image avatar spaced="right" src={profile.photoURL || "assets/user.png"} />
         <Dropdown pointing="top left" text={profile.displayName}>
            <Dropdown.Menu>
               <Dropdown.Item text="My Bookings" icon="calendar" />
               <Dropdown.Item as={Link} to={`/profile/${auth.uid}`} text="My Profile" icon="user" />
               <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
            </Dropdown.Menu>
         </Dropdown>
      </Menu.Item>
   );
};

export default SignedInMenu;

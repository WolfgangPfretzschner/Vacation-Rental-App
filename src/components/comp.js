import React,{ Fragment } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const comp = ({ link }) => {
   return (
      <Fragment>
         {Link} to='/{link}'
      </Fragment>
   );
};
export default withRouter(comp);


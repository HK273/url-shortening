import classes from "./Nav.module.css";

function NavBar() {
  return (
    <header>
      <nav>
        <ul className={classes.nav_menu}>
          <img className="logo" alt="logo" />
          <li className={classes.item}>All Meetups</li>
          <li className={classes.item}>Add New Meetup</li>
          <li className={classes.item}>Favourites</li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;

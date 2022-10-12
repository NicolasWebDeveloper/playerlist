import classes from './header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <img className={classes.img} src={process.env.PUBLIC_URL + '/logo_placeholder.svg'} alt="" />
    </div>
  );
};

export default Header;

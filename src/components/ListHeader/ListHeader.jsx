import classes from './ListHeader.module.css';

const ListHeader = () => {
  return (
    <div className={classes.listHeader}>
      <div className={classes.player}>Player</div>
      <div className={classes.ping}>Ping</div>
    </div>
  );
};

export default ListHeader;

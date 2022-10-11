import classes from './ListItem.module.css';

const ListItem = props => {
  return (
    <div className={classes.listItem}>
      <div className={classes.player}>{props.player.name}</div>
      <div className={classes.ping}>{props.player.ping}</div>
    </div>
  );
};

export default ListItem;

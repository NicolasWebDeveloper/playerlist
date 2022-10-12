import classes from './ListItem.module.css';

const ListItem = props => {
  let pingColor;

  if (props.player.ping <= 35) {
    pingColor = 'green';
  } else if (props.player.ping <= 60) {
    pingColor = 'orange';
  } else {
    pingColor = 'red';
  }

  return (
    <div className={classes.listItem}>
      <div className={classes.player}>{props.player.name}</div>
      <div className={classes.ping} style={{ color: pingColor }}>
        {props.player.ping}
      </div>
    </div>
  );
};

export default ListItem;

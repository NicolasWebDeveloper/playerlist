import { useEffect, useState } from 'react';

import classes from './List.module.css';
import ListItem from '../listItem/ListItem';
import ListHeader from '../ListHeader/ListHeader';

const List = () => {
  const [listData, updateListData] = useState();

  const getData = async () => {
    try {
      let data = await fetch('YOUR_ENDPOINT_HERE');
      const jsonData = await data.json();
      console.log(jsonData);
      updateListData(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className={classes.list}>
        <ListHeader></ListHeader>
        {!listData ? 'Loading....' : listData.map(player => <ListItem key={player.id} player={player} />)}
      </div>
    </div>
  );
};

export default List;

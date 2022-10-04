import React from 'react'
import Image from './Image/Image'
import Filter from './Filter/Filter'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <div className={classes.header}>
      <Image>
        <Filter onChange={props.onChange} />
      </Image>
    </div>
  );
}

export default Header
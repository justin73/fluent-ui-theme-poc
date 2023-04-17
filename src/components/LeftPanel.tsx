import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  leftPanel: {
    height: '100%',
    width: '20vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...shorthands.borderRight('2px', 'solid', 'red'),
  },
});

export const LeftPanel: React.FC = () => {
  const styles = useStyles();

  return <div className={styles.leftPanel}> left panel</div>;
};

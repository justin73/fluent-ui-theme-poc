import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  rightPanel: {
    height: '100%',
    width: '20vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...shorthands.borderLeft('2px', 'solid', 'red'),
  },
});

export const RightPanel: React.FC = () => {
  const styles = useStyles();

  return <div className={styles.rightPanel}> right panel</div>;
};

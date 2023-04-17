import React from 'react';
import { makeStyles } from '@fluentui/react-components';

import { Content } from 'components/Content';
import { RightPanel } from './RightPanel';

const useStyles = makeStyles({
  page: {
    height: 'calc(100vh - 50px)',
    width: '100vw',
    display: 'flex',
  },
});

export const NluLayout: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      <Content />
      <RightPanel />
    </div>
  );
};

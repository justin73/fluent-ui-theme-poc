import React from 'react';
import { makeStyles } from '@fluentui/react-components';

import { LeftPanel } from 'components/LeftPanel';
import { RightPanel } from 'components/RightPanel';
import { Content } from 'components/Content';

const useStyles = makeStyles({
  page: {
    height: 'calc(100vh - 50px)',
    width: '100vw',
    display: 'flex',
  },
});

export const DialogLayout: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      <LeftPanel />
      <Content />
      <RightPanel />
    </div>
  );
};

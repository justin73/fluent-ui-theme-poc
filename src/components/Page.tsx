import React from 'react';

import { DialogLayout } from 'components/DialogLayout';
import { DashboardLayout } from 'components/DashboardLayout';
import { NluLayout } from 'components/NluLayout';
import { useLayoutContext } from 'contexts';

export const Page: React.FC = () => {
  const { currentPageLayout } = useLayoutContext();

  return (
    <>
      {currentPageLayout === 'dialog' && <DialogLayout />}
      {currentPageLayout === 'dashboard' && <DashboardLayout />}
      {currentPageLayout === 'nlu' && <NluLayout />}
    </>
  );
};

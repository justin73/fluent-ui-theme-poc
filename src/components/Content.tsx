import React from 'react';
import { ThemeProvider } from '@fluentui/react';
import {
  Body1,
  Caption1,
  Button,
  shorthands,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  makeStyles,
} from '@fluentui/react-components';
import { CalendarMonthRegular, ArrowReplyRegular, ShareRegular } from '@fluentui/react-icons';

import { useThemeContext } from '../contexts';
import { useTheme } from 'hooks/useTheme';

const useStyles = makeStyles({
  card: {
    ...shorthands.margin('auto'),
    width: '720px',
    maxWidth: '100%',
  },
  content: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeProviderWrapper: {
    width: '100%',
  },
});

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    'https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/';

  return `${ASSET_URL}${asset}`;
};

export const Content: React.FC = () => {
  const styles = useStyles();
  const { useCustomTheme, compoundTheme } = useThemeContext();
  const { currentBaseTheme } = useTheme();

  return (
    <ThemeProvider
      theme={useCustomTheme ? compoundTheme.colorSet?.dialog.zone3 : currentBaseTheme}
      className={styles.themeProviderWrapper}
    >
      <div className={styles.content} id="content">
        <Button appearance="outline" icon={<CalendarMonthRegular />}>
          Primary
        </Button>
        <Card className={styles.card}>
          <CardHeader
            image={
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img src={resolveAsset('avatar_elvia.svg')} alt="Elvia Atkins avatar picture" />
            }
            header={
              <Body1>
                <b>Elvia Atkins</b> mentioned you
              </Body1>
            }
            description={<Caption1>5h ago · About us - Overview</Caption1>}
          />

          <CardPreview
            logo={<img src={resolveAsset('word_logo.svg')} alt="Microsoft Word document" />}
          >
            <img
              src={resolveAsset('doc_template.png')}
              alt="Preview of a Word document: About Us - Overview"
            />
          </CardPreview>

          <CardFooter>
            <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
            <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
          </CardFooter>
        </Card>
      </div>
    </ThemeProvider>
  );
};

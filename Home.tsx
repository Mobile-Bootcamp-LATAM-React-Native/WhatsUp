import {useMyTheme} from './src/hooks';
import {ColorContextProvider as ColorContext} from '@/shared';
import {AppNavigation} from '@/navigation';

const Home = () => {
  const theme = useMyTheme();

  return (
    <ColorContext value={theme}>
      <AppNavigation />
    </ColorContext>
  );
};

export default Home;

import { ToastAlert } from 'App/Common/UI/Toast';
import { AllRoutes } from 'Routes';

import { useAppContext } from 'State';

export const App = () => {
  const { authContext } = useAppContext();

  return (
    <>
      <ToastAlert />
      <AllRoutes userAuth={authContext?.isAuthenticated} />
    </>
  );
};

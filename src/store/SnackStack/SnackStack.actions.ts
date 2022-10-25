import { closeSnackBar, removeSnackBar } from '.';
import { TAppDispatch } from '~/store';

export const closeSnackAction =
  (id: string) =>
  (dispatch: TAppDispatch): void => {
    dispatch(closeSnackBar(id));
    setTimeout(() => dispatch(removeSnackBar(id)), 100);
  };

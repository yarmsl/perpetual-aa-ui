import { closeModal, removeModal } from '.';
import { TAppDispatch } from '~/store';

export const closeModalAction =
  () =>
  (dispatch: TAppDispatch): void => {
    dispatch(closeModal());
    setTimeout(() => dispatch(removeModal()), 100);
  };

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal , openModal } from '../../store/slices/modalSlice'


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function MainModal() {
  const  { modalStatus , modalConfig } = useSelector((state) => state.modal);
  const handleClose = () => dispatch(closeModal())
  const dispatch = useDispatch();

  console.log(modalConfig.buttons , "modalConfig");



  return (
    <div>
      <Dialog
        open={modalStatus}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{ modalConfig.title ?? "Use Google's location service?"}</DialogTitle>

          <DialogContent>
            {modalConfig?.body?.type === 'DialogContentText' ? (
                <DialogContentText id="alert-dialog-slide-description">
                  {modalConfig?.body.text}
              </DialogContentText>
            ) : 'Body ...' }
          </DialogContent>

        <DialogActions>
          {modalConfig?.buttons.map( ({title , callBack , className}) => (
              <Button className={className ?? ''} key={title} onClick={callBack}>{title}</Button>
          ))}
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
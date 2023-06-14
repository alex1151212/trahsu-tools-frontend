import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  LinearProgress,
  makeStyles,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect } from "react";
interface IProps {
  children?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  style?: React.CSSProperties;
  widthSize?: false | "sm" | "xs" | "md" | "lg" | "xl" | undefined;
  onClose?: () => void;
  limit?: number;
  amount?:number;
  downloadDataAmount?: number;
  isDownloadLoading: boolean;
}
const useStyles = makeStyles((theme: any) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "white",
  },
  content: {
    backgroundColor: "white",
    position: "relative",
  },
}));

/**
 *
 * @param data 下載資料
 * @param dataAmount 下載內容數量限制
 * @param downloadDataAmount 下載內容數量
 * @returns
 */

const DownloadProgress = ({
  open,
  setOpen,
  title,
  widthSize = "sm",
  onClose,
  limit,
  downloadDataAmount,
  isDownloadLoading,
  style = {},
}: IProps) => {
  //   const classes = useStyles();

//   useEffect(() => {
//     if (
//       !isDownloadLoading &&
//       downloadDataAmount <= limit &&
//       downloadDataAmount !== 0
//     ) {
//       setOpen(false);
//     }
//     //eslint-disable-next-line
//   }, [isDownloadLoading]);

  // useEffect(() => {
  //   if (downloadDataAmount > limit) {
  //     clearRequest();
  //   }
  //   //eslint-disable-next-line
  // }, [downloadDataAmount]);

  return (
    <Dialog
      open={open}
      onClose={onClose ? onClose : () => setOpen(false)}
      fullWidth
      maxWidth={widthSize}
      style={style}
    >
      <DialogTitle>
        {title}
        <IconButton
          // className={classes.closeButton}
          onClick={() => {
            setOpen(false);
            //   clearRequest();
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <LinearProgress />
      </DialogContent>
    </Dialog>
  );
};

export default DownloadProgress;

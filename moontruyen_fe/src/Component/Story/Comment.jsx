import {
  Avatar,

  Button,
  Dialog,
  DialogTitle,

  TextField,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import ReplyIcon from "@mui/icons-material/Reply";

const initialValues = {
  reply: "",
};

const Comment = ({ comment, isReply=false }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log("rep", values);
    resetForm();
    handleClose();
  };

  return (
    <div className="py-5 px-3 flex flex:row">
      <div>
        <Avatar>A</Avatar>
      </div>
      <div className="w-full bg-[#e2e2e261] mt-2 ml-5 rounded-xl shadow-sm">
        <div className="flex flex-row justify-between mx-5 py-2 text-sm border-gray-300 border-b-[1px] pt-3">
          <p className="font-bold">Tuyền</p>
          {!isReply && (
            <p onClick={handleOpen} className="cursor-pointer">
              <ReplyIcon className="pb-1" />
              Trả lời
            </p>
          )}
        </div>
        <div className="px-7 py-4">{comment.text}</div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <ReplyIcon className="pb-1" />
          Trả lời @<span className="font-bold">Tuyền</span>
        </DialogTitle>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Grid container spacing={2}
          sx={{paddingX:"40px",
            marginBottom:"20px"
          }}
          >
            <Grid size={12}>
              <Field
                as={TextField}
                name="reply"
                label=""
                fullWidth
                variant="outlined"
                sx={{
                  marginTop: "10px",
                }}
              />
            </Grid>
            <Grid size={12} >
             <div className="flex gap-4 justify-end">
             <Button type="submit" variant="contained" color="primary">
                Gửi
              </Button>
              <Button onClick={handleClose}>Thoát</Button>
             </div>
            </Grid>
          </Grid>
        </Form>
        </Formik>
      </Dialog>
    </div>
  );
};

export default Comment;

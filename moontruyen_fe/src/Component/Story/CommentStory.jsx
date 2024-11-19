import React, { useState } from "react";
import Comment from "./Comment";
import Grid from "@mui/material/Grid2";
import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import AddIcon from '@mui/icons-material/Add';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const initialValues = {
  reply: "",
};

const CommentStory = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "This is a comment", 
      replies: [
        {
          id:1,
          text:"Reply 1"
        },
        {
          id:2,
          text:"Reply 2"
        },
      ] },
    { id: 2, text: "Another comment", replies: [] },
  ]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log("cmt", values);

    resetForm();
    handleClose();
  };

  return (
    <div>
     {comments.map((cmt) => (
        <div key={cmt.id}>
          <Comment comment={cmt} />
          {cmt.replies.map((reply, index) => (
            <div className="ml-14">
              <Comment comment={reply} isReply={true}/>
            </div>
          ))}
        </div>
      ))}
      <div className="flex justify-evenly py-5">
        <Button className="flex items-center" onClick={handleOpen}><AddIcon/>Thêm bình luận</Button>
        <Button >Xem thêm bình luận <ArrowRightAltIcon/></Button>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title"
        sx={{
          borderBottom:"solid 1px gray"
        }}
        >
          <span className="font-bold">Comment</span>
        </DialogTitle>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Grid container spacing={2} sx={{ padding: "20px" }}>
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
              <Grid size={12}>
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

export default CommentStory;

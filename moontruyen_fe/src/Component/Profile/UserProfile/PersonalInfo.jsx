import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { uploadImageToCloud } from "../../../util/UploadToClouldinary";

const initialValues = {
  userName: "thut15794",
  name: "Đào Thu Trang",
  date: dayjs("2024-04-17").format("MM-DD-YYYY"),
  gender: "Khác",
  image: "",
};

const PersonalInfo = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data = {
        userName: values.userName,
        name: values.name,
        date: values.date,
        gender: values.gender,
        image: values.image,
      };
      console.log("data-------  ", data);
    },
  });

  const handleDateChange = (date, dateType) => {
    const formattedDate = dayjs(date).format("MM-DD-YYYY");
    formik.setFieldValue(dateType, formattedDate);
  };
  const [image, setImage] = useState(
    "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
  );
  const [uploadImage, setUploadImage] = useState(false);
  const handleImageChange = async (e) => {
    setUploadImage(true); 
    try {
      const uploadedImage = await uploadImageToCloud(e.target.files[0]);
      setImage(uploadedImage); 
      formik.setFieldValue("image", uploadedImage); 
    } catch (error) {
      console.error("Upload ảnh thất bại", error);
    } finally {
      setUploadImage(false);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-[60%] ">
          <Grid container spacing={4}>
            <Grid size={12}>
              <TextField
                id="filled-read-only-input"
                label="Tên Đăng Nhập"
                defaultValue="thut15794"
                variant="filled"
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
                fullWidth
                value={formik.values.userName}
                
              />
            </Grid>
            <Grid size={12}>
              <TextField
                id="outlined-helperText"
                label="Họ Và Tên"
                defaultValue="Đào Thu Trang"
                helperText="Họ và tên có độ dài từ 1-55 kí tự"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.name}
                name="name"
                
              />
            </Grid>
            <Grid size={12} container spacing={2}>
              <Grid size={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Ngày Sinh"
                    fullWidth
                    value={
                      formik.values.date ? dayjs(formik.values.date) : null
                    }
                    onChange={(newValue) => handleDateChange(newValue, "date")}
                    inputFormat="MM-DD-YYYY"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid size={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Giới Tính
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Giới tính"
                    value={formik.values.gender}
                    onChange={(event) =>
                      formik.setFieldValue("gender", event.target.value)
                    }
                  >
                    <MenuItem value={"Khác"}>Khác</MenuItem>
                    <MenuItem value={"Nam"}>Nam</MenuItem>
                    <MenuItem value={"Nữ"}>Nữ</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="flex lg:w-[40%] flex-col items-center justify-center gap-4">
          <img src={image} alt="" className="rounded-full w-[8rem] h-[8rem]" />
          <Button
            variant="contained"
            component="label"
            disabled={uploadImage} // Vô hiệu hóa khi đang tải ảnh
          >
            {uploadImage ? "Đang tải..." : "Thay đổi"}
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <Button type="submit">Cập nhật</Button>
        <Button>Hủy</Button>
      </div>
    </form>
  );
};

export default PersonalInfo;

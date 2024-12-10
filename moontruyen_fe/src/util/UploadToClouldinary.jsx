const upload_preset="trang_story"
const cloud_name="dfrjsdza9"
const api_url =`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

export const uploadImageToCloud=async(file)=>{
    const data =new FormData();
    data.append("file",file);
    data.append("upload_preset",upload_preset);
    data.append("cloud_name",cloud_name);
    const res=await fetch(api_url,{
        method:"post",
        body:data
    });
    const fileData=await res.json();
    return fileData.url;
}
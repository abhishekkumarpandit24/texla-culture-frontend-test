import Avatar from "@mui/material/Avatar";

export const columns = [
  { id: "avatar", label: ["Avatar", ""], minWidth: 100 },
  { id: "name", label: ["Name", "Role"], minWidth: 150 },
  { id: "joining", label: ["Joining Date", "Offering Date"], minWidth: 100 },
  {
    id: "designation",
    label: ["Designation", "Department"],
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "phone",
    label: ["Phone No", "Email"],
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "location",
    label: ["Location", "Business Function"],
    minWidth: 150,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: ["Status", "Employment Type"],
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

export function createData(
  avatar,
  name,
  joining,
  designation,
  phone,
  location,
  status
) {
  // let d = new Date();
  // if (d.getDate() > name[0]) status = ["Joined", "Full Time"];
  // else if(d.getDate() <joining[0])
  //   status = ["Pending Onboarding", "Full Time"]
  return { avatar, name, joining, designation, phone, location, status };
}

export const rows = [
  createData(
    [<Avatar sx={{ bgcolor: "orange" }}>AP</Avatar>, ""],
    [`Abhishek Pandit`, "Architect"],
    ["20th Dec 2022", "10th Dec 2022"],
    ["Software Engineer", "IT"],
    ["7011176572", "abhishekpandit811@gmail.com"],
    ["Delhi", "Cloud Services"],
    [<span style={{color: "rgb(0,171,85)", backgroundColor: "rgb(235,248,242)"}}>Joined</span>, "Full Time"]
  ),
  createData(
    [<Avatar sx={{ bgcolor: "red" }}>Ad</Avatar>, ""],
    ["Aditya", "Backend Developer"],
    ["01st Jan 2023", "10th Dec 2022"],
    ["Software Engineer", "IT"],
    ["7011176572", "aditya@gmail.com"],
    ["Bengal", "Cloud Services"],
    [<span style={{color: "rgb(92,92,92)", backgroundColor: "rgb(197,204,209)"}}>Not Joined</span>, "Full Time"]
  ),
  createData(
    [<Avatar sx={{ bgcolor: "orange" }}>JD</Avatar>, ""],
    ["John David", "Full Stack"],
    ["1st Jan 2023", "10th Dec 2022"],
    ["Software Engineer", "IT"],
    ["7011176572", "john@gmail.com"],
    ["Delhi", "Cloud Services"],
    [<span style={{color: "rgb(191,130,4)", backgroundColor: "rgb(245,221,169)"}}>Pending Offer</span>, "Full Time"]
  ),
  createData(
    [<Avatar sx={{ bgcolor: "blue" }}>C</Avatar>, ""],
    ["Christophe", "Role"],
    ["01 Jan 2023", "10th Dec 2022"],
    ["Software Engineer", "IT"],
    ["7011176572", "christopher@gmail.com"],
    ["Delhi", "Cloud Services"],
    [<span style={{color: "rgb(92,92,92)", backgroundColor: "rgb(197,204,209)"}}>Not Joined</span>, "Full Time"]
  ),
  createData(
    [<Avatar sx={{ bgcolor: "gray" }}>AM</Avatar>, ""],
    ["Arunav Mandal", "Principal Engineer"],
    ["01 Jan 2023", "10th Dec 2022"],
    ["Software Engineer", "IT"],
    ["7011176572", "abhishekpandit811@gmail.com"],
    ["Delhi", "Cloud Services"],
    [<span style={{color: "rgb(92,92,92)", backgroundColor: "rgb(197,204,209)"}}>Not Joined</span>, "Full Time"]
  ),
  createData(
    [<Avatar sx={{ bgcolor: "violet" }}>SR</Avatar>, ""],
    ["Satyam Raj", "Technical Support"],
    ["20th Dec 2022", "Not Decided"],
    ["Software Engineer", "IT"],
    ["7011176572", "sattu@gmail.com"],
    ["Delhi", "Cloud Services"],
    [<span style={{color: "rgb(191,130,4)", backgroundColor: "rgb(245,221,169)"}}>Pending Offer</span>, "Full Time"]
  ),
  createData(
    [<Avatar sx={{ bgcolor: "darkbrown" }}>S</Avatar>, ""],
    ["Sriniwas", "Implementation Engineer"],
    ["20th Dec 2022", "10th Dec 2022"],
    ["Software Engineer", "IT"],
    ["7011176572", "sri@gmail.com"],
    ["Delhi", "Cloud Services"],
    [<span style={{color: "rgb(226,144,69)", backgroundColor: "rgb(241,197,158)"}}>Pending Onboarding</span>, "Full Time"]
  ),
  createData(
    [<Avatar>A</Avatar>, ""],
    ["Abhishek", "Role"],
    ["20th Dec 2022", "10th Dec 2022"],
    ["Software Engineer", "IT"],
    ["7011176572", "abhishekpandit811@gmail.com"],
    ["Delhi", "Cloud Services"],
    [<span style={{color: "rgb(204,62,30)", backgroundColor: "rgb(245,195,184)"}}>Joining Overdue</span>, "Full Time"]
  ),
  createData(
    [<Avatar sx={{ bgcolor: "deepOrange[500]" }}>A</Avatar>, ""],
    ["Abhishek", "Role"],
    ["20th Dec 2022", "10th Dec 2022"],
    ["Software Engineer", "IT"],
    ["7011176572", "abhishekpandit811@gmail.com"],
    ["Delhi", "Cloud Services"],
    [<span style={{color: "rgb(0,171,85)", backgroundColor: "rgb(235,248,242)"}}>Joined</span>, "Full Time"]
  ),
  createData(
    [<Avatar>J</Avatar>, ""],
    ["Jonas", "Role"],
    ["20th Dec 2022", "10th Dec 2022"],
    ["Software Engineer", "IT"],
    ["7011176572", "jonas@gmail.com"],
    ["Delhi", "Cloud Services"],
    [<span style={{color: "rgb(0,171,85)", backgroundColor: "rgb(235,248,242)"}}>Joined</span>, "Full Time"]
  ),
  createData(
    [<Avatar sx={{ bgcolor: "deepOrange[500]" }}>C</Avatar>, ""],
    ["Chris", "Role"],
    ["20th Dec 2022", "10th Dec 2022"],
    ["Software Engineer", "IT"],
    ["7011176572", "chris@gmail.com"],
    ["Delhi", "Cloud Services"],
    [<span style={{color: "rgb(0,171,85)", backgroundColor: "rgb(235,248,242)"}}>Joined</span>, "Full Time"]
  ),
];
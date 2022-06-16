import React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import isWeekend from 'date-fns/isWeekend';
import moment from "moment";

const Date_Picker = () => {
  return (
    <div>
       <Dialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="responsive-dialog-title"
    >
     
      <DialogTitle id="responsive-dialog-title" className="DialogHeading">
        <div>
        {/* {"Schedule for future"} */}
        <p>Schedule For Future</p>
        </div>
        <div className="CloseIcon" onClick={props.handleClose}><CloseIcon /></div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please select Future Date
        </DialogContentText>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
          <div className="input-container calender">
            <img src={calander} alt="emailid" className="inputimge" />
            <img src={inputPath} alt="usernPath" className="inputimgePath" />
           
           <LocalizationProvider dateAdapter={AdapterDateFns} className="DatePicker">
             <DatePicker
             shouldDisableDate={isWeekend}
         
            minDate={mindisplay}
            maxDate={maxDayhereCOnst}
            value={startDate}
            inputFormat="dd/MM/yyyy"
            onOpen={() =>setOpenPoPUP(true)}
            onChange={(newValue) => {
              setStartDate(newValue)
              props.setScheduleForFutureDate(newValue);
              setOpenPoPUP(false);
            }}
             className="Date"
             open={openPoPUp}
             renderInput={(params) => <TextField {...params}
              className="DatePickerTextField" onClick={(e) => setOpenPoPUP(true)} /> }
             > 
             </DatePicker>
           </LocalizationProvider>
            {/* <img src={dropimg} className="datedropImg" alt="datedropImg" /> */}
          </div>
        </div>
      </DialogContent>
      <DialogActions className="ModelDialBtns">
        <Button autoFocus onClick={props.handleClose} className="CanelBtn">
          Cancel
        </Button>
        <Button onClick={() =>handleRedirect()} autoFocus className="ProceedBtn">
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
    </div>
  )
}

export default Date_Picker
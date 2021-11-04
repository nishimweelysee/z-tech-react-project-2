import React, { useState } from "react";
import Header from "./components/header";
import Footer from './components/footer'
import Main from "./components/mainSection";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddItinerary from './components/addItinerary';
function App() {
  const [open, setOpen] = useState(false);
  const [itinerary,setItinerary] = useState([{title:"Studying Math",date:new Date()},{title:"Relaxing",date:new Date()}])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddItenerary = (itin)=>{
    setItinerary([...itinerary,itin])
  }

  const handleRemove = (index)=>{
    itinerary.splice(index,1);
    setItinerary([...itinerary]);
  }



  return (
    <div className="px-20 py-5">
      <Header handleClickOpen={handleClickOpen} />
      <Main remove={handleRemove} arrayData={itinerary}/>
      <Footer />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className="absolute">
        <DialogTitle id="form-dialog-title">New Itinerary</DialogTitle>
        <DialogContent>
          <AddItinerary handleAdd={handleAddItenerary} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;

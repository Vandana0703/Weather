import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { saveFeedback } from "./store/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function FeedbackModal(props){
    const {show,handleClose} = props;
    const [errorMsg,setErrorMsg] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
      if(show){
        setErrorMsg('')
      }
    },[show]);

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(e.target[0].value);
      const feedback={description:e.target[0].value};
      if(feedback.description.length>5){
        setErrorMsg('');
        dispatch(saveFeedback(feedback));
        return navigate('/Feedback')
        handleClose();
      }
      else{
        setErrorMsg('Enter atleast 5characters');
      }
    }
    return(
        <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Feedback About Weather Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="feedback-form">
            <textarea placeholder="Submit your weather experience" name="feedbackdata"/><br/><br/>
            {errorMsg.length && <div>{errorMsg}</div>}
            <button type="submit">Submit</button>
          </form>
        </Modal.Body>
      </Modal>
    )
}

export default FeedbackModal;
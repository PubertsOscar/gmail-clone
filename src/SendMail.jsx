import React, { useEffect } from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMail() {
  const {  register,handleSubmit,setError,formState: { errors }} = useForm();
  const dispatch= useDispatch();

  const onSubmit = (formData) =>{
    const email ={
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    }
    addDoc(collection(db, "emails"),email)
    dispatch(closeSendMessage())
      }

  React.useEffect(() => {
    setError("to", {
      required: "This is required",
    });
    setError("subject", {
      required: "This is required",
    });
    setError("message", {
      required: "This is required",
    });
  }, [setError]);

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3 className="">New Message</h3>
        <CloseIcon onClick={()=> dispatch(closeSendMessage())} className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          placeholder="To"
          type="email"
        />
        {errors.to && 
          <p className="sendMail__error">{errors.to.required}</p>
        }

        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        />
        {errors.subject && 
          <p className="sendMail__error">{errors.subject.required}</p>
        }

        <input
          {...register("message", { required: true })}
          placeholder="Message..."
          type="text"
          className="sendMail__message"
        />
        {errors.message && 
          <p className="sendMail__error">{errors.message.required}</p>
        }

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { green } from "@mui/material/colors";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Notification from "./notification";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Address(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dc, setDC] = useState(0);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");
  const timer = useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const Orders = props.Summary;
  let totalPrice = 0;
  const Summary = Orders.map((item) => {
    totalPrice = totalPrice + item.Price;
    return {
      Name: item.Title,
      Qty: item.Quantity,
      Cost: item.Price,
    };
  });

  function calculateDC(e) {
    const { value } = e.target;
    if (value === "Karachi") {
      setDC(160);
    } else if (value === "Sindh but outside Karachi") {
      setDC(270);
    } else {
      setDC(330);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const dropdown = document.querySelector(".deliverLocation");
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;
    if (selectedOption === "not") {
      setMsg("Please select valid option to calculate delivery charges.");
      setStatus("error");
      setShow(true);
    } else if (
      name === "" ||
      phone.toString().length < 11 ||
      !email.includes("@" && ".com") ||
      address === ""
    ) {
      setMsg("Invalid field entry!!");
      setStatus("error");
      setShow(true);
    } else {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
      }
      const res = await fetch("http://localhost:8006/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          address,
          dc,
          totalPrice,
          Summary,
        }),
      });

      const data = await res.json();

      if (data.status === 401 || !data) {
        console.log("error");
        setLoading(false);
      } else {
        console.log("email sent");
        setStatus("success");
        setMsg(
          "Order placed successfuly. Check your email for Payment Details."
        );
        setShow(true);
        setSuccess(true);
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  }

  return (
    <>
      {show && <Notification msg={msg} status={status} />}
      <div
        className="personalInfo-container"
        style={{ display: props.isVisible ? "block" : "none" }}
      >
        <div className="close-cart">
          <button onClick={() => props.setVisible(false)}>
            <CloseIcon sx={{ color: grey[50] }} fontSize="large" />
          </button>
        </div>
        <form onSubmit={handleSubmit} method="POST">
          <div className="personalInfo-contents">
            <input
              name="Name"
              disabled={loading}
              value={name}
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <input
              name="Phone"
              disabled={loading}
              value={phone}
              type="Number"
              placeholder="Enter Your Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            ></input>
            <input
              name="Address"
              disabled={loading}
              value={address}
              placeholder="Enter Your Address"
              onChange={(e) => setAddress(e.target.value)}
              required
            ></input>
            <input
              disabled={loading}
              name="Email"
              type="email"
              value={email}
              placeholder="Enter Your Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <select
              disabled={loading}
              className="deliverLocation"
              name="deliverCharges"
              onChange={calculateDC}
              required
            >
              <option disabled selected value="not">
                Calculate Delivery Charges
              </option>
              <option value="Karachi">Karachi</option>
              <option value="Sindh but outside Karachi">
                Sindh but outside Karachi
              </option>
              <option value="Other than sindh">Other Provinces</option>
            </select>
          </div>
          <div className="OrderContents" style={{ color: "#fff" }}>
            <h4>Order Summary</h4>
            <table className="summary-contents">
              <tr>
                <th>Qty</th>
                <th className="center-column">Item</th>
                <th>Rs</th>
              </tr>
              {Summary.map((order) => {
                return (
                  <tr>
                    <td>{order.Qty}x</td>
                    <td className="center-column">{order.Name}</td>
                    <td>{order.Cost}</td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td>Delivery Charges</td>
                <td>{dc}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <h4>Total</h4>
                </td>
                <td>
                  <h4>{totalPrice + dc}</h4>
                </td>
              </tr>
            </table>
          </div>
          <div className="payment-container">
            <ul>
              <li>Payment Method: Bank Transfer</li>
              <li>Bank Name: Nayapay</li>
              <li>Acc Title: Muhammad Humayun Raza</li>
              <li>Acc Number: 03161278341</li>
            </ul>
          </div>
          <div className="info">
            <span>
              Order receipt along with payment information will be sent to your
              email on placing order. Note: Nayapay is preferred,however, if you
              face trouble transfering money to Nayapay wallet you can try
              Easypaisa/Sadapay, account number is the same. Do share the
              payment receipt and order receipt on whatsapp.
            </span>
          </div>
          <div className="button-container">
            <Box sx={{ m: 1, position: "relative" }}>
              <Button
                sx={buttonSx}
                variant="contained"
                type="submit"
                disabled={loading}
                endIcon={<SendIcon />}
              >
                Order
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
          </div>
        </form>
      </div>
    </>
  );
}

export default Address;

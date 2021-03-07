/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = styled(ToastContainer)`
  .Toastify__toast--success {
    background: #ff5a5a !important;
    margin-top: 80px;
  }
`;

export const showToast = ({ message }) => toast.success(message);

const ToastAnimated = () => <Toast />;

export default ToastAnimated;

import styled from "styled-components";

export default styled.div`
    form {
        label {
            text-align: left;
            font-size: 14px;

            span {
                padding: 0 18px;
            }
        }

        a {
            text-decoration: none;
            color: rgb(117, 132, 136);
            text-align: center;
            font-size: 14px;
        }

        .form-group {
            margin: 0 0 36px;

            &.password {
                margin-bottom: 13px;
            }

            &.forgot-password {
                text-align: center;
                margin-bottom: 55px;
            }

            &.tc-acknowledgment {
                margin-bottom: 18px;

                label {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;

                    input {
                        margin-right: 18px;
                        transform: scale(1.8);
                    }
                }
            }
        }

        input {
            border: none;
            border-radius: 23px;
            cursor: pointer;

            &[type="email"],
            &[type="password"] {
                padding: 0 18px;
                border: 1px solid #fff;
                transition: border-color 250ms ease-in-out, box-shadow 250ms ease-in-out;
                -moz-transition: border-color 250ms ease-in-out, box-shadow 250ms ease-in-out;
                -webkit-transition: border-color 250ms ease-in-out, box-shadow 250ms ease-in-out;

                &:focus {
                    outline: none;
                    border-color: rgba(255, 0, 133, 0.7);
                    -webkit-box-shadow: 0px 0px 20px 0px rgba(255, 0, 133, 0.7);
                    -moz-box-shadow: 0px 0px 20px 0px rgba(255, 0, 133, 0.7);
                    box-shadow: 0px 0px 20px 0px rgba(255, 0, 133, 0.7);
                }

                &:hover {
                    -webkit-box-shadow: 0px 0px 20px 0px rgba(255, 0, 133, 0.7);
                    -moz-box-shadow: 0px 0px 20px 0px rgba(255, 0, 133, 0.7);
                    box-shadow: 0px 0px 20px 0px rgba(255, 0, 133, 0.7);
                }
            }

            &[type="email"],
            &[type="password"],
            &[type="submit"] {
                width: 285px;
                height: 46px;
                font-weight: 500;
                font-size: 14px;
                margin-top: 6px;

                &::placeholder {
                    color: rgb(175, 182, 185);
                }
            }

            &[type="submit"] {
                background-color: #ff0085;
                color: #fff;
                margin-top: 40px;
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 1px;
            }
        }

        .tc-copy {
            font-size: 12px;

            span {
                color: #ff0085;
                padding: 0;
                transition: color 250ms ease-in-out;

                &:hover {
                    color: #2648b2;
                    cursor: pointer;
                }
            }
        }
    }
`;

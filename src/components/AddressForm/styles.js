import styled from "styled-components";

export default styled.div`
    background-color: rgb(245, 245, 245);
    padding: 34px 0;

    form {
        label {
            text-align: left;
            font-size: 14px;
            color: #000;

            span {
                padding: 0 18px;
            }
        }

        .form-group {
            margin: 0 0 28px;

            &.submit {
                padding-top: 36px;
            }
        }

        input {
            border: none;
            border-radius: 23px;
            cursor: pointer;

            &[type="text"] {
                padding: 0 18px;
                border: 1px solid #dadcdd;
                transition: border-color 250ms ease-in-out, box-shadow 250ms ease-in-out;
                -moz-transition: border-color 250ms ease-in-out, box-shadow 250ms ease-in-out;
                -webkit-transition: border-color 250ms ease-in-out, box-shadow 250ms ease-in-out;
                width: 100%;
                height: 46px;
                font-weight: 500;
                font-size: 14px;
                margin-top: 6px;

                &::placeholder {
                    color: rgb(175, 182, 185);
                }

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
        }
    }
`;

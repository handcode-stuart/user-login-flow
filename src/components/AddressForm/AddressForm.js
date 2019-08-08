import React, { useState } from "react";
import StyledAddressForm from "./styles";
import Container from "../Container/Container";
import Button from "../Button/Button";

const AddressForm = () => {
    const [data, setData] = useState({
        address_1: "",
        address_2: "",
        town: "",
        postcode: "",
    });

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <StyledAddressForm>
            <Container>
                <form>
                    <div className='form-group'>
                        <label htmlFor='address_1'>
                            <span>Address line 1</span>
                            <br />
                            <input
                                type='text'
                                name='address_1'
                                value={data.address_1}
                                placeholder='Address line 1'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='address_2'>
                            <span>Address line 2</span>
                            <br />
                            <input
                                type='text'
                                name='address_2'
                                value={data.address_2}
                                placeholder='Address line 2'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='town'>
                            <span>Town/City</span>
                            <br />
                            <input
                                type='text'
                                name='town'
                                value={data.town}
                                placeholder='Town/City'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='postcode'>
                            <span>Postcode</span>
                            <br />
                            <input
                                type='text'
                                name='postcode'
                                value={data.postcode}
                                placeholder='Postcode'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='form-group  submit'>
                        <Button onClick={e => handleSubmit(e)}>Next</Button>
                    </div>
                </form>
            </Container>
        </StyledAddressForm>
    );
};

export default AddressForm;

import { useState } from "react";

const SignInForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        cardNumber: '',
    });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <div class="Header">
                <h3 class="Heading">Shopping Cart</h3>
                <h5 class="Action">Remove all</h5>
            </div>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 30px',
                    alignItems: 'flex-start',
                }}
            >
                <label htmlFor="firstName" style={{ marginTop: 20 }}>
                    First Name
                </label>
                <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    style={{
                        width: '100%',
                    }}
                />
                <label htmlFor="lastName" style={{ marginTop: 20 }}>
                    Last Name
                </label>
                <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    style={{
                        width: '100%',
                    }}
                />
                <label htmlFor="addressLine1" style={{ marginTop: 20 }}>
                    Address Line 1
                </label>
                <input
                    name="addressLine1"
                    type="text"
                    placeholder="Address Line 1"
                    value={formData.addressLine1}
                    onChange={e => setFormData({ ...formData, addressLine1: e.target.value })}
                    style={{
                        width: '100%',
                    }}
                />
                <label htmlFor="addressLine2" style={{ marginTop: 20 }}>
                    Address Line 2
                </label>
                <input
                    name="addressLine2"
                    type="text"
                    placeholder="Address Line 2"
                    value={formData.addressLine2}
                    onChange={e => setFormData({ ...formData, addressLine2: e.target.value })}
                    style={{
                        width: '100%',
                    }}
                />
                <label htmlFor="city" style={{ marginTop: 20 }}>
                    City
                </label>
                <input
                    name="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    style={{
                        width: '100%',
                    }}
                />
                <label htmlFor="state" style={{ marginTop: 20 }}>
                    State
                </label>
                <input
                    name="state"
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={e => setFormData({ ...formData, state: e.target.value })}
                    style={{
                        width: '100%',
                    }}
                />
                <label htmlFor="zip" style={{ marginTop: 20 }}>
                    Zip Code
                </label>
                <input
                    name="zip"
                    type="number"
                    placeholder="Zip Code"
                    value={formData.zip}
                    onChange={e => setFormData({ ...formData, zip: e.target.value })}
                    style={{
                        width: '100%',
                    }}
                />
                <label htmlFor="cardNumber" style={{ marginTop: 20 }}>
                    Card Number
                </label>
                <input
                    name="cardNumber"
                    type="number"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                    style={{
                        width: '100%',
                    }}
                />
                <button type="submit" style={{ marginTop: 20 }}>
                    Sign In
                </button>
            </form>
        </>

    );
};

export default SignInForm

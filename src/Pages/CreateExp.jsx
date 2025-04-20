import axios from 'axios';
import React from 'react'

const CreateExp = () => {
    const [exp, setExp] = React.useState({
        tittle: '',
        amount: '',
        category: '',
        notes: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setExp({ ...exp, [name]: value });
    };


    const Submitform = async (e) => {


        const userId = localStorage.getItem('userId');
        if (!userId) {
            alert("User not logged in.");
            return;
        }

        e.preventDefault();
        try {

            const payload = {
                tittle: exp.tittle,
                amount: parseFloat(exp.amount),     // Convert to number
                category: exp.category,             // Make sure the input uses name="category"
                notes: exp.notes,
                dateTime: new Date().toISOString(), // Required field in model
                userId: userId                      // Send userId as expected by backend
            };

            const res = await axios.post('https://localhost:7240/api/User/Expenses', payload);
            if (res.status == 200) {
                console.log(res.data);
            }
            setExp({
                tittle: '',
                amount: '',
                category: '',
                notes: '',

            });
        } catch (error) {

        }
    }

    return (
        <div className='container mt-5' style={{ border: '1px solid lightgrey', width: '600px', padding: '20px', borderRadius: '8px' }}>
            <div className="text-center mb-4">
                <h1 className="fw-bold">Track Your Spending</h1>
                <h2 className="text-muted">Because every rupee counts 💰</h2>
                <p className="fst-italic">"Are you an expense? Because I can’t stop adding you to my life!"</p>
            </div>

            <form onSubmit={Submitform}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Tiitle"
                        id="tittleinput"
                        name="tittle"
                        value={exp.tittle}
                        onChange={handleChange}
                    />
                </div>


                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Amount"
                        id="Amountinput"
                        name="amount"
                        value={exp.amount}
                        onChange={handleChange}
                    />
                </div>


                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Category"
                        id="Categoryinput"
                        name="Category"
                        value={exp.category}
                        onChange={handleChange}
                    />
                </div>


                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Notes.."
                        id="notesinput"
                        name="notes"
                        value={exp.notes}
                        onChange={handleChange}
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-md btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateExp
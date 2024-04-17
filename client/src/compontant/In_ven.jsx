import React, { useState } from "react";

export default function In_ven() {
  const [selects, setSelects] = useState();
  const [qty, setQty] = useState();
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [sum, setSum] = useState();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();

  function calculation() {
    // if (!qty) {

    //     return 0;
    // }else if(selects == "Kg"){
    //     return(qty * 200);
    // }else{
    //     return(qty /1000 *200);

    // }
    users.push({ name, selects, qty, price, sum });

    const total = users.reduce((total, user) => {
      total += Number(user.sum);
      return total;
    }, 0);

    setTotal(total);
    setSelects("");
    setName("");
    setQty("");
    setPrice("");
    setSum("");
  }

  const hadlePriceChange = (e) => {
    const newPrice = parseFloat(e.target.value);
    if (!isNaN(newPrice)) {
      setPrice(newPrice);
      calculateTotal(newPrice, qty);
    }
  };

  //hadler for quantity selection
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      setQty(newQuantity);
      calculateTotal(price, newQuantity);
    }
  };

  //calculate the total based on price and quantity

  const calculateTotal = (price, qty) => {
    const newTotal = price * qty;
    setSum(newTotal);
  };

  function refreshPage() {
    window.location.reload();
    alert("Item successfuly send!");
  }

  return (
    <div>
      <div className=" " role="alert">
        <h3 className="mb-2 font-serif text-2xl">Tea leaf Inventory</h3>
      </div>
      <div className="flex mt-10 justify-center">
        <div className="mb-2 font-serif">
          <label className="p-3">Name</label>
          <input
            type="text"
            placeholder="Enter the Name"
            className="w-[300px] p-2 border rounded"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        {/* onChange={(event) => {setSelects(event.target.value)}} */}

        <div className="mb-2 font-serif">
          <label className="p-2">Type</label>
          <input
            type="text"
            placeholder="Enter the Name"
            className="w-[300px] p-2 border rounded"
            value={selects}
            onChange={(event) => {
              setSelects(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex mt-3 justify-center">
        <div className="mb-2 font-serif">
          <label className="p-3">Price</label>
          <input
            type="text"
            placeholder="Enter the Price"
            className="w-[300px] p-2 border rounded"
            value={price}
            onChange={hadlePriceChange}
          />
        </div>
        <div className="mb-2 font-serif">
          <label className="p-3">Qty</label>
          <input
            type="number"
            placeholder="Enter the QTY"
            className="w-[300px] p-2 border rounded"
            value={qty}
            onChange={handleQuantityChange}
          />
        </div>
      </div>
      <div className="mb-2 font-serif">
        <input
          type="text"
          placeholder="Enter the Total"
          className="w-[300px] p-2 border rounded mt-10 ml-12   "
          value={sum}
          id="total_cost"
          name="total_cost"
          disabled
        />
      </div>

      <div>
        <button className="btn" type="submit" onClick={calculation}>
          Add
        </button>
      </div>

      <br />
        <div className="flex flex-row">
          <h3 className="mb-2 font-serif text-2xl"> Products</h3>

          <table className="w-1/2 bg-white bg rounded p-3 ml-[300px] backdrop-grayscale-0 bg-white/30">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {users.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.selects}</td>
                  <td>{row.price}</td>
                  <td>{row.qty}</td>
                  <td>{row.sum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-[300px] p-2 border rounded mt-[50px]flex flex-row ">
          <div>
            <h3 className="mb-2 font-serif">Total</h3>
          </div>

          <input
            type="text"
            placeholder="enter total"
            className="w-[250px] p-2 border rounded"
            required
            disabled
            value={total}
          />

          <br />

          <button type="button" className="btn" onClick={refreshPage}>
            <span>Complete</span>
          </button>
        </div>

      {/* <div className="mb-2 font-serif w-[300px] p-2 border rounded" role="alert">
        <p>
          <b>Total:</b>
          {calculation()}
          <br />x
          <b>Select:</b>
          {selects}
          <br />
          <b>Quantity:</b>  
          {qty}
        </p>
      </div> */}

      {/* <div className="mb-2 font-serif w-[300px] p-2 border rounded" role="alert">
        <label>Total</label>
        <input
          type="text"
          className=""
          placeholder="Amount"
          value={calculation()}
        />
      </div> */}
    </div>
  );
}

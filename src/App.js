import { useEffect, useState } from 'react';
import './App.css';
import SingleProperty from './SingleProperty';

function App() {

  const [property, setProperty] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setProperty(data))
  }, [])
  return (
    <div className='container mx-auto py-16'>
      <h2 className='text-xl capitalize font-bold text-center py-3'>Property search with filtering system</h2>
      <form className='border border-1 p-3 flex justify-between'>
        <select className="select select-bordered w-full lg:w-[20%]">
          <option disabled selected>Location</option>
          <option>Miami</option>
          <option>Hollywood</option>
        </select>
        <select className="select select-bordered w-full lg:w-[20%]">
          <option disabled selected>Move-In Date</option>
          <option>13/9/2022</option>
          <option>14/9/2022</option>
        </select>
        <select className="select select-bordered w-full lg:w-[20%]">
          <option disabled selected>Price in $</option>
          <option>1000 - 1400</option>
          <option>1401 - 1800</option>
        </select>
        <select className="select select-bordered w-full lg:w-[20%]">
          <option disabled selected>Property Type</option>
          <option>House</option>
          <option>Office</option>
        </select>
        <input type="submit" value='Search' className='btn btn-primary' />
      </form>
      <div className='grid grid-cols-3 gap-3'>
        {
          property.map(singleProperty => <SingleProperty singleProperty={singleProperty} key={singleProperty.id}></SingleProperty>)
        }
      </div>
    </div>
  );
}

export default App;

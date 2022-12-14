import { useEffect, useState } from 'react';
import './App.css';
import SingleProperty from './SingleProperty';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [property, setProperty] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setProperty(data))
  }, [])


  const handleSubmit = e => {
    e.preventDefault();
    const location = e.target.location.value;
    const date = e.target.date.value;
    const price = e.target.price.value;
    const type = e.target.type.value;

    let splitPrice = price.split('-').map(el => +el);
    let filterBy = [location, date, type];
    let result = property
      .filter(
        (el) =>
          filterBy.includes(el.location) &&
          filterBy.includes(el.date) &&
          filterBy.includes(el.type)
      )
      .filter(
        (data) => data.price >= splitPrice[0] && data.price <= splitPrice[1]
      );
    setIsSearch(true)

    if (result.length < 1) {
      toast("Search Result Not Found, Try location: Miami, price: 1400, type: House date: 14/9/2022")
      setSearchData(property)
    } else {
      setSearchData(result)
    }
    console.log(result)
  }


  return (
    <div className='container px-3 mx-auto py-16'>
      <h2 className='text-2xl capitalize font-bold text-center py-3'>Property search with filtering system</h2>
      <form onSubmit={handleSubmit} className='border border-1 p-3 lg:flex justify-between'>
        <select name='location' className="select select-bordered mt-2 focus:outline-0 w-full lg:w-[20%]">
          <option disabled selected>Location</option>
          <option>Miami</option>
          <option>Hollywood</option>
        </select>
        <select name='date' className="select select-bordered w-full mt-2 focus:outline-0 lg:w-[20%]">
          <option disabled selected>Move-In Date</option>
          <option>13/9/2022</option>
          <option>14/9/2022</option>
        </select>
        <select name='price' className="select select-bordered w-full mt-2 focus:outline-0 lg:w-[20%]">
          <option disabled selected>Price in $</option>
          <option>1000 - 1400</option>
          <option>1401 - 1800</option>
        </select>
        <select name='type' className="select select-bordered w-full mt-2 focus:outline-0 lg:w-[20%]">
          <option disabled selected>Property Type</option>
          <option>House</option>
          <option>Office</option>
        </select>
        <input type="submit" value='Search' className='btn btn-primary mt-2 focus:outline-0' />
      </form>
      <div className='grid lg:grid-cols-3 gap-6 mt-10'>
        {!isSearch &&
          property.map(singleProperty => <SingleProperty singleProperty={singleProperty} key={singleProperty.id}></SingleProperty>)
        }
        {isSearch &&
          searchData.map(singleProperty => <SingleProperty singleProperty={singleProperty} key={singleProperty.id}></SingleProperty>)
        }
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
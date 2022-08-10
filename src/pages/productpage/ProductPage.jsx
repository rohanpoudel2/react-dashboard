import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import PublishIcon from '@mui/icons-material/Publish';
import { productData } from '../../dummyData'
import './productpage.scss'


const ProductPage = () => {
  return (
    <div className="productpage">
      <div className="titleContainer">
        <h1 className="title">
          Product
        </h1>
        <Link to='/newproduct'>
          <button className='addbtn'>Create</button>
        </Link>
      </div>
      <div className="top">
        <div className="left">
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className="right">
          <div className="top">
            <img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2978&q=80" alt="productImg" />
            <span className="name">MacBook Pro</span>
          </div>
          <div className="bottom">
            <div className="item">
              <span className="key">id:</span>
              <span className="value">123</span>
            </div>
            <div className="item">
              <span className="key">Sales:</span>
              <span className="value">1003</span>
            </div>
            <div className="item">
              <span className="key">active:</span>
              <span className="value">yes</span>
            </div>
            <div className="item">
              <span className="key">in stock:</span>
              <span className="value">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <form>
          <div className="left">
            <label>Product Name</label>
            <input type="text" placeholder='MacBook Pro' />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="right">
            <div className="upload">
              <img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2978&q=80" alt="productImg" />
              <label htmlFor='file'>
                <PublishIcon />
              </label>
              <input type="file" id='file' hidden />
            </div>
            <button>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductPage
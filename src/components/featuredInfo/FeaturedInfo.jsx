import './featuredinfo.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="title">Revenue</span>
        <div className="moneyContainer">
          <span className="money">$2,415</span>
          <span className="moneyRate">
            -11.4 <ArrowDownwardIcon className='icon negative' />
          </span>
        </div>
        <span className="sub">
          Compared to Last Month
        </span>
      </div>
      <div className="featuredItem">
        <span className="title">Sales</span>
        <div className="moneyContainer">
          <span className="money">$4,415</span>
          <span className="moneyRate">
            -1.4 <ArrowDownwardIcon className='icon negative' />
          </span>
        </div>
        <span className="sub">
          Compared to Last Month
        </span>
      </div>
      <div className="featuredItem">
        <span className="title">Cost</span>
        <div className="moneyContainer">
          <span className="money">$2,515</span>
          <span className="moneyRate">
            +2.4 <ArrowUpwardIcon className='icon positive' />
          </span>
        </div>
        <span className="sub">
          Compared to Last Month
        </span>
      </div>
    </div>
  )
}

export default FeaturedInfo
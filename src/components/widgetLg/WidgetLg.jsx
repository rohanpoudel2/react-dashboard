import './widgetlg.scss'

const WidgetLg = () => {

  const Button = ({ type }) => {
    return <button className={'btn ' + type}>{type}</button>
  }
  return (
    <div className="widgetlg">
      <span className="title">
        Latest Transactions
      </span>
      <div className="table">
        <tr className="tr">
          <th className="th">
            Customer
          </th>
          <th className="th">
            Date
          </th>
          <th className="th">
            Amount
          </th>
          <th className="th">
            Status
          </th>
        </tr>
        <tr className="tr">
          <td className="User">
            <img src="https://images.unsplash.com/photo-1553654057-870acfcfabd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="avatar" className="img" />
            <span className="name">Rohan Poudel</span>
          </td>
          <td className="date">
            5 Dec 2022
          </td>
          <td className="Amount">
            $122.00
          </td>
          <td className="Status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="tr">
          <td className="User">
            <img src="https://images.unsplash.com/photo-1553654057-870acfcfabd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="avatar" className="img" />
            <span className="name">Rohan Poudel</span>
          </td>
          <td className="date">
            5 Dec 2022
          </td>
          <td className="Amount">
            $122.00
          </td>
          <td className="Status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="tr">
          <td className="User">
            <img src="https://images.unsplash.com/photo-1553654057-870acfcfabd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="avatar" className="img" />
            <span className="name">Rohan Poudel</span>
          </td>
          <td className="date">
            5 Dec 2022
          </td>
          <td className="Amount">
            $122.00
          </td>
          <td className="Status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="tr">
          <td className="User">
            <img src="https://images.unsplash.com/photo-1553654057-870acfcfabd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="avatar" className="img" />
            <span className="name">Rohan Poudel</span>
          </td>
          <td className="date">
            5 Dec 2022
          </td>
          <td className="Amount">
            $122.00
          </td>
          <td className="Status">
            <Button type="Approved" />
          </td>
        </tr>
      </div>
    </div>
  )
}

export default WidgetLg
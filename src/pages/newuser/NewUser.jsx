import './newuser.scss'

const NewUser = () => {
  return (
    <div className="newuser">
      <h1 className="title">New User</h1>
      <form className="newUserForm">
        <div className="item">
          <label>Username</label>
          <input type="text" placeholder='Gohan' />
        </div>
        <div className="item">
          <label>Full Name</label>
          <input type="text" placeholder='Gohan Poudel' />
        </div>
        <div className="item">
          <label>Email</label>
          <input type="email" placeholder='gohan@gmail.com' />
        </div>
        <div className="item">
          <label>Password</label>
          <input type="password" placeholder='password' />
        </div>
        <div className="item">
          <label>Phone</label>
          <input type="text" placeholder='+977 9801234327' />
        </div>
        <div className="item">
          <label>Address</label>
          <input type="text" placeholder='Kathmandu, Nepal' />
        </div>
        <div className="item">
          <label>Gender</label>
          <div className="gender">
            <input type="radio" name='gender' id='male' value='male' />
            <label for="male">Male</label>
            <input type="radio" name='gender' id='female' value='female' />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="item">
          <label>Active</label>
          <select className='select' name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className="newbtn">Create</button>
      </form>
    </div>
  )
}

export default NewUser
const Sidebar = ({ onSelectionMenu }) => {
    return (
        <div className="rounded vh-100 bg-success p-1 text-center" >
            <button onClick={() => onSelectionMenu('profile')} className="w-75 mt-4 m-1 btn btn-outline-light">Home</button>
            <button onClick={() => onSelectionMenu('email')} className="w-75 mt-4 m-1 btn btn-outline-light">Email</button>
        </div>
    );
}
export default Sidebar;
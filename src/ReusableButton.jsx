function ReusableButton({children, onClick}){
    return (
        <button
          className="bg-transparent transform hover:scale-110 transition duration-300 border-none focus:outline-none"
          onClick={onClick}
        >
          {children}
        </button>
      );
}

export default ReusableButton
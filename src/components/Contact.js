const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl p-4 m-4">Contact Us</h1>
      <form className="flex m-4">
        <input className="border border-black p-1 m-4" placeholder="Name"/>
        <input className="border border-black p-1 m-4" placeholder="Message"/>
        <button className="border border-black p-1 m-4 rounded-md bg-green-400">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

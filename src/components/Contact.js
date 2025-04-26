const Contact = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <h1 className="font-bold m-2 p-2">Contact US</h1>

      <div className="flex flex-col">
        <input className="p-2 m-2 border border-black rounded-lg" placeholder="name" type="text" />
        <input className="p-2 m-2 border border-black rounded-lg" placeholder="message" type="text" />
        <button className="p-2 m-2 rounded-lg bg-amber-300 cursor-pointer">Submit</button>
      </div>
    </div>
  );
};

export default Contact;

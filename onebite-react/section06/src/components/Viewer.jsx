const Viewer = ({ count }) => {
  return (
    <section className="">
      <div className="border rounded-md border-none mb-[10px] bg-gray-100 p-[20px]">
        <div>현재 카운트: </div>
        <h1 className="text-2xl font-bold">{count}</h1>
      </div>
    </section>
  );
};

export default Viewer;

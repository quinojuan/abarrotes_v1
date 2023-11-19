export const PagoEnEfectivo = () => {
  return (
    <>
      <form action="" className="flex flex-column align-items-center mt-3 mb-3">
        <div className="flex justify-content-center">
          <label htmlFor="" className="text-4xl">
            Pagó con:{" "}
          </label>
          <input type="text" value={5000} className="text-green-500 text-4xl w-4" />
        </div>
        <div className="flex justify-content-center">
          <label htmlFor="" className="text-4xl">
            Su cambio:{" "}
          </label>
          <input
            type="text"
            value={0}
            className="border-none text-green-500 text-4xl w-4"
          />
        </div>
      </form>
    </>
  );
};

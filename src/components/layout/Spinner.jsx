import spinnerGif from "./assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={100}
        src={spinnerGif}
        alt="loading..."
        className="text-center mx-auto"
      />
    </div>
  );
};
export default Spinner;

function Content() {
  return (
    <>
      <p
        className="text-bold"
        style={{
          marginBottom: "20px",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Test
      </p>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
          content
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
          content
        </div>
      </div>
    </>
  );
}
export default Content;

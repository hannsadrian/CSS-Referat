import React from "react";

function Welcome() {
  let date = new Date(Date.now());

  return (
    <div className="flex h-full">
      <div className="w-1/12" />
      <div className="my-auto pt-24">
        <img
          className="mb-5"
          alt="otter"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/otter_1f9a6.png"
        />
        <p className="font-medium tracking-wide uppercase text-gray-600">
          Hanns Adrian Böhme
        </p>
        <h1 className="text-5xl font-bold -mt-2">CSS Referat</h1>
        <p>
          <b>Lehrer:</b> Herr Neumann
          <br />
          <b>Klasse:</b> 9/2
          <br />
          <b>Datum:</b>{" "}
          {date.getDate().toString() +
            "." +
            (date.getMonth() + 1) +
            "." +
            date.getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Welcome;

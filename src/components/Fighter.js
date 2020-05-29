import React from 'react';

function Fighter(props) {

  return (
    <li className="">
      <div className="card-header p-3 flex justify-center">
        <img
          className="cursor-pointer"
          src={props.avatar}
          alt={`Avatar of ${props.name.split(' ')[0]}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/146.jpg?text=No+Avatar';
          }}
        />
      </div>
      <div className="card-body p-3 flex flex-col items-center">
        <p key={props.info} className="text-black select-none">
          {props.name}
        </p>
        <p className="text-gray-600">{props.nickname}</p>
        <p className="text-gray-600">{props.record}</p>
      </div>
    </li>
  );
}

export default Fighter;

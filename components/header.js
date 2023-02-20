import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <h1>Header</h1>
      {/* header left */}
      <div>
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          alt=""
        />
      </div>

      {/* header center */}

      {/* header right */}
    </div>
  );
}

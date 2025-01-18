import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        padding: '15px 0',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000, 
        marginBottom : '30px'
      }}
    >
      <Image
        src="https://s3-alpha-sig.figma.com/img/5529/14e3/9180c5b3071ce91b6340d823396dbeea?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TtQMvdd4r9IgN3YJWcMBrOFtsVZNfoTK55ynaMRfe~x-h~fOMbR0rY4c6ENaAk45NaBmIpPg5DpSL6ms0szDiwO5Lm1YX4KoUr0fyJj1jnokq8q04o3irPMzWXp1UF6~4HKLEYayn-N6QF8EtUicbdt-gmG5h~ItQr~f9Jba0cES0ODVNDY6KubYL83cfxVdMTBqpmUqeT469OX7ZV4LM0Pb1-oqNlJJQpHoA9KkKhPizPRiMYkqU2IyGNia59OBy9w2W7VjeTbdB5f~WpWMZ8Va3bfrQIsbCATDYLmhBjO77V9YNcMVzfNiX6U6x6fBXLnHB~AgTH6B~MPdgR3nlQ__"
        alt="header-img"
        width={111}
        height={25}
      />
    </header>
  );
}

export default Header;

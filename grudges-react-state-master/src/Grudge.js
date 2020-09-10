import React, { useContext } from 'react';
import { GrudgeContext } from './GrudgeContext';


const Grudge = ({ grudge }) => {
  console.log('Rendering Grudge');
  const { toggleForgiveness, deleteGrudge } = useContext(GrudgeContext)
  const forgive = () => toggleForgiveness(grudge.id);

  return (
    <article className="Grudge">
      <h3>{grudge.person}</h3>
      <p>{grudge.reason}</p>
      <div className="Grudge-controls">
        <label className="Grudge-forgiven">
          <input type="checkbox" checked={grudge.forgiven} onChange={forgive} />{' '}
          Forgiven
        </label>
        <svg onClick={() => deleteGrudge(grudge.id)} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="#f4466e" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
        </svg>
      </div>
    </article>
  );
};

export default React.memo(Grudge);

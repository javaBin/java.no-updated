import React from 'react';
import background from '../atrium.png';

const MvpJumbottron = () => {
    return (
        <>
            <div className="mvp-container" style={{ backgroundImage: `url(${background})` }}>
                <div className="pink mvp-info-box">
                    <h2>
                        Er dere et community som holder gratis meetups?
          </h2>
                    <div className="mvp-info">
                        <p>
                            Teknologihuset har flyttet til REBEL i Universitetsgata 2, på St. Olavs plass.
            </p>
                        <p>
                            Ønsker dere å holde en meetup hos oss?
              Send epost til <a className="no-link" href="mailto:vert@teknologihuset.no?subject=Book meetup">vert@teknologihuset.no</a> eller trykk på knappen under
            </p>
                    </div>
                </div>
                <a className="no-link" href="mailto:vert@teknologihuset.no?subject=Book meetup">
                    <button className="mvp-book transition-smooth" aria-label="Book meetup">
                        Book
            </button>
                </a>
            </div>
        </>
    );
}

export default MvpJumbottron;

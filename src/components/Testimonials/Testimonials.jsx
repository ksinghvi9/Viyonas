import React from 'react';
import siteContent from '../../data/siteContent.json';
import testimonialsData from '../../data/testimonials.json';

const Testimonials = () => {
  const { testimonials } = siteContent.sections;
  
  // Custom minimal styling for testimonials since it didn't exist in original CSS
  const styles = {
    container: {
      display: 'flex',
      gap: '15px',
      overflowX: 'auto',
      paddingBottom: '15px',
      scrollbarWidth: 'none',
    },
    card: {
      minWidth: '250px',
      background: 'white',
      padding: '15px',
      borderRadius: '16px',
      border: '1px solid var(--border-color)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    name: {
      fontWeight: '600',
      color: 'var(--primary-color)',
      margin: 0
    },
    stars: {
      color: '#FFD700',
      fontSize: '12px'
    },
    text: {
      fontSize: '14px',
      color: 'var(--text-light)',
      lineHeight: '1.4',
      margin: 0,
      fontStyle: 'italic'
    }
  };

  return (
    <div className="card">
      <h2 className="section-title">{testimonials.title}</h2>
      <p className="section-subtitle">{testimonials.subtitle}</p>
      
      <div style={styles.container}>
        {testimonialsData.map((t) => (
          <div key={t.id} style={styles.card}>
            <div style={styles.header}>
              <p style={styles.name}>{t.name}</p>
              <div style={styles.stars}>
                {[...Array(t.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
            </div>
            <p style={styles.text}>"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

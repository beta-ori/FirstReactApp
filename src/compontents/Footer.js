import React from 'react'

function Footer() {
    return (
        <>
            <div style={styles.footer}>
                All right reserved @omihdlive24.com
            </div>
        </>
    )
}

const styles = {
    footer:{
        background: '#444',
        bottom: 0,
        width: '100%',
        height: '40px',
        textAlign: 'center',
        padding: '10px',
        color: '#fff',
    }
}

export default Footer

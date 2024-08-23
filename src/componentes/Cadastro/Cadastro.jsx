import React from 'react';
import Footer from '../Footer/Footer';

function Cadastro() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #B5B6F2 0%, #EFEFFF 100%)',
            margin: '0 auto',
        },
        header: {
            width: '100%',
            height: '80px',
            background: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 100px',
            position: 'relative',
            zIndex: '10',
            borderBottom: '1px solid #DDDDDD',
        },
        headerTitle: {
            fontSize: '24px',
            color: '#C92071',
            margin: 0,
        },
        mainContent: {
            width: '100%',
            maxWidth: '1440px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '50px 100px',
            marginTop: '20px',
        },
        formContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
        },
        signupBox: {
            width: '583px',
            background: '#FFFFFF',
            borderRadius: '4px',
            padding: '30px',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
        },
        title: {
            fontSize: '32px',
            color: '#1F1F1F',
        },
        text: {
            fontSize: '16px',
            color: '#474747',
        },
        link: {
            color: '#000000',
            textDecoration: 'underline',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        label: {
            fontSize: '12px',
            color: '#474747',
        },
        input: {
            height: '60px',
            padding: '0 15px',
            borderRadius: '8px',
            border: '1px solid #474747',
            fontSize: '16px',
        },
        button: {
            height: '48px',
            background: '#C92071',
            border: 'none',
            borderRadius: '8px',
            color: '#F5F5F5',
            fontSize: '16px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
        },
        socialLogin: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '20px',
        },
        socialIcons: {
            display: 'flex',
            gap: '10px',
        },
        socialIcon: {
            width: '24px',
            height: '24px',
        },
        imageContainer: {
            imageContainer: {
                maxWidth: '100%',
                height: 'auto' ,
                textAlign: 'right',
                paddingLeft: '20px',
            },
        },
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Digital Store</h1>
            </header>
            <main style={styles.mainContent}>
                <div style={styles.formContainer}>
                    <div style={styles.signupBox}>
                        <h2 style={styles.title}>Crie sua conta</h2>
                        <p style={styles.text}>
                            Já possui uma conta?{' '}
                            <a href="/Login" style={styles.link}>
                                <span className="underline">Entre aqui</span>
                            </a>
                        </p>
                        <form action="#" method="post" style={styles.form}>
                            <label htmlFor="email" style={styles.label}>Insira seu email *</label>
                            <input type="email" id="email" name="email" placeholder="Insira seu email" required style={styles.input} />
                            <button type="submit" style={styles.button}>Criar conta</button>
                        </form>
                        <div style={styles.socialLogin}>
                            <span>Ou faça login com</span>
                            <div style={styles.socialIcons}>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://th.bing.com/th/id/OIP.gL2LJqaG2gFiQmO1ZehAdgHaHa?rs=1&pid=ImgDetMain" alt="Facebook" style={styles.socialIcon} />
                                </a>
                                <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://static.vecteezy.com/system/resources/previews/002/557/425/original/google-mail-icon-logo-isolated-on-transparent-background-free-vector.jpg" alt="Gmail" style={styles.socialIcon} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.imageContainer}>
                    <img src="https://s3-alpha-sig.figma.com/img/95ea/b6de/38b674033b641e23cb9d658703e259af?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ST1p064uPNi7Ik8mX4sHzBpWk9kdVpV0RlGkhha5OYzTI3-eKkdCDo2XHRA7KoMXSLOFTysVzdoJL1Lj3vtCIAs3TWohixhlLGBopWkP5gTrCHnQfFzFa7WiRjqPxwXGhks30oNQy9IiYVhlYtnfCyQhfAdcpxYeqcAeLrTLh0EnHmK08T9V40sH8cO0sZCV5IgsEJk7Rkhs~-AeDN9XhRIYbWlms7qRZsUxwNeV0utPiAhPyc7lVVqMkzcvu4UEiJsavT17ej~LcuvP5GDxfuqcnI2T1dNC0m3hnNc9LFPDuXvXV-NZjlUNVk7~lcj79QquA3ePhtDVAQq~FGH3Xg__" alt="Par de sapatos" />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Cadastro;


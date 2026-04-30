import { useState, type SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { login } from '../../services/auth/authService';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Completa todos los campos');
      return;
    }

    try {
      setError('');
      const token = await login(email, password);
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (err: any) {
      if (
        err.code === 'auth/invalid-credential' ||
        err.code === 'auth/wrong-password' ||
        err.code === 'auth/user-not-found'
      ) {
        setError('Correo o contraseña incorrectos');
      } else if (err.code === 'auth/invalid-email') {
        setError('Ingresa un correo válido');
      } else if (err.response?.status === 401) {
        setError('Token inválido');
      } else {
        setError('Ocurrió un error');
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1 className={styles.title}>BIENVENIDO</h1>

          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              label="Correo"
              type="email"
              autoComplete="username"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />

            <Input
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              showPasswordToggle
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />

            {error && <p className={styles.error}>{error}</p>}

            <Button type="submit" label="INICIAR SESIÓN" className={styles.submitBtn} />
          </form>
        </div>

        <div className={styles.right} />
      </div>
    </div>
  );
}

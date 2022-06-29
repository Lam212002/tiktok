import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Images = forwardRef(({ src, alt, className, fallback: customFallback = images.noImages, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handlerError = () => {
        setFallback(images.ImageThayThe);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handlerError}
        />
    );
});
Images.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Images;

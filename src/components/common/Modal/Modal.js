import React, { useEffect, useState, useCallback } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import './Modal.css';

const Modal = ({ isOpen, onClose, type, title, message, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        // Wait for animation to complete before unmounting
        setTimeout(() => {
            setShouldRender(false);
            onClose();
        }, 300);
    }, [onClose]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        if (isOpen) {
            setShouldRender(true);
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
            
            // Trigger fade-in animation
            setTimeout(() => setIsVisible(true), 10);
            
            // Auto-close modal after 8 seconds for both success and error messages
            const autoCloseDelay = 8000;
            const timer = setTimeout(() => {
                handleClose();
            }, autoCloseDelay);

            return () => {
                document.removeEventListener('keydown', handleEscape);
                document.body.style.overflow = 'unset';
                clearTimeout(timer);
            };
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, handleClose]);

    if (!shouldRender) return null;

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <CheckCircle className="modal-icon modal-icon-success" />;
            case 'error':
                return <AlertCircle className="modal-icon modal-icon-error" />;
            default:
                return null;
        }
    };

    const getTitleColor = () => {
        switch (type) {
            case 'success':
                return 'modal-title-success';
            case 'error':
                return 'modal-title-error';
            default:
                return '';
        }
    };

    return (
        <div 
            className={`modal-overlay ${isVisible ? 'modal-overlay-visible' : 'modal-overlay-hidden'}`}
            onClick={handleClose}
        >
            <div 
                className={`modal-container ${isVisible ? 'modal-container-visible' : 'modal-container-hidden'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content">
                    {getIcon()}
                    {title && (
                        <h2 className={`modal-title ${getTitleColor()}`}>
                            {title}
                        </h2>
                    )}
                    {message && (
                        <p className="modal-message">
                            {message}
                        </p>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;

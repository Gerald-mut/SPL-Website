import React from "react";
import './ServiceModal.css';

export default function ServiceModal({ service, onClose }) {
    if(!service) return null;
        return (
            <div className="modal-backdrop" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <button className="modal-close" onClick={onClose}>×</button>
                    <h2>{service.title}</h2>
                    {service?.description}
                </div>
`            </div>
        )
}
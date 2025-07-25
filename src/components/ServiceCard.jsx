import React from "react";
import './ServiceCard.css'

export default function ServiceCard({ service, onOpen }) {
    return (
        <div className="service-card">
            <img src={service.img} alt={service.title} className="card-image" />
            <div className="card-overlay">
                <h2 className="card-title">{service.title}</h2>
                </div>
                <button
                    className="card-plus"
                    onClick={() => onOpen(service)}
                    aria-label={`Learn more about ${service.title}`}
                    >＋
                </button>
        </div>
    )
}
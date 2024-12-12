'use dom';

import { ReactNode } from "react";
import { Popup as DefaultPopup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import React from "react";

interface PopupProps {
    children: ReactNode;
}

const Popup = ({ children }: PopupProps) => {
    return (
        <DefaultPopup>
            {children}
        </DefaultPopup>
    )
}

export default Popup;

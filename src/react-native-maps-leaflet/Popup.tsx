'use dom';

import { ReactNode } from "react";
import { Popup as DefaultPopup, PopupProps } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import React from "react";

const Popup = ({ children }: PopupProps) => {
    return (
        <DefaultPopup>
            {children}
        </DefaultPopup>
    )
}

export default Popup;
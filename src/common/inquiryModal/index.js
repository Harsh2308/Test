import React from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogContainerStyled } from './style';

const Index = ({ inquiryModalOpen, setInquiryModalOpen, form, title, bg, name, size, mbSize }) => {

    return (
        <Dialog
            fullWidth={true}
            style={{ zIndex: 20 }}
            open={inquiryModalOpen}
            PaperProps={{
                style: {
                    boxShadow: 'none',
                    maxWidth: '1440px',
                    backgroundColor: '#262626',
                },
            }}
        >
            <DialogContainerStyled bg={bg} size={size} mbSize={mbSize}>
                <div className="left">
                    <div className='left_container'>
                        <div className='mb-header'>
                            <div className='cross-icon' onClick={() => setInquiryModalOpen(false)}>
                                <img src="images/mb-cross.svg" alt="cross" />
                            </div>
                            <h3>{name}</h3>
                        </div>
                        <h1>{title}</h1>
                        {form}
                    </div>
                </div>
                <div className="right">
                    <div className="right_bg">
                        <div className='cross-icon' onClick={() => setInquiryModalOpen(false)}>
                            <img src="images/cross.svg" alt="cross" />
                        </div>
                        <div className="title">
                            <h3>{name}</h3>
                        </div>
                    </div>
                </div>
            </DialogContainerStyled>
        </Dialog>
    );
}

export default Index;
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export default function Footer() {
    return (
        <footer className="uk-section-small uk-background-muted">
            <div className="uk-flex uk-flex-center uk-flex-column uk-flex-middle uk-text-center">
                <div className="uk-margin uk-margin-remove-horizontal uk-margin-remove-top">
                    <div className="uk-grid-small uk-child-width-1-4" data-uk-grid>
                        <span><a href="#" data-uk-icon="icon: instagram; ratio: 1.5"></a></span>
                        <span><a href="#" data-uk-icon="icon: facebook; ratio: 1.5"></a></span>
                        <span><a href="#" data-uk-icon="icon: youtube; ratio: 1.5"></a></span>
                        <span><a href="#" data-uk-icon="icon: twitter; ratio: 1.5"></a></span>
                    </div>
                </div>
                <div>
                    <h4 className="uk-margin-remove uk-light">Copyright 2022 @ Bütün hakları saklıdır.</h4>
                </div>
            </div>
        </footer>
    )
}

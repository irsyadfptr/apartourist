import React from 'react'
import Button from '../elements/Button'
import IconText from '../parts/IconText'

export default function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-auto mr-5" style={{width: 350}}>
          <IconText />
          <p className="brand-tagline">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div className="col-auto mr-5">
          <h6 className="mt-2">
            For Beginners
          </h6>
          <ul className="list-group flush">
            <li className="list-group-item">
              <Button type='link' href='/register'>
                New Account
              </Button>
            </li>
            <li className="list-group-item">
              <Button type='link' href='/properties'>
                Start Booking
              </Button>
            </li>
            <li className="list-group-item">
              <Button type='link' href='/payment'>
                Payments
              </Button>
            </li>
          </ul>
        </div>

        <div className="col-2 mr-5">
          <h6 className="mt-2">
            Explore Us
          </h6>
          <ul className="list-group flush">
            <li className="list-group-item">
              <Button type='link' href='/careers'>
                Careers
              </Button>
            </li>
            <li className="list-group-item">
              <Button type='link' href='/privacy'>
                Privacy
              </Button>
            </li>
            <li className="list-group-item">
              <Button type='link' href='/terms'>
                Terms & Conditions
              </Button>
            </li>
          </ul>
        </div>

        <div className="col-3">
          <h6 className="mt-2">
            Connect Us
          </h6>
          <ul className="list-group flush">
            <li className="list-group-item">
              <Button isExternal type='link' href='mailto: support@apartourist.id'>
                support@apartourist.id
              </Button>
            </li>
            <li className="list-group-item">
              <Button type='link' href='tel:+6299999999999'>
                0999 - 9999 - 9999
              </Button>
            </li>
            <li className="list-group-item">
              <span>Apartourist, Antahberantah, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col text-center copyrights">
          Copyright 2021 * All rights reserved * Apartourist
        </div>
      </div>
    </footer>
  )
}

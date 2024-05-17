# @authnomicon/fedcm

Federated Credential Managment components for the Authnomicon project.

[Federated Credential Management](https://fedidcg.github.io/FedCM/) (FedCM) is a
privacy-preserving approach to federated identity.  It consists of a client-side
Web API and an HTTP-based API.  The Web API is called by a website via
JavaScript executing in the browser, and is used to sign a user in using their
identity provider (IDP).  The HTTP API is a set of endpoints implemented by the
IDP, which are requested by the browser during the sign in ceremony.

The browser mediates the user interaction between the website and the IDP, which
enhances privacy relative to traditional federated identity protocols such as
[OpenID Connect](https://openid.net/) and [SAML](https://saml.xml.org/saml-specifications),
which are unmediated and operate using redirects, iframes, or other mechanisms
that rely on third-party cookies (which, unfortunately, are also abused to track
users).

This package provides components that implement the HTTP-based API, which are
used when building a FedCM-compatible IDP.

<p align="right">
  <sup>Developed by <a href="#authors">Jared Hanson</a>.</sub>
</p>


// https://blog.timcappalli.me/p/preso-osw24-fedcm101/
// https://blog.timcappalli.me/p/preso-osw24-fedcm101/OSW24-FedCM101.pdf
// https://oauth.secworkshop.events/osw2024/agenda-thursday-osw-2024

## Authors

- [Jared Hanson](https://www.jaredhanson.me/) { [![WWW](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/globe-12x12.svg)](https://www.jaredhanson.me/) [![LinkedIn](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/linkedin-12x12.svg)](https://www.linkedin.com/in/jaredhanson) [![Twitter](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/twitter-12x12.svg)](https://twitter.com/jaredhanson) [![GitHub](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/github-12x12.svg)](https://github.com/jaredhanson) }

## License

[The MIT License](https://opensource.org/licenses/MIT)

Copyright (c) Jared Hanson

# @authnomicon/fedcm

Federated Credential Managment components for the Authnomicon project.

Federated Credential Management (FedCM) is a privacy-preserving to federated
identity.  It consists of a client-side Web API and an HTTP-based API.  The Web
API is called by a website via JavaScript executing in the browser, and is used
to sign a user in using their identity provider (IDP).  The HTTP API is a set of
endpoints implemented by the IDP, which are requested by the browser during the
sign in ceremony.

The browser mediates the user interaction between the website and the IDP, which
enhances privacy relative to traditional federated identity protocols such as
OpenID Connect and SAML, which are unmediated and operate using redirection,
IFrames, or other cross-origin mechanisms.

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

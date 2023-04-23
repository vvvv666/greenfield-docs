---
title: Gateway
order: 6
---

# Gateway
The Gateway service is the unified entrance of SP, which provides a unified application programming interface (HTTP Restful API).
If you are interested in the specific programming interface, we invite you to the [following page]().

## Overview
<div align=center><img src="../../..//asset/05-SP-Gateway.jpg" width="700px"></div>
<div align="center"><i>Gateway Architecture</i></div>

### Authorization Checker
* Verifies the signature of request to ensure that the request has not been tampered with.
* Checks the authorization to ensure the corresponding account has permissions on resources.
* Checks the object state and payment account state to ensure the object is sealed and the payment account is active.

### Request Router
According to the type of specific request, it is forwarded to the corresponding backend microservice.

### Flow Controller
In the future, according to the flow control configuration information, flow control will be performed to provide 
higher-quality services and avoid service overload.

### Load Balancer
In the future, when routing back-end microservices, load balancing will be done according to policies such as 
service quality.

### Micro Service Clients
Various microservice clients inside SP, including Uploader, Downloader, etc.

### Universal Endpoint
Universal endpoint provides url for download public files without authentication needed. It supports using any 
valid endpoint in the download url, and will automatically redirect to the correct endpoint contains
the object for download. 

For instance, when user access an example endpoint greenfield.sp1.com of SP1 in some environment, the request url will be:
https://greenfield.sp1.com/download/mybucket/myobject.jpg.
Universal endpoint will find the correct endpoint for myobject.jpg, here SP3, and redirect the user to:
https://greenfield.sp3.com/download/mybucket/myobject.jpg and download the file.

<div align=center><img src="../../..//asset/501-SP-Gateway-Universal-Endpoint.png"></div>
<div align="center"><i>Universal Endpoint Logic Flow</i></div>




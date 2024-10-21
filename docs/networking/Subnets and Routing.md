---
date: 2024-10-21
tags:
  - networking
  - cybersecurity
---

## Basic Concepts

### 1. IP Address

An **IPv4 address** consists of four octets (e.g., `192.168.1.1`) and is used to identify devices on a network.

### 2. Subnet

A **subnet** (subnetwork) is a smaller network within a larger network, allowing better organization, performance, and
security.

### 3. Subnet Mask

A **subnet mask** (e.g., `255.255.255.0`) determines which portion of an IP address is the network ID and which part is
the host ID.

- **Example**: For `192.168.1.10` with a mask of `255.255.255.0`, the network address is `192.168.1.0`.

### 4. Network Address

The **network address** identifies a specific subnet. It is calculated by applying the subnet mask to the IP address.
This is essential for:

- Routing packets to the correct subnet.
- Managing IP address allocation and organization within larger networks.

### 5. Router and Gateway

- A **router** connects multiple networks and routes data between them. It directs traffic based on the destination IP
  address and its routing table.
- A **gateway** is a device that serves as a "gate" between two networks, often connecting a local network to the
  internet. In many home networks, the router also acts as the gateway.

### 6. Data Transfer Between Router and Gateway

When data is transferred between a device in a local network and an external network (like the internet), the process
generally involves the following steps:

1. **Device Initiation**: A device (e.g., a computer) sends a request to access an external resource (e.g., a website).
2. **Data Packet Creation**: The device creates a data packet with the destination IP address of the resource it wants
   to access and the source IP address of the device.
3. **Local Transmission**:
    - The packet is sent to the **router** over the local network.
    - If the device is connected via Ethernet, this happens over a wired connection. If it’s connected via Wi-Fi, it’s
      done wirelessly.
4. **Routing Process**:
    - The router checks its routing table to determine the appropriate next hop for the packet based on the destination
      IP address.
    - If the destination IP address is within the local network, the router forwards the packet directly to the correct
      device.
    - If the destination IP address is external, the router forwards the packet to the **gateway** (often integrated
      within the router).
5. **Gateway Role**:
    - The gateway connects to the external network (such as the internet) and facilitates communication between the
      local network and external resources.
    - The gateway forwards the packet to the correct destination outside the local network, based on the routing
      information it has.
6. **Return Data Path**: When the external resource sends a response:
    - The response data packet travels back through the gateway to the router.
    - The router checks the destination IP address of the response packet and forwards it back to the original device
      within the local network.

### 7. Ethernet Cable vs. Wi-Fi

Here’s a comparison between Ethernet cable connections and Wi-Fi:

| Feature             | Ethernet Cable                                                            | Wi-Fi                                                                                           |
|---------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Connection Type** | Wired connection via Ethernet cables.                                     | Wireless connection using radio waves.                                                          |
| **Speed**           | Generally faster speeds (up to 1 Gbps or more).                           | Slower speeds (typically 50-600 Mbps for Wi-Fi 5 and Wi-Fi 6, with higher speeds for Wi-Fi 6E). |
| **Stability**       | More stable and reliable connection; less prone to interference.          | Can be affected by interference from other devices, walls, and distance from the router.        |
| **Latency**         | Lower latency, which is ideal for gaming and real-time applications.      | Higher latency compared to wired connections.                                                   |
| **Mobility**        | Limited to the length of the cable; devices must be physically connected. | Allows devices to connect from anywhere within the Wi-Fi range, offering more mobility.         |
| **Setup**           | Requires running cables; more complex to set up in larger areas.          | Easier setup; just connect to the Wi-Fi network.                                                |
| **Security**        | Generally more secure since it’s a direct connection.                     | Susceptible to eavesdropping if proper security measures (like WPA2) aren’t in place.           |
| **Cost**            | Requires purchase of cables and potentially switches.                     | Typically involves the cost of a wireless router, but no cables needed.                         |

### 8. Hierarchical Network Structure

- **Core Layer**: This is the backbone of the network that connects multiple distribution layers. It provides high-speed
  data transfer between different parts of the network.
- **Distribution Layer**: This layer connects different access layer networks and handles routing, filtering, and WAN
  access. It can contain multiple routers.
- **Access Layer**: This is where devices connect to the network (e.g., computers, printers, IoT devices). It might have
  switches and sometimes routers for smaller segments.

### 9. VLANs (Virtual Local Area Networks)

VLANs allow network segmentation within the same physical infrastructure, enhancing security and traffic management.

## Self-Testing Questions

1. What is the purpose of a subnet mask, and how does it relate to an IP address?
2. How would you calculate the network address for the IP address `192.168.2.5` with a subnet mask of `255.255.255.0`?
3. Explain the routing process that occurs when a router receives a packet with a specific destination IP address.
4. In a large network, why is it more efficient for routers to use network addresses instead of individual IP addresses?
5. Describe the role of a gateway in a network. How does it differ from a router?
6. Illustrate the data transfer process from a device in a local network to an external resource on the internet.
7. What are the advantages of using VLANs in a network?
8. What are the main differences between using an Ethernet cable and a Wi-Fi connection?




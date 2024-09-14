---
tags: 
- cybersecurity
date: 2024-09-14
---

## CIA Triad

The **CIA Triad** is a foundational model in cybersecurity that guides the development and implementation of security policies and practices. The acronym stands for:

1. **Confidentiality**: Ensures that sensitive information is accessed only by authorized individuals. Techniques like encryption and access controls are commonly used to protect the confidentiality of data.

2. **Integrity**: Guarantees that data remains accurate, consistent, and unaltered except by authorized users. This can be maintained using checksums, hash functions, and integrity monitoring systems.

3. **Availability**: Ensures that information and resources are accessible to authorized users whenever needed. Measures like redundancy, fault tolerance, and regular maintenance help ensure availability.

Together, the CIA Triad addresses the core goals of cybersecurity by protecting information systems from a wide range of threats.



The **CIA Triad** (Confidentiality, Integrity, Availability) is often extended with additional principles such as **Privacy** and **Non-Repudiation** to form a more comprehensive framework for cybersecurity.

**Privacy**:

- While closely related to confidentiality, **privacy** specifically focuses on the protection of personally identifiable information (PII) and user data. It involves managing and controlling the collection, storage, and sharing of personal information according to laws and policies.
- For example, GDPR (General Data Protection Regulation) in Europe is a privacy law that ensures organizations handle personal data responsibly.

**Non-Repudiation**:

- This principle ensures that a party in a communication or transaction cannot deny the authenticity of their involvement. It guarantees that data and communications can be traced back to their origin and that the sender cannot later deny having sent the data or signed a document.
- Commonly used mechanisms include **digital signatures** and **audit trails**, which record actions and communications in a verifiable way.



## AAA Framework

The **AAA Framework** (Authentication, Authorization, and Accounting) is another key model in cybersecurity, particularly in network management and access control. It helps ensure proper identity verification, access permissions, and activity tracking. Let's break down the principles it supports:

1. **Authentication**

   - **What it is**: Verifying the identity of a user or system before granting access.
   - **Supporting Principles**:
     - **Identity Verification**: Ensures that users are who they claim to be. Methods include passwords, multi-factor authentication (MFA), biometric verification, and digital certificates.
     - **Non-Repudiation**: Through proper authentication mechanisms like digital signatures, a user cannot deny their identity or the actions they've performed.
     - **Confidentiality**: Secure authentication processes protect user credentials and personal information, preventing unauthorized access to sensitive systems.

2. **Authorization**

   - **What it is**: Determining what resources and actions an authenticated user is allowed to access.
   - **Supporting Principles**:
     - **Access Control**: Ensures that users can only access the resources they're permitted to. This can involve **role-based access control (RBAC)**, attribute-based access control (ABAC), and policies defined by least privilege.
     - **Integrity**: By ensuring that only authorized users can modify or access specific data, the system maintains data integrity.
     - **Privacy**: Authorization mechanisms ensure that personal data is only accessible by those who have been granted permission, supporting the privacy of user information.

3. **Accounting**

- **What it is**: **Tracking and logging user activities** to maintain an audit trail of actions and access.
- **Supporting Principles**:
     - **Auditing**: Collects and records information about user activities, such as login times, accessed resources, and system changes. This provides accountability and traceability.
     - **Non-Repudiation**: Accounting logs ensure that users cannot deny their actions because the system maintains a verifiable record of their activities.
     - **Availability**: Proper accounting helps maintain system stability by identifying misuse or anomalies that could affect the system’s uptime, ensuring that resources are available as needed.

These principles ensure a robust security posture by verifying identities, enforcing access rules, and keeping a detailed log of all activities to detect suspicious behavior or misuse.



## **DAD Model** (Disclosure, Alteration, Deniability)

The **DAD Model** (Disclosure, Alteration, Deniability) is a framework often used to describe potential security threats or attacks. It is essentially the opposite of the **CIA Triad** (Confidentiality, Integrity, Availability) and outlines the negative consequences when security controls fail. 

1. **Disclosure**

   - **What it is**: Unauthorized exposure of sensitive information.

   - **Opposite of**: **Confidentiality** in the CIA Triad.

   - **Threats**: When data is disclosed to unauthorized users, sensitive or private information can be leaked, leading to privacy violations or data breaches.

   - **Examples**: Data breaches, unencrypted sensitive information exposed in transmission, or improperly configured access controls that allow unauthorized users to view confidential data.

     

2. **Alteration**

   - **What it is**: Unauthorized changes or tampering with data.

   - **Opposite of**: **Integrity** in the CIA Triad.

   - **Threats**: Data can be altered, manipulated, or corrupted without authorization, leading to false or misleading information. This can cause significant harm in critical systems, such as financial records, medical data, or communication systems.

   - **Examples**: Malware that modifies files, unauthorized access leading to the modification of databases, or hackers tampering with communications to insert false information.

     

3. **Deniability**

   - **What it is**: The ability to deny an action or the origin of a transaction.
   - **Opposite of**: **Non-repudiation** (part of accountability in the AAA model).
   - **Threats**: A lack of verifiable evidence of actions can allow users or attackers to deny involvement in malicious activities. Without proper logging or digital signatures, it’s challenging to prove that someone performed a specific action, leading to a lack of accountability.
   - **Examples**: An attacker carrying out an unauthorized transaction and later denying they did so due to weak audit trails, or using forged credentials to access systems anonymously.



> [!NOTE]
>
> for more basic cyber security concepts, please refer to :
>
> https://heimdalsecurity.com/glossary?goal=0_92bee2093e-d2ac13b6f0-198347309#A



## Networking  Basics

### Protocol

A **protocol** is a set of rules or standards that govern how data is transmitted and communicated between devices or systems over a network. It ensures that devices can understand each other and exchange information correctly, despite differences in hardware, software, or location.

**Key Points:**

- **Structure**: Protocols define the format, timing, sequencing, and error-checking of data exchanges.
- **Types**: There are different types of protocols, such as:
  - **Communication protocols**: e.g., HTTP (web communication), TCP/IP (internet communication).
  - **Security protocols**: e.g., SSL/TLS (for secure data transmission), HTTPS.
  - **Network management protocols**: e.g., SNMP (for managing network devices).
- **Purpose**: Ensures reliable, secure, and standardized communication across devices, systems, or networks. 

Protocols are the foundation of networking and ensure interoperability between different devices and services.



### Port

A **port** is a virtual communication endpoint in a computer network, used to distinguish different types of services or applications running on the same device. Ports help route incoming and outgoing data to the correct process.

**Key Points:**

- **Port Numbers**: Ports are identified by numbers, typically ranging from 0 to 65535. For example:
  - **Port 80**: Used by HTTP (web traffic).
  - **Port 443**: Used by HTTPS (secure web traffic).
- **Types**:
  - **Well-Known Ports**: 0-1023, reserved for **standard services** (e.g., FTP, HTTP).
  - **Registered Ports**: 1024-49151, used by user-defined services or applications.
  - **Dynamic/Private Ports**: 49152-65535, often used by clients for temporary communication.
  

Ports allow multiple applications to use the same network connection without conflicts by routing data to the correct service.



### HTTP and HTTPS 

**HTTP (HyperText Transfer Protocol)**

- **What it is**: A protocol used for transmitting web pages over the internet.
- **Key Points**:
  - It is **insecure**, meaning data exchanged between the browser and the server is not encrypted.
  - Uses **port 80** by default.
  - Vulnerable to attacks like eavesdropping or man-in-the-middle attacks.



**HTTPS (HyperText Transfer Protocol Secure)**

- **What it is**: A secure version of HTTP, which encrypts data between the browser and server using SSL/TLS.
- **Key Points**:
  - Provides **encryption**, ensuring data privacy and integrity.
  - Uses **port 443** by default.
  - Widely used for secure communication, like online banking, e-commerce, and login pages.

**HTTPS** adds a critical layer of security to **HTTP** by protecting data from interception and tampering.



### SSL & SSH

**SSL (Secure Sockets Layer)**

- **What it is**: A cryptographic protocol used to secure communication over a network by encrypting data between a client (browser) and a server.

- **Key Points**:
  - Provides **encryption**, **authentication**, and **data integrity**.
  
  - Mostly replaced by **TLS (Transport Layer Security)**, but still commonly referred to as SSL.
  
  - Commonly used in HTTPS to secure web traffic.
  
    

**SSH (Secure Shell)**

- **What it is**: A network protocol that allows secure remote login and command execution on another machine.
- **Key Points**:
  - Uses **encryption** to secure data transmission between the client and server.
  - Primarily used for **remote server management** (e.g., logging into a server or transferring files securely).
  - Operates on **port 22** by default.

**SSL** secures data transmission in web traffic, while **SSH** secures remote system access and control.

SSL & SSH are technically not protocols.



### **Cookies**

A cookie is a text file which is placed on your computer hard disk whenever you visit a website. 

Cookies allow the website to keep track of your visit details and store your preferences. 

The main objective here is to increase the speed with which you visit that same website again. 

At the same time, they are very useful for advertisers who can match the ads to your interests after they see your browsing history. Usually, cookies and temporary files may affect your privacy since they disclose your online habits, but it is possible to modify your web browser preferences and set a limit.

Types of cookies: Session cookies & Persistent cookies



### **TCP/IP Protocol**

TCP (Transmission Control Protocol): Divides a message or file into smaller packets that are transmitted over the internet and then reassembled at the destination point. 

IP (Internet Protocol): Responsible for the address of each packet so they are sent to the right destination

**TCP/IP is divided into 4 main layers:**

Data Link Layer Consists of protocols that operate on a link that connects hosts on a network e.g Ethernet

Internet Layer Connects independent networks together e.g IP

Transport Layer Handles communication between hosts e.g TCP

Application Layer Standardizes data exchange for applications e.g HTTP, FTP



## **Hackers and Who They Are**

### Category

Hackers are typically categorized based on their intentions and the legality of their actions. Here are the main categories:

1. **White Hat Hackers**

      - **Role**: Ethical hackers who use their skills to improve security.

      - **Goal**: Find and fix vulnerabilities in systems, often with permission.

      - **Example**: Security consultants, penetration testers.


2. **Black Hat Hackers**

      - **Role**: Malicious hackers who break into systems illegally.

      - **Goal**: Steal data, disrupt services, or cause damage for personal gain.

      - **Example**: Cybercriminals, data thieves.


3. **Grey Hat Hackers**

      - **Role**: Hackers who fall between white and black hat hackers.

      - **Goal**: They exploit vulnerabilities without permission, but may later inform the organization or seek a reward.

      - **Example**: A hacker finding and reporting flaws without asking for permission first.


4. **Script Kiddies**

      - **Role**: Inexperienced hackers using pre-made tools or scripts.

      - **Goal**: Often cause disruption for fun or notoriety, **without deep technical skills**.

      - **Example**: Beginners launching basic attacks like website defacements.


5. **Hacktivists**

      - **Role**: Hackers driven by political or social causes.

      - **Goal**: Disrupt services or leak data to promote their agenda.

      - **Example**: Groups like Anonymous engaging in cyber protests.


6. **State-Sponsored Hackers**

      - **Role**: Hackers working for or supported by government entities.

      - **Goal**: Conduct cyber espionage, sabotage, or warfare.

      - **Example**: Nation-state cyber attacks targeting other countries' infrastructures.




### Hacker Methodology

1. **Reconnaissance/footprinting** is the gathering of as much information as possible about the intended target.
   1. Passive Recon: Silent reconnaissance where the target isn’t aware of it. Information gathered here include email addresses, phone numbers, social media accounts etc. 
   2. Active Recon: More aggressive reconnaissance where the target is actively engaged to discover vulnerabilities. Information gathered here include passwords, IP addresses, open ports, conversation with employees.
2. **Exploitation**: Exploitation means taking advantage of a vulnerability to gain access.
   1. Methods of exploitation include: PHISHING EMAIL  / SOCIAL ENGINEERING / UNPATCHED SOFTWARE /WEAK PASSWORDS
3. **Privilege Escalation** : Privilege Escalation refers to increasing the control over the exploited target.
4. **Establishing persistence**: Establishing persistence means ensuring continuous access even after the breach/attack has been discovered by the victim.
5. **Attack Phase**: When the actual attack takes place 
6. **Cover up**: Avoiding detection



**Social Engineering Tactics:**

1. Baiting

2. Pretexting

3. Quid Quo Pro

4. Phishing

5. Wishing

   



## Attacks

**Brute Force Attack BFA** : Dictionary Attack, A very violent attack where the hacker attempts to crack a password by using extremely large possible combinations of letters and numbers to guess the right combination. Can be prevented with the use of very strong passwords and timeouts after consecutive failed login attempts.

**Phishing**: The most popular cyber attack where the victim is tricked into clicking a malicious link in an email. Spear phishing attacks are directed at very specific targets while a whaling attack is directed against senior executives of companies.

**Bots and Botnets**

**DoS and DDos**: DoS: This is an attack where the targeted server is flooded with useless requests in an attempt to overwhelm and shut it down. Can be combated by blocking the IP address of the source of the attack. DDoS: A more sophisticated form of a DOS attack. Can be prevented with bandwidth overprovision.

**Man in the Middle Attacks**: A crafty attack where the hacker is able to intercept and alter or steal data sent between two or more workstations. Examples of this attack include email hijacking, session hijacking and wifi eavesdropping. 

**SQL Injection**: The attacker executes malicious SQL commands to try and corrupt a database. This type of attack can provide the attacker with unauthorized access to sensitive information like passwords and usernames.**Havij** developed in Iran is a very popular tool used by penetration testers to find and exploit SQL volunerabilities.

**CROSS-SITE SCRIPTING (XSS) Attack** : The attacker executes malicious scripts of code into a website or web application.

**Supply Chain Attacks**





## **Malware** (malicious software)

**Malware** (malicious software) is any software intentionally designed to cause harm to computers, networks, or users. It comes in various types, each with a specific purpose. Here's a brief overview of common malware types:

1. **Virus**

   - **What it is**: A malicious code that attaches itself to legitimate programs and spreads when the infected programs are executed.
   - **Effect**: Can corrupt or delete files, slow down systems, and spread to other systems.

2. **Worm**

   - **What it is**: A self-replicating malware that spreads without user interaction by exploiting vulnerabilities.
   - **Effect**: Consumes system resources, spreads rapidly across networks, and can cause network congestion.

3. **Trojan Horse**

   - **What it is**: Malware disguised as legitimate software.
   - **Effect**: Opens backdoors for attackers, allowing unauthorized access and control over the infected system.

4. **Ransomware**

   - **What it is**: Malware that encrypts files and demands a ransom for their decryption.
   - **Effect**: Locks users out of their systems or data until they pay a ransom, often in cryptocurrency.

5. **Spyware**

   - **What it is**: Malware that secretly monitors and collects user information without consent.
   - **Effect**: Steals sensitive data like passwords, financial information, and browsing habits.

6. **Adware**

   - **What it is**: Malware that delivers unwanted ads to users, often bundled with legitimate software.
   - **Effect**: Slows down systems, disrupts the user experience, and may lead to more dangerous malware.

7. **Rootkit**

   - **What it is**: Malware that hides the presence of other malware and gives attackers administrator-level access.
   - **Effect**: Enables deep system compromise, making it difficult to detect or remove.

8. **Keylogger**

   - **What it is**: Malware that records keystrokes to steal sensitive information like passwords and credit card numbers.
   - **Effect**: Can lead to identity theft or financial fraud.



## **Defences**

1. **Firewalls**: A firewall is a security device that monitors incoming and outgoing network traffic. They can prevent users from sending certain data outside of their network and can also prevent access to certain websites.
    1. Firewalls work by: 
        1. Packet Filtering: Checks all the data passing through using a filter
        2. Proxy Service : The firewall acts as an intermediary between systems
        3. Stateful Inspection: Tracks the state of a connection between systems
    2. Firewalls can either be hardware or software.
2. **Encryption**: A process of making information hidden or secretive. Encryption uses a key known as a **cipher** to make the data secretive. Another key is then needed to decrypt the key and make it accessible again. **Cryptography** is the study or science concerned with secret communication. There are **two main types of encryption**:
    1. Symmetric： Uses a single key e,g DES & AES
    2. Asymmetric：Uses two different keys for encrypting and decrypting e.g RSA
3. **Biometrics**: A security mechanism used to authenticate and provide access **based on the verification of physical characteristics**.Biometric identifiers are:
    1. Physiological Characteristics ： The shape or composition of the body e.g fingerprints, DNA, face, retina etc
    2. Behavioral Characteristics： The behavior of a person e.g voice, gestures, gait
4. **ANTI-VIRUS**： This is software used to protect a computer from malware. They are able to detect malware through their signatures. They can also use heuristic methods i.e predicting a file is malicious by studying its behavior. Antivirus can report a false positive i.e a legit program or file that was wrongly classified as malware. Antivirus software differ in their detection rates as well as their system resource usage.
5. **2 FACTOR AUTHENTICATION**： A user provides 2 authentication factors to verify who they are. Authentication products include tokens, smart cards and smartphones Multi Factor Authentication can include two or more factors like time and location. Authentication factors include：
    1. Knowledge Factor： Something the user knows like a password 
    2. Possession Factor： Something the user has like a token or mobile device
    3. Inherence Factor： Something the user is e.g biometrics
6. **HONEY POTS & DMZS**: A honey pot is a computer system that is a decoy to lure cyber criminals. They are used to study attempts to gain unauthorized access which would allow security admins to learn how to protect systems against them. **A Demilitarized Zone (DMZ)** is a physical or logical subnetwork that separates a local area network from other untrusted networks
    1. Research Honeypots
    2. **Production Honeypots**: are usually placed inside of a production network with other real servers to act as a decoy. The main objective is to keep the hackers distracted while the real production servers are patched up. 
7. **Wireless  Security**: This is the prevention of unauthorized access to computers using wireless networks. Use encryption and authorization as two tools to prove security.  Types of wireless networks protocols:
    1. WEP: Very weak with 64-bit and 128-bit encryption keys
    2. WPA: Developed by Wi-Fi alliance and uses 256-bit encryption keys. Was superseded by WPA 2 in 2006
    3. WPA2
    4. WPA3
8. **Password Management**



## Cyber Security at Work Place

**Security Policy**: This is a written document that describes how an organization protects its virtual and physical data assets from threats. 

**BYOD Policy**: A policy that describes how employees are able to use their own personal device to access company data in a safe and secure manner. 

**COBO**: Corporate Owned Business Only

**COPE**: Corporate Owned, Personally-Enabled

**CYOD**: Choose Your Own Device

**Incident Response Plan**: A set of policies and procedures that are used to identify, contain and eliminate cyber attacks.

**Disaster Recovery Plan**: A plan that focuses on the restoration of critical systems after a disaster

**The Security vs Ease of Access Paradox** : Profit  and productivity is always over security. It's determined by the data involved.



## Cyber Warefare



## Resources Lists

Books and Movies:

*Tallinn Mannual*

*Countdown to Zero Day*

Catch me if you can ( the movie about social engineering)



Experts

https://www.cbtnuggets.com/trainers/jeremy-cioara networking expert

https://en.wikipedia.org/wiki/Kevin_Mitnick#Books  social engineering expert



Websites:

https://lookup.icann.org/en/lookup The WhoIs Query to gather information

https://en.wikipedia.org/wiki/Anonymous_(hacker_group)

https://www.ibm.com/topics/social-engineering

https://www.threatmark.com/



Tools

https://www.kali.org/

https://www.darknet.org.uk/2010/09/havij-advanced-automated-sql-injection-tool/ 


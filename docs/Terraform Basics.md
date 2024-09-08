---
tags: 
- terraform
- devops

date: 2024-09-08
---

<!-- TOC -->
* [Define the AWS provider](#define-the-aws-provider)
* [Define the Azure provider](#define-the-azure-provider)
* [Example of an aliased AWS provider for a different region](#example-of-an-aliased-aws-provider-for-a-different-region)
* [Create an AWS S3 bucket](#create-an-aws-s3-bucket)
* [Create an Azure Resource Group](#create-an-azure-resource-group)
* [Create an S3 bucket in the West region using the aliased provider](#create-an-s3-bucket-in-the-west-region-using-the-aliased-provider)
* [variables.tf](#variablestf)
* [main.tf](#maintf)
<!-- TOC -->

Types of Infrastructure as Code (IaC) Tools
Based on their primary functions, IaC tools can be  broadly divided  into three categories: Configuration Management Tools, Server Templating Tools, and Provisioning Tools.
1. **Configuration Management Tools**
   •	**Primary Function**: These tools are primarily focused on managing and maintaining the **configuration of existing infrastructure**. They ensure that servers and other infrastructure components are consistently configured according to defined policies.
   •	**Characteristics**:
   ◦	Enforce desired state configuration across servers.
   ◦	Handle software installation, updates, and management.
   ◦	Manage system settings, users, services, and application configurations.
   ◦	Typically work in a client-server or agent-based model, but can also be agentless.
   •	**Examples**:
   ◦	**Ansible**: Agentless, uses playbooks written in YAML to configure and manage infrastructure.
   ◦	**Puppet**: Uses a declarative language to define system configurations, often used in large enterprises.
   ◦	**Chef**: Uses Ruby-based DSL for configuration management and is often used in environments with complex dependencies.
   ◦	**SaltStack**: Uses YAML and Python, focuses on configuration management, orchestration, and remote execution.
2. **Server Templating Tools**
   •	**Primary Function**: These tools are used to create and manage **machine images or server templates** that can be replicated across environments. They help in building pre-configured and reusable server images.
   •	**Characteristics**:
   ◦	Automate the creation of machine images (e.g., AMIs, Docker images).
   ◦	Include all the software, libraries, configuration files, and settings needed.
   ◦	Ensure consistency across environments by using the same base image.
   ◦	Often used in conjunction with provisioning tools to deploy instances of these images.
   •	**Examples**:
   ◦	**Packer**: A tool from HashiCorp that automates the creation of machine images across multiple platforms (e.g., AWS AMI, Docker, VMware).
   ◦	**Docker**: Although primarily a container platform, Dockerfiles can be considered server templates for containerized applications.
   ◦	**Vagrant**: Primarily for development environments, Vagrant can create and configure lightweight, reproducible, and portable development environments using VM templates.
3. **Provisioning Tools**
   •	**Primary Function**: These tools are designed to **create, manage, and destroy infrastructure resources (like VMs, networks, storage) on cloud providers or in data centers**. They handle the lifecycle of infrastructure components.
   •	**Characteristics**:
   ◦	Automate the provisioning of infrastructure components from scratch.
   ◦	Manage the full lifecycle of infrastructure, including creation, updating, and destruction.
   ◦	Often declarative, where the desired end state is defined, and the tool ensures that the current state matches it.
   ◦	Integrates with multiple cloud providers and on-premise environments.
   •	**Examples**:
   ◦	**Terraform**: A popular tool that allows you to define infrastructure as code across multiple cloud providers. It’s declarative and manages state to track resources.
   ◦	**AWS CloudFormation**: An AWS-specific tool for provisioning and managing AWS resources using JSON or YAML templates.
   ◦	**Azure Resource Manager (ARM) Templates**: Azure’s native tool for provisioning resources via declarative JSON templates.
   ◦	**Google Cloud Deployment Manager**: Google Cloud’s native provisioning tool that uses YAML, Python, or Jinja2 templates.
   ◦	**Pulumi**: A tool that allows you to define infrastructure using general-purpose programming languages, integrating provisioning and configuration management.
   **Summary of Categories:**
   •	**Configuration Management Tools**: Focus on maintaining the desired configuration and state of existing infrastructure.
   •	**Server Templating Tools**: Focus on creating reusable, pre-configured server images or templates that can be deployed across environments.
   •	**Provisioning Tools**: Focus on creating, managing, and destroying infrastructure components, managing their entire lifecycle.
   Terraform Basics
1. **What is Terraform?**
   •	**Infrastructure as Code (IaC):** Terraform allows you to manage your infrastructure (like servers, databases, networking) with configuration files. This makes your infrastructure reproducible and version-controlled.
   •	**Provider-Agnostic:** Terraform supports multiple providers, such as AWS, Azure, GCP, and others, enabling you to manage infrastructure across different cloud platforms with the same tool.
2. **Core Concepts**
   •	**Providers:** Providers are plugins that Terraform uses to interact with APIs of cloud providers or services (e.g., AWS, Azure). You declare which providers you want to use in your Terraform configuration.
   ◦	Terraform providers are categorized based on their origin and the level of support and verification they receive.
   ▪	**Official**: Directly supported and maintained by HashiCorp; ideal for critical infrastructure.
   ▪	**Verified**: Maintained by trusted external partners, verified by HashiCorp; good for specialized services.
   ▪	**Community**: Built by the community, offering flexibility and breadth but with varying levels of support and reliability.
   ◦	Based on the type of infrastructure or service
   ▪	Cloud Providers
   ▪	Infrastructure Providers
   ▪	Service Providers
   ▪	SaaS Providers
   ▪	Authentication & Identity Providers
   ▪	Container Providers
   •	**Resources:** Resources represent **components of your infrastructure**, like an AWS EC2 instance or an Azure Virtual Machine.
   •	**Modules:** A module is a container for multiple resources that are used together. Modules allow you to reuse configuration code.
   •	**State:** Terraform keeps track of your infrastructure using a state file (`terraform.tfstate`). The state file is crucial for determining the current state of your infrastructure and what needs to be changed.
   •	**Data Sources:** Data sources allow Terraform to **query information from providers**, such as fetching the latest AMI ID in AWS.
3. **Basic Commands**
   •	**`terraform init`:** Initializes a working directory containing Terraform configuration files. It sets up the provider plugins.
   •	**`terraform plan`:** Creates an execution plan, showing you what actions Terraform will take to reach the desired state defined in the configuration files.
   •	**`terraform apply`:** Applies the changes required to reach the desired state of the configuration. It prompts for confirmation before making changes.
   •	**`terraform destroy`:** Destroys the infrastructure managed by Terraform. It prompts for confirmation before deleting resources.
4. **State Management**
   •	**State Files:** Terraform saves the current state of the infrastructure in a file called `terraform.tfstate`. This file is important for managing and updating your infrastructure.
   •	**Remote State:** For collaborative environments, you can store the state file remotely in an S3 bucket or a similar service to enable shared access and avoid conflicts.
   Terraform Usage

1. Using Multiple Providers
   **How to Use Multiple Providers**
   •	**Define Multiple Providers**: You can define different providers in the same Terraform configuration.
   •	**Alias Providers**: You can use provider aliases to configure multiple instances of the same provider with different settings.
   **Example: Using AWS and Azure Providers**








# Define the AWS provider

provider "aws" {

region = "us-east-1"

}

​

# Define the Azure provider

provider "azurerm" {

features = {}

}

​

# Example of an aliased AWS provider for a different region

provider "aws" {

alias  = "west"

region = "us-west-2"

}

​

# Create an AWS S3 bucket

resource "aws_s3_bucket" "example_bucket" {

bucket = "my-example-bucket"

}

​

# Create an Azure Resource Group

resource "azurerm_resource_group" "example_rg" {

name     = "example-resources"

location = "West US"

}

​

# Create an S3 bucket in the West region using the aliased provider

resource "aws_s3_bucket" "west_bucket" {

provider = aws.west

bucket   = "my-west-region-bucket"

}

​


**Explanation**:
•	**Multiple Providers**: The configuration uses both `aws` and `azurerm` providers to manage AWS and Azure resources.
•	**Aliased Provider**: An alias `west` is used for the `aws` provider to create resources in a different AWS region (`us-west-2`).

2. Using Variables in Terraform
   In Terraform, **input variables** are used to parameterize configurations, allowing you to make your Terraform code more flexible and reusable. Instead of hardcoding values, you can define variables and pass in different values as needed.
   **How to Use Input Variables**
   1	**Define a Variable**: You define variables in a `variables.tf` file or inline within the configuration.
   2	**Assign Values to Variables**: Values can be assigned using a `terraform.tfvars` file, environment variables, or directly via the command line.
   3	**Use Variables in Configuration**: Reference these variables in your Terraform configuration files.
   Terraform Variable Precedence
   Terraform follows a specific order of precedence when assigning values to input variables. This determines which value is used when the same variable is defined in multiple places. Here's the order of precedence, **from highest to lowest**:
   **1. Command-Line Flags**
   •	**Description**: Values passed directly via the `var` flag during `terraform plan` or `terraform apply`.
   •	**Example**:           terraform apply -var="instance_type=t2.large"   ​           
   **2. `terraform.tfvars` or `.tfvars.json` Files**
   •	**Description**: These files are automatically loaded if present in the working directory.
   •	**Example**: `terraform.tfvars`           instance_type = "t2.medium"   ​           
   **3. `.auto.tfvars` or `.auto.tfvars.json` Files**
   •	**Description**: Files with these names are automatically loaded if present in the working directory.
   •	**Example**: `production.auto.tfvars`           instance_type = "t2.small"   ​           
   **4. Environment Variables**
   •	**Description**: Variables set in the environment using the `TF_VAR_` prefix.
   •	**Example**:           export TF_VAR_instance_type="t2.nano"   ​           
   **5. Variable Defaults**
   •	**Description**: Default values specified in the variable definition within the configuration file.
   •	**Example**:           variable "instance_type" {     type    = string     default = "t2.micro"   }   ​           
   **6. Module Calls**
   •	**Description**: If a module is being used, variables can be passed as arguments when calling the module.
   •	**Example**:           module "web_server" {     source        = "./module"     instance_type = "t2.small"   }   ​           
   **Summary of Precedence**:
   1	**Command-Line Flags** (`var`)
   2	**terraform.tfvars / .tfvars.json**
   3	**auto.tfvars / .auto.tfvars.json**
   4	**Environment Variables** (`TF_VAR_`)
   5	**Variable Defaults** (in the configuration)
   6	**Module Calls** (when passing variables to a module)
   Terraform will use the value from the highest precedence source available, allowing for flexible and dynamic configuration management.
   **Example**
   **1. Define a Variable**








# variables.tf

variable "instance_type" {

description = "The type of EC2 instance"

type        = string

default     = "t2.micro"

}

​


**2. Use the Variable in a Resource**

xxxxxxxxxx






# main.tf

resource "aws_instance" "example" {

ami           = "ami-0c55b159cbfafe1f0"

instance_type = var.instance_type

}

​


**3. Assign a Value to the Variable**
•	**Using a `terraform.tfvars` file**:  xxxxxxxxxx          instance_type = "t2.large"   ​           
•	**Or via Command Line**:  xxxxxxxxxx          terraform apply -var="instance_type=t2.large"   ​           
**Key Points**:
•	**Reusability**: Input variables allow you to reuse the same Terraform configuration with different values.
•	**Flexibility**: Easily change settings like region, instance type, or any other configurable options without modifying the configuration code.
•	**Modularity**: By using variables, you can create more modular and organized Terraform code.

3. Dependencies in Terraform
   •	**Implicit Dependencies**: Terraform automatically creates dependencies based on resource references. If one resource references another, Terraform knows the second resource must be created first.
   ◦	**Example**:
   ◦	Here, `aws_subnet.example_subnet` depends on `aws_vpc.example_vpc` because it references `vpc_id`.  xxxxxxxxxx          resource "aws_vpc" "example_vpc" {     cidr_block = "10.0.0.0/16"   }   ​   resource "aws_subnet" "example_subnet" {     vpc_id = aws_vpc.example_vpc.id  # Implicit dependency     cidr_block = "10.0.1.0/24"   }   ​           
   •	**Explicit Dependencies**: You can explicitly define dependencies using the `depends_on` argument. This is useful when the dependency is not obvious from resource references.
   ◦	**Example**:  xxxxxxxxxx          resource "aws_instance" "example" {     ami           = "ami-0c55b159cbfafe1f0"     instance_type = "t2.micro"     depends_on    = [aws_security_group.example_sg]  # Explicit dependency   }   ​   resource "aws_security_group" "example_sg" {     name = "example-sg"   }   ​           
   Advanced Terraform Commands
   **1. `terraform validate`**
   •	**Purpose**: Checks the syntax and configuration of your Terraform files for errors and ensures that they are valid.
   •	**Usage**:  xxxxxxxxxx          terraform validate   ​           
   **2. `terraform fmt`**
   •	**Purpose**: Formats Terraform configuration files to a canonical format and style, improving readability.
   •	**Usage**:  xxxxxxxxxx          terraform fmt   ​           
   •	**Aliases**: `terraform format`
   **3. `terraform show -json`**
   •	**Purpose**: Outputs the current state or plan in JSON format, which is useful for scripting and programmatic access to Terraform data.
   •	**Usage**:  xxxxxxxxxx          terraform show -json   ​           
   **4. `terraform providers`**
   •	**Purpose**: Lists the providers required by the configuration and their versions.
   •	**Usage**:  xxxxxxxxxx          terraform providers   ​           
   **5. `terraform providers mirror`**
   •	**Purpose**: *Creates a local mirror of provider binaries*, which can be useful for offline use or to host providers internally.
   •	**Usage**:  xxxxxxxxxx          terraform providers mirror <directory>   ​           
   **6. `terraform output <specific variable>`**
   •	**Purpose**: Retrieves the value of a specific output variable defined in your Terraform configuration.
   •	**Usage**:  xxxxxxxxxx          terraform output <variable_name>   ​           
   **7. `terraform refresh`**
   •	**Purpose**: Updates the state file with the latest information from the actual infrastructure, ensuring Terraform's state matches reality.
   •	**Usage**:  xxxxxxxxxx          terraform refresh   ​           
   **8. `terraform graph`**
   •	**Purpose**: Generates a visual representation of the dependency graph of Terraform resources, which can be used with tools like Graphviz to create a visual graph.
   •	**Usage**:  xxxxxxxxxx          terraform graph   ​           
   •	**Tool Integration**: You can pipe the output to Graphviz for visualization.  xxxxxxxxxx          terraform graph | dot -Tpng > graph.png   ​           
   These commands help with various aspects of Terraform workflows, including validation, formatting, inspection, and visualization of infrastructure configurations.

Terraform State
Terraform state files are critical for managing the infrastructure and maintaining the current state of resources. However, they can contain sensitive information, and it's important to handle them securely.
**Overview**
1	**Purpose**:
◦	**Track Infrastructure**: The state file keeps track of the resources managed by Terraform and their current configuration.
◦	**Sync State**: It helps Terraform understand the differences between your configuration files and the actual infrastructure.
2	**Location**:
◦	**Default**: By default, Terraform stores the state file locally in a file named `terraform.tfstate`.

**Sensitive Information in State Files**
1	**Contents**:
◦	**Resource Data**: Includes information about your infrastructure resources, such as IDs, configurations, and outputs.
◦	**Sensitive Values**: Can inadvertently include sensitive data like passwords, secrets, or API keys.
2	**Security Risks**:
◦	**Exposure**: If the state file is exposed, sensitive information within it can be compromised.
◦	**Access Control**: Unauthorized access to the state file can lead to security breaches.

**Best Practices for Handling Sensitive Information in State Files**
1	**Remote State Storage**:
◦	**Use Remote Backends**: Store state files in remote backends like AWS S3 with encryption enabled, or Terraform Cloud, which provides better security and access control.
◦	**Example**:  xxxxxxxxxx          terraform {     backend "s3" {       bucket         = "my-terraform-state"       key            = "terraform.tfstate"       region         = "us-west-2"       encrypt        = true       kms_key_id      = "alias/my-key"     }   }   ​           
2	**State File Encryption**:
◦	**Encryption**: Ensure state files are encrypted both in transit and at rest. Use backend services that support encryption.
3	**Access Control**:
◦	**Limit Access**: Restrict access to the state file to only those who need it. Use role-based access controls (RBAC) and policies to manage permissions.
◦	**Audit**: Regularly audit access to state files and monitor for unauthorized access.
4	**Sensitive Data Handling**:
◦	**Avoid Storing Secrets**: Where possible, avoid storing sensitive information directly in Terraform configurations. Use secure mechanisms for managing secrets, like HashiCorp Vault, AWS Secrets Manager, or environment variables.
◦	**Redact Sensitive Data**: Be cautious when sharing or versioning state files; consider redacting sensitive information if needed.
5	**State File Management**:
◦	**Regular Backups**: Maintain regular backups of state files, but ensure backups are also securely stored.
◦	**Versioning**: Use versioning in your remote backend to track changes to the state file over time.
By implementing these practices, you can help ensure that sensitive information in Terraform state files is protected and manage your infrastructure securely.

Terraform Lifecycle
In Terraform, the lifecycle of infrastructure is managed through a series of stages that cover the creation, maintenance, and destruction of resources.
**1. Initialization (`terraform init`)**
•	**Purpose**: Sets up the working directory for Terraform, downloading required provider plugins and initializing the backend configuration.
•	**Key Actions**:
◦	Initializes the backend (where the state file is stored).
◦	Downloads provider plugins.
◦	Sets up the working directory.
**2. Planning (`terraform plan`)**
•	**Purpose**: Creates an execution plan to show what actions Terraform will take to achieve the desired state defined in the configuration.
•	**Key Actions**:
◦	Compares the current state with the desired state.
◦	Lists actions like resource creation, updates, or deletions.
◦	Provides a preview of what will happen if `terraform apply` is run.
**3. Application (`terraform apply`)**
•	**Purpose**: Applies the changes required to reach the desired state defined in the configuration.
•	**Key Actions**:
◦	Executes the changes proposed in the plan.
◦	Creates, updates, or deletes resources as necessary.
◦	Updates the state file to reflect the new infrastructure state.
**4. Destroy (`terraform destroy`)**
•	**Purpose**: Removes all the resources managed by the Terraform configuration.
•	**Key Actions**:
◦	Destroys resources defined in the configuration.
◦	Updates the state file to reflect the destruction of resources.
**5. Refresh (`terraform refresh`)**
•	**Purpose**: Updates the state file with the latest information from the actual infrastructure.
•	**Key Actions**:
◦	Retrieves the current state of the infrastructure from the provider.
◦	Updates the local state file to reflect any changes made outside of Terraform.
**6. Validate (`terraform validate`)**
•	**Purpose**: Validates the configuration files for syntax errors and verifies that the configuration is valid.
•	**Key Actions**:
◦	Checks the configuration files for correctness.
◦	Ensures that all required variables are defined and used correctly.
**7. Format (`terraform fmt`)**
•	**Purpose**: Formats Terraform configuration files to a canonical format and style.
•	**Key Actions**:
◦	Automatically adjusts the formatting of Terraform configuration files to be consistent and readable.
**8. Output (`terraform output`)**
•	**Purpose**: Retrieves and displays the output values defined in the configuration.
•	**Key Actions**:
◦	Fetches the values of output variables defined in the configuration.
◦	Useful for getting information about the created resources.
**9. Graph (`terraform graph`)**
•	**Purpose**: Generates a visual representation of the dependency graph of Terraform resources.
•	**Key Actions**:
◦	Produces a DOT format graph of the resource dependencies.
◦	Can be used with tools like Graphviz to visualize the resource graph.
**10. Providers (`terraform providers`)**
•	**Purpose**: Lists the providers required by the configuration and their versions.
•	**Key Actions**:
◦	Displays the providers used in the configuration.
◦	Useful for verifying provider versions and dependencies.
**11. Providers Mirror (`terraform providers mirror`)**
•	**Purpose**: Creates a local mirror of provider binaries for offline use.
•	**Key Actions**:
◦	Downloads provider binaries to a local directory.
◦	Useful for environments with limited internet access.

**Lifecycle Management in Configuration**
Terraform also allows you to manage the lifecycle of individual resources through the `lifecycle` block within resource definitions:
•	**`create_before_destroy`**: Ensures new resources are created before old ones are destroyed.
•	**`prevent_destroy`**: Prevents a resource from being destroyed, providing an additional safeguard.
•	**`ignore_changes`**: Ignores changes to specific attributes, preventing them from being applied.
**Example**:

xxxxxxxxxx






resource "aws_instance" "example" {

ami           = "ami-0c55b159cbfafe1f0"

instance_type = "t2.micro"

​

lifecycle {

create_before_destroy = true

prevent_destroy       = true

}

}

​


This `lifecycle` configuration helps manage how Terraform handles resource creation and destruction, providing control over how changes are applied.
Q & A
What's the difference between Configuration Management Tools and Provisioning Tools since they both are related with infrastructure?
While both Configuration Management (CM) Tools and Provisioning Tools are essential for managing infrastructure, they serve different purposes and are used at different stages of the infrastructure lifecycle. Here’s a breakdown of their differences:
1. **Primary Focus**
   •	**Configuration Management Tools**:
   ◦	**Purpose**: CM tools focus on maintaining and enforcing the desired state of **existing infrastructure.** They ensure that systems are correctly configured, software is properly installed, and services are running as expected.
   ◦	**Scope**: These tools operate on infrastructure that has already been provisioned. They handle the ongoing management of configurations, applying updates, and ensuring consistency across systems.
   ◦	**Example Tasks**: Installing and configuring software, applying patches, managing user accounts, ensuring specific services are running, setting system variables, and more.
   •	**Provisioning Tools**:
   ◦	**Purpose**: Provisioning tools focus on creating and setting up the underlying infrastructure. They are responsible for provisioning (i.e., creating) new servers, networks, databases, and other infrastructure components from scratch.
   ◦	**Scope**: These tools are typically used at the beginning of the infrastructure lifecycle to create and deploy infrastructure resources, but they can also manage updates and teardown.
   ◦	**Example Tasks**: Creating virtual machines, setting up networks, allocating storage, configuring load balancers, and deploying other infrastructure components.
2. **Lifecycle Stage**
   •	**Configuration Management Tools**:
   ◦	**When Used**: **After the infrastructure is provisioned and running**. CM tools manage and maintain the software and configuration states over time.
   ◦	**Role in Lifecycle**: Ongoing management. They ensure that the system’s configuration remains consistent with the desired state, even after updates or changes.
   •	**Provisioning Tools**:
   ◦	**When Used**: At the initial stage to create and deploy infrastructure resources. They may also be used to update or destroy resources.
   ◦	**Role in Lifecycle**: Initial setup and lifecycle management. They define the infrastructure's desired state and create, update, or destroy resources to match that state.
3. **Declarative vs. Imperative Approach**
   •	**Configuration Management Tools**:
   ◦	**Approach**: **Can be both declarative and imperative.** For example, Ansible (which is declarative) describes what the system's state should be, while Chef (which can be imperative) describes how to achieve that state.
   ◦	**Example**: Ansible playbooks declare that a package should be installed and a service should be running, regardless of how that is achieved.
   •	**Provisioning Tools**:
   ◦	**Approach**: **Primarily declarative.** Provisioning tools usually define the desired end state of the infrastructure, and the tool automatically figures out how to achieve that state.
   ◦	**Example**: Terraform configuration files declare that a certain number of instances should exist in a specific region with particular settings, and Terraform determines the steps to achieve that.
4. **Typical Use Cases**
   •	**Configuration Management Tools**:
   ◦	**Scenario**: After provisioning a server, you need to ensure it has the correct version of Apache installed, is configured correctly, and has the necessary firewall rules applied.
   ◦	**Tools**: Ansible, Puppet, Chef, SaltStack.
   •	**Provisioning Tools**:
   ◦	**Scenario**: You need to create a set of EC2 instances on AWS, configure a VPC, attach an EBS volume, and deploy a load balancer.
   ◦	**Tools**: Terraform, AWS CloudFormation, Azure ARM Templates, Google Cloud Deployment Manager.
5. **Interdependence**
   •	**Configuration Management Tools**:
   ◦	Often depend on infrastructure being provisioned first. For example, Ansible will manage and configure servers that have already been created by a provisioning tool.
   •	**Provisioning Tools**:
   ◦	Can work independently or in conjunction with CM tools. For example, Terraform can provision the infrastructure, and then Ansible can be used to configure the instances that Terraform has created.
   **In Summary:**
   •	**Configuration Management Tools** manage the software, settings, and ongoing state of already existing infrastructure.
   •	**Provisioning Tools** create and manage the lifecycle of infrastructure resources from scratch, ensuring they exist as defined.
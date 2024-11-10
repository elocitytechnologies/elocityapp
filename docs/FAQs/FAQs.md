---
sidebar_position: 1
---

# Frequently Asked Questions

### What happens if I miss a payment due date?
Depending on how your service provider has set up the payment collections policies, one of the following might happen:

1. You may be able to continue using your cloud account (_uninterrupted usage_);
2. You might get payment due date notifications (_reminder state_);
3. You might be disallowed from purchasing new resources but continue to use existing ones (_restricted usage_);
4. You might be put in a disabled state along with all your cloud resources (_suspended state_);
5. You might lose access to your account and all your resources entirely (_terminated state_).

While scenario 1 is the most ideal, realistically one of 2-5 will be configured as a policy. To avoid any likelihood of these events, it is best recommended to always pay your due invoices on time and never miss a due date.

### How is my wallet balance calculated?
Wallet balance (or [Service Balance](/docs/Subscribers/AccountCentre/WalletandTransactions) is a real-time 'ability to spend' on Apiculus CloudConsole. It is a net total of your credit limit, all charges incurred and all payments made for your account.

```
Service Balance = Credit Limit - sum(Incurred Charges) + sum(Payments)
```

### Will I be billled for the entire month if I don't use a resource for the whole month?
Resources are billed based on pro-ration rules defined by the service provider. Pro-ration works in the following ways:

- **Pro-rate on entry:** this means that, if enabled, your resource will be billed **from** the date of purchase and not from the beginning of the billing month.
- **Pro-rate on exit:** this means that, if enabled, your resource will be billed **till** the date of usage and not till the end of the billing month.

Here's a more detailed illustration:

||Pro-ration on entry ON|Pro-ration on entry OFF|Pro-ration on exit ON|Pro-ration on exit OFF|
|---|---|---|---|---|
|Resource purchased on 8th of the month, used for the remainder of the month or deleted on last day of month|Billing start w.e.f. 8th of the month; total billable days 22 (or 23 based on length of month)|Billing start w.e.f. 1st of the month; total billable days 30 (or 31 based on length of month);|No impact|No impact|
|Resource purchased on 1st of the month or continued from previous month, used till 23rd of month|No impact|No impact|Billing end on 23rd of the month; total billable days 23; no renewal next billing cycle|Billing end on last day of month; total billable days 30 (or 31 depending on length of month); no renewal next billing cycle|
|Resource purchased on 8th of the month; used till 23rd of the month|Billing start w.e.f. 8th of the month; total billable days 16 if pro-rate on exit ON; 22/23 if pro-rate on exit OFF|Billing start w.e.f. 1st of the month; total billable days 23 if pro-rate on exit ON; 30/31 if pro-rate on exit OFF|Billing end on 23rd of the month; total billable days 16 if pro-rate on entry ON; 23 if pro-rate on entry OFf; no renewal next billing cycle|Billing end on 30/31st of the month; total billable days 22/23 if pro-rate on entry ON; 30/31 if pro-rate on entry OFf; no renewal next billing cycle|

### How can I deploy monitoring tools and other apps on my Kubernetes cluster?
Once a cluster is deployed, you can deploy pretty much any application using `kubectl`. Some examples:

- Postgres DB service - a PostgreSQL Instance can be deployed on a runnning Kubernetes cluster using the `kubeconfig` manifests. At this moment, we have not automated this. However, there are standard methods of deploying apps and packages (example) available online, all of which just require cluster access via `kubectl`. The same should be applicable to MongoDB and MySQL instances on clusters.
- Persistent storage - CKS uses CloudStack’s block volumes for cluster storage. As of now, CKS does not support using NFS or S3 as persistent storage for Kubernetes clusters. However, once a cluster is created, its PersistentVolume can be pointed to a S3 bucket using the Cloudian S3 operator.
- Monitoring of Kubernetes infrastructure - users can freely install their own monitoring apps (e.g., Prometheus+Grafana, Rancher etc.) using `kubectl` and Helm Charts.
- Gitlab, ArgoCD etc. - these apps can be installed using Helm.
- Advanced Load balancing and Certificate management - typically these are handled at the cloud provider level and not at the Kubernetes level.

### Can I deploy a Kubernetes cluster with a private registry?
Private registry is not supported on Apiculus CloudConsole. However, using the Apiculus API gateway, you can still pass the private registry details (username, password, URL) as the API query parameters and the API will work as intended, but with restrictive SLA on support.

### Why can't I access Kubernetes cluster nodes or cluster volumes directly?
Accessing cluster nodes and volumes is disabled on Apiculus CloudConsole in order to maintain sanity around cluster billing mechanisms.

### Can I deploy stateful applications using Apiculus Kubernetes?
Yes, Kubernetes supports stateful applications using features like StatefulSets and Persistent Volumes for data storage.

### Can I use my S3 bucket with a Kubernetes cluster created on Apiculus CloudConsole?
Yes, if the S3 bucket has been created using the Apiculus S3 Service, you can use the CSI (container storage interface) plugin maintained by Cloudian. If you're using a hyperscaler S3 service or a ceph cluster, you can use the CSI maintained by the hyperscaler (or ceph) with your Kubernetes cluster created on Apiculus CloudConsole.

### Which Kubernetes versions are supported on Apiculus CloudConsole?
Apiculus supports Kubernetes versions 1.20.x and above.

### Can I modify my VPC's super CIDR after creation?
No, super CIDR modification is not currently allowed on Apiculus CloudConsole. If you wish to change the supernet, it is recommended that you create a new VPC, new subnets and migrate Instances to the new VPC.

### What traffic will I be charged for in a VPC?
In a VPC, any east-west traffic is free. This includes any traffic or communication between subnets, load balancing between Instances etc.

North-south traffic may be chargeable based on your country of usage and/or service provider's preferences. This includes any traffic moving in and out of the VPC through the VR.

### Can I use Terraform to provision my cloud resources?
Yes, Apiculus CloudConsole supports infrastructure as code (IaC) and cloud resource creation using Terraform and the Apiculus Gateway API.

:::note
Any resource created using IaC will be billed hourly.
:::

### Can I upload my own ISO or VHD images?
No, custom Image uploads are currently not possible on Apiculus CloudConsole.

### Can control and worker nodes be scaled individually in a Kubernetes cluster?
No, when a Kubernetes cluster is scaled, the scaling configurations are applied to all the nodes alike.

The following [scaling modes](/docs/Subscribers/Compute/Kubernetes/ScalingKubernetesClusters) are available:

- Scaling the Control Node - this can be done by enabling HA at the time of cluster creation;
- Scaling the number of Worker Nodes - this can be done by specifying minimum and maximum cluster size (Control Nodes are excluded from these limits);
- Reconfiguring the Cluster - this can be done by specifying a new number of Worker Nodes and changing their Compute configuration.

### Is there a way to add or link multiple emails to an account?
Yes, multiple email IDs can be used to login to the same subscriber 'parent' account by [creating child users](/docs/Subscribers/AccountCentre/TeamandChildUserManagement). Child users are semi-isolated accounts, in the sense that they all have their own identities on Apiculus CloudConsole, but share all resources created in the parent subscriber account.

### How can I get admin credentials for Windows Instances on Apiculus CloudConsole?
When you create a Windows Instance on Apiculus CloudConsole, you will receive the password on the email ID registered for your Apiculus CloudConsole account.

### Can Kubernetes clusters be created with differently-sized control and worker nodes?
No, Apiculus Kubernetes Service (AK8s) only supports equally-sized Control and Worker nodes in a Kubernetes cluster.
### Can root disks be attached to other Instances?
No, Root Volumes, i.e., root disks that are created at the time of Instance creation, can not be moved between Instances.

Data Volumes, i.e., addon disks that are created separately, can be attached to and detached from Instances. In other words, Data Volumes are portable while Root Volumes are not.
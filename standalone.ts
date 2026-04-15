import { VirtualSshServer } from "typescript-virtual-container";

// Create server on port 2222
const ssh = new VirtualSshServer({ 
	port: 2222, 
	hostname: "my-container" 
});

// Start server
ssh.start();
console.log("SSH server listening on :2222");

// Connect externally via SSH
// ssh root@localhost -p 2222  (password: "root")

// Graceful shutdown
process.on("SIGTERM", () => {
	ssh.stop();
	process.exit(0);
});
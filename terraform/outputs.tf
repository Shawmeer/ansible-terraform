output "instance_public_ip" {
  value = aws_instance.web_server.public_ip
}
output "domain_name" {
  value = var.domain_name
}

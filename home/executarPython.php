<?php
$output = shell_exec('python main.py');
file_put_contents('output.log', $output, FILE_APPEND);

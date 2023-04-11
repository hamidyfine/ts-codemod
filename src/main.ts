import commander from 'commander';
import changeExtension from './commands/change-extension';
import toTS from './commands/prototypes-to-ts';
import { name, version } from '../package.json';

const program = new commander.Command();

// Commands
changeExtension(program);
toTS(program);

program.name(name);
program.version(version);
program.parse();

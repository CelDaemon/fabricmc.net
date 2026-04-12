import type { ComputedConfiguration, TemplateWriter } from './template';
import buildGradleTemplate from './templates/gradle/groovy/build.gradle.eta';
import settingsGradleTemplate from './templates/gradle/groovy/settings.gradle.eta';
import { getJavaVersion } from './java';

export async function addGroovyGradle(writer: TemplateWriter, config: ComputedConfiguration) {
	await writer.write('build.gradle', buildGradleTemplate({...config, java: getJavaVersion(config.minecraftVersion)}));
	await writer.write('settings.gradle', settingsGradleTemplate(config));
}

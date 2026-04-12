import type { ComputedConfiguration, TemplateWriter } from './template';
import buildGradleTemplate from './templates/gradle/kotlin/build.gradle.kts.eta';
import settingsGradle from './templates/gradle/kotlin/settings.gradle.kts.eta';
import { getJavaVersion } from './java';

export async function addKotlinGradle(writer: TemplateWriter, config: ComputedConfiguration) {
	await writer.write('build.gradle.kts', buildGradleTemplate({...config, java: getJavaVersion(config.minecraftVersion)}));
	await writer.write('settings.gradle.kts', settingsGradle(config));
}

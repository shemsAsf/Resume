"use client";

import { useTranslation } from "react-i18next";
import Line from "./Ui/Line";
import CapsuleTextList from "./Ui/CapsuleText/CapsuleTextList";
import SkillPercentageBar from "./Ui/SkillPercentageBar";
import RemoteExperience from "./RemoteExperience";

export default function Skills() {
	const { t } = useTranslation();

	return (
		<div>
			<div className="w-full" id="Skills">
				<h2 className="heading-title">{t("skills")}</h2>
				<Line width="sm:w-1/3 w-full" />
			</div>
			<div className="flex flex-col lg:flex-row justify-between mt-10">
				<div className="flex flex-col w-full lg:w-1/3 gap-5 lg:gap-20">
					<div>
						<h3 className="text-2xl font-bold mb-3">{t("web_programming")}</h3>
						<CapsuleTextList items={t("web_programming_items", { returnObjects: true }) as string[]} />

					</div>
					<div>
						<h3 className="text-2xl font-bold mt-5 mb-3">{t("frameworks")}</h3>
						<CapsuleTextList items={t("frameworks_items", { returnObjects: true }) as string[]} />

					</div>
					<div>
						<h3 className="text-2xl font-bold mt-5 mb-3">{t("databases")}</h3>
						<CapsuleTextList items={t("databases_items", { returnObjects: true }) as string[]} />
					</div>
					<div>
						<h3 className="text-2xl font-bold mt-5 mb-3">{t("development_tools")}</h3>
						<CapsuleTextList items={t("development_tools_items", { returnObjects: true }) as string[]} />
					</div>
					<div>
						<h3 className="text-2xl font-bold mt-5 mb-3">{t("environments")}</h3>
						<CapsuleTextList items={t("environments_items", { returnObjects: true }) as string[]} />
					</div>
					<div>
						<h3 className="text-2xl font-bold mt-5 mb-3">Soft Skills</h3>
						<CapsuleTextList items={t("soft_skills_items", { returnObjects: true }) as string[]} />
					</div>
				</div>

				<div className="flex flex-col w-full lg:w-1/2 gap-20 mt-20 lg:mt-0">
					<div className="flex flex-col gap-5">
						<h3 className="text-2xl font-bold mb-3">{t("languages")}</h3>
						<SkillPercentageBar title="TypeScript" percent={90} />
						<SkillPercentageBar title="C# (.net)" percent={85} />
						<SkillPercentageBar title="Python" percent={80} />
						<SkillPercentageBar title="Java" percent={65} />
						<SkillPercentageBar title="C++" percent={60} />
					</div>
					<div>
						<h3 className="text-2xl font-bold mb-3">{t("remote_work_skills")}</h3>
						<RemoteExperience />
					</div>
				</div>
			</div>
		</div>
	);
}

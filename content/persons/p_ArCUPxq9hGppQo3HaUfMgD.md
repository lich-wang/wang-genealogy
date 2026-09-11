---
schema: wang-person/v1
id: p_ArCUPxq9hGppQo3HaUfMgD
status: active
merged_into: null
display_name: 王繟
cbdb_id: 175835
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EPQ8VGrLsee6MS9JqGZuZD
        subject_person_id: p_ArCUPxq9hGppQo3HaUfMgD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繟（卒于759年），唐人物。CBDB 记录其籍贯记录为河東，曾任少尹。中国历代人物传记资料库（CBDB）以人物编号 175835 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WhEMjuPW9z6kSatFjk9NVw
          claim_id: c_EPQ8VGrLsee6MS9JqGZuZD
          source_id: s_jxm9bNJpoKmzeBjpmDoPRJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jxm9bNJpoKmzeBjpmDoPRJ
            source_type: api_record
            title: 维基数据：王繟（Q45677311）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677311
            external_identifier: Q45677311
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:12.543Z
            metadata_json: null
        - id: cs_Tyc_GPjBrzZlpL0yzOUI7G
          claim_id: c_EPQ8VGrLsee6MS9JqGZuZD
          source_id: s_bJYJGuzBzCfKpsW1eoVU1K
          stance: supports
          locator: CBDB:175835
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bJYJGuzBzCfKpsW1eoVU1K
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王繟（175835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175835&o=json
            external_identifier: CBDB:175835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:12.676Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hXAunzCHqT4VK7EL5L5T3u
        subject_person_id: p_ArCUPxq9hGppQo3HaUfMgD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 759年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0759-01-01
            latest: 0759-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BXpitMd2jt6UFUc81HEbLG
          claim_id: c_hXAunzCHqT4VK7EL5L5T3u
          source_id: s_jxm9bNJpoKmzeBjpmDoPRJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jxm9bNJpoKmzeBjpmDoPRJ
            source_type: api_record
            title: 维基数据：王繟（Q45677311）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677311
            external_identifier: Q45677311
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:12.543Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_k87zVAtw24CrQVSRBVfLZj
        subject_person_id: p_ArCUPxq9hGppQo3HaUfMgD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_D9wsj2bZiKdb7CQtRp9BTr
          claim_id: c_k87zVAtw24CrQVSRBVfLZj
          source_id: s_bJYJGuzBzCfKpsW1eoVU1K
          stance: supports
          locator: Q45677311
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_YHV4YmyHEmaDLrhaXj46XM
          claim_id: c_k87zVAtw24CrQVSRBVfLZj
          source_id: s_jxm9bNJpoKmzeBjpmDoPRJ
          stance: supports
          locator: Q45677311
          quotation: null
          interpretation_note: null
          source:
            id: s_jxm9bNJpoKmzeBjpmDoPRJ
            source_type: api_record
            title: 维基数据：王繟（Q45677311）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677311
            external_identifier: Q45677311
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:12.543Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Lwdwb4WwsujLkBpwekmoK9
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ArCUPxq9hGppQo3HaUfMgD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EcrtT8vMi6DJLHfBy4QLcF
          claim_id: c_Lwdwb4WwsujLkBpwekmoK9
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
      object_person:
        id: p_LhrXSwBKuTqBng4RsWfQ9E
        status: active
        display_name: 王处廉
        merged_into_person_id: null
    - claim:
        id: c_VRGcu_dER3XnWZkKPuIeHA
        subject_person_id: p_S4N2Cev8cRhe7jcPfNaRgM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ArCUPxq9hGppQo3HaUfMgD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PQc8zetgqRmPsxd7sIaKk3
          claim_id: c_VRGcu_dER3XnWZkKPuIeHA
          source_id: s_S3QZnAK5T62oAi1ZixcCai
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S3QZnAK5T62oAi1ZixcCai
            source_type: api_record
            title: 中国历代人物传记资料库：王處廉（CBDB 32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_S4N2Cev8cRhe7jcPfNaRgM
        status: active
        display_name: 王處廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繟（卒于759年），唐人物。CBDB 记录其籍贯记录为河東，曾任少尹。中国历代人物传记资料库（CBDB）以人物编号 175835 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 759年 | accepted |
| name.primary | 王繟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LhrXSwBKuTqBng4RsWfQ9E | 王处廉 | accepted |
| parents | p_S4N2Cev8cRhe7jcPfNaRgM | 王處廉 | accepted |

## 外部来源

- [维基数据：王繟（Q45677311）](https://www.wikidata.org/wiki/Q45677311)
- [中国历代人物传记资料库：王處廉（CBDB 32173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json)
- [CBDB 中国历代人物传记资料库：王繟（175835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175835&o=json)

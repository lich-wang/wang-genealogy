---
schema: wang-person/v1
id: p_nxBAZr28DeuBqx5PPMgaj5
status: active
merged_into: null
display_name: 王汭
cbdb_id: 190724
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CDu8xBEmPNh8uS8dnDKCXB
        subject_person_id: p_nxBAZr28DeuBqx5PPMgaj5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汭（卒于817年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 190724 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_tndGapCpnUaI18y-Rggr1q
          claim_id: c_CDu8xBEmPNh8uS8dnDKCXB
          source_id: s_GTNuQzNp4NJyDkF7D6Gg1k
          stance: supports
          locator: CBDB:190724
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_GTNuQzNp4NJyDkF7D6Gg1k
            source_type: api_record
            title: 中国历代人物传记资料库：王汭（CBDB 190724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190724&o=json
            external_identifier: CBDB:190724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VoWUZTPTqHghi2Q8ppMz65
        subject_person_id: p_nxBAZr28DeuBqx5PPMgaj5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 817年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0817-01-01
            latest: 0817-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ihqKxvokXd6oHgjgnKV4aC
          claim_id: c_VoWUZTPTqHghi2Q8ppMz65
          source_id: s_GTNuQzNp4NJyDkF7D6Gg1k
          stance: supports
          locator: CBDB:190724
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 817
          source:
            id: s_GTNuQzNp4NJyDkF7D6Gg1k
            source_type: api_record
            title: 中国历代人物传记资料库：王汭（CBDB 190724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190724&o=json
            external_identifier: CBDB:190724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QcQx2B7CQNzwVPCaNbtnCJ
        subject_person_id: p_nxBAZr28DeuBqx5PPMgaj5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dnQaVHcGCbHSKfaKtXbQ2V
          claim_id: c_QcQx2B7CQNzwVPCaNbtnCJ
          source_id: s_GTNuQzNp4NJyDkF7D6Gg1k
          stance: supports
          locator: CBDB:190724
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 817
          source:
            id: s_GTNuQzNp4NJyDkF7D6Gg1k
            source_type: api_record
            title: 中国历代人物传记资料库：王汭（CBDB 190724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190724&o=json
            external_identifier: CBDB:190724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_o7HaH854jB_HMhvVnt9ngV
        subject_person_id: p_nQxA1N58Gt4YqoNxaQxPCL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nxBAZr28DeuBqx5PPMgaj5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZwM77QNfgNJDmUCH7jyyW7
          claim_id: c_o7HaH854jB_HMhvVnt9ngV
          source_id: s_G9J1xRLo4LHgtz9fqrypbP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G9J1xRLo4LHgtz9fqrypbP
            source_type: api_record
            title: 中国历代人物传记资料库：王鋗（CBDB 190725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190725&o=json
            external_identifier: CBDB:190725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nQxA1N58Gt4YqoNxaQxPCL
        status: active
        display_name: 王鋗
        merged_into_person_id: null
  children:
    - claim:
        id: c_bO2tMLjo-AoqTy5VJjH2cK
        subject_person_id: p_nxBAZr28DeuBqx5PPMgaj5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2GmJDKe94vMiSnM8XxeiCs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TeoDivGVIhDMp-ELoQajUF
          claim_id: c_bO2tMLjo-AoqTy5VJjH2cK
          source_id: s_4pDnGcw27t6txJV1LVNrW7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4pDnGcw27t6txJV1LVNrW7
            source_type: api_record
            title: 中国历代人物传记资料库：王剁（CBDB 145249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145249&o=json
            external_identifier: CBDB:145249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2GmJDKe94vMiSnM8XxeiCs
        status: active
        display_name: 王剁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汭（卒于817年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 190724 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 817年 | accepted |
| name.primary | 王汭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nQxA1N58Gt4YqoNxaQxPCL | 王鋗 | accepted |
| children | p_2GmJDKe94vMiSnM8XxeiCs | 王剁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剁（CBDB 145249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145249&o=json)
- [中国历代人物传记资料库：王汭（CBDB 190724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190724&o=json)
- [中国历代人物传记资料库：王鋗（CBDB 190725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190725&o=json)

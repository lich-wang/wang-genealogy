---
schema: wang-person/v1
id: p_HX2zjtWvZZJ8Lz8G31DRjc
status: active
merged_into: null
display_name: 王士元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R2tfa6if3S798UPAges2vN
        subject_person_id: p_HX2zjtWvZZJ8Lz8G31DRjc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3bAc8FDtRVRpVYR9xyXZfr
          claim_id: c_R2tfa6if3S798UPAges2vN
          source_id: s_rFx78b3WHipDBRY6gZP2Rs
          stance: supports
          locator: CBDB:71316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71316）
          source: &a1
            id: s_rFx78b3WHipDBRY6gZP2Rs
            source_type: api_record
            title: 中国历代人物传记资料库：王士元（CBDB 71316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71316&o=json
            external_identifier: CBDB:71316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BEKfCpEFKcf5w4FrsYZZeD
        subject_person_id: p_HX2zjtWvZZJ8Lz8G31DRjc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1836年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iUeM78JKhDzeGd65mcGGPS
          claim_id: c_BEKfCpEFKcf5w4FrsYZZeD
          source_id: s_rFx78b3WHipDBRY6gZP2Rs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hjR2oFcgNaxiXpu54wha1i
        subject_person_id: p_HX2zjtWvZZJ8Lz8G31DRjc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1908年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_adq7LCfJir6Xc6gLcNqJmB
          claim_id: c_hjR2oFcgNaxiXpu54wha1i
          source_id: s_rFx78b3WHipDBRY6gZP2Rs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CwtZ4x4EmaavzpCFHMrHNF
        subject_person_id: p_HX2zjtWvZZJ8Lz8G31DRjc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士元（1836年—1908年），清人物。籍贯簡陽，入仕廩貢生，曾任丞、訓導。（中国历代人物传记资料库 CBDB 71316）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2N635Sdxzq9hoTaGqiypYX
          claim_id: c_CwtZ4x4EmaavzpCFHMrHNF
          source_id: s_rFx78b3WHipDBRY6gZP2Rs
          stance: supports
          locator: CBDB:71316
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士元 | accepted |
| birth.date | 1836年 | accepted |
| death.date | 1908年 | accepted |
| bio.summary | 王士元（1836年—1908年），清人物。籍贯簡陽，入仕廩貢生，曾任丞、訓導。（中国历代人物传记资料库 CBDB 71316） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士元（CBDB 71316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71316&o=json)

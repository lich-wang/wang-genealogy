---
schema: wang-person/v1
id: p_sHkuYnEwYr3XZvsazu9SQD
status: active
merged_into: null
display_name: 王興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gf48BGvXH3vMsptsJSFoaF
        subject_person_id: p_sHkuYnEwYr3XZvsazu9SQD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q4dDHBt3MLf2HewBGHtB5F
          claim_id: c_gf48BGvXH3vMsptsJSFoaF
          source_id: s_AB9hpoxnQV5VfTgc1FRTT1
          stance: supports
          locator: CBDB:458236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458236）
          source: &a1
            id: s_AB9hpoxnQV5VfTgc1FRTT1
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 458236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458236&o=json
            external_identifier: CBDB:458236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SM5K7yJj8a7WC6kgtqr632
        subject_person_id: p_sHkuYnEwYr3XZvsazu9SQD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興，明人物。曾任典史。（中国历代人物传记资料库 CBDB 458236）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0nn1da_GPWdEntgH1zCbcG
          claim_id: c_SM5K7yJj8a7WC6kgtqr632
          source_id: s_AB9hpoxnQV5VfTgc1FRTT1
          stance: supports
          locator: CBDB:458236
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

# 王興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興 | accepted |
| bio.summary | 王興，明人物。曾任典史。（中国历代人物传记资料库 CBDB 458236） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興（CBDB 458236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458236&o=json)

---
schema: wang-person/v1
id: p_JUcdqBgpCfQaXsmdvnHG4c
status: active
merged_into: null
display_name: 王子一
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VFE4S89GV8784jF5tptF6v
        subject_person_id: p_JUcdqBgpCfQaXsmdvnHG4c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HFUGcWhuQuWAd3sd6DdDAb
          claim_id: c_VFE4S89GV8784jF5tptF6v
          source_id: s_8GJa8RDMtNmNsMqP2VC968
          stance: supports
          locator: CBDB:690983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690983）
          source: &a1
            id: s_8GJa8RDMtNmNsMqP2VC968
            source_type: api_record
            title: 中国历代人物传记资料库：王子一（CBDB 690983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690983&o=json
            external_identifier: CBDB:690983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bCxX2yqg8x5BjkqGKu3HuK
        subject_person_id: p_JUcdqBgpCfQaXsmdvnHG4c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子一，明人物。身份为戲曲作家。（中国历代人物传记资料库 CBDB 690983）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zPWDyrIBc5vOcXG2NHNEOi
          claim_id: c_bCxX2yqg8x5BjkqGKu3HuK
          source_id: s_8GJa8RDMtNmNsMqP2VC968
          stance: supports
          locator: CBDB:690983
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

# 王子一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子一 | accepted |
| bio.summary | 王子一，明人物。身份为戲曲作家。（中国历代人物传记资料库 CBDB 690983） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子一（CBDB 690983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690983&o=json)

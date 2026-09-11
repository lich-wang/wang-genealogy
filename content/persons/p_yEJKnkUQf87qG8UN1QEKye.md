---
schema: wang-person/v1
id: p_yEJKnkUQf87qG8UN1QEKye
status: active
merged_into: null
display_name: 王鍾壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JZ4rJsCEbJjciWAqptnjq7
        subject_person_id: p_yEJKnkUQf87qG8UN1QEKye
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5GLFvqp6m3oT3XEk5GGa5m
          claim_id: c_JZ4rJsCEbJjciWAqptnjq7
          source_id: s_KMsom6pvcg9QnqmzSRnD4W
          stance: supports
          locator: CBDB:640668
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640668）
          source: &a1
            id: s_KMsom6pvcg9QnqmzSRnD4W
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾壽（CBDB 640668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640668&o=json
            external_identifier: CBDB:640668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DtdDPt8Z27scTSvLtnLBLG
        subject_person_id: p_yEJKnkUQf87qG8UN1QEKye
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾壽，清人物。籍贯天津，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 640668）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KvhxncSsByq576bp-CZ-1S
          claim_id: c_DtdDPt8Z27scTSvLtnLBLG
          source_id: s_KMsom6pvcg9QnqmzSRnD4W
          stance: supports
          locator: CBDB:640668
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

# 王鍾壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾壽 | accepted |
| bio.summary | 王鍾壽，清人物。籍贯天津，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 640668） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾壽（CBDB 640668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640668&o=json)

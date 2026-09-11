---
schema: wang-person/v1
id: p_9dLjGiEvG6g8beL2nYptZJ
status: active
merged_into: null
display_name: 王臣禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5nY7T1cnfD4PHeby6GGbVw
        subject_person_id: p_9dLjGiEvG6g8beL2nYptZJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PGi58Z6rJqQoEjt2jAHzs3
          claim_id: c_5nY7T1cnfD4PHeby6GGbVw
          source_id: s_8qLAyQ4YC4rMJiMTQHbnAt
          stance: supports
          locator: CBDB:640003
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640003）
          source: &a1
            id: s_8qLAyQ4YC4rMJiMTQHbnAt
            source_type: api_record
            title: 中国历代人物传记资料库：王臣禮（CBDB 640003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640003&o=json
            external_identifier: CBDB:640003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8hQvvrR5A73uAQmcM3D8t1
        subject_person_id: p_9dLjGiEvG6g8beL2nYptZJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣禮，清人物。籍贯順天府，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 640003）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QtkSybbIRX4grxBKQdEYLv
          claim_id: c_8hQvvrR5A73uAQmcM3D8t1
          source_id: s_8qLAyQ4YC4rMJiMTQHbnAt
          stance: supports
          locator: CBDB:640003
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

# 王臣禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣禮 | accepted |
| bio.summary | 王臣禮，清人物。籍贯順天府，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 640003） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臣禮（CBDB 640003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640003&o=json)

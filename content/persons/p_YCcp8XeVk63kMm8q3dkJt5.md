---
schema: wang-person/v1
id: p_YCcp8XeVk63kMm8q3dkJt5
status: active
merged_into: null
display_name: 王葆泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C4jTvVkP4uySTPsm8yqQKD
        subject_person_id: p_YCcp8XeVk63kMm8q3dkJt5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aPRugMMcbNjvq8NeP1ontK
          claim_id: c_C4jTvVkP4uySTPsm8yqQKD
          source_id: s_z52H5KFu6LGq9DHNJ7rdAC
          stance: supports
          locator: CBDB:640136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640136）
          source: &a1
            id: s_z52H5KFu6LGq9DHNJ7rdAC
            source_type: api_record
            title: 中国历代人物传记资料库：王葆泰（CBDB 640136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640136&o=json
            external_identifier: CBDB:640136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qjTayr7GmsexspHXZJkwrb
        subject_person_id: p_YCcp8XeVk63kMm8q3dkJt5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆泰，清人物。籍贯沔陽州，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640136）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qVfwjr54joCZAmbCrZ4fCW
          claim_id: c_qjTayr7GmsexspHXZJkwrb
          source_id: s_z52H5KFu6LGq9DHNJ7rdAC
          stance: supports
          locator: CBDB:640136
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

# 王葆泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葆泰 | accepted |
| bio.summary | 王葆泰，清人物。籍贯沔陽州，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640136） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葆泰（CBDB 640136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640136&o=json)

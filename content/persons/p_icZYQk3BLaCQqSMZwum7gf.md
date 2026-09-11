---
schema: wang-person/v1
id: p_icZYQk3BLaCQqSMZwum7gf
status: active
merged_into: null
display_name: 王意珠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gcr6gyQuz9QvHjQZdg3kPe
        subject_person_id: p_icZYQk3BLaCQqSMZwum7gf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王意珠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qQLL6vcrWiaDAAgpe8uv8x
          claim_id: c_gcr6gyQuz9QvHjQZdg3kPe
          source_id: s_2UUnoGLG1SUz1Z9Ud2wPo8
          stance: supports
          locator: CBDB:568787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568787）
          source: &a1
            id: s_2UUnoGLG1SUz1Z9Ud2wPo8
            source_type: api_record
            title: 中国历代人物传记资料库：王意珠（CBDB 568787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568787&o=json
            external_identifier: CBDB:568787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3eiydaPbb6SW5x8LoPy6Sx
        subject_person_id: p_icZYQk3BLaCQqSMZwum7gf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王意珠，清人物。籍贯平泉州。（中国历代人物传记资料库 CBDB 568787）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W9DZvWRJmPI5NCPI6I5JWa
          claim_id: c_3eiydaPbb6SW5x8LoPy6Sx
          source_id: s_2UUnoGLG1SUz1Z9Ud2wPo8
          stance: supports
          locator: CBDB:568787
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

# 王意珠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王意珠 | accepted |
| bio.summary | 王意珠，清人物。籍贯平泉州。（中国历代人物传记资料库 CBDB 568787） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王意珠（CBDB 568787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568787&o=json)

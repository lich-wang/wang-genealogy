---
schema: wang-person/v1
id: p_GcyhptG8iKGyNHxYk2VzDq
status: active
merged_into: null
display_name: 王大成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KnxX2xPmiBGLZLVJytAK65
        subject_person_id: p_GcyhptG8iKGyNHxYk2VzDq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V83bDW1qgjBSjD5bPoFUWr
          claim_id: c_KnxX2xPmiBGLZLVJytAK65
          source_id: s_uCaPLRwFEhHEDggKVXU3VC
          stance: supports
          locator: CBDB:459578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459578）
          source: &a1
            id: s_uCaPLRwFEhHEDggKVXU3VC
            source_type: api_record
            title: 中国历代人物传记资料库：王大成（CBDB 459578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459578&o=json
            external_identifier: CBDB:459578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yKu8v2C3SQxCEJTDKb1e7W
        subject_person_id: p_GcyhptG8iKGyNHxYk2VzDq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大成，清人物。曾任守備。（中国历代人物传记资料库 CBDB 459578）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LuuH6raVrzb37JUpnqLm5r
          claim_id: c_yKu8v2C3SQxCEJTDKb1e7W
          source_id: s_uCaPLRwFEhHEDggKVXU3VC
          stance: supports
          locator: CBDB:459578
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

# 王大成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大成 | accepted |
| bio.summary | 王大成，清人物。曾任守備。（中国历代人物传记资料库 CBDB 459578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大成（CBDB 459578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459578&o=json)

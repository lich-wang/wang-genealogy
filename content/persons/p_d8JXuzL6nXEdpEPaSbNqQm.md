---
schema: wang-person/v1
id: p_d8JXuzL6nXEdpEPaSbNqQm
status: active
merged_into: null
display_name: 王學瀚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xQU7tYv3eSS4UuTs5bKTUu
        subject_person_id: p_d8JXuzL6nXEdpEPaSbNqQm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學瀚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hr1KVLRdp95d9Lqaf2EnZF
          claim_id: c_xQU7tYv3eSS4UuTs5bKTUu
          source_id: s_13LTDwW6YHwE5fZ85cUoK8
          stance: supports
          locator: CBDB:637048
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637048）
          source: &a1
            id: s_13LTDwW6YHwE5fZ85cUoK8
            source_type: api_record
            title: 中国历代人物传记资料库：王學瀚（CBDB 637048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637048&o=json
            external_identifier: CBDB:637048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kcc5fCoEPrEBJH7iYPVx6N
        subject_person_id: p_d8JXuzL6nXEdpEPaSbNqQm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學瀚，清人物。籍贯蕭山，曾任典史。（中国历代人物传记资料库 CBDB 637048）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e4uUGXQ7j4A6GZrVLQDyQg
          claim_id: c_kcc5fCoEPrEBJH7iYPVx6N
          source_id: s_13LTDwW6YHwE5fZ85cUoK8
          stance: supports
          locator: CBDB:637048
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

# 王學瀚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學瀚 | accepted |
| bio.summary | 王學瀚，清人物。籍贯蕭山，曾任典史。（中国历代人物传记资料库 CBDB 637048） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學瀚（CBDB 637048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637048&o=json)

---
schema: wang-person/v1
id: p_vdKrQg3WCQ6YPKgEFLuLTz
status: active
merged_into: null
display_name: 王山甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KhJy4dDNNcQB3mFZGMJgdP
        subject_person_id: p_vdKrQg3WCQ6YPKgEFLuLTz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王山甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZCEA8iapbG9GSk2pS9oPRH
          claim_id: c_KhJy4dDNNcQB3mFZGMJgdP
          source_id: s_SK21wNCk4z8QLwRhagGFDC
          stance: supports
          locator: CBDB:687256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687256）
          source: &a1
            id: s_SK21wNCk4z8QLwRhagGFDC
            source_type: api_record
            title: 中国历代人物传记资料库：王山甫（CBDB 687256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687256&o=json
            external_identifier: CBDB:687256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fu9rqRFK9f1jud5GGuAnHL
        subject_person_id: p_vdKrQg3WCQ6YPKgEFLuLTz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王山甫，宋人物。籍贯奉化，入仕進士。（中国历代人物传记资料库 CBDB 687256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qyrCb75Cf7siXHmGJLlyOh
          claim_id: c_Fu9rqRFK9f1jud5GGuAnHL
          source_id: s_SK21wNCk4z8QLwRhagGFDC
          stance: supports
          locator: CBDB:687256
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

# 王山甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王山甫 | accepted |
| bio.summary | 王山甫，宋人物。籍贯奉化，入仕進士。（中国历代人物传记资料库 CBDB 687256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王山甫（CBDB 687256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687256&o=json)

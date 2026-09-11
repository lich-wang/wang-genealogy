---
schema: wang-person/v1
id: p_D93g9hAn1UvcfZ284fs5LM
status: active
merged_into: null
display_name: 王光大
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pg6zBx3TePKScER8Z8EKiv
        subject_person_id: p_D93g9hAn1UvcfZ284fs5LM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H12cX1DKbZGUDjWFTPBKEm
          claim_id: c_Pg6zBx3TePKScER8Z8EKiv
          source_id: s_qSGUYN4CZ3S1bkok6LwR93
          stance: supports
          locator: CBDB:485818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（485818）
          source: &a1
            id: s_qSGUYN4CZ3S1bkok6LwR93
            source_type: api_record
            title: 中国历代人物传记资料库：王光大（CBDB 485818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485818&o=json
            external_identifier: CBDB:485818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5mDWvG1N2JMByh3Qh97SjD
        subject_person_id: p_D93g9hAn1UvcfZ284fs5LM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光大，宋人物。曾任縣丞。（中国历代人物传记资料库 CBDB 485818）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5MITDFXu6GZZYv9cB6G3PO
          claim_id: c_5mDWvG1N2JMByh3Qh97SjD
          source_id: s_qSGUYN4CZ3S1bkok6LwR93
          stance: supports
          locator: CBDB:485818
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

# 王光大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光大 | accepted |
| bio.summary | 王光大，宋人物。曾任縣丞。（中国历代人物传记资料库 CBDB 485818） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光大（CBDB 485818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485818&o=json)

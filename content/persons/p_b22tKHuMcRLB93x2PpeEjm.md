---
schema: wang-person/v1
id: p_b22tKHuMcRLB93x2PpeEjm
status: active
merged_into: null
display_name: 王鍾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KPeZHbMzv8MRREieMcQifz
        subject_person_id: p_b22tKHuMcRLB93x2PpeEjm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wrWiHC4EhmVyWeUEgbYucL
          claim_id: c_KPeZHbMzv8MRREieMcQifz
          source_id: s_Eng3o1pkcDEfK2RDFcG3G3
          stance: supports
          locator: CBDB:286466
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286466）
          source: &a1
            id: s_Eng3o1pkcDEfK2RDFcG3G3
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 286466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286466&o=json
            external_identifier: CBDB:286466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UdL9j7CrmzHkxYFnJLQKwp
        subject_person_id: p_b22tKHuMcRLB93x2PpeEjm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾，明人物。永樂十年進士，籍贯諸暨。（中国历代人物传记资料库 CBDB 286466）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Omat6BO7lX-hk5QHgF3j2c
          claim_id: c_UdL9j7CrmzHkxYFnJLQKwp
          source_id: s_Eng3o1pkcDEfK2RDFcG3G3
          stance: supports
          locator: CBDB:286466
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

# 王鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾 | accepted |
| bio.summary | 王鍾，明人物。永樂十年進士，籍贯諸暨。（中国历代人物传记资料库 CBDB 286466） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾（CBDB 286466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286466&o=json)

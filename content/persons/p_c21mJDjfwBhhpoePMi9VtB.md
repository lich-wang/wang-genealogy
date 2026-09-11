---
schema: wang-person/v1
id: p_c21mJDjfwBhhpoePMi9VtB
status: active
merged_into: null
display_name: 王儼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6R3bLmb2MyzgD9QhRhrMX4
        subject_person_id: p_c21mJDjfwBhhpoePMi9VtB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W9KXKjod4oJnQgneDyGX9Y
          claim_id: c_6R3bLmb2MyzgD9QhRhrMX4
          source_id: s_V5sGD77fxL8HQc8cytkNpf
          stance: supports
          locator: CBDB:636114
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636114）
          source: &a1
            id: s_V5sGD77fxL8HQc8cytkNpf
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 636114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636114&o=json
            external_identifier: CBDB:636114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9R8i3EcpJPHhqMc92M25py
        subject_person_id: p_c21mJDjfwBhhpoePMi9VtB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，清人物。籍贯陵縣，曾任訓導。（中国历代人物传记资料库 CBDB 636114）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y8Kvw995SRXIf4QTCEchb3
          claim_id: c_9R8i3EcpJPHhqMc92M25py
          source_id: s_V5sGD77fxL8HQc8cytkNpf
          stance: supports
          locator: CBDB:636114
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

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，清人物。籍贯陵縣，曾任訓導。（中国历代人物传记资料库 CBDB 636114） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 636114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636114&o=json)

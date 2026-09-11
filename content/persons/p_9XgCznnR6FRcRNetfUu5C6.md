---
schema: wang-person/v1
id: p_9XgCznnR6FRcRNetfUu5C6
status: active
merged_into: null
display_name: 王從善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qz9BYprLnJCQvoNB9dNjYJ
        subject_person_id: p_9XgCznnR6FRcRNetfUu5C6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7o766fj5ahKtjCULDnE1pC
          claim_id: c_qz9BYprLnJCQvoNB9dNjYJ
          source_id: s_3tRtHV64J2T5dxkXNvw5Nn
          stance: supports
          locator: CBDB:508113
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508113）
          source: &a1
            id: s_3tRtHV64J2T5dxkXNvw5Nn
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 508113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508113&o=json
            external_identifier: CBDB:508113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_okjA9aFqfSVD7y8YxvbpGG
        subject_person_id: p_9XgCznnR6FRcRNetfUu5C6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從善，明人物。曾任典史。（中国历代人物传记资料库 CBDB 508113）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J_l2V5FoKBqn_8GIOY9xCI
          claim_id: c_okjA9aFqfSVD7y8YxvbpGG
          source_id: s_3tRtHV64J2T5dxkXNvw5Nn
          stance: supports
          locator: CBDB:508113
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

# 王從善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從善 | accepted |
| bio.summary | 王從善，明人物。曾任典史。（中国历代人物传记资料库 CBDB 508113） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從善（CBDB 508113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508113&o=json)

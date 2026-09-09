---
schema: wang-person/v1
id: p_BM9rBC9C1cVxEoCYSovd5K
status: active
merged_into: null
display_name: 王永忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E3AYexpZYq8M6LF4EADEJ6
        subject_person_id: p_BM9rBC9C1cVxEoCYSovd5K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c3nmSp6Zu2MUiGNskkJ16x
          claim_id: c_E3AYexpZYq8M6LF4EADEJ6
          source_id: s_gFs7Rbg8JK9bR2DMJuiwkv
          stance: supports
          locator: CBDB:282869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282869）
          source: &a1
            id: s_gFs7Rbg8JK9bR2DMJuiwkv
            source_type: api_record
            title: 中国历代人物传记资料库：王永忠（CBDB 282869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282869&o=json
            external_identifier: CBDB:282869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KcQqxN51fFNs8LTi3vZswQ
        subject_person_id: p_BM9rBC9C1cVxEoCYSovd5K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Egwf9Lpa4f2xV6i95rmtjY
          claim_id: c_KcQqxN51fFNs8LTi3vZswQ
          source_id: s_gFs7Rbg8JK9bR2DMJuiwkv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王永忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永忠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永忠（CBDB 282869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282869&o=json)

---
schema: wang-person/v1
id: p_QpwNU69Eo8aksD51Qo9Zky
status: active
merged_into: null
display_name: 王子符
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2wiNyA2y8nzK9sbXDbzs3K
        subject_person_id: p_QpwNU69Eo8aksD51Qo9Zky
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子符
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2qS4sudtcXh1NmufLUhbwg
          claim_id: c_2wiNyA2y8nzK9sbXDbzs3K
          source_id: s_wsMP9KRy2zC4U7skQnoC69
          stance: supports
          locator: CBDB:636992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636992）
          source: &a1
            id: s_wsMP9KRy2zC4U7skQnoC69
            source_type: api_record
            title: 中国历代人物传记资料库：王子符（CBDB 636992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636992&o=json
            external_identifier: CBDB:636992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UMQVRVWMhZD74Dn2JNySZT
        subject_person_id: p_QpwNU69Eo8aksD51Qo9Zky
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子符，清人物。籍贯青州府，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 636992）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mQjayjO0tab0NybM5lPHm6
          claim_id: c_UMQVRVWMhZD74Dn2JNySZT
          source_id: s_wsMP9KRy2zC4U7skQnoC69
          stance: supports
          locator: CBDB:636992
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

# 王子符

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子符 | accepted |
| bio.summary | 王子符，清人物。籍贯青州府，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 636992） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子符（CBDB 636992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636992&o=json)

---
schema: wang-person/v1
id: p_FAFgyVbncE3Lg4owna4wu2
status: active
merged_into: null
display_name: 王勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATw9RGP2hogD2h6QMHHipL
        subject_person_id: p_FAFgyVbncE3Lg4owna4wu2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cD7mr1W7MFo8tEEYWW6Gcb
          claim_id: c_ATw9RGP2hogD2h6QMHHipL
          source_id: s_dUYQbHM2UBjQ3t44xGb5JL
          stance: supports
          locator: CBDB:689289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689289）
          source: &a1
            id: s_dUYQbHM2UBjQ3t44xGb5JL
            source_type: api_record
            title: 中国历代人物传记资料库：王勳（CBDB 689289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689289&o=json
            external_identifier: CBDB:689289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nfuPFW54uanhNkjFtwV5n1
        subject_person_id: p_FAFgyVbncE3Lg4owna4wu2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳，清人物。籍贯歙縣，身份为畫家。（中国历代人物传记资料库 CBDB 689289）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aPCQlMgq19LnH8v5CyM1Z7
          claim_id: c_nfuPFW54uanhNkjFtwV5n1
          source_id: s_dUYQbHM2UBjQ3t44xGb5JL
          stance: supports
          locator: CBDB:689289
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

# 王勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勳 | accepted |
| bio.summary | 王勳，清人物。籍贯歙縣，身份为畫家。（中国历代人物传记资料库 CBDB 689289） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勳（CBDB 689289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689289&o=json)

---
schema: wang-person/v1
id: p_9tARpzpSq86gxek1iFnrJ2
status: active
merged_into: null
display_name: 王真
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pYBEjMBW6RsRrLcCGZUYPa
        subject_person_id: p_9tARpzpSq86gxek1iFnrJ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7XxHCLwg8uC8o6tNC9YJTy
          claim_id: c_pYBEjMBW6RsRrLcCGZUYPa
          source_id: s_imuGmdg4Shbpd3MsMwR4CN
          stance: supports
          locator: CBDB:568643
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568643）
          source: &a1
            id: s_imuGmdg4Shbpd3MsMwR4CN
            source_type: api_record
            title: 中国历代人物传记资料库：王真（CBDB 568643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568643&o=json
            external_identifier: CBDB:568643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JhHoCh9b1SvtqJwMGNdMU4
        subject_person_id: p_9tARpzpSq86gxek1iFnrJ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真，清人物。籍贯侯官。（中国历代人物传记资料库 CBDB 568643）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3ZADwZM9rDWKxaqnOFo20q
          claim_id: c_JhHoCh9b1SvtqJwMGNdMU4
          source_id: s_imuGmdg4Shbpd3MsMwR4CN
          stance: supports
          locator: CBDB:568643
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

# 王真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王真 | accepted |
| bio.summary | 王真，清人物。籍贯侯官。（中国历代人物传记资料库 CBDB 568643） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王真（CBDB 568643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568643&o=json)

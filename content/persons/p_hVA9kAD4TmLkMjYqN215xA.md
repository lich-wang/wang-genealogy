---
schema: wang-person/v1
id: p_hVA9kAD4TmLkMjYqN215xA
status: active
merged_into: null
display_name: 王鳳翔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_igiZDaXMG4G3G7pWgrRbse
        subject_person_id: p_hVA9kAD4TmLkMjYqN215xA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BC18ZfpQCr8uFf1QZdxK3M
          claim_id: c_igiZDaXMG4G3G7pWgrRbse
          source_id: s_BpSwK1jZJzT4vDjvP1B6t6
          stance: supports
          locator: CBDB:343608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343608）
          source: &a1
            id: s_BpSwK1jZJzT4vDjvP1B6t6
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳翔（CBDB 343608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343608&o=json
            external_identifier: CBDB:343608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vpU1mHZH4LdHBFfc1mAaJE
        subject_person_id: p_hVA9kAD4TmLkMjYqN215xA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳翔，清人物。明清進士進士，籍贯郃陽，入仕進士，曾任編修、同考官、知縣。（中国历代人物传记资料库 CBDB 343608）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h49CAyKFmf_Xj65E7ywsmo
          claim_id: c_vpU1mHZH4LdHBFfc1mAaJE
          source_id: s_BpSwK1jZJzT4vDjvP1B6t6
          stance: supports
          locator: CBDB:343608
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

# 王鳳翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳翔 | accepted |
| bio.summary | 王鳳翔，清人物。明清進士進士，籍贯郃陽，入仕進士，曾任編修、同考官、知縣。（中国历代人物传记资料库 CBDB 343608） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳翔（CBDB 343608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343608&o=json)

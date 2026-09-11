---
schema: wang-person/v1
id: p_M2DkYkinwFG5FNbMDNbE1t
status: active
merged_into: null
display_name: 王龍見
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F8VZDGHu765BFFj6wFuGzm
        subject_person_id: p_M2DkYkinwFG5FNbMDNbE1t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍見
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GWxTDNywhmPYGC1kf7TMJ8
          claim_id: c_F8VZDGHu765BFFj6wFuGzm
          source_id: s_EeRSg8eX7FccNZpDUcbH54
          stance: supports
          locator: CBDB:641059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641059）
          source: &a1
            id: s_EeRSg8eX7FccNZpDUcbH54
            source_type: api_record
            title: 中国历代人物传记资料库：王龍見（CBDB 641059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641059&o=json
            external_identifier: CBDB:641059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zgz5bgbdB4nA7kQY9Xw2H4
        subject_person_id: p_M2DkYkinwFG5FNbMDNbE1t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍見，清人物。籍贯無錫，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 641059）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TpH59l5wqXXY20SDs4veFL
          claim_id: c_zgz5bgbdB4nA7kQY9Xw2H4
          source_id: s_EeRSg8eX7FccNZpDUcbH54
          stance: supports
          locator: CBDB:641059
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

# 王龍見

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍見 | accepted |
| bio.summary | 王龍見，清人物。籍贯無錫，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 641059） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王龍見（CBDB 641059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641059&o=json)

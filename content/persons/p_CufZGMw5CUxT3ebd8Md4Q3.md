---
schema: wang-person/v1
id: p_CufZGMw5CUxT3ebd8Md4Q3
status: active
merged_into: null
display_name: 馮氏
revision: 1
cbdb_id: 151317
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QyzB2jic08WNMEVldbeMXw
        subject_person_id: p_CufZGMw5CUxT3ebd8Md4Q3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馮氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X97TjxcHIEb89Nn54gJME5
          claim_id: c_QyzB2jic08WNMEVldbeMXw
          source_id: s_oHqOpoJlsFMCs8o41suOfA
          stance: supports
          locator: CBDB:151317
          quotation: null
          interpretation_note: CBDB 明确记录的王子麟配偶
          source: &a1
            id: s_oHqOpoJlsFMCs8o41suOfA
            source_type: api_record
            title: 中国历代人物传记资料库：馮氏(王子麟妻)（CBDB 151317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151317&o=json
            external_identifier: CBDB:151317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gcG06A2k-YZxSVY2uN0PVm
        subject_person_id: p_6Ed3HaMSzFY5mCk231e1KC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CufZGMw5CUxT3ebd8Md4Q3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_16qTC6_go5N-j4Vb7k2ml-
          claim_id: c_gcG06A2k-YZxSVY2uN0PVm
          source_id: s_oHqOpoJlsFMCs8o41suOfA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 62：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6Ed3HaMSzFY5mCk231e1KC
        status: active
        display_name: 王子麟
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 馮氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 馮氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6Ed3HaMSzFY5mCk231e1KC | 王子麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：馮氏(王子麟妻)（CBDB 151317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151317&o=json)

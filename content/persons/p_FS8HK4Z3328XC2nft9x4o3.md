---
schema: wang-person/v1
id: p_FS8HK4Z3328XC2nft9x4o3
status: active
merged_into: null
display_name: 王丕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SXZ3EZziMSUwdgKA8xyn7G
        subject_person_id: p_FS8HK4Z3328XC2nft9x4o3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gHiU2FGSqJ2LL3JxTHNKff
          claim_id: c_SXZ3EZziMSUwdgKA8xyn7G
          source_id: s_xZN1gmHYm3F16conuSkE6c
          stance: supports
          locator: CBDB:12847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12847）
          source: &a1
            id: s_xZN1gmHYm3F16conuSkE6c
            source_type: api_record
            title: 中国历代人物传记资料库：王丕（CBDB 12847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12847&o=json
            external_identifier: CBDB:12847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jn1ps8v6hLzHfQQKKJ5R21
        subject_person_id: p_FS8HK4Z3328XC2nft9x4o3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uG584QFFgB4BqztRqvJFAz
          claim_id: c_Jn1ps8v6hLzHfQQKKJ5R21
          source_id: s_xZN1gmHYm3F16conuSkE6c
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_lzY4uaSesvfhYcBYbxLNt4
        subject_person_id: p_FS8HK4Z3328XC2nft9x4o3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qM3x6kx3VpqHy4njLErPrG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HuAyyrqjvREJB_Hd2v6EUw
          claim_id: c_lzY4uaSesvfhYcBYbxLNt4
          source_id: s_xZN1gmHYm3F16conuSkE6c
          stance: supports
          locator: CBDB 双向互证（子 王祚 ⇄ 父 王丕）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_qM3x6kx3VpqHy4njLErPrG
        status: active
        display_name: 王祚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王丕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qM3x6kx3VpqHy4njLErPrG | 王祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王丕（CBDB 12847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12847&o=json)

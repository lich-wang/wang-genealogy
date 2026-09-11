---
schema: wang-person/v1
id: p_2AB1URRfbsHUZBcKrDjdbb
status: active
merged_into: null
display_name: 王綱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ooUcFAX1MFLb2TTiZXt3Su
        subject_person_id: p_2AB1URRfbsHUZBcKrDjdbb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NU2rAtAMvEgi9fqH7Caspt
          claim_id: c_ooUcFAX1MFLb2TTiZXt3Su
          source_id: s_kN9AECxneSW4S9GVD2Wb7R
          stance: supports
          locator: CBDB:437652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437652）
          source: &a1
            id: s_kN9AECxneSW4S9GVD2Wb7R
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 437652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437652&o=json
            external_identifier: CBDB:437652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GytVp5nNKC4zfg78a3B5yC
        subject_person_id: p_2AB1URRfbsHUZBcKrDjdbb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 437652）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hpTu3zA86JAuv6X1rshC5o
          claim_id: c_GytVp5nNKC4zfg78a3B5yC
          source_id: s_kN9AECxneSW4S9GVD2Wb7R
          stance: supports
          locator: CBDB:437652
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
  ancestors:
    - claim:
        id: c_2r9xu0QHRoXltku4iqYu5q
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2AB1URRfbsHUZBcKrDjdbb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8KOUDZ3kaSLRnEGjNyR4fI
          claim_id: c_2r9xu0QHRoXltku4iqYu5q
          source_id: s_kN9AECxneSW4S9GVD2Wb7R
          stance: supports
          locator: CBDB 双向互证（祖父 王良玉 ⇄ 孫 王綱）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_mgxHev7zFTwcmkSJE7CaXn
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 437652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_mgxHev7zFTwcmkSJE7CaXn | 王良玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 437652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437652&o=json)

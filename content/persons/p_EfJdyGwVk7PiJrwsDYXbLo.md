---
schema: wang-person/v1
id: p_EfJdyGwVk7PiJrwsDYXbLo
status: active
merged_into: null
display_name: 王豸
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UwfckbXfu9gqE8no63xYjx
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HjRSmLTPe8r7riRJ423cqa
          claim_id: c_UwfckbXfu9gqE8no63xYjx
          source_id: s_xKQ5jL6DiHY4YSqMSAPFzD
          stance: supports
          locator: CBDB:308956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308956）
          source: &a1
            id: s_xKQ5jL6DiHY4YSqMSAPFzD
            source_type: api_record
            title: 中国历代人物传记资料库：王豸（CBDB 308956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308956&o=json
            external_identifier: CBDB:308956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C2kYN3Box5K1uKbmoK7bcH
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豸，明人物。嘉靖二十六年進士，籍贯漳浦。（中国历代人物传记资料库 CBDB 308956）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c-3OkFkKrSp-R5v3sH0kH4
          claim_id: c_C2kYN3Box5K1uKbmoK7bcH
          source_id: s_xKQ5jL6DiHY4YSqMSAPFzD
          stance: supports
          locator: CBDB:308956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_EScBJlf4iptlRWUea6dRRF
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ihJYwIQ4q8inh0LtOaXpNJ
          claim_id: c_EScBJlf4iptlRWUea6dRRF
          source_id: s_xKQ5jL6DiHY4YSqMSAPFzD
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DA2QvREynL5ZUoyG8V9cNp
        status: active
        display_name: 王春澤
        merged_into_person_id: null
    - claim:
        id: c_7o8D2pguVY53X1C-YZd7mp
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_39miVJyWesZ6B5d95cz7mV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_15xeqDBgtKTJLhQxOpWCcY
          claim_id: c_7o8D2pguVY53X1C-YZd7mp
          source_id: s_RHiEFdLtzvlu1cTLBCSkow
          stance: supports
          locator: CBDB：兄弟 王春澤（126604）之父／母 王豸
          quotation: null
          interpretation_note: 由兄弟关系推断：王春淮 与 王春澤 为同胞（CBDB 记「兄」），王春澤 之父／母即 王春淮 之父／母。
          source:
            id: s_RHiEFdLtzvlu1cTLBCSkow
            source_type: api_record
            title: 中国历代人物传记资料库：王春淮（CBDB 308960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308960&o=json
            external_identifier: CBDB:308960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_39miVJyWesZ6B5d95cz7mV
        status: active
        display_name: 王春淮
        merged_into_person_id: null
    - claim:
        id: c_L4PWTwMMJ32oH8OTWxxRuQ
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AyM5oz23v2ukFDBYDNSmMz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ocb7WLUqh6plZMuADm1cH
          claim_id: c_L4PWTwMMJ32oH8OTWxxRuQ
          source_id: s_8AFiw2Q8s3Ve3KAMjpWEY5
          stance: supports
          locator: CBDB：兄弟 王春澤（126604）之父／母 王豸
          quotation: null
          interpretation_note: 由兄弟关系推断：王春瀾 与 王春澤 为同胞（CBDB 记「弟」），王春澤 之父／母即 王春瀾 之父／母。
          source:
            id: s_8AFiw2Q8s3Ve3KAMjpWEY5
            source_type: api_record
            title: 中国历代人物传记资料库：王春瀾（CBDB 308959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308959&o=json
            external_identifier: CBDB:308959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AyM5oz23v2ukFDBYDNSmMz
        status: active
        display_name: 王春瀾
        merged_into_person_id: null
    - claim:
        id: c_iOpKhLK797_ht6gd8WfSPE
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wu6s3A9WJ69UBGd66ce1zF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68_P8XhpbIBwNg4Ift7UCH
          claim_id: c_iOpKhLK797_ht6gd8WfSPE
          source_id: s_jQ_wrz1QbTRgDVHMrn4MFv
          stance: supports
          locator: CBDB：兄弟 王春澤（126604）之父／母 王豸
          quotation: null
          interpretation_note: 由兄弟关系推断：王春洛 与 王春澤 为同胞（CBDB 记「兄」），王春澤 之父／母即 王春洛 之父／母。
          source:
            id: s_jQ_wrz1QbTRgDVHMrn4MFv
            source_type: api_record
            title: 中国历代人物传记资料库：王春洛（CBDB 308961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308961&o=json
            external_identifier: CBDB:308961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wu6s3A9WJ69UBGd66ce1zF
        status: active
        display_name: 王春洛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王豸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豸 | accepted |
| bio.summary | 王豸，明人物。嘉靖二十六年進士，籍贯漳浦。（中国历代人物传记资料库 CBDB 308956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DA2QvREynL5ZUoyG8V9cNp | 王春澤 | accepted |
| children | p_39miVJyWesZ6B5d95cz7mV | 王春淮 | accepted |
| children | p_AyM5oz23v2ukFDBYDNSmMz | 王春瀾 | accepted |
| children | p_wu6s3A9WJ69UBGd66ce1zF | 王春洛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春淮（CBDB 308960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308960&o=json)
- [中国历代人物传记资料库：王春瀾（CBDB 308959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308959&o=json)
- [中国历代人物传记资料库：王春洛（CBDB 308961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308961&o=json)
- [中国历代人物传记资料库：王豸（CBDB 308956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308956&o=json)

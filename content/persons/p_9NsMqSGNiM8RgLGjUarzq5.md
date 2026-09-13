---
schema: wang-person/v1
id: p_9NsMqSGNiM8RgLGjUarzq5
status: active
merged_into: null
display_name: 王若納
cbdb_id: 26351
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U2tzon1fdAGH6NRuBAsDFX
        subject_person_id: p_9NsMqSGNiM8RgLGjUarzq5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若納，宋人物。籍贯臨川，入仕封贈。（中国历代人物传记资料库 CBDB 26351）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tpCL9d1p2d30Zy-Wb1OYI2
          claim_id: c_U2tzon1fdAGH6NRuBAsDFX
          source_id: s_u8Y9bSA64Ra2kkyGTspCFk
          stance: supports
          locator: CBDB:26351
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_u8Y9bSA64Ra2kkyGTspCFk
            source_type: api_record
            title: 中国历代人物传记资料库：王若納（CBDB 26351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26351&o=json
            external_identifier: CBDB:26351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6bhABFEd2U8H8zEZmMQ3HV
        subject_person_id: p_9NsMqSGNiM8RgLGjUarzq5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若納
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rDNuzZ9hzVqpbAWWx9oQu4
          claim_id: c_6bhABFEd2U8H8zEZmMQ3HV
          source_id: s_u8Y9bSA64Ra2kkyGTspCFk
          stance: supports
          locator: CBDB:26351
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DCMwQzLIBY4-EiGTj8Y6tc
        subject_person_id: p_3kkGNafSUgZu6zsAciC5L3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9NsMqSGNiM8RgLGjUarzq5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l_AWajIexXJZt_Ya6zP_uO
          claim_id: c_DCMwQzLIBY4-EiGTj8Y6tc
          source_id: s_tMFn2TDwqmga5dP1KkB6Ph
          stance: supports
          locator: CBDB 双向互证（子 王若納 ⇄ 父 王仲達）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_tMFn2TDwqmga5dP1KkB6Ph
            source_type: api_record
            title: 中国历代人物传记资料库：王仲達（CBDB 26350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26350&o=json
            external_identifier: CBDB:26350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3kkGNafSUgZu6zsAciC5L3
        status: active
        display_name: 王仲達
        merged_into_person_id: null
  children:
    - claim:
        id: c_vmiWEw7819KQ-RjLBM6MwJ
        subject_person_id: p_9NsMqSGNiM8RgLGjUarzq5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gkheh2H38pxtSB6bw2FeUY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b8hENFW28I_2ZWrqdQEOzB
          claim_id: c_vmiWEw7819KQ-RjLBM6MwJ
          source_id: s_u8Y9bSA64Ra2kkyGTspCFk
          stance: supports
          locator: CBDB 双向互证（子 王正辭 ⇄ 父 王若納）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_u8Y9bSA64Ra2kkyGTspCFk
            source_type: api_record
            title: 中国历代人物传记资料库：王若納（CBDB 26351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26351&o=json
            external_identifier: CBDB:26351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_gkheh2H38pxtSB6bw2FeUY
        status: active
        display_name: 王正辭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王若納

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王若納，宋人物。籍贯臨川，入仕封贈。（中国历代人物传记资料库 CBDB 26351） | accepted |
| name.primary | 王若納 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3kkGNafSUgZu6zsAciC5L3 | 王仲達 | accepted |
| children | p_gkheh2H38pxtSB6bw2FeUY | 王正辭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王若納（CBDB 26351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26351&o=json)
- [中国历代人物传记资料库：王仲達（CBDB 26350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26350&o=json)

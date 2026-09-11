---
schema: wang-person/v1
id: p_UigxC39qu348GRPzwB2VV6
status: active
merged_into: null
display_name: 王理
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o72wuHjDVT2YQ325D7xMQ2
        subject_person_id: p_UigxC39qu348GRPzwB2VV6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UJPaRe2grEFPrLEwHnp2tQ
          claim_id: c_o72wuHjDVT2YQ325D7xMQ2
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: CBDB:126681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126681）
          source: &a1
            id: s_ePBk9yjtryp6Aok3sJ2P9k
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 126681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126681&o=json
            external_identifier: CBDB:126681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uRMiwqqXBSuV5BVj6ebb6M
        subject_person_id: p_UigxC39qu348GRPzwB2VV6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qt62GUnJF1tEw2FPqj9Xd2
          claim_id: c_uRMiwqqXBSuV5BVj6ebb6M
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uz8_RIU-zWviff7nQMIRCf
        subject_person_id: p_nZvn7tH7hwLzHZ4aSkjukU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NESmuYePDZ-MeudOh5OwBV
          claim_id: c_uz8_RIU-zWviff7nQMIRCf
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第二十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nZvn7tH7hwLzHZ4aSkjukU
        status: active
        display_name: 王充榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oLD9wyCqlHsRc8OTHodYJ8
        subject_person_id: p_kAqmJC9XxgqbW9D1EEHmok
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Iw_exa0lga-Zc6H-v0JkjK
          claim_id: c_oLD9wyCqlHsRc8OTHodYJ8
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第二十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kAqmJC9XxgqbW9D1EEHmok
        status: active
        display_name: 王文江
        merged_into_person_id: null
    - claim:
        id: c_y4iLQTrXMubKAe4QboGi-Z
        subject_person_id: p_mk3dTkzG94aLkYaNf5KJ63
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7S7RO7Z3UI_ez6LjwQpV1F
          claim_id: c_y4iLQTrXMubKAe4QboGi-Z
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第二十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mk3dTkzG94aLkYaNf5KJ63
        status: active
        display_name: 王希善
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王理 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nZvn7tH7hwLzHZ4aSkjukU | 王充榮 | accepted |
| ancestors | p_kAqmJC9XxgqbW9D1EEHmok | 王文江 | accepted |
| ancestors | p_mk3dTkzG94aLkYaNf5KJ63 | 王希善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 126681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126681&o=json)

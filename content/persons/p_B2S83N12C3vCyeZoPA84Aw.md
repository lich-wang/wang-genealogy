---
schema: wang-person/v1
id: p_B2S83N12C3vCyeZoPA84Aw
status: active
merged_into: null
display_name: 王德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NktnCuHKXrfuC5z1Feppim
        subject_person_id: p_B2S83N12C3vCyeZoPA84Aw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Vb3j12WWVqmgwagt1hVrG
          claim_id: c_NktnCuHKXrfuC5z1Feppim
          source_id: s_nQMed46rs9qYwroPUfYy9t
          stance: supports
          locator: CBDB:244425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244425）
          source: &a1
            id: s_nQMed46rs9qYwroPUfYy9t
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 244425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244425&o=json
            external_identifier: CBDB:244425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uRqkTs3RyT8M1hjGGPujNB
        subject_person_id: p_B2S83N12C3vCyeZoPA84Aw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德，明人物。成化五年進士，籍贯平原。（中国历代人物传记资料库 CBDB 244425）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a3JE3IB3FQlb3HgOhMVqeP
          claim_id: c_uRqkTs3RyT8M1hjGGPujNB
          source_id: s_nQMed46rs9qYwroPUfYy9t
          stance: supports
          locator: CBDB:244425
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8kEaShi7azHVKI1sPGzybr
        subject_person_id: p_ggxQ1jnked4p4GU2cPQ9m8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B2S83N12C3vCyeZoPA84Aw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QBiX9zzq36oxtxs_a-PtVS
          claim_id: c_8kEaShi7azHVKI1sPGzybr
          source_id: s_EmBy5gbdpn-iO1G6o28hTk
          stance: supports
          locator: CBDB：兄弟 王坦（126565）之父／母 王蕃
          quotation: null
          interpretation_note: 由兄弟关系推断：王德 与 王坦 为同胞（CBDB 记「兄」），王坦 之父／母即 王德 之父／母。
          source:
            id: s_EmBy5gbdpn-iO1G6o28hTk
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 244425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244425&o=json
            external_identifier: CBDB:244425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ggxQ1jnked4p4GU2cPQ9m8
        status: active
        display_name: 王蕃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JD57gWKksGyerjfHR8RoRf
        subject_person_id: p_B2S83N12C3vCyeZoPA84Aw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Crs3RH9UM-OAKZWmbUmDAY
          claim_id: c_JD57gWKksGyerjfHR8RoRf
          source_id: s_EmBy5gbdpn-iO1G6o28hTk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126565 王坦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EmBy5gbdpn-iO1G6o28hTk
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 244425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244425&o=json
            external_identifier: CBDB:244425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aYH4Kd4bjhZaTFXvNipRQE
        status: active
        display_name: 王坦
        merged_into_person_id: null
---

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| bio.summary | 王德，明人物。成化五年進士，籍贯平原。（中国历代人物传记资料库 CBDB 244425） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ggxQ1jnked4p4GU2cPQ9m8 | 王蕃 | accepted |
| other | p_aYH4Kd4bjhZaTFXvNipRQE | 王坦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 244425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244425&o=json)

---
schema: wang-person/v1
id: p_ggxQ1jnked4p4GU2cPQ9m8
status: active
merged_into: null
display_name: 王蕃
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h76JgNEutRN4wCKDhWNHwR
        subject_person_id: p_ggxQ1jnked4p4GU2cPQ9m8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9KfacRqoK1NWTDn6h7CqNM
          claim_id: c_h76JgNEutRN4wCKDhWNHwR
          source_id: s_AUwcaGbxkny6Yepk2snYQo
          stance: supports
          locator: CBDB:244421
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244421）
          source: &a1
            id: s_AUwcaGbxkny6Yepk2snYQo
            source_type: api_record
            title: 中国历代人物传记资料库：王蕃（CBDB 244421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244421&o=json
            external_identifier: CBDB:244421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.032Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2TLCTmMCRsiLsK1kzE17wb
        subject_person_id: p_ggxQ1jnked4p4GU2cPQ9m8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕃，明人物。成化五年進士，籍贯平原。（中国历代人物传记资料库 CBDB 244421）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zpTfBgT1tULfJPwgOlsNN7
          claim_id: c_2TLCTmMCRsiLsK1kzE17wb
          source_id: s_AUwcaGbxkny6Yepk2snYQo
          stance: supports
          locator: CBDB:244421
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DqDQpziK0pf_e9Ujy3Ozn4
        subject_person_id: p_ggxQ1jnked4p4GU2cPQ9m8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jd1ynIK4XLYOwBeE-ZoI62
          claim_id: c_DqDQpziK0pf_e9Ujy3Ozn4
          source_id: s_CGQ86w881YJNLc94NAKZrQ
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百零六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CGQ86w881YJNLc94NAKZrQ
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 126565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126565&o=json
            external_identifier: CBDB:126565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aYH4Kd4bjhZaTFXvNipRQE
        status: active
        display_name: 王坦
        merged_into_person_id: null
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
        id: p_B2S83N12C3vCyeZoPA84Aw
        status: active
        display_name: 王德
        merged_into_person_id: null
    - claim:
        id: c_QXHDoH5KPq9JxEztMtqvLh
        subject_person_id: p_ggxQ1jnked4p4GU2cPQ9m8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bLDFdHYPBrFmD3t6HUYRUz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_05tv5q3diGrpZF3jF62Rgl
          claim_id: c_QXHDoH5KPq9JxEztMtqvLh
          source_id: s_rYm4kDnN7Y0bMB7tndEck3
          stance: supports
          locator: CBDB：兄弟 王坦（126565）之父／母 王蕃
          quotation: null
          interpretation_note: 由兄弟关系推断：王健 与 王坦 为同胞（CBDB 记「兄」），王坦 之父／母即 王健 之父／母。
          source:
            id: s_rYm4kDnN7Y0bMB7tndEck3
            source_type: api_record
            title: 中国历代人物传记资料库：王健（CBDB 244424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244424&o=json
            external_identifier: CBDB:244424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bLDFdHYPBrFmD3t6HUYRUz
        status: active
        display_name: 王健
        merged_into_person_id: null
    - claim:
        id: c_qmGxRZBn7sZnyoZTGNILeW
        subject_person_id: p_ggxQ1jnked4p4GU2cPQ9m8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hm9zshkPHzjfaEwS9cTBBS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mlJOQItyjbTm7EXRI5kSdx
          claim_id: c_qmGxRZBn7sZnyoZTGNILeW
          source_id: s_FwaOkP8Lku8RMOSd47AJt8
          stance: supports
          locator: CBDB：兄弟 王坦（126565）之父／母 王蕃
          quotation: null
          interpretation_note: 由兄弟关系推断：王墀 与 王坦 为同胞（CBDB 记「兄」），王坦 之父／母即 王墀 之父／母。
          source:
            id: s_FwaOkP8Lku8RMOSd47AJt8
            source_type: api_record
            title: 中国历代人物传记资料库：王墀（CBDB 244426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244426&o=json
            external_identifier: CBDB:244426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hm9zshkPHzjfaEwS9cTBBS
        status: active
        display_name: 王墀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蕃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕃 | accepted |
| bio.summary | 王蕃，明人物。成化五年進士，籍贯平原。（中国历代人物传记资料库 CBDB 244421） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aYH4Kd4bjhZaTFXvNipRQE | 王坦 | accepted |
| children | p_B2S83N12C3vCyeZoPA84Aw | 王德 | accepted |
| children | p_bLDFdHYPBrFmD3t6HUYRUz | 王健 | accepted |
| children | p_hm9zshkPHzjfaEwS9cTBBS | 王墀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蕃（CBDB 244421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244421&o=json)
- [中国历代人物传记资料库：王墀（CBDB 244426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244426&o=json)
- [中国历代人物传记资料库：王德（CBDB 244425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244425&o=json)
- [中国历代人物传记资料库：王健（CBDB 244424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244424&o=json)
- [中国历代人物传记资料库：王坦（CBDB 126565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126565&o=json)

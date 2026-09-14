---
schema: wang-person/v1
id: p_8cA72YUN4szByBjQ7DU6Qa
status: active
merged_into: null
display_name: 王義
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jxUYwNshaQKVCCAU3foZoD
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PwjdxHPhMG2pwZMMWYQ5rB
          claim_id: c_jxUYwNshaQKVCCAU3foZoD
          source_id: s_L29J7ZWCs5BAKX3wb886B7
          stance: supports
          locator: CBDB:242449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242449）
          source: &a1
            id: s_L29J7ZWCs5BAKX3wb886B7
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 242449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242449&o=json
            external_identifier: CBDB:242449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XDttwBJTip9dMV2Dw3Cn46
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義，明人物。成化二年進士，籍贯華陽。（中国历代人物传记资料库 CBDB 242449）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zQvYxUtIuL3Ck0kjGekaIY
          claim_id: c_XDttwBJTip9dMV2Dw3Cn46
          source_id: s_L29J7ZWCs5BAKX3wb886B7
          stance: supports
          locator: CBDB:242449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ITpnk7XzQLvfEaUy4Hl2bp
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kx6D7JNFNVC8j5PdXCMLCd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jEu5WJZptgnwB1kf4-RSWe
          claim_id: c_ITpnk7XzQLvfEaUy4Hl2bp
          source_id: s_L29J7ZWCs5BAKX3wb886B7
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百三十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kx6D7JNFNVC8j5PdXCMLCd
        status: active
        display_name: 王弼
        merged_into_person_id: null
    - claim:
        id: c_y0aQXkI3xdTHzOVz1-yQJP
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AsNdvUpPqFkA1kZRax6V2C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xKqJRdUZQbvWp153g-MfdN
          claim_id: c_y0aQXkI3xdTHzOVz1-yQJP
          source_id: s_aIXF7Gex0CNpmjHe8lr61t
          stance: supports
          locator: CBDB：兄弟 王弼（199262）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥瓊 与 王弼 为同胞（CBDB 记「兄」），王弼 之父／母即 王彥瓊 之父／母。
          source:
            id: s_aIXF7Gex0CNpmjHe8lr61t
            source_type: api_record
            title: 中国历代人物传记资料库：王彥瓊（CBDB 242457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242457&o=json
            external_identifier: CBDB:242457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AsNdvUpPqFkA1kZRax6V2C
        status: active
        display_name: 王彥瓊
        merged_into_person_id: null
    - claim:
        id: c_gJnGEK1q2T2aCMuSwlzfZr
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E8zFzGgKtuZr9NNkF21ymA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zm2hrdEOynSp_5vyE-vyp2
          claim_id: c_gJnGEK1q2T2aCMuSwlzfZr
          source_id: s_ah6J3Mi2XwqUgh1i2W2jNh
          stance: supports
          locator: CBDB：兄弟 王弼（199262）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥珍 与 王弼 为同胞（CBDB 记「弟」），王弼 之父／母即 王彥珍 之父／母。
          source:
            id: s_ah6J3Mi2XwqUgh1i2W2jNh
            source_type: api_record
            title: 中国历代人物传记资料库：王彥珍（CBDB 242453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242453&o=json
            external_identifier: CBDB:242453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E8zFzGgKtuZr9NNkF21ymA
        status: active
        display_name: 王彥珍
        merged_into_person_id: null
    - claim:
        id: c_6ekuISy1a1Mk7I1ajmdLvO
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V5cKdi1jWAZANn9M5ojt8b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nWRO2zd62xw2qk7pJy5H_Y
          claim_id: c_6ekuISy1a1Mk7I1ajmdLvO
          source_id: s_6SCDib7II6HiDOIudcFy3N
          stance: supports
          locator: CBDB：兄弟 王弼（199262）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥琦 与 王弼 为同胞（CBDB 记「弟」），王弼 之父／母即 王彥琦 之父／母。
          source:
            id: s_6SCDib7II6HiDOIudcFy3N
            source_type: api_record
            title: 中国历代人物传记资料库：王彥琦（CBDB 242454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242454&o=json
            external_identifier: CBDB:242454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V5cKdi1jWAZANn9M5ojt8b
        status: active
        display_name: 王彥琦
        merged_into_person_id: null
    - claim:
        id: c_jFwM1iw8v6X5169nbkOzCd
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a7ZpG2GjYpSANv7vzvaPGk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gsOLiacZSDIpLNsvoU9Plf
          claim_id: c_jFwM1iw8v6X5169nbkOzCd
          source_id: s_LCg5Bq1QTmAbPfifBhz274
          stance: supports
          locator: CBDB：兄弟 王弼（199262）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥瑢 与 王弼 为同胞（CBDB 记「兄」），王弼 之父／母即 王彥瑢 之父／母。
          source:
            id: s_LCg5Bq1QTmAbPfifBhz274
            source_type: api_record
            title: 中国历代人物传记资料库：王彥瑢（CBDB 242456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242456&o=json
            external_identifier: CBDB:242456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a7ZpG2GjYpSANv7vzvaPGk
        status: active
        display_name: 王彥瑢
        merged_into_person_id: null
    - claim:
        id: c_Zz1gAiAGo1DlwazR-x2sIb
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hPwdMGFVUv6iRCR9jXCLAL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rxa3Y1IEq0Pmjqa0j28Dfq
          claim_id: c_Zz1gAiAGo1DlwazR-x2sIb
          source_id: s_PosQKdclVOmdkvZgEbNZRJ
          stance: supports
          locator: CBDB：兄弟 王弼（199262）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑮 与 王弼 为同胞（CBDB 记「弟」），王弼 之父／母即 王瑮 之父／母。
          source:
            id: s_PosQKdclVOmdkvZgEbNZRJ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑮（CBDB 242455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242455&o=json
            external_identifier: CBDB:242455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hPwdMGFVUv6iRCR9jXCLAL
        status: active
        display_name: 王瑮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | 王義，明人物。成化二年進士，籍贯華陽。（中国历代人物传记资料库 CBDB 242449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kx6D7JNFNVC8j5PdXCMLCd | 王弼 | accepted |
| children | p_AsNdvUpPqFkA1kZRax6V2C | 王彥瓊 | accepted |
| children | p_E8zFzGgKtuZr9NNkF21ymA | 王彥珍 | accepted |
| children | p_V5cKdi1jWAZANn9M5ojt8b | 王彥琦 | accepted |
| children | p_a7ZpG2GjYpSANv7vzvaPGk | 王彥瑢 | accepted |
| children | p_hPwdMGFVUv6iRCR9jXCLAL | 王瑮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑮（CBDB 242455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242455&o=json)
- [中国历代人物传记资料库：王彥琦（CBDB 242454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242454&o=json)
- [中国历代人物传记资料库：王彥瓊（CBDB 242457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242457&o=json)
- [中国历代人物传记资料库：王彥瑢（CBDB 242456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242456&o=json)
- [中国历代人物传记资料库：王彥珍（CBDB 242453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242453&o=json)
- [中国历代人物传记资料库：王義（CBDB 242449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242449&o=json)

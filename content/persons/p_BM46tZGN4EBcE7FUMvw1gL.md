---
schema: wang-person/v1
id: p_BM46tZGN4EBcE7FUMvw1gL
status: active
merged_into: null
display_name: 王宗義
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9rH6K71i1PZZ1gF4YcWZKr
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Nw3QYJS1YYxT4yMvVYLPM
          claim_id: c_9rH6K71i1PZZ1gF4YcWZKr
          source_id: s_RMH3PJ7uHci9WNBA7i4Hjj
          stance: supports
          locator: CBDB:310364
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310364）
          source: &a1
            id: s_RMH3PJ7uHci9WNBA7i4Hjj
            source_type: api_record
            title: 中国历代人物传记资料库：王宗義（CBDB 310364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310364&o=json
            external_identifier: CBDB:310364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jzGiB3XRHnwbJGsBmGTknb
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗義，明人物。嘉靖二十六年進士，籍贯霸州，曾任州判官。（中国历代人物传记资料库 CBDB 310364）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qncx78Va763sRE-97yudvd
          claim_id: c_jzGiB3XRHnwbJGsBmGTknb
          source_id: s_RMH3PJ7uHci9WNBA7i4Hjj
          stance: supports
          locator: CBDB:310364
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__C_tV-R3B9sj5mzEOyRLV3
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yP58sb64SDOo7CQk0FEUM3
          claim_id: c__C_tV-R3B9sj5mzEOyRLV3
          source_id: s_RMH3PJ7uHci9WNBA7i4Hjj
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SHuk9Lfw4VDtH93mbkHP9q
        status: active
        display_name: 王遴
        merged_into_person_id: null
    - claim:
        id: c_oPkdJIneOTUyoZm77GVYsv
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BDKoPPeWLe6xyv11558h58
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h1We3-PLQcXYZdNVouzVII
          claim_id: c_oPkdJIneOTUyoZm77GVYsv
          source_id: s_j7-TGqGOT8LyU-m0GjkfQh
          stance: supports
          locator: CBDB：兄弟 王遴（124734）之父／母 王宗義
          quotation: null
          interpretation_note: 由兄弟关系推断：王敘 与 王遴 为同胞（CBDB 记「弟」），王遴 之父／母即 王敘 之父／母。
          source:
            id: s_j7-TGqGOT8LyU-m0GjkfQh
            source_type: api_record
            title: 中国历代人物传记资料库：王敘（CBDB 310367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310367&o=json
            external_identifier: CBDB:310367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BDKoPPeWLe6xyv11558h58
        status: active
        display_name: 王敘
        merged_into_person_id: null
    - claim:
        id: c_AucjjrMrFaq2cvvLF8Hlmy
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oa3JYdCSg1Uz4EVLYdCr9f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JSr64Ru1Ny3R7XEgY_Amxs
          claim_id: c_AucjjrMrFaq2cvvLF8Hlmy
          source_id: s_j0K80VPMLhplH8vMVbWmiE
          stance: supports
          locator: CBDB：兄弟 王遴（124734）之父／母 王宗義
          quotation: null
          interpretation_note: 由兄弟关系推断：王道 与 王遴 为同胞（CBDB 记「弟」），王遴 之父／母即 王道 之父／母。
          source:
            id: s_j0K80VPMLhplH8vMVbWmiE
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 310368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310368&o=json
            external_identifier: CBDB:310368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oa3JYdCSg1Uz4EVLYdCr9f
        status: active
        display_name: 王道
        merged_into_person_id: null
    - claim:
        id: c_6zp2skGWG1inbLzjwidSkA
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p7yx3PZF9e8ob221v6WFA8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tV8qb4Dw5RFxD45HKSSuFv
          claim_id: c_6zp2skGWG1inbLzjwidSkA
          source_id: s_sp-m0GU1dGX_0G0C0bE3wb
          stance: supports
          locator: CBDB：兄弟 王遴（124734）之父／母 王宗義
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵 与 王遴 为同胞（CBDB 记「弟」），王遴 之父／母即 王遵 之父／母。
          source:
            id: s_sp-m0GU1dGX_0G0C0bE3wb
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 310369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310369&o=json
            external_identifier: CBDB:310369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p7yx3PZF9e8ob221v6WFA8
        status: active
        display_name: 王遵
        merged_into_person_id: null
    - claim:
        id: c_Sa-1yt4dxHSgeXH6EDt8n-
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tHMi3WhjSzAidPkkG4kpj8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ytezzgacOX1f4OgwRMguW9
          claim_id: c_Sa-1yt4dxHSgeXH6EDt8n-
          source_id: s_yz72zu13arTCJWj4P-pgdh
          stance: supports
          locator: CBDB：兄弟 王遴（124734）之父／母 王宗義
          quotation: null
          interpretation_note: 由兄弟关系推断：王選 与 王遴 为同胞（CBDB 记「兄」），王遴 之父／母即 王選 之父／母。
          source:
            id: s_yz72zu13arTCJWj4P-pgdh
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 310370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310370&o=json
            external_identifier: CBDB:310370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tHMi3WhjSzAidPkkG4kpj8
        status: active
        display_name: 王選
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗義 | accepted |
| bio.summary | 王宗義，明人物。嘉靖二十六年進士，籍贯霸州，曾任州判官。（中国历代人物传记资料库 CBDB 310364） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_SHuk9Lfw4VDtH93mbkHP9q | 王遴 | accepted |
| children | p_BDKoPPeWLe6xyv11558h58 | 王敘 | accepted |
| children | p_oa3JYdCSg1Uz4EVLYdCr9f | 王道 | accepted |
| children | p_p7yx3PZF9e8ob221v6WFA8 | 王遵 | accepted |
| children | p_tHMi3WhjSzAidPkkG4kpj8 | 王選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 310368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310368&o=json)
- [中国历代人物传记资料库：王敘（CBDB 310367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310367&o=json)
- [中国历代人物传记资料库：王選（CBDB 310370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310370&o=json)
- [中国历代人物传记资料库：王宗義（CBDB 310364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310364&o=json)
- [中国历代人物传记资料库：王遵（CBDB 310369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310369&o=json)

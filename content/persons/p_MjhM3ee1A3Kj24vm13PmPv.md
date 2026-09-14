---
schema: wang-person/v1
id: p_MjhM3ee1A3Kj24vm13PmPv
status: active
merged_into: null
display_name: 王昇
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_89usHdnC6XENy13h19FjPK
        subject_person_id: p_MjhM3ee1A3Kj24vm13PmPv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_phWPk7Tn6utyZ74UvTsCrK
          claim_id: c_89usHdnC6XENy13h19FjPK
          source_id: s_DDxoZAoSjvh1nD2Sf9ewoK
          stance: supports
          locator: CBDB:292613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292613）
          source: &a1
            id: s_DDxoZAoSjvh1nD2Sf9ewoK
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 292613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292613&o=json
            external_identifier: CBDB:292613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.409Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2dtSTxEYm2J4AwPb1RUPTM
        subject_person_id: p_MjhM3ee1A3Kj24vm13PmPv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇，明人物。嘉靖十一年進士，籍贯福州中衛，曾任教諭。（中国历代人物传记资料库 CBDB 292613）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p48bmGo7qYL6XyQoFPGDzH
          claim_id: c_2dtSTxEYm2J4AwPb1RUPTM
          source_id: s_DDxoZAoSjvh1nD2Sf9ewoK
          stance: supports
          locator: CBDB:292613
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xxfov5577hMKb-afEX7AHx
        subject_person_id: p_MjhM3ee1A3Kj24vm13PmPv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5PGL3HfhnkubibTnY8wvjU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rngz0zozoSZfLU7iOtVPyF
          claim_id: c_xxfov5577hMKb-afEX7AHx
          source_id: s_5MV8WK4AC29qwKVdS7RJGr
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5MV8WK4AC29qwKVdS7RJGr
            source_type: api_record
            title: 中国历代人物传记资料库：王釴（CBDB 202700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202700&o=json
            external_identifier: CBDB:202700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5PGL3HfhnkubibTnY8wvjU
        status: active
        display_name: 王釴
        merged_into_person_id: null
    - claim:
        id: c_Brg_myfBfFIbkXujcBshsf
        subject_person_id: p_MjhM3ee1A3Kj24vm13PmPv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7M6h3ab5NFH4LaaR6byCGs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9F5XnmOkKblwEBCbTJuWnr
          claim_id: c_Brg_myfBfFIbkXujcBshsf
          source_id: s_-OPIeSwDIMgC3UGpGzpCwr
          stance: supports
          locator: CBDB：兄弟 王釴（202700）之父／母 王昇
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐸 与 王釴 为同胞（CBDB 记「弟」），王釴 之父／母即 王鐸 之父／母。
          source:
            id: s_-OPIeSwDIMgC3UGpGzpCwr
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 292617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292617&o=json
            external_identifier: CBDB:292617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7M6h3ab5NFH4LaaR6byCGs
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_GIQIha7kl77x7wVoVq7_Rz
        subject_person_id: p_MjhM3ee1A3Kj24vm13PmPv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Lxn6k3S7fZusFzMBWkedV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SrqiLW4W4w8BytLIlxQbXH
          claim_id: c_GIQIha7kl77x7wVoVq7_Rz
          source_id: s_1L376Fo0c7bDu8Mlv-Z_0k
          stance: supports
          locator: CBDB：兄弟 王釴（202700）之父／母 王昇
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎰 与 王釴 为同胞（CBDB 记「弟」），王釴 之父／母即 王鎰 之父／母。
          source:
            id: s_1L376Fo0c7bDu8Mlv-Z_0k
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 292616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292616&o=json
            external_identifier: CBDB:292616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Lxn6k3S7fZusFzMBWkedV
        status: active
        display_name: 王鎰
        merged_into_person_id: null
    - claim:
        id: c_qtW-xdSCSGpKz_-3nC3xkg
        subject_person_id: p_MjhM3ee1A3Kj24vm13PmPv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EMuZoC6o82HbhGFazsFZ4c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__SOHIwEW-86QAUS5m_0ulo
          claim_id: c_qtW-xdSCSGpKz_-3nC3xkg
          source_id: s_3nM2Vc4YFuAOtk82CuQ7mq
          stance: supports
          locator: CBDB：兄弟 王釴（202700）之父／母 王昇
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍵 与 王釴 为同胞（CBDB 记「兄」），王釴 之父／母即 王鍵 之父／母。
          source:
            id: s_3nM2Vc4YFuAOtk82CuQ7mq
            source_type: api_record
            title: 中国历代人物传记资料库：王鍵（CBDB 292620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292620&o=json
            external_identifier: CBDB:292620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EMuZoC6o82HbhGFazsFZ4c
        status: active
        display_name: 王鍵
        merged_into_person_id: null
    - claim:
        id: c_S2gtwZpi1Qx_HSpjyatkIg
        subject_person_id: p_MjhM3ee1A3Kj24vm13PmPv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SzyxDXQLv1p4Nsv5jYqJTq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ImdrmxAI44_mrS92BOSijF
          claim_id: c_S2gtwZpi1Qx_HSpjyatkIg
          source_id: s_B7oNq3sSrVIM8RbQsi7lSQ
          stance: supports
          locator: CBDB：兄弟 王釴（202700）之父／母 王昇
          quotation: null
          interpretation_note: 由兄弟关系推断：王欽 与 王釴 为同胞（CBDB 记「弟」），王釴 之父／母即 王欽 之父／母。
          source:
            id: s_B7oNq3sSrVIM8RbQsi7lSQ
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 292619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292619&o=json
            external_identifier: CBDB:292619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SzyxDXQLv1p4Nsv5jYqJTq
        status: active
        display_name: 王欽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | 王昇，明人物。嘉靖十一年進士，籍贯福州中衛，曾任教諭。（中国历代人物传记资料库 CBDB 292613） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5PGL3HfhnkubibTnY8wvjU | 王釴 | accepted |
| children | p_7M6h3ab5NFH4LaaR6byCGs | 王鐸 | accepted |
| children | p_8Lxn6k3S7fZusFzMBWkedV | 王鎰 | accepted |
| children | p_EMuZoC6o82HbhGFazsFZ4c | 王鍵 | accepted |
| children | p_SzyxDXQLv1p4Nsv5jYqJTq | 王欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 292617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292617&o=json)
- [中国历代人物传记资料库：王鍵（CBDB 292620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292620&o=json)
- [中国历代人物传记资料库：王欽（CBDB 292619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292619&o=json)
- [中国历代人物传记资料库：王昇（CBDB 292613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292613&o=json)
- [中国历代人物传记资料库：王釴（CBDB 202700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202700&o=json)
- [中国历代人物传记资料库：王鎰（CBDB 292616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292616&o=json)

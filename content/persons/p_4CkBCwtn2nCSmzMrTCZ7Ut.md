---
schema: wang-person/v1
id: p_4CkBCwtn2nCSmzMrTCZ7Ut
status: active
merged_into: null
display_name: 王廷宣
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hNCNEE9NTsA33c4XEB9TKp
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wDMHfU3dmJu1JH9uq51Ljz
          claim_id: c_hNCNEE9NTsA33c4XEB9TKp
          source_id: s_rr2QHsiLgFPrWBsDApRQGq
          stance: supports
          locator: CBDB:210020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210020）
          source: &a1
            id: s_rr2QHsiLgFPrWBsDApRQGq
            source_type: api_record
            title: 中国历代人物传记资料库：王廷宣（CBDB 210020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210020&o=json
            external_identifier: CBDB:210020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_97MhtVHTF8emENrx2BWNeb
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷宣，明人物。隆慶五年進士，籍贯巴縣，曾任知州。（中国历代人物传记资料库 CBDB 210020）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lJuKDDzx_gFt6bRzrp-M-g
          claim_id: c_97MhtVHTF8emENrx2BWNeb
          source_id: s_rr2QHsiLgFPrWBsDApRQGq
          stance: supports
          locator: CBDB:210020
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_x1tqtirthzUfklsRSEJdJ3
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EaFxi6NHrChzwLEA1T89LT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G1Gt1LFAmZz3G1oaC6JQf9
          claim_id: c_x1tqtirthzUfklsRSEJdJ3
          source_id: s_rr2QHsiLgFPrWBsDApRQGq
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EaFxi6NHrChzwLEA1T89LT
        status: active
        display_name: 王道成
        merged_into_person_id: null
    - claim:
        id: c_Y2Wwc2PRkttB9Bbi_k6F-n
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AJU2uC4HsNpFdE1QyYAPxP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2h2b7xxD4k3ePn_9JUitn
          claim_id: c_Y2Wwc2PRkttB9Bbi_k6F-n
          source_id: s_qo0ceCRmjwu443AQb5rLRQ
          stance: supports
          locator: CBDB：兄弟 王道成（126745）之父／母 王廷宣
          quotation: null
          interpretation_note: 由兄弟关系推断：王道遠 与 王道成 为同胞（CBDB 记「兄」），王道成 之父／母即 王道遠 之父／母。
          source:
            id: s_qo0ceCRmjwu443AQb5rLRQ
            source_type: api_record
            title: 中国历代人物传记资料库：王道遠（CBDB 210023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210023&o=json
            external_identifier: CBDB:210023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AJU2uC4HsNpFdE1QyYAPxP
        status: active
        display_name: 王道遠
        merged_into_person_id: null
    - claim:
        id: c_OPhizxoycgxBaztCZ5RC4X
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RCLpHyH1WNKKe3qSfLzVrJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fXva-6U7dRDnVBMMeF4guX
          claim_id: c_OPhizxoycgxBaztCZ5RC4X
          source_id: s_R8Uz2rsFWywzl9P7f5DaCl
          stance: supports
          locator: CBDB：兄弟 王道成（126745）之父／母 王廷宣
          quotation: null
          interpretation_note: 由兄弟关系推断：王道亨 与 王道成 为同胞（CBDB 记「兄」），王道成 之父／母即 王道亨 之父／母。
          source:
            id: s_R8Uz2rsFWywzl9P7f5DaCl
            source_type: api_record
            title: 中国历代人物传记资料库：王道亨（CBDB 210027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210027&o=json
            external_identifier: CBDB:210027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RCLpHyH1WNKKe3qSfLzVrJ
        status: active
        display_name: 王道亨
        merged_into_person_id: null
    - claim:
        id: c_khmkiYzsxfUbDlKFgRAbUO
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SARGxsteUThGCM2YecX6Re
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w1R-T_dtFDn3ioxF_wct5W
          claim_id: c_khmkiYzsxfUbDlKFgRAbUO
          source_id: s_phz8IWYmH3Eyrs-a3m9qEq
          stance: supports
          locator: CBDB：兄弟 王道成（126745）之父／母 王廷宣
          quotation: null
          interpretation_note: 由兄弟关系推断：王道溥 与 王道成 为同胞（CBDB 记「兄」），王道成 之父／母即 王道溥 之父／母。
          source:
            id: s_phz8IWYmH3Eyrs-a3m9qEq
            source_type: api_record
            title: 中国历代人物传记资料库：王道溥（CBDB 210028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210028&o=json
            external_identifier: CBDB:210028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SARGxsteUThGCM2YecX6Re
        status: active
        display_name: 王道溥
        merged_into_person_id: null
    - claim:
        id: c_9dN1ooZYNwEpvOk7U1OTzo
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W5iMANxwXH8t5YX2Aw47nF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ckeUQlJYV6lufWiw88EuO
          claim_id: c_9dN1ooZYNwEpvOk7U1OTzo
          source_id: s_yVDUFMCftdTzj9w4bs_23i
          stance: supports
          locator: CBDB：兄弟 王道成（126745）之父／母 王廷宣
          quotation: null
          interpretation_note: 由兄弟关系推断：王道顯 与 王道成 为同胞（CBDB 记「兄」），王道成 之父／母即 王道顯 之父／母。
          source:
            id: s_yVDUFMCftdTzj9w4bs_23i
            source_type: api_record
            title: 中国历代人物传记资料库：王道顯（CBDB 210025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210025&o=json
            external_identifier: CBDB:210025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W5iMANxwXH8t5YX2Aw47nF
        status: active
        display_name: 王道顯
        merged_into_person_id: null
    - claim:
        id: c_3os9licFDfHKP6hwzquJIh
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mJoBUvY45vU7TGbn427LrR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9wzUY5IMeBtotUBOaeMdic
          claim_id: c_3os9licFDfHKP6hwzquJIh
          source_id: s_niM7WhxsaOBtZP4uQcYqm4
          stance: supports
          locator: CBDB：兄弟 王道成（126745）之父／母 王廷宣
          quotation: null
          interpretation_note: 由兄弟关系推断：王道榮 与 王道成 为同胞（CBDB 记「兄」），王道成 之父／母即 王道榮 之父／母。
          source:
            id: s_niM7WhxsaOBtZP4uQcYqm4
            source_type: api_record
            title: 中国历代人物传记资料库：王道榮（CBDB 210024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210024&o=json
            external_identifier: CBDB:210024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mJoBUvY45vU7TGbn427LrR
        status: active
        display_name: 王道榮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷宣 | accepted |
| bio.summary | 王廷宣，明人物。隆慶五年進士，籍贯巴縣，曾任知州。（中国历代人物传记资料库 CBDB 210020） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EaFxi6NHrChzwLEA1T89LT | 王道成 | accepted |
| children | p_AJU2uC4HsNpFdE1QyYAPxP | 王道遠 | accepted |
| children | p_RCLpHyH1WNKKe3qSfLzVrJ | 王道亨 | accepted |
| children | p_SARGxsteUThGCM2YecX6Re | 王道溥 | accepted |
| children | p_W5iMANxwXH8t5YX2Aw47nF | 王道顯 | accepted |
| children | p_mJoBUvY45vU7TGbn427LrR | 王道榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道亨（CBDB 210027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210027&o=json)
- [中国历代人物传记资料库：王道溥（CBDB 210028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210028&o=json)
- [中国历代人物传记资料库：王道榮（CBDB 210024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210024&o=json)
- [中国历代人物传记资料库：王道顯（CBDB 210025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210025&o=json)
- [中国历代人物传记资料库：王道遠（CBDB 210023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210023&o=json)
- [中国历代人物传记资料库：王廷宣（CBDB 210020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210020&o=json)

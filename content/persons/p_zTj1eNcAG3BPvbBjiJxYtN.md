---
schema: wang-person/v1
id: p_zTj1eNcAG3BPvbBjiJxYtN
status: active
merged_into: null
display_name: 王文琮
cbdb_id: 271492
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2FLD8hJtL1XyrjqoCqLj8Q
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文琮，明人物。弘治十五年進士，籍贯三河，曾任郎中。（中国历代人物传记资料库 CBDB 271492）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fnn57XcexbRo-XYXfzZKOE
          claim_id: c_2FLD8hJtL1XyrjqoCqLj8Q
          source_id: s_L7dy28x2pLVjMVBVHWsN34
          stance: supports
          locator: CBDB:271492
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L7dy28x2pLVjMVBVHWsN34
            source_type: api_record
            title: 中国历代人物传记资料库：王文琮（CBDB 271492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271492&o=json
            external_identifier: CBDB:271492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cwi3isALB7LBu1q7f4B4rL
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tNeVDU3ZLrShnQehSkCPFR
          claim_id: c_cwi3isALB7LBu1q7f4B4rL
          source_id: s_L7dy28x2pLVjMVBVHWsN34
          stance: supports
          locator: CBDB:271492
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_I4xlr5wW82AvFxeQvUl74_
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ys_55hmnhOxoTKtAbBEtKZ
          claim_id: c_I4xlr5wW82AvFxeQvUl74_
          source_id: s_L7dy28x2pLVjMVBVHWsN34
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L7dy28x2pLVjMVBVHWsN34
            source_type: api_record
            title: 中国历代人物传记资料库：王文琮（CBDB 271492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271492&o=json
            external_identifier: CBDB:271492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dz9UYGUCmAwX3qeez8fHjJ
        status: active
        display_name: 王俸
        merged_into_person_id: null
    - claim:
        id: c_3vVxm8xQpTh0wIexInRawA
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8vvQzJPbkqSMR6bszunrHn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tZTJTE31nBig_i9yl7ZRWL
          claim_id: c_3vVxm8xQpTh0wIexInRawA
          source_id: s_5h5D9I-YrJAb1Y9uQrXV7B
          stance: supports
          locator: CBDB：兄弟 王俸（201386）之父／母 王文琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王俊 之父／母。
          source:
            id: s_5h5D9I-YrJAb1Y9uQrXV7B
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 271499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271499&o=json
            external_identifier: CBDB:271499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8vvQzJPbkqSMR6bszunrHn
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_-6-mfftOI2F6OaErdLUk8F
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LqS3PiT77hGU8z9r23UiGH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_roshLyGQxIx0TvnkP6CBVa
          claim_id: c_-6-mfftOI2F6OaErdLUk8F
          source_id: s_8Y9GlNuRXWz4cJDiTsJNeg
          stance: supports
          locator: CBDB：兄弟 王俸（201386）之父／母 王文琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王僅 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王僅 之父／母。
          source:
            id: s_8Y9GlNuRXWz4cJDiTsJNeg
            source_type: api_record
            title: 中国历代人物传记资料库：王僅（CBDB 271500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271500&o=json
            external_identifier: CBDB:271500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LqS3PiT77hGU8z9r23UiGH
        status: active
        display_name: 王僅
        merged_into_person_id: null
    - claim:
        id: c_WYNlAeIXeGx-DbJJQbxXu4
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YHL34nZZtLDHrvcC6CJoi4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ua7ZuId6YS3XPhu7RoG9vF
          claim_id: c_WYNlAeIXeGx-DbJJQbxXu4
          source_id: s_McS1hZdiCX2xgujX2PcR5i
          stance: supports
          locator: CBDB：兄弟 王俸（201386）之父／母 王文琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王儒 之父／母。
          source:
            id: s_McS1hZdiCX2xgujX2PcR5i
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 271501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271501&o=json
            external_identifier: CBDB:271501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YHL34nZZtLDHrvcC6CJoi4
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_AFUnZA56j95UduCMD53scY
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zif2yp7BA6H3F1L6FZZe7h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oB2OanQMEoIFxIhzP-1hBu
          claim_id: c_AFUnZA56j95UduCMD53scY
          source_id: s_430t338dGk3ZE1V6hiz6Vv
          stance: supports
          locator: CBDB：兄弟 王俸（201386）之父／母 王文琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王倫 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王倫 之父／母。
          source:
            id: s_430t338dGk3ZE1V6hiz6Vv
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 271502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271502&o=json
            external_identifier: CBDB:271502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zif2yp7BA6H3F1L6FZZe7h
        status: active
        display_name: 王倫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文琮，明人物。弘治十五年進士，籍贯三河，曾任郎中。（中国历代人物传记资料库 CBDB 271492） | accepted |
| name.primary | 王文琮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dz9UYGUCmAwX3qeez8fHjJ | 王俸 | accepted |
| children | p_8vvQzJPbkqSMR6bszunrHn | 王俊 | accepted |
| children | p_LqS3PiT77hGU8z9r23UiGH | 王僅 | accepted |
| children | p_YHL34nZZtLDHrvcC6CJoi4 | 王儒 | accepted |
| children | p_Zif2yp7BA6H3F1L6FZZe7h | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僅（CBDB 271500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271500&o=json)
- [中国历代人物传记资料库：王俊（CBDB 271499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271499&o=json)
- [中国历代人物传记资料库：王倫（CBDB 271502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271502&o=json)
- [中国历代人物传记资料库：王儒（CBDB 271501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271501&o=json)
- [中国历代人物传记资料库：王文琮（CBDB 271492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271492&o=json)

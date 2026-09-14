---
schema: wang-person/v1
id: p_w5pNEVYCVJAEuFuR4sLpcJ
status: active
merged_into: null
display_name: 王弼
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EwA2M5e8YDRJMh7v4YsU7g
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3hgViB2o79XmNpd6fVa8aJ
          claim_id: c_EwA2M5e8YDRJMh7v4YsU7g
          source_id: s_q5GNQEar1pp9iTKrGMwo37
          stance: supports
          locator: CBDB:273948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273948）
          source: &a1
            id: s_q5GNQEar1pp9iTKrGMwo37
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 273948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273948&o=json
            external_identifier: CBDB:273948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VPW2g1XKRE9HmqEsUcCYTY
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼，明人物。弘治十八年進士，籍贯黃巖，曾任知府。（中国历代人物传记资料库 CBDB 273948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MVtkmmOeZVn5OfAdem11RM
          claim_id: c_VPW2g1XKRE9HmqEsUcCYTY
          source_id: s_q5GNQEar1pp9iTKrGMwo37
          stance: supports
          locator: CBDB:273948
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nSU79ISorauI45iTBW6Xj8
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXMiZF0nIWzKIf41pRReNh
          claim_id: c_nSU79ISorauI45iTBW6Xj8
          source_id: s_4SkWq6uYYWjkowxuTzuZDA
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4SkWq6uYYWjkowxuTzuZDA
            source_type: api_record
            title: 中国历代人物传记资料库：王坊（CBDB 201535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201535&o=json
            external_identifier: CBDB:201535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mXq9uxGc8pg1wHpdoUPQx2
        status: active
        display_name: 王坊
        merged_into_person_id: null
    - claim:
        id: c_OKyEre1onyIkvdr0Te5V4W
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8rjKEofeTDnhiC3sErsgD1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7DONHoZ9ONGOqfBSBloA0g
          claim_id: c_OKyEre1onyIkvdr0Te5V4W
          source_id: s_P1QhPj0xautAMuk5hNx1jf
          stance: supports
          locator: CBDB：兄弟 王坊（201535）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王培 与 王坊 为同胞（CBDB 记「弟」），王坊 之父／母即 王培 之父／母。
          source:
            id: s_P1QhPj0xautAMuk5hNx1jf
            source_type: api_record
            title: 中国历代人物传记资料库：王培（CBDB 273952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273952&o=json
            external_identifier: CBDB:273952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8rjKEofeTDnhiC3sErsgD1
        status: active
        display_name: 王培
        merged_into_person_id: null
    - claim:
        id: c_UybgQ7WLq0XXcM4JuW3Lmu
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BSxSS54pFn3GDXcZ2KRg4W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wApnfdCVkXlnteQMWmFOLc
          claim_id: c_UybgQ7WLq0XXcM4JuW3Lmu
          source_id: s_g1L9QJtDAy1RbUe_RQoJF9
          stance: supports
          locator: CBDB：兄弟 王坊（201535）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王臺 与 王坊 为同胞（CBDB 记「兄」），王坊 之父／母即 王臺 之父／母。
          source:
            id: s_g1L9QJtDAy1RbUe_RQoJF9
            source_type: api_record
            title: 中国历代人物传记资料库：王臺（CBDB 273957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273957&o=json
            external_identifier: CBDB:273957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BSxSS54pFn3GDXcZ2KRg4W
        status: active
        display_name: 王臺
        merged_into_person_id: null
    - claim:
        id: c_2ANKRL27xLjYXAFc6Zv46D
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VQyiHzXT4trthwppPCy7jo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tR7WD2mGFAvt7IzrjI-768
          claim_id: c_2ANKRL27xLjYXAFc6Zv46D
          source_id: s_DmDdGeTx3TE0RF8j-ijpDd
          stance: supports
          locator: CBDB：兄弟 王坊（201535）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王垌 与 王坊 为同胞（CBDB 记「兄」），王坊 之父／母即 王垌 之父／母。
          source:
            id: s_DmDdGeTx3TE0RF8j-ijpDd
            source_type: api_record
            title: 中国历代人物传记资料库：王垌（CBDB 273956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273956&o=json
            external_identifier: CBDB:273956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VQyiHzXT4trthwppPCy7jo
        status: active
        display_name: 王垌
        merged_into_person_id: null
    - claim:
        id: c_d69twpAdrK8mWHPWyDDs31
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X7HTbDfz8HsPeCCZ8fy6un
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qxWfc8iL7eb3bhOJXDQ0FR
          claim_id: c_d69twpAdrK8mWHPWyDDs31
          source_id: s_yKl8LNWptG7Wgrgy0KKfsB
          stance: supports
          locator: CBDB：兄弟 王坊（201535）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王墀 与 王坊 为同胞（CBDB 记「兄」），王坊 之父／母即 王墀 之父／母。
          source:
            id: s_yKl8LNWptG7Wgrgy0KKfsB
            source_type: api_record
            title: 中国历代人物传记资料库：王墀（CBDB 273954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273954&o=json
            external_identifier: CBDB:273954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X7HTbDfz8HsPeCCZ8fy6un
        status: active
        display_name: 王墀
        merged_into_person_id: null
    - claim:
        id: c_4QzceCysPicucxWzXnMWMu
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gWuLmAQUpy2UrQcgy6Wg2V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a60Q5HnBTL_7n0JXNqKc_v
          claim_id: c_4QzceCysPicucxWzXnMWMu
          source_id: s_1iUa2_M9YB3Jq_EPX7xrp0
          stance: supports
          locator: CBDB：兄弟 王坊（201535）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王增 与 王坊 为同胞（CBDB 记「弟」），王坊 之父／母即 王增 之父／母。
          source:
            id: s_1iUa2_M9YB3Jq_EPX7xrp0
            source_type: api_record
            title: 中国历代人物传记资料库：王增（CBDB 273953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273953&o=json
            external_identifier: CBDB:273953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gWuLmAQUpy2UrQcgy6Wg2V
        status: active
        display_name: 王增
        merged_into_person_id: null
    - claim:
        id: c_XTlnSOW7cD-6rxVyoMa8BT
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pwLMRREitVqYKNh34XE6wM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3BiLyXunHu8RBa3xTiAfz_
          claim_id: c_XTlnSOW7cD-6rxVyoMa8BT
          source_id: s_xP1e3mURZ2WiMRekROIaXK
          stance: supports
          locator: CBDB：兄弟 王坊（201535）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王壐 与 王坊 为同胞（CBDB 记「兄」），王坊 之父／母即 王壐 之父／母。
          source:
            id: s_xP1e3mURZ2WiMRekROIaXK
            source_type: api_record
            title: 中国历代人物传记资料库：王壐（CBDB 273955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273955&o=json
            external_identifier: CBDB:273955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pwLMRREitVqYKNh34XE6wM
        status: active
        display_name: 王壐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | 王弼，明人物。弘治十八年進士，籍贯黃巖，曾任知府。（中国历代人物传记资料库 CBDB 273948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mXq9uxGc8pg1wHpdoUPQx2 | 王坊 | accepted |
| children | p_8rjKEofeTDnhiC3sErsgD1 | 王培 | accepted |
| children | p_BSxSS54pFn3GDXcZ2KRg4W | 王臺 | accepted |
| children | p_VQyiHzXT4trthwppPCy7jo | 王垌 | accepted |
| children | p_X7HTbDfz8HsPeCCZ8fy6un | 王墀 | accepted |
| children | p_gWuLmAQUpy2UrQcgy6Wg2V | 王增 | accepted |
| children | p_pwLMRREitVqYKNh34XE6wM | 王壐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 273948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273948&o=json)
- [中国历代人物传记资料库：王墀（CBDB 273954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273954&o=json)
- [中国历代人物传记资料库：王垌（CBDB 273956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273956&o=json)
- [中国历代人物传记资料库：王坊（CBDB 201535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201535&o=json)
- [中国历代人物传记资料库：王培（CBDB 273952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273952&o=json)
- [中国历代人物传记资料库：王臺（CBDB 273957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273957&o=json)
- [中国历代人物传记资料库：王壐（CBDB 273955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273955&o=json)
- [中国历代人物传记资料库：王增（CBDB 273953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273953&o=json)

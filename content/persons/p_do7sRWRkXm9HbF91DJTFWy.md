---
schema: wang-person/v1
id: p_do7sRWRkXm9HbF91DJTFWy
status: active
merged_into: null
display_name: 王智
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lvn6GGUp7QqNgYudgZ8HH4
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RheLjS1m9gsQe4DQAb6sAg
          claim_id: c_Lvn6GGUp7QqNgYudgZ8HH4
          source_id: s_x8iqghaZ9G1jhaNV7hymRN
          stance: supports
          locator: CBDB:281419
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281419）
          source: &a1
            id: s_x8iqghaZ9G1jhaNV7hymRN
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 281419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281419&o=json
            external_identifier: CBDB:281419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tNUg7D16416r4vhGLuAL6x
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智，明人物。景泰二年進士，籍贯仁和。（中国历代人物传记资料库 CBDB 281419）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F1j5_xhclpJrGyj7ljxI2X
          claim_id: c_tNUg7D16416r4vhGLuAL6x
          source_id: s_x8iqghaZ9G1jhaNV7hymRN
          stance: supports
          locator: CBDB:281419
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mBllBBCnHLbUZR1ElSYn6-
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__I4ztS48i22vikE5YKL7lO
          claim_id: c_mBllBBCnHLbUZR1ElSYn6-
          source_id: s_x8iqghaZ9G1jhaNV7hymRN
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G4qJhuZsQYn7A9yfHcTR6Z
        status: active
        display_name: 王獻
        merged_into_person_id: null
    - claim:
        id: c_aNott22ALb7RpdB8IZC4C_
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4FRTLCD6JCX6chsKSqckgj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GOcEOg1KHlq_Z13b0IagtT
          claim_id: c_aNott22ALb7RpdB8IZC4C_
          source_id: s_qaGtxhwPZwL-XFoK4DrOkX
          stance: supports
          locator: CBDB：兄弟 王獻（126875）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王璣 与 王獻 为同胞（CBDB 记「兄」），王獻 之父／母即 王璣 之父／母。
          source:
            id: s_qaGtxhwPZwL-XFoK4DrOkX
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 283086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283086&o=json
            external_identifier: CBDB:283086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4FRTLCD6JCX6chsKSqckgj
        status: active
        display_name: 王璣
        merged_into_person_id: null
    - claim:
        id: c_2FnuLyZA6_0jqimd8onG55
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AYFmeTYCqbD2WvGCyhfVkf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SE83jVxbalhCoy8CkSxsqZ
          claim_id: c_2FnuLyZA6_0jqimd8onG55
          source_id: s_vriS7AYK-Y9hutKshPM_g5
          stance: supports
          locator: CBDB：兄弟 王獻（126875）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王珪 与 王獻 为同胞（CBDB 记「兄」），王獻 之父／母即 王珪 之父／母。
          source:
            id: s_vriS7AYK-Y9hutKshPM_g5
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 283198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283198&o=json
            external_identifier: CBDB:283198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AYFmeTYCqbD2WvGCyhfVkf
        status: active
        display_name: 王珪
        merged_into_person_id: null
    - claim:
        id: c_UxFD8q3iek6VrxSTVBtCvy
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D5FAXM7EfeeL5uapjt9tFy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J9VVElsP7zcL7huROQQX5G
          claim_id: c_UxFD8q3iek6VrxSTVBtCvy
          source_id: s_ImoqEy0Fjg6_nQF7yMezmT
          stance: supports
          locator: CBDB：兄弟 王獻（126875）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王祚 与 王獻 为同胞（CBDB 记「弟」），王獻 之父／母即 王祚 之父／母。
          source:
            id: s_ImoqEy0Fjg6_nQF7yMezmT
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 282418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282418&o=json
            external_identifier: CBDB:282418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D5FAXM7EfeeL5uapjt9tFy
        status: active
        display_name: 王祚
        merged_into_person_id: null
    - claim:
        id: c_cwVaH6VJ4mcbMQLQDNMWj6
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L9gD3zLRBrE2SVQhPiLFAp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BkzP8LBr28YHRK15jfbp8d
          claim_id: c_cwVaH6VJ4mcbMQLQDNMWj6
          source_id: s_yNd6H9CG8vhd-xTC3e4Tku
          stance: supports
          locator: CBDB：兄弟 王獻（126875）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王禧 与 王獻 为同胞（CBDB 记「兄」），王獻 之父／母即 王禧 之父／母。
          source:
            id: s_yNd6H9CG8vhd-xTC3e4Tku
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 282864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282864&o=json
            external_identifier: CBDB:282864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L9gD3zLRBrE2SVQhPiLFAp
        status: active
        display_name: 王禧
        merged_into_person_id: null
    - claim:
        id: c_hRObYNdhLPNNYaB1r4kvH4
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ma2RRKnBozzH6PBtzBFynz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_axi1U7NnudlAode0Itg1Or
          claim_id: c_hRObYNdhLPNNYaB1r4kvH4
          source_id: s_FI3ds2yh5Zxvn3ChRcbWG5
          stance: supports
          locator: CBDB：兄弟 王獻（126875）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王胤 与 王獻 为同胞（CBDB 记「弟」），王獻 之父／母即 王胤 之父／母。
          source:
            id: s_FI3ds2yh5Zxvn3ChRcbWG5
            source_type: api_record
            title: 中国历代人物传记资料库：王胤（CBDB 282531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282531&o=json
            external_identifier: CBDB:282531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ma2RRKnBozzH6PBtzBFynz
        status: active
        display_name: 王胤
        merged_into_person_id: null
    - claim:
        id: c_N3d_6AHNrzPsm1xoR8I_wN
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N6MzDJ8ASu26bg9vAjpwMW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vBRyUsetQcop0kI1liBIQD
          claim_id: c_N3d_6AHNrzPsm1xoR8I_wN
          source_id: s_d3btj8g7ZZ_aJVdDZq7-z4
          stance: supports
          locator: CBDB：兄弟 王獻（126875）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王翰 与 王獻 为同胞（CBDB 记「兄」），王獻 之父／母即 王翰 之父／母。
          source:
            id: s_d3btj8g7ZZ_aJVdDZq7-z4
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 282975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282975&o=json
            external_identifier: CBDB:282975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N6MzDJ8ASu26bg9vAjpwMW
        status: active
        display_name: 王翰
        merged_into_person_id: null
    - claim:
        id: c_tAF03hHYy66QPeqahst75X
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QdvKCttT3FBor27XKTSWvq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y0bNrX5OnLC23Eg6BWThmg
          claim_id: c_tAF03hHYy66QPeqahst75X
          source_id: s_1UHPmueCYDSg4yMZ15p01F
          stance: supports
          locator: CBDB：兄弟 王獻（126875）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王羽 与 王獻 为同胞（CBDB 记「兄」），王獻 之父／母即 王羽 之父／母。
          source:
            id: s_1UHPmueCYDSg4yMZ15p01F
            source_type: api_record
            title: 中国历代人物传记资料库：王羽（CBDB 283309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283309&o=json
            external_identifier: CBDB:283309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QdvKCttT3FBor27XKTSWvq
        status: active
        display_name: 王羽
        merged_into_person_id: null
    - claim:
        id: c_lAVwvRrXMFItwB1cKK3C1n
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y4teW9ngnHjhhLSpjkbLiY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n-LZZZ89c37C5u8z7uiYIn
          claim_id: c_lAVwvRrXMFItwB1cKK3C1n
          source_id: s_y280KNiwAgq-kfrOGPYLpP
          stance: supports
          locator: CBDB：兄弟 王獻（126875）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王禎 与 王獻 为同胞（CBDB 记「弟」），王獻 之父／母即 王禎 之父／母。
          source:
            id: s_y280KNiwAgq-kfrOGPYLpP
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 282642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282642&o=json
            external_identifier: CBDB:282642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y4teW9ngnHjhhLSpjkbLiY
        status: active
        display_name: 王禎
        merged_into_person_id: null
    - claim:
        id: c_2Oy1sqdxxqWTT3ZS5syrua
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g4Y972urAioA3Mawj1qB38
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ln05Q7O_JLuVfciK1GSIWV
          claim_id: c_2Oy1sqdxxqWTT3ZS5syrua
          source_id: s_Nw2q4C1OqSMQY0mSswPaMz
          stance: supports
          locator: CBDB：兄弟 王獻（126875）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王琮 与 王獻 为同胞（CBDB 记「弟」），王獻 之父／母即 王琮 之父／母。
          source:
            id: s_Nw2q4C1OqSMQY0mSswPaMz
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 282307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282307&o=json
            external_identifier: CBDB:282307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g4Y972urAioA3Mawj1qB38
        status: active
        display_name: 王琮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| bio.summary | 王智，明人物。景泰二年進士，籍贯仁和。（中国历代人物传记资料库 CBDB 281419） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_G4qJhuZsQYn7A9yfHcTR6Z | 王獻 | accepted |
| children | p_4FRTLCD6JCX6chsKSqckgj | 王璣 | accepted |
| children | p_AYFmeTYCqbD2WvGCyhfVkf | 王珪 | accepted |
| children | p_D5FAXM7EfeeL5uapjt9tFy | 王祚 | accepted |
| children | p_L9gD3zLRBrE2SVQhPiLFAp | 王禧 | accepted |
| children | p_Ma2RRKnBozzH6PBtzBFynz | 王胤 | accepted |
| children | p_N6MzDJ8ASu26bg9vAjpwMW | 王翰 | accepted |
| children | p_QdvKCttT3FBor27XKTSWvq | 王羽 | accepted |
| children | p_Y4teW9ngnHjhhLSpjkbLiY | 王禎 | accepted |
| children | p_g4Y972urAioA3Mawj1qB38 | 王琮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 282307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282307&o=json)
- [中国历代人物传记资料库：王珪（CBDB 283198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283198&o=json)
- [中国历代人物传记资料库：王翰（CBDB 282975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282975&o=json)
- [中国历代人物传记资料库：王璣（CBDB 283086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283086&o=json)
- [中国历代人物传记资料库：王禧（CBDB 282864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282864&o=json)
- [中国历代人物传记资料库：王胤（CBDB 282531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282531&o=json)
- [中国历代人物传记资料库：王羽（CBDB 283309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283309&o=json)
- [中国历代人物传记资料库：王禎（CBDB 282642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282642&o=json)
- [中国历代人物传记资料库：王智（CBDB 281419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281419&o=json)
- [中国历代人物传记资料库：王祚（CBDB 282418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282418&o=json)

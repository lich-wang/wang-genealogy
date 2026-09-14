---
schema: wang-person/v1
id: p_t7N3FS2FJZpX5ZRC4cp82b
status: active
merged_into: null
display_name: 王鑰
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d9PYCAvp5CJprV8zg3Amkk
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T6dMUmomCLEhQAjEDx2y23
          claim_id: c_d9PYCAvp5CJprV8zg3Amkk
          source_id: s_jvxEg6VW4Hj34nnzFPuvCg
          stance: supports
          locator: CBDB:297824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297824）
          source: &a1
            id: s_jvxEg6VW4Hj34nnzFPuvCg
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 297824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297824&o=json
            external_identifier: CBDB:297824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZnAS54idVxkBi38rqox4iJ
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰，明人物。天順元年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 297824）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pHTpgSXsd140_vX3Ntj-Yg
          claim_id: c_ZnAS54idVxkBi38rqox4iJ
          source_id: s_jvxEg6VW4Hj34nnzFPuvCg
          stance: supports
          locator: CBDB:297824
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_aU5k1l9RcY-TYrnLnSCoDJ
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AkmvWiOlpIHaukjaN5dkxh
          claim_id: c_aU5k1l9RcY-TYrnLnSCoDJ
          source_id: s_3nScnB9r5mRQFv6y1VT1PM
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第七十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3nScnB9r5mRQFv6y1VT1PM
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 67719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67719&o=json
            external_identifier: CBDB:67719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JCqwAkFqCg6AEXKEULaDMW
        status: active
        display_name: 王淵
        merged_into_person_id: null
    - claim:
        id: c_HvLycox2j_QMhSDx653xh1
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CJwfhVhpTHWmgtuhYxLMbJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SuTtA03ttJSzQ5LVXb1ghn
          claim_id: c_HvLycox2j_QMhSDx653xh1
          source_id: s_NaiRiQmbS2TCLKCzGaI_3T
          stance: supports
          locator: CBDB：兄弟 王淵（67719）之父／母 王鑰
          quotation: null
          interpretation_note: 由兄弟关系推断：王潤 与 王淵 为同胞（CBDB 记「兄」），王淵 之父／母即 王潤 之父／母。
          source:
            id: s_NaiRiQmbS2TCLKCzGaI_3T
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 297880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297880&o=json
            external_identifier: CBDB:297880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CJwfhVhpTHWmgtuhYxLMbJ
        status: active
        display_name: 王潤
        merged_into_person_id: null
    - claim:
        id: c_0_g7WDQCvLhkComFoCj18N
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QB4oKqN9AHkSDnq7VCMgcx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F5ozx37k7jJO_hX3oPwFO3
          claim_id: c_0_g7WDQCvLhkComFoCj18N
          source_id: s_kigRYjz4D_1vGfQEoHKJhs
          stance: supports
          locator: CBDB：兄弟 王淵（67719）之父／母 王鑰
          quotation: null
          interpretation_note: 由兄弟关系推断：王濬 与 王淵 为同胞（CBDB 记「兄」），王淵 之父／母即 王濬 之父／母。
          source:
            id: s_kigRYjz4D_1vGfQEoHKJhs
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 297857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297857&o=json
            external_identifier: CBDB:297857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QB4oKqN9AHkSDnq7VCMgcx
        status: active
        display_name: 王濬
        merged_into_person_id: null
    - claim:
        id: c_p7clO-N9PllWMieGT8sfRF
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hAeNAumRMtPX3HHD4tYpHP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pCOABuekdKxLwV9bbtQuK-
          claim_id: c_p7clO-N9PllWMieGT8sfRF
          source_id: s__XiPUoJowXX10cEXg1QlWl
          stance: supports
          locator: CBDB：兄弟 王淵（67719）之父／母 王鑰
          quotation: null
          interpretation_note: 由兄弟关系推断：王滋 与 王淵 为同胞（CBDB 记「兄」），王淵 之父／母即 王滋 之父／母。
          source:
            id: s__XiPUoJowXX10cEXg1QlWl
            source_type: api_record
            title: 中国历代人物传记资料库：王滋（CBDB 297868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297868&o=json
            external_identifier: CBDB:297868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hAeNAumRMtPX3HHD4tYpHP
        status: active
        display_name: 王滋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鑰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑰 | accepted |
| bio.summary | 王鑰，明人物。天順元年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 297824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JCqwAkFqCg6AEXKEULaDMW | 王淵 | accepted |
| children | p_CJwfhVhpTHWmgtuhYxLMbJ | 王潤 | accepted |
| children | p_QB4oKqN9AHkSDnq7VCMgcx | 王濬 | accepted |
| children | p_hAeNAumRMtPX3HHD4tYpHP | 王滋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濬（CBDB 297857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297857&o=json)
- [中国历代人物传记资料库：王潤（CBDB 297880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297880&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 297824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297824&o=json)
- [中国历代人物传记资料库：王淵（CBDB 67719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67719&o=json)
- [中国历代人物传记资料库：王滋（CBDB 297868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297868&o=json)

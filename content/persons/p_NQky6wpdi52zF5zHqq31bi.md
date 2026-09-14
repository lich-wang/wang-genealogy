---
schema: wang-person/v1
id: p_NQky6wpdi52zF5zHqq31bi
status: active
merged_into: null
display_name: 王象恆
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_irsfVQ5y5R5uyxkatEp5Gr
        subject_person_id: p_NQky6wpdi52zF5zHqq31bi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nNgrc54ndvF7914pFVnNY9
          claim_id: c_irsfVQ5y5R5uyxkatEp5Gr
          source_id: s_8ecuWxGDfv857JwE15nxCe
          stance: supports
          locator: CBDB:220279
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220279）
          source: &a1
            id: s_8ecuWxGDfv857JwE15nxCe
            source_type: api_record
            title: 中国历代人物传记资料库：王象恆（CBDB 220279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json
            external_identifier: CBDB:220279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_McXJYeNhi8Y5Tz6kBiQ272
        subject_person_id: p_NQky6wpdi52zF5zHqq31bi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象恆，明人物。隆慶五年進士，籍贯新城，曾任監察御史。（中国历代人物传记资料库 CBDB 220279）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c5Icxt9E4e8O2LbONwIk_M
          claim_id: c_McXJYeNhi8Y5Tz6kBiQ272
          source_id: s_8ecuWxGDfv857JwE15nxCe
          stance: supports
          locator: CBDB:220279
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T0qJBb3lVr0s_E2Ks67Yxb
        subject_person_id: p_5yFg7DjLcFzFQKDBRDnwdx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NQky6wpdi52zF5zHqq31bi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uA4OSycr7BOoHZCQtLqIdP
          claim_id: c_T0qJBb3lVr0s_E2Ks67Yxb
          source_id: s_W0F-qZ5WeQpGl3werGMttR
          stance: supports
          locator: CBDB：兄弟 王象乾（65764）之父／母 王之垣
          quotation: null
          interpretation_note: 由兄弟关系推断：王象恆 与 王象乾 为同胞（CBDB 记「兄」），王象乾 之父／母即 王象恆 之父／母。
          source:
            id: s_W0F-qZ5WeQpGl3werGMttR
            source_type: api_record
            title: 中国历代人物传记资料库：王象恆（CBDB 220279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json
            external_identifier: CBDB:220279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5yFg7DjLcFzFQKDBRDnwdx
        status: active
        display_name: 王之垣
        merged_into_person_id: null
    - claim:
        id: c_OW0cDmJqnI09s3ReAJyItY
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NQky6wpdi52zF5zHqq31bi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6uX3Nv9fpYDGIi6fskS1cp
          claim_id: c_OW0cDmJqnI09s3ReAJyItY
          source_id: s_W0F-qZ5WeQpGl3werGMttR
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象恆 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象恆 之父／母。
          source:
            id: s_W0F-qZ5WeQpGl3werGMttR
            source_type: api_record
            title: 中国历代人物传记资料库：王象恆（CBDB 220279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json
            external_identifier: CBDB:220279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
    - claim:
        id: c_zgZ4fq7GINXDnAPL2V7_2b
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NQky6wpdi52zF5zHqq31bi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtH4RXpUXZeyaAIMBQrtkp
          claim_id: c_zgZ4fq7GINXDnAPL2V7_2b
          source_id: s_W0F-qZ5WeQpGl3werGMttR
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象恆 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象恆 之父／母。
          source:
            id: s_W0F-qZ5WeQpGl3werGMttR
            source_type: api_record
            title: 中国历代人物传记资料库：王象恆（CBDB 220279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json
            external_identifier: CBDB:220279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Rxy0YPZYrqg9G5129JsZ1n
        subject_person_id: p_NQky6wpdi52zF5zHqq31bi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mNbLtBp7NLKek2NHmVT5fp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p_oeR-B2wvboYnxHbXVoBm
          claim_id: c_Rxy0YPZYrqg9G5129JsZ1n
          source_id: s_W0F-qZ5WeQpGl3werGMttR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 65764 王象乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W0F-qZ5WeQpGl3werGMttR
            source_type: api_record
            title: 中国历代人物传记资料库：王象恆（CBDB 220279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json
            external_identifier: CBDB:220279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mNbLtBp7NLKek2NHmVT5fp
        status: active
        display_name: 王象乾
        merged_into_person_id: null
    - claim:
        id: c_ZsEj3GvDN-j0f18sHKELma
        subject_person_id: p_NQky6wpdi52zF5zHqq31bi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pS969vB5KHtDqDgIWxRSCs
          claim_id: c_ZsEj3GvDN-j0f18sHKELma
          source_id: s_W0F-qZ5WeQpGl3werGMttR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W0F-qZ5WeQpGl3werGMttR
            source_type: api_record
            title: 中国历代人物传记资料库：王象恆（CBDB 220279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json
            external_identifier: CBDB:220279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
    - claim:
        id: c_cXkZ90V2db0VKahnfMiLKX
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NQky6wpdi52zF5zHqq31bi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oxPw1nDLnFCouiARpdAdNO
          claim_id: c_cXkZ90V2db0VKahnfMiLKX
          source_id: s_W0F-qZ5WeQpGl3werGMttR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126731 王象春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W0F-qZ5WeQpGl3werGMttR
            source_type: api_record
            title: 中国历代人物传记资料库：王象恆（CBDB 220279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json
            external_identifier: CBDB:220279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
---

# 王象恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象恆 | accepted |
| bio.summary | 王象恆，明人物。隆慶五年進士，籍贯新城，曾任監察御史。（中国历代人物传记资料库 CBDB 220279） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5yFg7DjLcFzFQKDBRDnwdx | 王之垣 | accepted |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| parents | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |
| other | p_mNbLtBp7NLKek2NHmVT5fp | 王象乾 | accepted |
| other | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |
| other | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象恆（CBDB 220279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json)

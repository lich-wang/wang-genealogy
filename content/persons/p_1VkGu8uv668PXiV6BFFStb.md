---
schema: wang-person/v1
id: p_1VkGu8uv668PXiV6BFFStb
status: active
merged_into: null
display_name: 王漟
cbdb_id: 209785
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BzULTV2GoZGCfphii3f1JE
        subject_person_id: p_1VkGu8uv668PXiV6BFFStb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漟，明人物。隆慶五年進士，籍贯潛山，曾任府同知。（中国历代人物传记资料库 CBDB 209785）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs__hINzB1bTJ_wVdYt-h4UTX
          claim_id: c_BzULTV2GoZGCfphii3f1JE
          source_id: s_oM5BoRBp5PtPWyQxg9MHHZ
          stance: supports
          locator: CBDB:209785
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oM5BoRBp5PtPWyQxg9MHHZ
            source_type: api_record
            title: 中国历代人物传记资料库：王漟（CBDB 209785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209785&o=json
            external_identifier: CBDB:209785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_p2Tf8hPT4mjKPZ31c6TpES
        subject_person_id: p_1VkGu8uv668PXiV6BFFStb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Kw42EQ5BSKEpKABR5R3xVn
          claim_id: c_p2Tf8hPT4mjKPZ31c6TpES
          source_id: s_oM5BoRBp5PtPWyQxg9MHHZ
          stance: supports
          locator: CBDB:209785
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uokYxwjhkmoDT0eyTUy0Uc
        subject_person_id: p_1VkGu8uv668PXiV6BFFStb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h6k5vEJAcY6rSKxJEEOIUM
          claim_id: c_uokYxwjhkmoDT0eyTUy0Uc
          source_id: s_oM5BoRBp5PtPWyQxg9MHHZ
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oM5BoRBp5PtPWyQxg9MHHZ
            source_type: api_record
            title: 中国历代人物传记资料库：王漟（CBDB 209785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209785&o=json
            external_identifier: CBDB:209785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Eo3x5BVMmizyxxEaJmawa5
        status: active
        display_name: 王嘉柔
        merged_into_person_id: null
    - claim:
        id: c_Nvu3SoMzQbvO5Y9yu-RQCy
        subject_person_id: p_1VkGu8uv668PXiV6BFFStb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B8EmnM5VEuiUvV7z7ZJ7ZA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IrFsFcNZHqY9JnpHUlyGtu
          claim_id: c_Nvu3SoMzQbvO5Y9yu-RQCy
          source_id: s_aBqnRX3MiLCzmeTp8K5tf8
          stance: supports
          locator: CBDB：兄弟 王嘉柔（205854）之父／母 王漟
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉棨 与 王嘉柔 为同胞（CBDB 记「弟」），王嘉柔 之父／母即 王嘉棨 之父／母。
          source:
            id: s_aBqnRX3MiLCzmeTp8K5tf8
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉棨（CBDB 209789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209789&o=json
            external_identifier: CBDB:209789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B8EmnM5VEuiUvV7z7ZJ7ZA
        status: active
        display_name: 王嘉棨
        merged_into_person_id: null
    - claim:
        id: c_s8n7e7jOtrhJv9_ORe0fps
        subject_person_id: p_1VkGu8uv668PXiV6BFFStb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qz5eSMUhWXhxV3CqkvQZeD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EOEYcdUdt0x1U5nobJScp7
          claim_id: c_s8n7e7jOtrhJv9_ORe0fps
          source_id: s_C-m7ilHiolSQQNhztCDJhN
          stance: supports
          locator: CBDB：兄弟 王嘉柔（205854）之父／母 王漟
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉檠 与 王嘉柔 为同胞（CBDB 记「兄」），王嘉柔 之父／母即 王嘉檠 之父／母。
          source:
            id: s_C-m7ilHiolSQQNhztCDJhN
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉檠（CBDB 209790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209790&o=json
            external_identifier: CBDB:209790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Qz5eSMUhWXhxV3CqkvQZeD
        status: active
        display_name: 王嘉檠
        merged_into_person_id: null
    - claim:
        id: c_uueyvgA-WCfKiKPza6kzfA
        subject_person_id: p_1VkGu8uv668PXiV6BFFStb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S3KVQDZtVGef9kj9DGD5B8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dKOPUs2j3qm7kwdvLiqTZd
          claim_id: c_uueyvgA-WCfKiKPza6kzfA
          source_id: s_88I_gdoL39AK5ppR81VTnU
          stance: supports
          locator: CBDB：兄弟 王嘉柔（205854）之父／母 王漟
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉寀 与 王嘉柔 为同胞（CBDB 记「兄」），王嘉柔 之父／母即 王嘉寀 之父／母。
          source:
            id: s_88I_gdoL39AK5ppR81VTnU
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉寀（CBDB 209791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209791&o=json
            external_identifier: CBDB:209791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S3KVQDZtVGef9kj9DGD5B8
        status: active
        display_name: 王嘉寀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王漟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王漟，明人物。隆慶五年進士，籍贯潛山，曾任府同知。（中国历代人物传记资料库 CBDB 209785） | accepted |
| name.primary | 王漟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Eo3x5BVMmizyxxEaJmawa5 | 王嘉柔 | accepted |
| children | p_B8EmnM5VEuiUvV7z7ZJ7ZA | 王嘉棨 | accepted |
| children | p_Qz5eSMUhWXhxV3CqkvQZeD | 王嘉檠 | accepted |
| children | p_S3KVQDZtVGef9kj9DGD5B8 | 王嘉寀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉寀（CBDB 209791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209791&o=json)
- [中国历代人物传记资料库：王嘉棨（CBDB 209789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209789&o=json)
- [中国历代人物传记资料库：王嘉檠（CBDB 209790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209790&o=json)
- [中国历代人物传记资料库：王漟（CBDB 209785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209785&o=json)

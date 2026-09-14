---
schema: wang-person/v1
id: p_JRSMPB6yVrvoB4Rsfsm44J
status: active
merged_into: null
display_name: 王懷廣
cbdb_id: 257393
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zdd36DS4H6kMdrEQNtTPeK
        subject_person_id: p_JRSMPB6yVrvoB4Rsfsm44J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷廣，明人物。成化十七年進士，籍贯仙居。（中国历代人物传记资料库 CBDB 257393）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UJmFrLD4eaZb1dyH2rT3XG
          claim_id: c_zdd36DS4H6kMdrEQNtTPeK
          source_id: s_H9esS4GPsmkthFSGNh7v4X
          stance: supports
          locator: CBDB:257393
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_H9esS4GPsmkthFSGNh7v4X
            source_type: api_record
            title: 中国历代人物传记资料库：王懷廣（CBDB 257393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257393&o=json
            external_identifier: CBDB:257393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZY3q5xN61SiAZt4A5EHaWD
        subject_person_id: p_JRSMPB6yVrvoB4Rsfsm44J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷廣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Y4V7jSK1CjNeVh6Ru6uCRF
          claim_id: c_ZY3q5xN61SiAZt4A5EHaWD
          source_id: s_H9esS4GPsmkthFSGNh7v4X
          stance: supports
          locator: CBDB:257393
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PNWl8M9mDR9aYnKfXSP0IR
        subject_person_id: p_JRSMPB6yVrvoB4Rsfsm44J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nrlhJjcvg1r-dWe4zrrWCk
          claim_id: c_PNWl8M9mDR9aYnKfXSP0IR
          source_id: s_ExaLzyQchNF44SEq4qpiZe
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ExaLzyQchNF44SEq4qpiZe
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 126657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126657&o=json
            external_identifier: CBDB:126657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mQ1J7fd25Z6UXRPAETHXDi
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_sES61M3IdbZ4u9ZIyqNc16
        subject_person_id: p_JRSMPB6yVrvoB4Rsfsm44J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gmzeou7Y49kGbG82r2gQNS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t5oqW64aOKxJ29DH04z6wd
          claim_id: c_sES61M3IdbZ4u9ZIyqNc16
          source_id: s_o54-bjt3Ja9XiBeh3pzpKx
          stance: supports
          locator: CBDB：兄弟 王純（126657）之父／母 王懷廣
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘幹 与 王純 为同胞（CBDB 记「兄」），王純 之父／母即 王弘幹 之父／母。
          source:
            id: s_o54-bjt3Ja9XiBeh3pzpKx
            source_type: api_record
            title: 中国历代人物传记资料库：王弘幹（CBDB 257397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257397&o=json
            external_identifier: CBDB:257397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Gmzeou7Y49kGbG82r2gQNS
        status: active
        display_name: 王弘幹
        merged_into_person_id: null
    - claim:
        id: c_EldW6pGsriQDWK6nGhBH7W
        subject_person_id: p_JRSMPB6yVrvoB4Rsfsm44J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lapj5jtB5AXtEr4MGXMdKr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YKalhrGoKNkqXZBb4CRrlc
          claim_id: c_EldW6pGsriQDWK6nGhBH7W
          source_id: s_Uzz14pxSQvZux2119WvjQ5
          stance: supports
          locator: CBDB：兄弟 王純（126657）之父／母 王懷廣
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘範 与 王純 为同胞（CBDB 记「兄」），王純 之父／母即 王弘範 之父／母。
          source:
            id: s_Uzz14pxSQvZux2119WvjQ5
            source_type: api_record
            title: 中国历代人物传记资料库：王弘範（CBDB 257399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257399&o=json
            external_identifier: CBDB:257399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lapj5jtB5AXtEr4MGXMdKr
        status: active
        display_name: 王弘範
        merged_into_person_id: null
    - claim:
        id: c_ZLPwUY4y-ic_MY2xRb05pv
        subject_person_id: p_JRSMPB6yVrvoB4Rsfsm44J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MeUpJzteMYS7QRkNyZy94E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Eb44uF2Wp-REdgc1Uw8xO
          claim_id: c_ZLPwUY4y-ic_MY2xRb05pv
          source_id: s_0XupweTQFKj3kKPjEsEyKc
          stance: supports
          locator: CBDB：兄弟 王純（126657）之父／母 王懷廣
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘學 与 王純 为同胞（CBDB 记「弟」），王純 之父／母即 王弘學 之父／母。
          source:
            id: s_0XupweTQFKj3kKPjEsEyKc
            source_type: api_record
            title: 中国历代人物传记资料库：王弘學（CBDB 257396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257396&o=json
            external_identifier: CBDB:257396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MeUpJzteMYS7QRkNyZy94E
        status: active
        display_name: 王弘學
        merged_into_person_id: null
    - claim:
        id: c_RHwXwXaQgv7U8d98nmLWKS
        subject_person_id: p_JRSMPB6yVrvoB4Rsfsm44J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sESRoWJizs7MHuiDbBsH4y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B5VmdPu64a-Meqp0Cxglhf
          claim_id: c_RHwXwXaQgv7U8d98nmLWKS
          source_id: s_vfiEdiwPEsog69o0TZCs3h
          stance: supports
          locator: CBDB：兄弟 王純（126657）之父／母 王懷廣
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘度 与 王純 为同胞（CBDB 记「兄」），王純 之父／母即 王弘度 之父／母。
          source:
            id: s_vfiEdiwPEsog69o0TZCs3h
            source_type: api_record
            title: 中国历代人物传记资料库：王弘度（CBDB 257398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257398&o=json
            external_identifier: CBDB:257398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sESRoWJizs7MHuiDbBsH4y
        status: active
        display_name: 王弘度
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懷廣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懷廣，明人物。成化十七年進士，籍贯仙居。（中国历代人物传记资料库 CBDB 257393） | accepted |
| name.primary | 王懷廣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mQ1J7fd25Z6UXRPAETHXDi | 王純 | accepted |
| children | p_Gmzeou7Y49kGbG82r2gQNS | 王弘幹 | accepted |
| children | p_Lapj5jtB5AXtEr4MGXMdKr | 王弘範 | accepted |
| children | p_MeUpJzteMYS7QRkNyZy94E | 王弘學 | accepted |
| children | p_sESRoWJizs7MHuiDbBsH4y | 王弘度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 126657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126657&o=json)
- [中国历代人物传记资料库：王弘度（CBDB 257398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257398&o=json)
- [中国历代人物传记资料库：王弘範（CBDB 257399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257399&o=json)
- [中国历代人物传记资料库：王弘幹（CBDB 257397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257397&o=json)
- [中国历代人物传记资料库：王弘學（CBDB 257396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257396&o=json)
- [中国历代人物传记资料库：王懷廣（CBDB 257393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257393&o=json)

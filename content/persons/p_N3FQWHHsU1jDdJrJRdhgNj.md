---
schema: wang-person/v1
id: p_N3FQWHHsU1jDdJrJRdhgNj
status: active
merged_into: null
display_name: 王琇
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5evpXhEwrRZGRK5XvqCjci
        subject_person_id: p_N3FQWHHsU1jDdJrJRdhgNj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G7RMfVuXd3dmGSNmdsaqkJ
          claim_id: c_5evpXhEwrRZGRK5XvqCjci
          source_id: s_9y9mzPk6krkeAi2LATFi6v
          stance: supports
          locator: CBDB:337340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337340）
          source: &a1
            id: s_9y9mzPk6krkeAi2LATFi6v
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 337340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337340&o=json
            external_identifier: CBDB:337340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DX5XrzgWZYtJSxqajmeUbJ
        subject_person_id: p_N3FQWHHsU1jDdJrJRdhgNj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琇，明人物。隆慶二年進士，籍贯宣武衛，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 337340）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TEE3aKb93pSDDztYN2PrP4
          claim_id: c_DX5XrzgWZYtJSxqajmeUbJ
          source_id: s_9y9mzPk6krkeAi2LATFi6v
          stance: supports
          locator: CBDB:337340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_iDr4LHyOtzuyCVXWoFndqw
        subject_person_id: p_N3FQWHHsU1jDdJrJRdhgNj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZgHttSIB70tFZoPTZsq-u6
          claim_id: c_iDr4LHyOtzuyCVXWoFndqw
          source_id: s_9y9mzPk6krkeAi2LATFi6v
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RFSk9U6s1PdRrrCWPSXxDg
        status: active
        display_name: 王中逵
        merged_into_person_id: null
    - claim:
        id: c_sPnvlCQv73pPdP-S7a5xi5
        subject_person_id: p_N3FQWHHsU1jDdJrJRdhgNj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1ShqaCUpZz7ea4X1Y2Gjoz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Id9BsYcHB4ZrXAyMTc1_J
          claim_id: c_sPnvlCQv73pPdP-S7a5xi5
          source_id: s_tvUazeo5nwTgXbBmjR4-UN
          stance: supports
          locator: CBDB：兄弟 王中逵（205715）之父／母 王琇
          quotation: null
          interpretation_note: 由兄弟关系推断：王中立 与 王中逵 为同胞（CBDB 记「弟」），王中逵 之父／母即 王中立 之父／母。
          source:
            id: s_tvUazeo5nwTgXbBmjR4-UN
            source_type: api_record
            title: 中国历代人物传记资料库：王中立（CBDB 337347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337347&o=json
            external_identifier: CBDB:337347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1ShqaCUpZz7ea4X1Y2Gjoz
        status: active
        display_name: 王中立
        merged_into_person_id: null
    - claim:
        id: c_rSrdssGIS8hb4RGOSS0HA6
        subject_person_id: p_N3FQWHHsU1jDdJrJRdhgNj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4HCzSpdU7euZ3kPvRDAWWq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v_qSmDImmSojUYQNQOAl_t
          claim_id: c_rSrdssGIS8hb4RGOSS0HA6
          source_id: s_1q-vlDy2qpNeIM0df2hpd0
          stance: supports
          locator: CBDB：兄弟 王中逵（205715）之父／母 王琇
          quotation: null
          interpretation_note: 由兄弟关系推断：王中行 与 王中逵 为同胞（CBDB 记「弟」），王中逵 之父／母即 王中行 之父／母。
          source:
            id: s_1q-vlDy2qpNeIM0df2hpd0
            source_type: api_record
            title: 中国历代人物传记资料库：王中行（CBDB 337348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337348&o=json
            external_identifier: CBDB:337348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4HCzSpdU7euZ3kPvRDAWWq
        status: active
        display_name: 王中行
        merged_into_person_id: null
    - claim:
        id: c_Msl6aM7zXP0sWDjSLPDeBK
        subject_person_id: p_N3FQWHHsU1jDdJrJRdhgNj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CCcKrCDVukY43voMZETTGf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nx2qwhOF8wUmZz7-S1AVWf
          claim_id: c_Msl6aM7zXP0sWDjSLPDeBK
          source_id: s_iToaK_gWgmCZcfitM2En0T
          stance: supports
          locator: CBDB：兄弟 王中逵（205715）之父／母 王琇
          quotation: null
          interpretation_note: 由兄弟关系推断：王中孚 与 王中逵 为同胞（CBDB 记「弟」），王中逵 之父／母即 王中孚 之父／母。
          source:
            id: s_iToaK_gWgmCZcfitM2En0T
            source_type: api_record
            title: 中国历代人物传记资料库：王中孚（CBDB 337346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337346&o=json
            external_identifier: CBDB:337346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CCcKrCDVukY43voMZETTGf
        status: active
        display_name: 王中孚
        merged_into_person_id: null
    - claim:
        id: c_o8OoE_aNRK47P6GDFTiy3r
        subject_person_id: p_N3FQWHHsU1jDdJrJRdhgNj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LwoDDyRFCAFF7CrE3F4orq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZzW-2WCaNV1vMy0NgsHeLh
          claim_id: c_o8OoE_aNRK47P6GDFTiy3r
          source_id: s_S4vlMVNDc-erhIk60zaqkH
          stance: supports
          locator: CBDB：兄弟 王中逵（205715）之父／母 王琇
          quotation: null
          interpretation_note: 由兄弟关系推断：王中和 与 王中逵 为同胞（CBDB 记「兄」），王中逵 之父／母即 王中和 之父／母。
          source:
            id: s_S4vlMVNDc-erhIk60zaqkH
            source_type: api_record
            title: 中国历代人物传记资料库：王中和（CBDB 337349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337349&o=json
            external_identifier: CBDB:337349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LwoDDyRFCAFF7CrE3F4orq
        status: active
        display_name: 王中和
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琇 | accepted |
| bio.summary | 王琇，明人物。隆慶二年進士，籍贯宣武衛，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 337340） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RFSk9U6s1PdRrrCWPSXxDg | 王中逵 | accepted |
| children | p_1ShqaCUpZz7ea4X1Y2Gjoz | 王中立 | accepted |
| children | p_4HCzSpdU7euZ3kPvRDAWWq | 王中行 | accepted |
| children | p_CCcKrCDVukY43voMZETTGf | 王中孚 | accepted |
| children | p_LwoDDyRFCAFF7CrE3F4orq | 王中和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琇（CBDB 337340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337340&o=json)
- [中国历代人物传记资料库：王中孚（CBDB 337346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337346&o=json)
- [中国历代人物传记资料库：王中和（CBDB 337349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337349&o=json)
- [中国历代人物传记资料库：王中立（CBDB 337347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337347&o=json)
- [中国历代人物传记资料库：王中行（CBDB 337348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337348&o=json)

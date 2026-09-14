---
schema: wang-person/v1
id: p_nrgvXCkYedEAAAukDFwR1j
status: active
merged_into: null
display_name: 王三錫
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QKB8JytsMaMxgZbshWN9Fd
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_18BD2cMBcSwEo2SNWbhDPD
          claim_id: c_QKB8JytsMaMxgZbshWN9Fd
          source_id: s_hLRwkutCkncJbEnwgC7yQu
          stance: supports
          locator: CBDB:223208
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223208）
          source: &a1
            id: s_hLRwkutCkncJbEnwgC7yQu
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 223208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223208&o=json
            external_identifier: CBDB:223208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cHRhV33P9LFA9Xn3J8LxqJ
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫，明人物。萬曆十一年進士，籍贯同安。（中国历代人物传记资料库 CBDB 223208）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EPsKgH5YFTn96nYZNWAvwR
          claim_id: c_cHRhV33P9LFA9Xn3J8LxqJ
          source_id: s_hLRwkutCkncJbEnwgC7yQu
          stance: supports
          locator: CBDB:223208
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QUSz47y_VfgIxi0orJ5SEm
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7J92XTKdKB1ZCqpjcGmNN6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2DW_wl348YffCg68rb6vxP
          claim_id: c_QUSz47y_VfgIxi0orJ5SEm
          source_id: s_hLRwkutCkncJbEnwgC7yQu
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7J92XTKdKB1ZCqpjcGmNN6
        status: active
        display_name: 王道顯
        merged_into_person_id: null
    - claim:
        id: c_TbulQo3JIJq4CvDzaAsHVX
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HDdq36p5d728xQPFsnRJHe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PVqg34HA6zz17vhBPJhZP
          claim_id: c_TbulQo3JIJq4CvDzaAsHVX
          source_id: s_hmMoCGKEVs9DmWrF6FoLF7
          stance: supports
          locator: CBDB：兄弟 王道顯（206783）之父／母 王三錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王道照 与 王道顯 为同胞（CBDB 记「兄」），王道顯 之父／母即 王道照 之父／母。
          source:
            id: s_hmMoCGKEVs9DmWrF6FoLF7
            source_type: api_record
            title: 中国历代人物传记资料库：王道照（CBDB 223213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223213&o=json
            external_identifier: CBDB:223213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HDdq36p5d728xQPFsnRJHe
        status: active
        display_name: 王道照
        merged_into_person_id: null
    - claim:
        id: c_QYQOs9GRGPYBu4olbQ_bk6
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J8WXMG4xeiMoDK19KJbUdL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NaWgYLZbKH9tG8Mly07Uwn
          claim_id: c_QYQOs9GRGPYBu4olbQ_bk6
          source_id: s_TA-I6X522N1YXIHJrkW3xG
          stance: supports
          locator: CBDB：兄弟 王道顯（206783）之父／母 王三錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王道燫 与 王道顯 为同胞（CBDB 记「兄」），王道顯 之父／母即 王道燫 之父／母。
          source:
            id: s_TA-I6X522N1YXIHJrkW3xG
            source_type: api_record
            title: 中国历代人物传记资料库：王道燫（CBDB 223219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223219&o=json
            external_identifier: CBDB:223219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J8WXMG4xeiMoDK19KJbUdL
        status: active
        display_name: 王道燫
        merged_into_person_id: null
    - claim:
        id: c_3D2LeEwq5-ZFWxnu5a5fDF
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P5SHKNFVmuMyBCsSx61gqn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-zcI4CKvLN-m6lHZmt4xq7
          claim_id: c_3D2LeEwq5-ZFWxnu5a5fDF
          source_id: s_0Sl2oK5WDtbX5xjfypUNLk
          stance: supports
          locator: CBDB：兄弟 王道顯（206783）之父／母 王三錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王道烋 与 王道顯 为同胞（CBDB 记「兄」），王道顯 之父／母即 王道烋 之父／母。
          source:
            id: s_0Sl2oK5WDtbX5xjfypUNLk
            source_type: api_record
            title: 中国历代人物传记资料库：王道烋（CBDB 223220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223220&o=json
            external_identifier: CBDB:223220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P5SHKNFVmuMyBCsSx61gqn
        status: active
        display_name: 王道烋
        merged_into_person_id: null
    - claim:
        id: c_9xGNzUrdHCoTDleEPU10G0
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PDL3VDZj4haGK2qHH3HKqQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aZAKNmDRFx5-DqcYoAvpeq
          claim_id: c_9xGNzUrdHCoTDleEPU10G0
          source_id: s_RDvgE0wwKToFBK2GTnu4um
          stance: supports
          locator: CBDB：兄弟 王道顯（206783）之父／母 王三錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王道默 与 王道顯 为同胞（CBDB 记「兄」），王道顯 之父／母即 王道默 之父／母。
          source:
            id: s_RDvgE0wwKToFBK2GTnu4um
            source_type: api_record
            title: 中国历代人物传记资料库：王道默（CBDB 223214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223214&o=json
            external_identifier: CBDB:223214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PDL3VDZj4haGK2qHH3HKqQ
        status: active
        display_name: 王道默
        merged_into_person_id: null
    - claim:
        id: c_5roO5T2uuh5jPczO3OtiTp
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XLdA4tWCJmmxH1dYR6uzPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oESlhtTWG13Z3tUfaBazeg
          claim_id: c_5roO5T2uuh5jPczO3OtiTp
          source_id: s_Sz0C2DkWuVhDGisiBcV5RC
          stance: supports
          locator: CBDB：兄弟 王道顯（206783）之父／母 王三錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王道謙 与 王道顯 为同胞（CBDB 记「兄」），王道顯 之父／母即 王道謙 之父／母。
          source:
            id: s_Sz0C2DkWuVhDGisiBcV5RC
            source_type: api_record
            title: 中国历代人物传记资料库：王道謙（CBDB 223218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223218&o=json
            external_identifier: CBDB:223218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XLdA4tWCJmmxH1dYR6uzPv
        status: active
        display_name: 王道謙
        merged_into_person_id: null
    - claim:
        id: c_OeLRCVRq_u51-RSya425Vl
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJdAruApB817Ertmj7WUCY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_17wYPrpS_Gk9esQNHEOdFa
          claim_id: c_OeLRCVRq_u51-RSya425Vl
          source_id: s_oI1LBtF4NzuAZXBEDeH--A
          stance: supports
          locator: CBDB：兄弟 王道顯（206783）之父／母 王三錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王道熙 与 王道顯 为同胞（CBDB 记「弟」），王道顯 之父／母即 王道熙 之父／母。
          source:
            id: s_oI1LBtF4NzuAZXBEDeH--A
            source_type: api_record
            title: 中国历代人物传记资料库：王道熙（CBDB 223211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223211&o=json
            external_identifier: CBDB:223211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eJdAruApB817Ertmj7WUCY
        status: active
        display_name: 王道熙
        merged_into_person_id: null
    - claim:
        id: c_-vb4boD0isBNhFsSdBdDdS
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mcCJ5P519FqmxM89fCEzw7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NeuQ4RW-vbeDsKA1SO-SID
          claim_id: c_-vb4boD0isBNhFsSdBdDdS
          source_id: s_z0XSDtn_AayylI1Wc1wQrS
          stance: supports
          locator: CBDB：兄弟 王道顯（206783）之父／母 王三錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王道蒸 与 王道顯 为同胞（CBDB 记「兄」），王道顯 之父／母即 王道蒸 之父／母。
          source:
            id: s_z0XSDtn_AayylI1Wc1wQrS
            source_type: api_record
            title: 中国历代人物传记资料库：王道蒸（CBDB 223212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223212&o=json
            external_identifier: CBDB:223212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mcCJ5P519FqmxM89fCEzw7
        status: active
        display_name: 王道蒸
        merged_into_person_id: null
    - claim:
        id: c_KBJ52dvkz8Gl6Pc1cdBxiL
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oteUg5GG4Z29dHfjXyz1Nz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gl6ser87RIH9nV3G4QyPnj
          claim_id: c_KBJ52dvkz8Gl6Pc1cdBxiL
          source_id: s_YfGJFKD6QFEMCyJ8YI_8cQ
          stance: supports
          locator: CBDB：兄弟 王道顯（206783）之父／母 王三錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王道煦 与 王道顯 为同胞（CBDB 记「兄」），王道顯 之父／母即 王道煦 之父／母。
          source:
            id: s_YfGJFKD6QFEMCyJ8YI_8cQ
            source_type: api_record
            title: 中国历代人物传记资料库：王道煦（CBDB 223217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223217&o=json
            external_identifier: CBDB:223217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oteUg5GG4Z29dHfjXyz1Nz
        status: active
        display_name: 王道煦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| bio.summary | 王三錫，明人物。萬曆十一年進士，籍贯同安。（中国历代人物传记资料库 CBDB 223208） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7J92XTKdKB1ZCqpjcGmNN6 | 王道顯 | accepted |
| children | p_HDdq36p5d728xQPFsnRJHe | 王道照 | accepted |
| children | p_J8WXMG4xeiMoDK19KJbUdL | 王道燫 | accepted |
| children | p_P5SHKNFVmuMyBCsSx61gqn | 王道烋 | accepted |
| children | p_PDL3VDZj4haGK2qHH3HKqQ | 王道默 | accepted |
| children | p_XLdA4tWCJmmxH1dYR6uzPv | 王道謙 | accepted |
| children | p_eJdAruApB817Ertmj7WUCY | 王道熙 | accepted |
| children | p_mcCJ5P519FqmxM89fCEzw7 | 王道蒸 | accepted |
| children | p_oteUg5GG4Z29dHfjXyz1Nz | 王道煦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道燫（CBDB 223219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223219&o=json)
- [中国历代人物传记资料库：王道默（CBDB 223214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223214&o=json)
- [中国历代人物传记资料库：王道謙（CBDB 223218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223218&o=json)
- [中国历代人物传记资料库：王道熙（CBDB 223211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223211&o=json)
- [中国历代人物传记资料库：王道烋（CBDB 223220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223220&o=json)
- [中国历代人物传记资料库：王道煦（CBDB 223217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223217&o=json)
- [中国历代人物传记资料库：王道照（CBDB 223213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223213&o=json)
- [中国历代人物传记资料库：王道蒸（CBDB 223212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223212&o=json)
- [中国历代人物传记资料库：王三錫（CBDB 223208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223208&o=json)

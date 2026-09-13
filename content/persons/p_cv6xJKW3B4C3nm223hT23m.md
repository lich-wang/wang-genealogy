---
schema: wang-person/v1
id: p_cv6xJKW3B4C3nm223hT23m
status: active
merged_into: null
display_name: 王璋
cbdb_id: 175457
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gFTCXzkbPW4FQjyyX8gUSw
        subject_person_id: p_cv6xJKW3B4C3nm223hT23m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋（卒于856年），唐人物。籍贯咸陽，曾任兵曹參軍。（中国历代人物传记资料库 CBDB 175457）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_s1PNG5DGceEpjtrhH5vrdx
          claim_id: c_gFTCXzkbPW4FQjyyX8gUSw
          source_id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
            source_type: api_record
            title: 维基数据：王璋（Q45660786）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660786
            external_identifier: Q45660786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_PKX9Mn-KpGjfWpKbxo_rMT
          claim_id: c_gFTCXzkbPW4FQjyyX8gUSw
          source_id: s_SNtDRKwNHPnrCYNgCpMrup
          stance: supports
          locator: CBDB:175457
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SNtDRKwNHPnrCYNgCpMrup
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璋（175457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175457&o=json
            external_identifier: CBDB:175457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.631Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AZP9NMBAeZ4H8gTYD3y79g
        subject_person_id: p_cv6xJKW3B4C3nm223hT23m
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 856年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0856-01-01
            latest: 0856-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6dj6q5aFKpMzhYcCKCPDc9
          claim_id: c_AZP9NMBAeZ4H8gTYD3y79g
          source_id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
            source_type: api_record
            title: 维基数据：王璋（Q45660786）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660786
            external_identifier: Q45660786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z7y98J2NZLkCisS5AxUDXz
        subject_person_id: p_cv6xJKW3B4C3nm223hT23m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1jG6QAnySyC81pHHwHYeBR
          claim_id: c_Z7y98J2NZLkCisS5AxUDXz
          source_id: s_SNtDRKwNHPnrCYNgCpMrup
          stance: supports
          locator: Q45660786
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_MP2XpWXLC6m5k9x7GpjVdb
          claim_id: c_Z7y98J2NZLkCisS5AxUDXz
          source_id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
          stance: supports
          locator: Q45660786
          quotation: null
          interpretation_note: null
          source:
            id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
            source_type: api_record
            title: 维基数据：王璋（Q45660786）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660786
            external_identifier: Q45660786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hEYB9Vfy48KtfTuHdCGfgN
        subject_person_id: p_7Sw9K7A1yKfAGjLy668sdN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cv6xJKW3B4C3nm223hT23m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GPpB7oXB3PKPFnguE2BzGJ
          claim_id: c_hEYB9Vfy48KtfTuHdCGfgN
          source_id: s_YUnocS5U1RNEsYPWN9UXCu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_YUnocS5U1RNEsYPWN9UXCu
            source_type: api_record
            title: 维基数据：王源茂（Q45660727）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660727
            external_identifier: Q45660727
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_mXmAaRXAqN9EXaThxuLxtK
          claim_id: c_hEYB9Vfy48KtfTuHdCGfgN
          source_id: s_7YFFpnvvG3i8FxcmdFVQtK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7YFFpnvvG3i8FxcmdFVQtK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源茂（175456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175456&o=json
            external_identifier: CBDB:175456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.591Z
            metadata_json: null
        - id: cs_r4NEYBc8DR31srL1TSchYv
          claim_id: c_hEYB9Vfy48KtfTuHdCGfgN
          source_id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
            source_type: api_record
            title: 维基数据：王璋（Q45660786）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660786
            external_identifier: Q45660786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_z2G8N6yMJHCXBRHpZ2wobP
          claim_id: c_hEYB9Vfy48KtfTuHdCGfgN
          source_id: s_SNtDRKwNHPnrCYNgCpMrup
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_SNtDRKwNHPnrCYNgCpMrup
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璋（175457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175457&o=json
            external_identifier: CBDB:175457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.631Z
            metadata_json: null
      object_person:
        id: p_7Sw9K7A1yKfAGjLy668sdN
        status: active
        display_name: 王源茂
        merged_into_person_id: null
  children:
    - claim:
        id: c_S8YG6bCUeQ7mqoi6N6ckdZ
        subject_person_id: p_cv6xJKW3B4C3nm223hT23m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vb2KwBBmUwa8SQ65jWAPso
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9Bpm9D4kYR67bMmy5rwuD3
          claim_id: c_S8YG6bCUeQ7mqoi6N6ckdZ
          source_id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
            source_type: api_record
            title: 维基数据：王璋（Q45660786）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660786
            external_identifier: Q45660786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_k1jsbg7C7KME3KfcGBd9QB
          claim_id: c_S8YG6bCUeQ7mqoi6N6ckdZ
          source_id: s_SNtDRKwNHPnrCYNgCpMrup
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_SNtDRKwNHPnrCYNgCpMrup
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璋（175457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175457&o=json
            external_identifier: CBDB:175457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.631Z
            metadata_json: null
        - id: cs_bdN2ZEsAj3roEQMZTPn3DU
          claim_id: c_S8YG6bCUeQ7mqoi6N6ckdZ
          source_id: s_tczUnD4Jq6enH8PJ5ZoSvx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tczUnD4Jq6enH8PJ5ZoSvx
            source_type: api_record
            title: 维基数据：王晋（Q45660849）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660849
            external_identifier: Q45660849
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.027Z
            metadata_json: null
        - id: cs_2A1C8ArgKFsXshGhuPgfT2
          claim_id: c_S8YG6bCUeQ7mqoi6N6ckdZ
          source_id: s_L5Z9mN2cWUJ2v1yLQCaJW4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_L5Z9mN2cWUJ2v1yLQCaJW4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晉（175458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175458&o=json
            external_identifier: CBDB:175458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:12.177Z
            metadata_json: null
      object_person:
        id: p_vb2KwBBmUwa8SQ65jWAPso
        status: active
        display_name: 王晋
        merged_into_person_id: null
    - claim:
        id: c_vELV7U6Yji32sfBnMMLrWA
        subject_person_id: p_cv6xJKW3B4C3nm223hT23m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JNKNMBP2nvFqL4mqrnwAbz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DzEgvJoFPWmGLmGVBTeYQn
          claim_id: c_vELV7U6Yji32sfBnMMLrWA
          source_id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
            source_type: api_record
            title: 维基数据：王璋（Q45660786）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660786
            external_identifier: Q45660786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_tjnHBkw62CUZyGUNV9NDWE
          claim_id: c_vELV7U6Yji32sfBnMMLrWA
          source_id: s_SNtDRKwNHPnrCYNgCpMrup
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_SNtDRKwNHPnrCYNgCpMrup
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璋（175457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175457&o=json
            external_identifier: CBDB:175457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.631Z
            metadata_json: null
        - id: cs_5WieAzaE16pyPN4D7o3MzY
          claim_id: c_vELV7U6Yji32sfBnMMLrWA
          source_id: s_oGdhpTsPjB4xrcfTBtCLfm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_oGdhpTsPjB4xrcfTBtCLfm
            source_type: api_record
            title: 维基数据：王存（Q45660909）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660909
            external_identifier: Q45660909
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.028Z
            metadata_json: null
        - id: cs_59rSThZaX3Q8RKQJ8eCsy3
          claim_id: c_vELV7U6Yji32sfBnMMLrWA
          source_id: s_c64HaxFgUBSkBrJ7jD31iV
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_c64HaxFgUBSkBrJ7jD31iV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王存（175459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175459&o=json
            external_identifier: CBDB:175459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:12.189Z
            metadata_json: null
      object_person:
        id: p_JNKNMBP2nvFqL4mqrnwAbz
        status: active
        display_name: 王存
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王璋（卒于856年），唐人物。籍贯咸陽，曾任兵曹參軍。（中国历代人物传记资料库 CBDB 175457） | accepted |
| death.date | 856年 | accepted |
| name.primary | 王璋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7Sw9K7A1yKfAGjLy668sdN | 王源茂 | accepted |
| children | p_vb2KwBBmUwa8SQ65jWAPso | 王晋 | accepted |
| children | p_JNKNMBP2nvFqL4mqrnwAbz | 王存 | accepted |

## 外部来源

- [维基数据：王存（Q45660909）](https://www.wikidata.org/wiki/Q45660909)
- [维基数据：王晋（Q45660849）](https://www.wikidata.org/wiki/Q45660849)
- [维基数据：王源茂（Q45660727）](https://www.wikidata.org/wiki/Q45660727)
- [维基数据：王璋（Q45660786）](https://www.wikidata.org/wiki/Q45660786)
- [CBDB 中国历代人物传记资料库：王存（175459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175459&o=json)
- [CBDB 中国历代人物传记资料库：王晉（175458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175458&o=json)
- [CBDB 中国历代人物传记资料库：王源茂（175456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175456&o=json)
- [CBDB 中国历代人物传记资料库：王璋（175457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175457&o=json)

---
schema: wang-person/v1
id: p_3c3tQqXdmv6oNaCqp7pULH
status: active
merged_into: null
display_name: 王佛奴
cbdb_id: 175600
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QBC3VEJ1wkvP6FZc7DMULb
        subject_person_id: p_3c3tQqXdmv6oNaCqp7pULH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佛奴（卒于783年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175600）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_xsb3QeGfjhjfNJ9JWAt6w4
          claim_id: c_QBC3VEJ1wkvP6FZc7DMULb
          source_id: s_eKcGM4UeZaLQRALPeZtRb6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eKcGM4UeZaLQRALPeZtRb6
            source_type: api_record
            title: 维基数据：王佛奴（Q45668573）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668573
            external_identifier: Q45668573
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.482Z
            metadata_json: null
        - id: cs_gSvHZLLWB14lovrbWWN0aV
          claim_id: c_QBC3VEJ1wkvP6FZc7DMULb
          source_id: s_DxDGH6VB79cS4H7NYRV8oB
          stance: supports
          locator: CBDB:175600
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DxDGH6VB79cS4H7NYRV8oB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佛奴（175600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175600&o=json
            external_identifier: CBDB:175600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.674Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_U355sxfDBtWmAT8cFFiCaj
        subject_person_id: p_3c3tQqXdmv6oNaCqp7pULH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C4fByD86dEWCACFVprVRau
          claim_id: c_U355sxfDBtWmAT8cFFiCaj
          source_id: s_eKcGM4UeZaLQRALPeZtRb6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eKcGM4UeZaLQRALPeZtRb6
            source_type: api_record
            title: 维基数据：王佛奴（Q45668573）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668573
            external_identifier: Q45668573
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.482Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vpDERuxAcW36rSqf2xKHpo
        subject_person_id: p_3c3tQqXdmv6oNaCqp7pULH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佛奴
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EWXkNAkw1Kna7iWj4UKFdw
          claim_id: c_vpDERuxAcW36rSqf2xKHpo
          source_id: s_DxDGH6VB79cS4H7NYRV8oB
          stance: supports
          locator: Q45668573
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_MjPfSoMD3LJX5N7FMwMMyb
          claim_id: c_vpDERuxAcW36rSqf2xKHpo
          source_id: s_eKcGM4UeZaLQRALPeZtRb6
          stance: supports
          locator: Q45668573
          quotation: null
          interpretation_note: null
          source:
            id: s_eKcGM4UeZaLQRALPeZtRb6
            source_type: api_record
            title: 维基数据：王佛奴（Q45668573）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668573
            external_identifier: Q45668573
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.482Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_smwCTgr9R2mkqWY11Fh8ph
        subject_person_id: p_4x7eJgoh5LankFk1Sq6um4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3c3tQqXdmv6oNaCqp7pULH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LUGheQsRHiVtSS6LQaqQxH
          claim_id: c_smwCTgr9R2mkqWY11Fh8ph
          source_id: s_wn4qsWnKRcEe1cwo1fM5fB
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wn4qsWnKRcEe1cwo1fM5fB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侗（175599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175599&o=json
            external_identifier: CBDB:175599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.328Z
            metadata_json: null
        - id: cs_sQRu1M3MuqQAHYUtSEyBqS
          claim_id: c_smwCTgr9R2mkqWY11Fh8ph
          source_id: s_8cK6Us3cWJD533GfAR4DYP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8cK6Us3cWJD533GfAR4DYP
            source_type: api_record
            title: 维基数据：王侗（Q45668522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668522
            external_identifier: Q45668522
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.183Z
            metadata_json: null
        - id: cs_KuwjZYBq9G5BWr7hT2iAnH
          claim_id: c_smwCTgr9R2mkqWY11Fh8ph
          source_id: s_eKcGM4UeZaLQRALPeZtRb6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eKcGM4UeZaLQRALPeZtRb6
            source_type: api_record
            title: 维基数据：王佛奴（Q45668573）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668573
            external_identifier: Q45668573
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.482Z
            metadata_json: null
        - id: cs_dJTpSVd8gCwXNpJpYKzft3
          claim_id: c_smwCTgr9R2mkqWY11Fh8ph
          source_id: s_DxDGH6VB79cS4H7NYRV8oB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_DxDGH6VB79cS4H7NYRV8oB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佛奴（175600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175600&o=json
            external_identifier: CBDB:175600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.674Z
            metadata_json: null
      object_person:
        id: p_4x7eJgoh5LankFk1Sq6um4
        status: active
        display_name: 王侗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佛奴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佛奴（卒于783年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175600） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王佛奴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4x7eJgoh5LankFk1Sq6um4 | 王侗 | accepted |

## 外部来源

- [维基数据：王侗（Q45668522）](https://www.wikidata.org/wiki/Q45668522)
- [维基数据：王佛奴（Q45668573）](https://www.wikidata.org/wiki/Q45668573)
- [CBDB 中国历代人物传记资料库：王侗（175599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175599&o=json)
- [CBDB 中国历代人物传记资料库：王佛奴（175600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175600&o=json)

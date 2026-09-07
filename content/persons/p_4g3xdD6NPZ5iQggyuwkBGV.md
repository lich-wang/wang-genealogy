---
schema: wang-person/v1
id: p_4g3xdD6NPZ5iQggyuwkBGV
status: active
merged_into: null
display_name: 王令
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E6EvDSQ2oDbpH9c0AJXLrU
        subject_person_id: p_4g3xdD6NPZ5iQggyuwkBGV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令（1032年—1059年7月6日）（卒年據王安石〈王逢原墓誌銘〉反推，另有記載王令卒於當年農曆六月二日），字逢原，初字鍾美，原籍大名元城（今屬河北大名縣），長於廣陵（今江蘇揚州市），故以廣陵人自居。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Wmpd8TBZXBaxSH0oG3tT7o
          claim_id: c_E6EvDSQ2oDbpH9c0AJXLrU
          source_id: s_7WuNtZBG-5N1MHkgzEYmBU
          stance: supports
          locator: 导言
          quotation: 王令（1032年—1059年7月6日）（卒年據王安石〈王逢原墓誌
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_7WuNtZBG-5N1MHkgzEYmBU
            source_type: website
            title: 中文维基百科：王令
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%A4
            external_identifier: Q2898768
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cHLwZWgUP5w4xxoi4W5YLo
        subject_person_id: p_4g3xdD6NPZ5iQggyuwkBGV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Pf5aFjWfHh9LCQEsjMuT5Z
          claim_id: c_cHLwZWgUP5w4xxoi4W5YLo
          source_id: s_GLcyDDdar5Kc7itiDLtcrm
          stance: supports
          locator: Q2898768
          quotation: null
          interpretation_note: null
          source:
            id: s_GLcyDDdar5Kc7itiDLtcrm
            source_type: api_record
            title: 维基数据：王令（Q2898768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2898768
            external_identifier: Q2898768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:47.540Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%A4
        - id: cs_Rec2FELi1Xnybag87Dqg3D
          claim_id: c_cHLwZWgUP5w4xxoi4W5YLo
          source_id: s_UujRkoKDckHvRd6QNdW5e2
          stance: supports
          locator: Q2898768
          quotation: null
          interpretation_note: null
          source:
            id: s_UujRkoKDckHvRd6QNdW5e2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王令（3967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3967&o=json
            external_identifier: CBDB:3967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:47.707Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jeHPgTnzJMC1jJQ3TLvA9A
        subject_person_id: p_hb1chaQQ5nNJHx6CneR37f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4g3xdD6NPZ5iQggyuwkBGV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7rcP4BuV7M8FUL2zT5fNpN
          claim_id: c_jeHPgTnzJMC1jJQ3TLvA9A
          source_id: s_UujRkoKDckHvRd6QNdW5e2
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_UujRkoKDckHvRd6QNdW5e2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王令（3967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3967&o=json
            external_identifier: CBDB:3967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:47.707Z
            metadata_json: null
        - id: cs_f9wqWkx6YDAMrL2Ziok9ZE
          claim_id: c_jeHPgTnzJMC1jJQ3TLvA9A
          source_id: s_GLcyDDdar5Kc7itiDLtcrm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GLcyDDdar5Kc7itiDLtcrm
            source_type: api_record
            title: 维基数据：王令（Q2898768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2898768
            external_identifier: Q2898768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:47.540Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%A4
        - id: cs_C7kkpPMJAEiFpiGtmBf7z1
          claim_id: c_jeHPgTnzJMC1jJQ3TLvA9A
          source_id: s_RWUcMwDfJPWLNRTZEHqpJC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RWUcMwDfJPWLNRTZEHqpJC
            source_type: api_record
            title: 维基数据：王世伦（Q45402028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402028
            external_identifier: Q45402028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:14.226Z
            metadata_json: null
        - id: cs_zQHb5omDZVxRbwaG6LP9gi
          claim_id: c_jeHPgTnzJMC1jJQ3TLvA9A
          source_id: s_cEKmM4xL1FPpk4omq9j1FQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_cEKmM4xL1FPpk4omq9j1FQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世倫（22201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22201&o=json
            external_identifier: CBDB:22201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:40:14.384Z
            metadata_json: null
      object_person:
        id: p_hb1chaQQ5nNJHx6CneR37f
        status: active
        display_name: 王世伦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ojNeHS24s2HareuGKtWJCL
        subject_person_id: p_4g3xdD6NPZ5iQggyuwkBGV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_H57wFvKcGMBv78q4Myh1Bn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_DUuJ5aaKe6bEZ9zDt2RRgH
          claim_id: c_ojNeHS24s2HareuGKtWJCL
          source_id: s_GAyno7PFX3Cw6UaDPzzWaV
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_GAyno7PFX3Cw6UaDPzzWaV
            source_type: api_record
            title: 维基数据：吴氏（Q45364104）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364104
            external_identifier: Q45364104
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:36.508Z
            metadata_json: null
        - id: cs_S3NBFrE2FAHpxSZbGgqoW8
          claim_id: c_ojNeHS24s2HareuGKtWJCL
          source_id: s_h7DN2KUR3A1fW3nCqDREcn
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_h7DN2KUR3A1fW3nCqDREcn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳氏（5135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5135&o=json
            external_identifier: CBDB:5135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:36.661Z
            metadata_json: null
        - id: cs_LUWfaGJ32NRpVJRKQky9eo
          claim_id: c_ojNeHS24s2HareuGKtWJCL
          source_id: s_GLcyDDdar5Kc7itiDLtcrm
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_GLcyDDdar5Kc7itiDLtcrm
            source_type: api_record
            title: 维基数据：王令（Q2898768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2898768
            external_identifier: Q2898768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:47.540Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%A4
        - id: cs_bwrnGRnaNi8z6kzt56Pifo
          claim_id: c_ojNeHS24s2HareuGKtWJCL
          source_id: s_UujRkoKDckHvRd6QNdW5e2
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_UujRkoKDckHvRd6QNdW5e2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王令（3967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3967&o=json
            external_identifier: CBDB:3967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:47.707Z
            metadata_json: null
      object_person:
        id: p_H57wFvKcGMBv78q4Myh1Bn
        status: active
        display_name: 吴氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王令

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王令（1032年—1059年7月6日）（卒年據王安石〈王逢原墓誌銘〉反推，另有記載王令卒於當年農曆六月二日），字逢原，初字鍾美，原籍大名元城（今屬河北大名縣），長於廣陵（今江蘇揚州市），故以廣陵人自居。 | accepted |
| name.primary | 王令 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hb1chaQQ5nNJHx6CneR37f | 王世伦 | accepted |
| spouses | p_H57wFvKcGMBv78q4Myh1Bn | 吴氏 | accepted |

## 外部来源

- [维基数据：王令（Q2898768）](https://www.wikidata.org/wiki/Q2898768)
- [维基数据：王世伦（Q45402028）](https://www.wikidata.org/wiki/Q45402028)
- [维基数据：吴氏（Q45364104）](https://www.wikidata.org/wiki/Q45364104)
- [中文维基百科：王令](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%A4)
- [CBDB 中国历代人物传记资料库：王令（3967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3967&o=json)
- [CBDB 中国历代人物传记资料库：王世倫（22201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22201&o=json)
- [CBDB 中国历代人物传记资料库：吳氏（5135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5135&o=json)

---
schema: wang-person/v1
id: p_5eTXvYXgYni5cRv9jFh1WH
status: active
merged_into: null
display_name: 王知古
cbdb_id: 175439
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BRjmp9wN86CcB44dfVQwgx
        subject_person_id: p_5eTXvYXgYni5cRv9jFh1WH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知古（卒于931年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175439）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_F7HL59ybvy2LRpKoQuK83a
          claim_id: c_BRjmp9wN86CcB44dfVQwgx
          source_id: s_JA5qpSN4QPREHvrR12XWEK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_JA5qpSN4QPREHvrR12XWEK
            source_type: api_record
            title: 维基数据：王知古（Q45659711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659711
            external_identifier: Q45659711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.554Z
            metadata_json: null
        - id: cs_WhyiK4P3-utnWkwLFwPWlY
          claim_id: c_BRjmp9wN86CcB44dfVQwgx
          source_id: s_7JwPChwJUFiF5s8KuM3FV4
          stance: supports
          locator: CBDB:175439
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7JwPChwJUFiF5s8KuM3FV4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知古（175439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175439&o=json
            external_identifier: CBDB:175439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.737Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kusprweSvAgHRFAhZfrFss
        subject_person_id: p_5eTXvYXgYni5cRv9jFh1WH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 931年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0931-01-01
            latest: 0931-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H4Gz5duEHYrMnUdh5w8ef2
          claim_id: c_kusprweSvAgHRFAhZfrFss
          source_id: s_JA5qpSN4QPREHvrR12XWEK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_JA5qpSN4QPREHvrR12XWEK
            source_type: api_record
            title: 维基数据：王知古（Q45659711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659711
            external_identifier: Q45659711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.554Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jvUC7wdb3T9VgUik3TguJh
        subject_person_id: p_5eTXvYXgYni5cRv9jFh1WH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知古
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C8cPz5vcfPZFrocMdwjMQ9
          claim_id: c_jvUC7wdb3T9VgUik3TguJh
          source_id: s_7JwPChwJUFiF5s8KuM3FV4
          stance: supports
          locator: Q45659711
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_xeV7nQQ4kDdHyB2kCjhCsL
          claim_id: c_jvUC7wdb3T9VgUik3TguJh
          source_id: s_JA5qpSN4QPREHvrR12XWEK
          stance: supports
          locator: Q45659711
          quotation: null
          interpretation_note: null
          source:
            id: s_JA5qpSN4QPREHvrR12XWEK
            source_type: api_record
            title: 维基数据：王知古（Q45659711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659711
            external_identifier: Q45659711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.554Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ugZ2KVmF8kM987ohkWrvGG
        subject_person_id: p_kV8VX5GGaT2N2wTmkZoPM2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5eTXvYXgYni5cRv9jFh1WH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YWVcX3zAVG75AUNh3XYZNa
          claim_id: c_ugZ2KVmF8kM987ohkWrvGG
          source_id: s_mFWBf4QkzW5W2Spkfrwe8e
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_mFWBf4QkzW5W2Spkfrwe8e
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潀（175437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175437&o=json
            external_identifier: CBDB:175437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.478Z
            metadata_json: null
        - id: cs_nT8sXiDqAEFrAPBxaq1aJC
          claim_id: c_ugZ2KVmF8kM987ohkWrvGG
          source_id: s_5tBeZoikUSXNz2QHdno8G8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5tBeZoikUSXNz2QHdno8G8
            source_type: api_record
            title: 维基数据：王潀（Q45659594）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659594
            external_identifier: Q45659594
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_Mn3XH5hZ3xbAF2UyndDnBT
          claim_id: c_ugZ2KVmF8kM987ohkWrvGG
          source_id: s_JA5qpSN4QPREHvrR12XWEK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JA5qpSN4QPREHvrR12XWEK
            source_type: api_record
            title: 维基数据：王知古（Q45659711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659711
            external_identifier: Q45659711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.554Z
            metadata_json: null
        - id: cs_dkppW3V8QHib9Qix2ey9H7
          claim_id: c_ugZ2KVmF8kM987ohkWrvGG
          source_id: s_7JwPChwJUFiF5s8KuM3FV4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7JwPChwJUFiF5s8KuM3FV4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知古（175439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175439&o=json
            external_identifier: CBDB:175439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.737Z
            metadata_json: null
      object_person:
        id: p_kV8VX5GGaT2N2wTmkZoPM2
        status: active
        display_name: 王潀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王知古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王知古（卒于931年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175439） | accepted |
| death.date | 931年 | accepted |
| name.primary | 王知古 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kV8VX5GGaT2N2wTmkZoPM2 | 王潀 | accepted |

## 外部来源

- [维基数据：王潀（Q45659594）](https://www.wikidata.org/wiki/Q45659594)
- [维基数据：王知古（Q45659711）](https://www.wikidata.org/wiki/Q45659711)
- [CBDB 中国历代人物传记资料库：王潀（175437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175437&o=json)
- [CBDB 中国历代人物传记资料库：王知古（175439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175439&o=json)

---
schema: wang-person/v1
id: p_xTUQkpHtgJpkRB8hx9DSUD
status: active
merged_into: null
display_name: 王以旗
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_95sD-rWABAl7QZ6K_pbi6J
        subject_person_id: p_xTUQkpHtgJpkRB8hx9DSUD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以旗（1486年—1553年），史料所见人物。本项目依据《王以旗》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_s7UvlRbgAG5schBSJx7a00
          claim_id: c_95sD-rWABAl7QZ6K_pbi6J
          source_id: s_7NsrDwMNaCv8dkJCGJP3NP
          stance: supports
          locator: Q15916579
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7NsrDwMNaCv8dkJCGJP3NP
            source_type: api_record
            title: 维基数据：王以旗（Q15916579）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916579
            external_identifier: Q15916579
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:20.057Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aTWCSkDmDx82dtxy9aHKgX
        subject_person_id: p_xTUQkpHtgJpkRB8hx9DSUD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1486年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1486-01-01
            latest: 1486-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8jMNiK4rwsqjw4Gha93xZz
          claim_id: c_aTWCSkDmDx82dtxy9aHKgX
          source_id: s_7NsrDwMNaCv8dkJCGJP3NP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7NsrDwMNaCv8dkJCGJP3NP
            source_type: api_record
            title: 维基数据：王以旗（Q15916579）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916579
            external_identifier: Q15916579
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:20.057Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oK6M6DLdXPkCGaMLnowDpg
        subject_person_id: p_xTUQkpHtgJpkRB8hx9DSUD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1553-01-01
            latest: 1553-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KL1fXctbQ5Qb1soj4GqYwk
          claim_id: c_oK6M6DLdXPkCGaMLnowDpg
          source_id: s_7NsrDwMNaCv8dkJCGJP3NP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7NsrDwMNaCv8dkJCGJP3NP
            source_type: api_record
            title: 维基数据：王以旗（Q15916579）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916579
            external_identifier: Q15916579
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:20.057Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E1VXFknqdtqtMWjmELEevx
        subject_person_id: p_xTUQkpHtgJpkRB8hx9DSUD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以旗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BzkxtGKx5WKxavY692RGaU
          claim_id: c_E1VXFknqdtqtMWjmELEevx
          source_id: s_7NsrDwMNaCv8dkJCGJP3NP
          stance: supports
          locator: Q15916579
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FTKvMumAHJW25Bo98hMwgU
        subject_person_id: p_BdmxytotV7zqZnEBKrEUyP
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_xTUQkpHtgJpkRB8hx9DSUD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_acY1UcJWXAXnWno4BL5oKK
          claim_id: c_FTKvMumAHJW25Bo98hMwgU
          source_id: s_7NsrDwMNaCv8dkJCGJP3NP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7NsrDwMNaCv8dkJCGJP3NP
            source_type: api_record
            title: 维基数据：王以旗（Q15916579）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916579
            external_identifier: Q15916579
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:20.057Z
            metadata_json: null
        - id: cs_rxSG8Z9QFGWVCFfA8FymVD
          claim_id: c_FTKvMumAHJW25Bo98hMwgU
          source_id: s_jwpL4YCme3VDd3qJnCQEE4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jwpL4YCme3VDd3qJnCQEE4
            source_type: api_record
            title: 维基数据：王纶（Q45663776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663776
            external_identifier: Q45663776
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
      object_person:
        id: p_BdmxytotV7zqZnEBKrEUyP
        status: active
        display_name: 王纶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KxDEXyTY1BMyufG3YQnfN1
        subject_person_id: p_tfSbnDZBoDF5ziKNcDfpiV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xTUQkpHtgJpkRB8hx9DSUD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KQW7SEWHkRBwa83MmAH53g
          claim_id: c_KxDEXyTY1BMyufG3YQnfN1
          source_id: s_N21CQGoT75S7JrPHXf1yE7
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_N21CQGoT75S7JrPHXf1yE7
            source_type: api_record
            title: 维基数据：刘氏（Q65886390）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65886390
            external_identifier: Q65886390
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:43.085Z
            metadata_json: null
        - id: cs_QTdqbMHyYDJXtjXeByfKhU
          claim_id: c_KxDEXyTY1BMyufG3YQnfN1
          source_id: s_7NsrDwMNaCv8dkJCGJP3NP
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7NsrDwMNaCv8dkJCGJP3NP
            source_type: api_record
            title: 维基数据：王以旗（Q15916579）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916579
            external_identifier: Q15916579
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:20.057Z
            metadata_json: null
        - id: cs_U54cYtT7CS1wCUZjKSw3bT
          claim_id: c_KxDEXyTY1BMyufG3YQnfN1
          source_id: s_LpRfHxwqaFL8QHAc3ubuRB
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：正德六年進士登科錄:一卷
          source:
            id: s_LpRfHxwqaFL8QHAc3ubuRB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王以旂（68257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68257&o=json
            external_identifier: CBDB:68257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:25.756Z
            metadata_json: null
      object_person:
        id: p_tfSbnDZBoDF5ziKNcDfpiV
        status: active
        display_name: 刘氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王以旗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以旗（1486年—1553年），史料所见人物。本项目依据《王以旗》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1486年 | accepted |
| death.date | 1553年 | accepted |
| name.primary | 王以旗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BdmxytotV7zqZnEBKrEUyP | 王纶 | accepted |
| spouses | p_tfSbnDZBoDF5ziKNcDfpiV | 刘氏 | accepted |

## 外部来源

- [维基数据：刘氏（Q65886390）](https://www.wikidata.org/wiki/Q65886390)
- [维基数据：王纶（Q45663776）](https://www.wikidata.org/wiki/Q45663776)
- [维基数据：王以旗（Q15916579）](https://www.wikidata.org/wiki/Q15916579)
- [CBDB 中国历代人物传记资料库：王以旂（68257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68257&o=json)

---
schema: wang-person/v1
id: p_tfSbnDZBoDF5ziKNcDfpiV
status: active
merged_into: null
display_name: 刘氏
cbdb_id: 277434
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VfNaxx_dViiq2dFWeExibH
        subject_person_id: p_tfSbnDZBoDF5ziKNcDfpiV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘氏，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 277434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_GmTvrKO27FQ6MIjxgc8g71
          claim_id: c_VfNaxx_dViiq2dFWeExibH
          source_id: s_2q7JBathLoxDKP4nVWSx3w
          stance: supports
          locator: CBDB:277434
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2q7JBathLoxDKP4nVWSx3w
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：劉氏（277434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277434&o=json
            external_identifier: CBDB:277434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:43.251Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BtwwoLWoJv5GHWZ4rWKAs3
        subject_person_id: p_tfSbnDZBoDF5ziKNcDfpiV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZbHS34c1SBCvCNtJ3GX8VV
          claim_id: c_BtwwoLWoJv5GHWZ4rWKAs3
          source_id: s_2q7JBathLoxDKP4nVWSx3w
          stance: supports
          locator: Q65886390
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_giysbekgyS4nasT358uQyS
          claim_id: c_BtwwoLWoJv5GHWZ4rWKAs3
          source_id: s_N21CQGoT75S7JrPHXf1yE7
          stance: supports
          locator: Q65886390
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
      object_person: null
    alternatives: []
relationships:
  parents: []
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
        id: p_xTUQkpHtgJpkRB8hx9DSUD
        status: active
        display_name: 王以旗
        merged_into_person_id: null
    - claim:
        id: c_f0CVVSvoQ5s_jyyEMdqhdd
        subject_person_id: p_tfSbnDZBoDF5ziKNcDfpiV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8wwauszulyHEPsxihD1aT
          claim_id: c_f0CVVSvoQ5s_jyyEMdqhdd
          source_id: s_2q7JBathLoxDKP4nVWSx3w
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第四十八名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PuUiGdtpzWdsK7wcEt3S7p
        status: active
        display_name: 王以旂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 刘氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 刘氏，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 277434） | accepted |
| name.primary | 刘氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xTUQkpHtgJpkRB8hx9DSUD | 王以旗 | accepted |
| spouses | p_PuUiGdtpzWdsK7wcEt3S7p | 王以旂 | accepted |

## 外部来源

- [维基数据：刘氏（Q65886390）](https://www.wikidata.org/wiki/Q65886390)
- [维基数据：王以旗（Q15916579）](https://www.wikidata.org/wiki/Q15916579)
- [CBDB 中国历代人物传记资料库：劉氏（277434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277434&o=json)
- [CBDB 中国历代人物传记资料库：王以旂（68257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68257&o=json)

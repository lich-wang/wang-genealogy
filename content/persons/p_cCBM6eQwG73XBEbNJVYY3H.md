---
schema: wang-person/v1
id: p_cCBM6eQwG73XBEbNJVYY3H
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 38571
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VSa0vu_9S0L9Dit20LCqgX
        subject_person_id: p_cCBM6eQwG73XBEbNJVYY3H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏，宋人物。曾任國夫人。（中国历代人物传记资料库 CBDB 38571）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rsppDq_gJbzcl-k2aoMNy_
          claim_id: c_VSa0vu_9S0L9Dit20LCqgX
          source_id: s_7xc2IoH7j0Zr1hHLOstc1L
          stance: supports
          locator: CBDB:38571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7xc2IoH7j0Zr1hHLOstc1L
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王异妻)（CBDB 38571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38571&o=json
            external_identifier: CBDB:38571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WL-fObwHpvYicYfFAD54PD
        subject_person_id: p_cCBM6eQwG73XBEbNJVYY3H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LAqT_vehtKvsQBDL1vn3R-
          claim_id: c_WL-fObwHpvYicYfFAD54PD
          source_id: s_7xc2IoH7j0Zr1hHLOstc1L
          stance: supports
          locator: CBDB:38571
          quotation: null
          interpretation_note: CBDB 明确记录的王异配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mdQJhS4rABsKkUnD1SQigZ
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cCBM6eQwG73XBEbNJVYY3H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3N7L1ab64SgaFVzH-HVyLm
          claim_id: c_mdQJhS4rABsKkUnD1SQigZ
          source_id: s_7xc2IoH7j0Zr1hHLOstc1L
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_C5gdwEP6JshLSxPa5isWtq
        status: active
        display_name: 王异
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉氏，宋人物。曾任國夫人。（中国历代人物传记资料库 CBDB 38571） | accepted |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_C5gdwEP6JshLSxPa5isWtq | 王异 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王异妻)（CBDB 38571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38571&o=json)

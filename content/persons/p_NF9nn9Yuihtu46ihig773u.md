---
schema: wang-person/v1
id: p_NF9nn9Yuihtu46ihig773u
status: active
merged_into: null
display_name: 王暹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CtDoUYwAehPGcDhaiGfMrA
        subject_person_id: p_NF9nn9Yuihtu46ihig773u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PnjncNRxxyFR3E2D1qhJZF
          claim_id: c_CtDoUYwAehPGcDhaiGfMrA
          source_id: s_VWimqdMRiRadHkL5uHkMTQ
          stance: supports
          locator: CBDB:175815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175815）
          source: &a1
            id: s_VWimqdMRiRadHkL5uHkMTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王暹（CBDB 175815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175815&o=json
            external_identifier: CBDB:175815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ReCDkWL7pZVGbAP82ZUVkC
        subject_person_id: p_NF9nn9Yuihtu46ihig773u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 744年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xYcgHyBFPXr6GVqdsH63H4
          claim_id: c_ReCDkWL7pZVGbAP82ZUVkC
          source_id: s_VWimqdMRiRadHkL5uHkMTQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L5P9EdJFeqH4DfemjL1JVL
        subject_person_id: p_NF9nn9Yuihtu46ihig773u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暹（卒于744年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 175815）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mS6QG-GSBPL4A_IBKMQa4S
          claim_id: c_L5P9EdJFeqH4DfemjL1JVL
          source_id: s_VWimqdMRiRadHkL5uHkMTQ
          stance: supports
          locator: CBDB:175815
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__XMavymrvhhw46w4GeQTH8
        subject_person_id: p_jMYAaLX224kkaoLQQBC5fY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NF9nn9Yuihtu46ihig773u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9m391_ldlEo0MHSSWL5_bG
          claim_id: c__XMavymrvhhw46w4GeQTH8
          source_id: s_VWimqdMRiRadHkL5uHkMTQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jMYAaLX224kkaoLQQBC5fY
        status: active
        display_name: 王溫之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王暹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暹 | accepted |
| death.date | 744年 | accepted |
| bio.summary | 王暹（卒于744年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 175815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jMYAaLX224kkaoLQQBC5fY | 王溫之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王暹（CBDB 175815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175815&o=json)

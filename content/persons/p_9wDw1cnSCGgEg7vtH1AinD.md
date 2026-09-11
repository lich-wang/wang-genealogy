---
schema: wang-person/v1
id: p_9wDw1cnSCGgEg7vtH1AinD
status: active
merged_into: null
display_name: 王思忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r2XuzEHwVrJQhcUYiiPBv5
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dF5f4vmdy2zKNaU2DpmeQr
          claim_id: c_r2XuzEHwVrJQhcUYiiPBv5
          source_id: s_WbCQ4Zq3N7evq78wfesLMK
          stance: supports
          locator: CBDB:236517
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236517）
          source: &a1
            id: s_WbCQ4Zq3N7evq78wfesLMK
            source_type: api_record
            title: 中国历代人物传记资料库：王思忠（CBDB 236517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236517&o=json
            external_identifier: CBDB:236517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o6DyoHCD6DzLPUCFGjVuBV
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fxtAbphPE4P36kNsex2j8R
          claim_id: c_o6DyoHCD6DzLPUCFGjVuBV
          source_id: s_WbCQ4Zq3N7evq78wfesLMK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_T0wjXWgqFBxXHqQWuXThBD
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fNnEAvuY1BBmarjaAEXknF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13YxwCgI-DyOw01y6qb0Fo
          claim_id: c_T0wjXWgqFBxXHqQWuXThBD
          source_id: s_WbCQ4Zq3N7evq78wfesLMK
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fNnEAvuY1BBmarjaAEXknF
        status: active
        display_name: 王時和
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思忠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fNnEAvuY1BBmarjaAEXknF | 王時和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思忠（CBDB 236517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236517&o=json)

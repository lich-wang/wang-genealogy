---
schema: wang-person/v1
id: p_PcEuQQgHX77JBLMDejCXRZ
status: active
merged_into: null
display_name: 王頎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_36bMXB8eDS6AracMoDwMBb
        subject_person_id: p_PcEuQQgHX77JBLMDejCXRZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3XN4LaHwCvdSFDGwfrWLRZ
          claim_id: c_36bMXB8eDS6AracMoDwMBb
          source_id: s_C1b7HWg38WNvktJWFRJvqU
          stance: supports
          locator: CBDB:385854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（385854）
          source: &a1
            id: s_C1b7HWg38WNvktJWFRJvqU
            source_type: api_record
            title: 中国历代人物传记资料库：王頎（CBDB 385854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385854&o=json
            external_identifier: CBDB:385854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uy9YMt1B43SAaPLUdG5XaD
        subject_person_id: p_PcEuQQgHX77JBLMDejCXRZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XA3dukBDX7otNE79bw3SB9
          claim_id: c_uy9YMt1B43SAaPLUdG5XaD
          source_id: s_C1b7HWg38WNvktJWFRJvqU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u5nDoKPA6TxuSSjMruOceW
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PcEuQQgHX77JBLMDejCXRZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cT63IdMkqkqJkabjyOUeLl
          claim_id: c_u5nDoKPA6TxuSSjMruOceW
          source_id: s_C1b7HWg38WNvktJWFRJvqU
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WFnoT4AbtuEmwq5jbDJDqe
        status: active
        display_name: 王恬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王頎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頎 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WFnoT4AbtuEmwq5jbDJDqe | 王恬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王頎（CBDB 385854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385854&o=json)

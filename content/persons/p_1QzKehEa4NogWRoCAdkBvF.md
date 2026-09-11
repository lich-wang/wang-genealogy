---
schema: wang-person/v1
id: p_1QzKehEa4NogWRoCAdkBvF
status: active
merged_into: null
display_name: 朱方來
revision: 1
cbdb_id: 54162
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7PRtBELe7SJT-8_pLtB6Un
        subject_person_id: p_1QzKehEa4NogWRoCAdkBvF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱方來，史料所见人物。本项目依据《中国历代人物传记资料库：朱方來（CBDB 54162）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-pH9KnqV7_8w04VqVXpu6I
          claim_id: c_7PRtBELe7SJT-8_pLtB6Un
          source_id: s_QpK756p1Z5zTlwWiHg27LQ
          stance: supports
          locator: CBDB:54162
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_QpK756p1Z5zTlwWiHg27LQ
            source_type: api_record
            title: 中国历代人物传记资料库：朱方來（CBDB 54162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54162&o=json
            external_identifier: CBDB:54162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ijgUpDeQ7rHoQ_JCy93w6t
        subject_person_id: p_1QzKehEa4NogWRoCAdkBvF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱方來
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LOY7JHh5Hx0N-473CZw-g_
          claim_id: c_ijgUpDeQ7rHoQ_JCy93w6t
          source_id: s_QpK756p1Z5zTlwWiHg27LQ
          stance: supports
          locator: CBDB:54162
          quotation: null
          interpretation_note: CBDB 明确记录的王慧配偶
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
        id: c_hs9YeShh738WwU6ehiTVat
        subject_person_id: p_M7QxbtTX5cCtLkq1Jhv3wM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1QzKehEa4NogWRoCAdkBvF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a3b3U8p5MzkIS5Nzqrf5h9
          claim_id: c_hs9YeShh738WwU6ehiTVat
          source_id: s_QpK756p1Z5zTlwWiHg27LQ
          stance: supports
          locator: CBDB 双向互证（丈夫 朱方來）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_M7QxbtTX5cCtLkq1Jhv3wM
        status: active
        display_name: 王慧
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱方來

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 朱方來，史料所见人物。本项目依据《中国历代人物传记资料库：朱方來（CBDB 54162）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 朱方來 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_M7QxbtTX5cCtLkq1Jhv3wM | 王慧 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱方來（CBDB 54162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54162&o=json)

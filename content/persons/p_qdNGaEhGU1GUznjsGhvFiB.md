---
schema: wang-person/v1
id: p_qdNGaEhGU1GUznjsGhvFiB
status: active
merged_into: null
display_name: 王大諫
cbdb_id: 293432
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tqAnR39RkrvsuE9ptPr3QS
        subject_person_id: p_qdNGaEhGU1GUznjsGhvFiB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大諫，史料所见人物。本项目依据《中国历代人物传记资料库：王大諫（CBDB 293432）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_SglyX_0ZgGZSFTdlRYYrYk
          claim_id: c_tqAnR39RkrvsuE9ptPr3QS
          source_id: s_AYCqoDGwnP7hea4ejkjCek
          stance: supports
          locator: CBDB:293432
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AYCqoDGwnP7hea4ejkjCek
            source_type: api_record
            title: 中国历代人物传记资料库：王大諫（CBDB 293432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293432&o=json
            external_identifier: CBDB:293432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2wy4gJoHEy37fJqXRGYsa1
        subject_person_id: p_qdNGaEhGU1GUznjsGhvFiB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jLPTqQG9BKi88d1XDgeSxU
          claim_id: c_2wy4gJoHEy37fJqXRGYsa1
          source_id: s_AYCqoDGwnP7hea4ejkjCek
          stance: supports
          locator: CBDB:293432
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qSAhQJke-dLAn2rdQ18lan
        subject_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qdNGaEhGU1GUznjsGhvFiB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i1dWN-F3BlqeAqSVjLocUr
          claim_id: c_qSAhQJke-dLAn2rdQ18lan
          source_id: s_AYCqoDGwnP7hea4ejkjCek
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AYCqoDGwnP7hea4ejkjCek
            source_type: api_record
            title: 中国历代人物传记资料库：王大諫（CBDB 293432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293432&o=json
            external_identifier: CBDB:293432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_g1ZQp25f7TDHH92Q6ePC8K
        status: active
        display_name: 王應詔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大諫，史料所见人物。本项目依据《中国历代人物传记资料库：王大諫（CBDB 293432）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王大諫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g1ZQp25f7TDHH92Q6ePC8K | 王應詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大諫（CBDB 293432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293432&o=json)

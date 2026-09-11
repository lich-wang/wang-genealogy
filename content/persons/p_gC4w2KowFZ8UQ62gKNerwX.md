---
schema: wang-person/v1
id: p_gC4w2KowFZ8UQ62gKNerwX
status: active
merged_into: null
display_name: 王某
revision: 1
cbdb_id: 166476
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r-bAcCEL6bqZbAO3F5oT05
        subject_person_id: p_gC4w2KowFZ8UQ62gKNerwX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某，史料所见人物。本项目依据《中国历代人物传记资料库：王某（CBDB 166476）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b0eqLKKHPp2w4iduwV_yKG
          claim_id: c_r-bAcCEL6bqZbAO3F5oT05
          source_id: s_YJ5sinRIaoH1WKi2vZtlTQ
          stance: supports
          locator: CBDB:166476
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_YJ5sinRIaoH1WKi2vZtlTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王某（CBDB 166476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166476&o=json
            external_identifier: CBDB:166476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NcMck-dbToI8UUXAP2HRcX
        subject_person_id: p_gC4w2KowFZ8UQ62gKNerwX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MkTV6AqhQd9OCNf-vPKGsj
          claim_id: c_NcMck-dbToI8UUXAP2HRcX
          source_id: s_YJ5sinRIaoH1WKi2vZtlTQ
          stance: supports
          locator: CBDB:166476
          quotation: null
          interpretation_note: CBDB 明确记录的蒋氏配偶
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
        id: c_rGJhWNzSk11JzOYzmBHLT7
        subject_person_id: p_Xn7YfLPB8jFLqE7voVoB2a
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gC4w2KowFZ8UQ62gKNerwX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SASRPV1r8iKlIrVfvR62VT
          claim_id: c_rGJhWNzSk11JzOYzmBHLT7
          source_id: s_YJ5sinRIaoH1WKi2vZtlTQ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dahe1：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Xn7YfLPB8jFLqE7voVoB2a
        status: active
        display_name: 蒋氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某，史料所见人物。本项目依据《中国历代人物传记资料库：王某（CBDB 166476）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Xn7YfLPB8jFLqE7voVoB2a | 蒋氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王某（CBDB 166476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166476&o=json)

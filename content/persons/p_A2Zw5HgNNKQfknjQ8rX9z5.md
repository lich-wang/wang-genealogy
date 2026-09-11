---
schema: wang-person/v1
id: p_A2Zw5HgNNKQfknjQ8rX9z5
status: active
merged_into: null
display_name: 王廷槐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KGrNSpo5oRD758SnJkzVWC
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9sT6aqKQ13y8C2oXnBQ6Ty
          claim_id: c_KGrNSpo5oRD758SnJkzVWC
          source_id: s_o4BwLyitFjcAFS4veow24B
          stance: supports
          locator: CBDB:327381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327381）
          source: &a1
            id: s_o4BwLyitFjcAFS4veow24B
            source_type: api_record
            title: 中国历代人物传记资料库：王廷槐（CBDB 327381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327381&o=json
            external_identifier: CBDB:327381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rNNAndP2YbAb4qyc1cdm7N
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
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
        - id: cs_vysJS7DPXRFek7xgQkoJTQ
          claim_id: c_rNNAndP2YbAb4qyc1cdm7N
          source_id: s_o4BwLyitFjcAFS4veow24B
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
        id: c_96VurjaNiZ5t0ttTLDfwRd
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WmXfH_TnTTPLLNW30SpiJp
          claim_id: c_96VurjaNiZ5t0ttTLDfwRd
          source_id: s_o4BwLyitFjcAFS4veow24B
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DpH4HNkjrsP3PNvkueYKFC
        status: active
        display_name: 王同道
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷槐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DpH4HNkjrsP3PNvkueYKFC | 王同道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷槐（CBDB 327381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327381&o=json)

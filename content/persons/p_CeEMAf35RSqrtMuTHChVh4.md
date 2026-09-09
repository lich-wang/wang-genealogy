---
schema: wang-person/v1
id: p_CeEMAf35RSqrtMuTHChVh4
status: active
merged_into: null
display_name: 王子善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1xBeX9jt6gffq7RGdwqoDU
        subject_person_id: p_CeEMAf35RSqrtMuTHChVh4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1y7JugbtJw657ceAFhEuxb
          claim_id: c_1xBeX9jt6gffq7RGdwqoDU
          source_id: s_sW3H478GxwLXHC9BMDDrDw
          stance: supports
          locator: CBDB:237749
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237749）
          source: &a1
            id: s_sW3H478GxwLXHC9BMDDrDw
            source_type: api_record
            title: 中国历代人物传记资料库：王子善（CBDB 237749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237749&o=json
            external_identifier: CBDB:237749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q2FSJNccqYBjmSXQmfe6vv
        subject_person_id: p_CeEMAf35RSqrtMuTHChVh4
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
        - id: cs_czZ8D3mg4SNyZ6N1AsRWbC
          claim_id: c_Q2FSJNccqYBjmSXQmfe6vv
          source_id: s_sW3H478GxwLXHC9BMDDrDw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子善 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子善（CBDB 237749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237749&o=json)

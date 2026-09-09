---
schema: wang-person/v1
id: p_oD3PJjMLUawsYEVt6qw1j1
status: active
merged_into: null
display_name: 王國英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z8mSBjnieyYsGMyXx6qaLJ
        subject_person_id: p_oD3PJjMLUawsYEVt6qw1j1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jkGYG6Nc5Gq8DZ45KV6Q9J
          claim_id: c_z8mSBjnieyYsGMyXx6qaLJ
          source_id: s_Heu5x25QQ1h2pK2oPcnqFx
          stance: supports
          locator: CBDB:562014
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562014）
          source: &a1
            id: s_Heu5x25QQ1h2pK2oPcnqFx
            source_type: api_record
            title: 中国历代人物传记资料库：王國英（CBDB 562014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562014&o=json
            external_identifier: CBDB:562014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KqFMkUHEGoRR2vsbvXNNP8
        subject_person_id: p_oD3PJjMLUawsYEVt6qw1j1
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
        - id: cs_LQpagkBHvgN4fxA4bGAS4B
          claim_id: c_KqFMkUHEGoRR2vsbvXNNP8
          source_id: s_Heu5x25QQ1h2pK2oPcnqFx
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

# 王國英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國英 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國英（CBDB 562014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562014&o=json)

---
schema: wang-person/v1
id: p_QoXPbni2KELaRJ6eBESzzF
status: active
merged_into: null
display_name: 王克濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VSZ7VVfE9MwArLKCe6ddq5
        subject_person_id: p_QoXPbni2KELaRJ6eBESzzF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tjqt7pX7RqNc6neDF5Ya6b
          claim_id: c_VSZ7VVfE9MwArLKCe6ddq5
          source_id: s_Nqa3aCYKbQxAbWh1B6qsmV
          stance: supports
          locator: CBDB:544389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544389）
          source: &a1
            id: s_Nqa3aCYKbQxAbWh1B6qsmV
            source_type: api_record
            title: 中国历代人物传记资料库：王克濟（CBDB 544389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544389&o=json
            external_identifier: CBDB:544389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SnS1DEJFTo88HM7BczD1Pu
        subject_person_id: p_QoXPbni2KELaRJ6eBESzzF
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
        - id: cs_ecSvg2mJZv79APzU5xqjT3
          claim_id: c_SnS1DEJFTo88HM7BczD1Pu
          source_id: s_Nqa3aCYKbQxAbWh1B6qsmV
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

# 王克濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克濟 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克濟（CBDB 544389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544389&o=json)

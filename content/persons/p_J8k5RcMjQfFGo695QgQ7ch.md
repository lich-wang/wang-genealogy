---
schema: wang-person/v1
id: p_J8k5RcMjQfFGo695QgQ7ch
status: active
merged_into: null
display_name: 王泝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XHwpEEvh12LP42aaL4BCWH
        subject_person_id: p_J8k5RcMjQfFGo695QgQ7ch
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2jJFrx2kf5m7bH44N6UoJt
          claim_id: c_XHwpEEvh12LP42aaL4BCWH
          source_id: s_NqT4j3d3bvBmKXTnRdNjpw
          stance: supports
          locator: CBDB:301175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301175）
          source: &a1
            id: s_NqT4j3d3bvBmKXTnRdNjpw
            source_type: api_record
            title: 中国历代人物传记资料库：王泝（CBDB 301175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301175&o=json
            external_identifier: CBDB:301175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1eu7aJoet9vEi1N75hgXbd
        subject_person_id: p_J8k5RcMjQfFGo695QgQ7ch
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
        - id: cs_kfBD7oZtBPbuR4PcHQdTvV
          claim_id: c_1eu7aJoet9vEi1N75hgXbd
          source_id: s_NqT4j3d3bvBmKXTnRdNjpw
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

# 王泝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泝 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泝（CBDB 301175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301175&o=json)

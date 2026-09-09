---
schema: wang-person/v1
id: p_z8mgWQExeo9ps9NYQ1o1hg
status: active
merged_into: null
display_name: 王凱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xhEjq4hETwU5yiwNTJbU2f
        subject_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pwh8S7V5rr7o17sUej7Kxz
          claim_id: c_xhEjq4hETwU5yiwNTJbU2f
          source_id: s_PdABoLdNRMCtFUYvEYFb7C
          stance: supports
          locator: CBDB:200743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200743）
          source: &a1
            id: s_PdABoLdNRMCtFUYvEYFb7C
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 200743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200743&o=json
            external_identifier: CBDB:200743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kM6qL4DaDJQFSF2vKJLqBG
        subject_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFwCSe8zSyB3s2ieYUY31U
          claim_id: c_kM6qL4DaDJQFSF2vKJLqBG
          source_id: s_PdABoLdNRMCtFUYvEYFb7C
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uvpMsvyRFfPL41rszFqeGt
        subject_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
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
        - id: cs_YDLV9iNGUCcfB1aKNCnC98
          claim_id: c_uvpMsvyRFfPL41rszFqeGt
          source_id: s_PdABoLdNRMCtFUYvEYFb7C
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

# 王凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凱 | accepted |
| birth.date | 1460年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王凱（CBDB 200743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200743&o=json)

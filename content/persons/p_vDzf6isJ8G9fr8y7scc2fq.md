---
schema: wang-person/v1
id: p_vDzf6isJ8G9fr8y7scc2fq
status: active
merged_into: null
display_name: 王崑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8XNS3CJJxAgs7xWepLFdBr
        subject_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mvycMLzdzb8Epo34H6bvjw
          claim_id: c_8XNS3CJJxAgs7xWepLFdBr
          source_id: s_WbmeJ61SBQzh5H1WL384BZ
          stance: supports
          locator: CBDB:201957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201957）
          source: &a1
            id: s_WbmeJ61SBQzh5H1WL384BZ
            source_type: api_record
            title: 中国历代人物传记资料库：王崑（CBDB 201957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201957&o=json
            external_identifier: CBDB:201957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.706Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_761jLhPTjHWZqk6nApmhyN
        subject_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1478年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8CXYvNdV58bEG1qwBPhKDY
          claim_id: c_761jLhPTjHWZqk6nApmhyN
          source_id: s_WbmeJ61SBQzh5H1WL384BZ
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
        id: c_HfN8VU9A3PBfmPtqDSWqsz
        subject_person_id: p_vDzf6isJ8G9fr8y7scc2fq
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
        - id: cs_y7wAYEMArVucuS2d6Rs1Q6
          claim_id: c_HfN8VU9A3PBfmPtqDSWqsz
          source_id: s_WbmeJ61SBQzh5H1WL384BZ
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

# 王崑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崑 | accepted |
| birth.date | 1478年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崑（CBDB 201957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201957&o=json)

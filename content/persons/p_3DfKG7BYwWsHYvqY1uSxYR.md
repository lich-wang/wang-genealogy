---
schema: wang-person/v1
id: p_3DfKG7BYwWsHYvqY1uSxYR
status: active
merged_into: null
display_name: 王思
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PjHRH4T64cT1fna9kcNk2A
        subject_person_id: p_3DfKG7BYwWsHYvqY1uSxYR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JCVjg8vdkAg6Gdh2gexL6V
          claim_id: c_PjHRH4T64cT1fna9kcNk2A
          source_id: s_xoNAyaPk52x5jvS6k67eCT
          stance: supports
          locator: CBDB:140112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140112）
          source: &a1
            id: s_xoNAyaPk52x5jvS6k67eCT
            source_type: api_record
            title: 中国历代人物传记资料库：王思（CBDB 140112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140112&o=json
            external_identifier: CBDB:140112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NTqXDpFgwJpTCsBP87Kw7Z
        subject_person_id: p_3DfKG7BYwWsHYvqY1uSxYR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 639年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WYLrqY3WLQm6DCE68L2QDW
          claim_id: c_NTqXDpFgwJpTCsBP87Kw7Z
          source_id: s_xoNAyaPk52x5jvS6k67eCT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GjfSPQVWMPJCoRuGgBSvDJ
        subject_person_id: p_3DfKG7BYwWsHYvqY1uSxYR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 701年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eBXJrjAouop1iCE9jn5MnZ
          claim_id: c_GjfSPQVWMPJCoRuGgBSvDJ
          source_id: s_xoNAyaPk52x5jvS6k67eCT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qG1MpEQgqh5BSkEpQ4iZni
        subject_person_id: p_3DfKG7BYwWsHYvqY1uSxYR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DhJnQ7pBrNhxWzr1n3hvPM
          claim_id: c_qG1MpEQgqh5BSkEpQ4iZni
          source_id: s_xoNAyaPk52x5jvS6k67eCT
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

# 王思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思 | accepted |
| birth.date | 639年 | accepted |
| death.date | 701年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思（CBDB 140112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140112&o=json)

---
schema: wang-person/v1
id: p_qtxusn4jJqk5ydEQUHbQaS
status: active
merged_into: null
display_name: 王黯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VAur2hWkzAxeDMF5jp6zGm
        subject_person_id: p_qtxusn4jJqk5ydEQUHbQaS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王黯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N23GFgxYov2ER1icmMz4EJ
          claim_id: c_VAur2hWkzAxeDMF5jp6zGm
          source_id: s_YCBGncu3dGEqFdxECmtp81
          stance: supports
          locator: CBDB:309650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309650）
          source: &a1
            id: s_YCBGncu3dGEqFdxECmtp81
            source_type: api_record
            title: 中国历代人物传记资料库：王黯（CBDB 309650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309650&o=json
            external_identifier: CBDB:309650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MKoQUcNC8a1BHb2xtWzw5p
        subject_person_id: p_qtxusn4jJqk5ydEQUHbQaS
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
        - id: cs_oJnH6Wm5maaPRq8NQQh4MB
          claim_id: c_MKoQUcNC8a1BHb2xtWzw5p
          source_id: s_YCBGncu3dGEqFdxECmtp81
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

# 王黯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王黯 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王黯（CBDB 309650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309650&o=json)

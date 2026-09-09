---
schema: wang-person/v1
id: p_toGeUnnK7cVsYtsUbiZbtp
status: active
merged_into: null
display_name: 王洪到
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gW5HWGPccYopFbB5aYXCR6
        subject_person_id: p_toGeUnnK7cVsYtsUbiZbtp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪到
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ZrJtjATZX22YhY5rzBJs3
          claim_id: c_gW5HWGPccYopFbB5aYXCR6
          source_id: s_pGYFqPgThQXLJLDNFWzQLf
          stance: supports
          locator: CBDB:639087
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639087）
          source: &a1
            id: s_pGYFqPgThQXLJLDNFWzQLf
            source_type: api_record
            title: 中国历代人物传记资料库：王洪到（CBDB 639087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639087&o=json
            external_identifier: CBDB:639087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jner8sLKC9WGu7T6qz6zHW
        subject_person_id: p_toGeUnnK7cVsYtsUbiZbtp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SXVr7SWLTq3k47dwCaGzmh
          claim_id: c_Jner8sLKC9WGu7T6qz6zHW
          source_id: s_pGYFqPgThQXLJLDNFWzQLf
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

# 王洪到

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪到 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洪到（CBDB 639087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639087&o=json)

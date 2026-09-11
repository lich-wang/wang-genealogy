---
schema: wang-person/v1
id: p_gSoKgcTCFAWExn64bcLa7C
status: active
merged_into: null
display_name: 王詔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YvpCHqkHDP33g3AhdCx97W
        subject_person_id: p_gSoKgcTCFAWExn64bcLa7C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QBsks3w2213BDMwCMXV4HE
          claim_id: c_YvpCHqkHDP33g3AhdCx97W
          source_id: s_k5fCB8QWMf1icyGGxmhFGG
          stance: supports
          locator: CBDB:327944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327944）
          source: &a1
            id: s_k5fCB8QWMf1icyGGxmhFGG
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 327944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327944&o=json
            external_identifier: CBDB:327944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VazRAMffCzQfP21L7hsK6Z
        subject_person_id: p_gSoKgcTCFAWExn64bcLa7C
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
        - id: cs_1QF9KRPQGJs3UCNxYE7Gzg
          claim_id: c_VazRAMffCzQfP21L7hsK6Z
          source_id: s_k5fCB8QWMf1icyGGxmhFGG
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
  descendants:
    - claim:
        id: c_9D0ROdQlGGks2jIJWd2h75
        subject_person_id: p_gSoKgcTCFAWExn64bcLa7C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ANTojEQO9kD-DwjLolJSuc
          claim_id: c_9D0ROdQlGGks2jIJWd2h75
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NxyvnQDn1eZ9nvxr3JFUPK
            source_type: api_record
            title: 中国历代人物传记资料库：王以纁（CBDB 205075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json
            external_identifier: CBDB:205075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DYviEpoQ7QNEe7UQdPVSd4
        status: active
        display_name: 王以纁
        merged_into_person_id: null
  other: []
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DYviEpoQ7QNEe7UQdPVSd4 | 王以纁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以纁（CBDB 205075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json)
- [中国历代人物传记资料库：王詔（CBDB 327944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327944&o=json)

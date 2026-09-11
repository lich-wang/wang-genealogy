---
schema: wang-person/v1
id: p_FxBbEWyPCZJRS2BVCvKm1v
status: active
merged_into: null
display_name: 王仲德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D7ZJZUB3iKr7W4TNEQgiGU
        subject_person_id: p_FxBbEWyPCZJRS2BVCvKm1v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pPfsbD2FGBzU6YbyrYFq4F
          claim_id: c_D7ZJZUB3iKr7W4TNEQgiGU
          source_id: s_5qRtwrH4dMEhJ9KP8Pf3hD
          stance: supports
          locator: CBDB:277067
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277067）
          source: &a1
            id: s_5qRtwrH4dMEhJ9KP8Pf3hD
            source_type: api_record
            title: 中国历代人物传记资料库：王仲德（CBDB 277067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277067&o=json
            external_identifier: CBDB:277067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W8D7xVbK7gKv3KNMJ7bmpw
        subject_person_id: p_FxBbEWyPCZJRS2BVCvKm1v
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
        - id: cs_fNp7t53T89YTR2Jy9A1X4S
          claim_id: c_W8D7xVbK7gKv3KNMJ7bmpw
          source_id: s_5qRtwrH4dMEhJ9KP8Pf3hD
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
        id: c_yIximMe1s8Thu_9V9D0kZn
        subject_person_id: p_FxBbEWyPCZJRS2BVCvKm1v
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KQkfkvraGUIB62cqnylg7t
          claim_id: c_yIximMe1s8Thu_9V9D0kZn
          source_id: s_iysWTAJR6jgb14GmHUSJck
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iysWTAJR6jgb14GmHUSJck
            source_type: api_record
            title: 中国历代人物传记资料库：王江（CBDB 126498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126498&o=json
            external_identifier: CBDB:126498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CcL9yeQgRriMhVY3hPmz5a
        status: active
        display_name: 王江
        merged_into_person_id: null
  other: []
---

# 王仲德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲德 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CcL9yeQgRriMhVY3hPmz5a | 王江 | accepted |

## 外部来源

- [中国历代人物传记资料库：王江（CBDB 126498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126498&o=json)
- [中国历代人物传记资料库：王仲德（CBDB 277067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277067&o=json)

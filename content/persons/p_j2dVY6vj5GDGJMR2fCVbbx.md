---
schema: wang-person/v1
id: p_j2dVY6vj5GDGJMR2fCVbbx
status: active
merged_into: null
display_name: 王皋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZZN6THrVZDKsfwSUdt9RjE
        subject_person_id: p_j2dVY6vj5GDGJMR2fCVbbx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gAdxDvmd5wqzBWG4LNESvu
          claim_id: c_ZZN6THrVZDKsfwSUdt9RjE
          source_id: s_85p2ztA7K7fkt2srphY8gJ
          stance: supports
          locator: CBDB:166260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166260）
          source: &a1
            id: s_85p2ztA7K7fkt2srphY8gJ
            source_type: api_record
            title: 中国历代人物传记资料库：王皋（CBDB 166260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166260&o=json
            external_identifier: CBDB:166260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z6Ma984hPA17DsymFMAKqZ
        subject_person_id: p_j2dVY6vj5GDGJMR2fCVbbx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7BJ2E8WC7VLWbuA15QLMH8
          claim_id: c_Z6Ma984hPA17DsymFMAKqZ
          source_id: s_85p2ztA7K7fkt2srphY8gJ
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

# 王皋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王皋 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王皋（CBDB 166260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166260&o=json)

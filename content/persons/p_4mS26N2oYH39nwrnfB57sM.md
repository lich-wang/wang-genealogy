---
schema: wang-person/v1
id: p_4mS26N2oYH39nwrnfB57sM
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6VUsEcav2xU7jUsMF9AicT
        subject_person_id: p_4mS26N2oYH39nwrnfB57sM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xok2KbSFDTz9Q6vXNdNdzH
          claim_id: c_6VUsEcav2xU7jUsMF9AicT
          source_id: s_m8KCRyQTVRM1m264DHEkd9
          stance: supports
          locator: CBDB:153716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153716）
          source: &a1
            id: s_m8KCRyQTVRM1m264DHEkd9
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 153716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153716&o=json
            external_identifier: CBDB:153716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JzdSYGnB2Wa7mYDVzJ29jQ
        subject_person_id: p_4mS26N2oYH39nwrnfB57sM
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
        - id: cs_S8MoLvE5L8LETdQNaXVYqV
          claim_id: c_JzdSYGnB2Wa7mYDVzJ29jQ
          source_id: s_m8KCRyQTVRM1m264DHEkd9
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

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 153716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153716&o=json)

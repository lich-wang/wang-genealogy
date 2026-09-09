---
schema: wang-person/v1
id: p_KedHe7xuh2tSeRagmouTdd
status: active
merged_into: null
display_name: 王志范
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pNwmAAYfSM9fYHGhRnmMZj
        subject_person_id: p_KedHe7xuh2tSeRagmouTdd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志范
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mh2uAxDpmFN21XPudg9dXz
          claim_id: c_pNwmAAYfSM9fYHGhRnmMZj
          source_id: s_9umAUnit7U1Kq21WNHTAz7
          stance: supports
          locator: CBDB:637769
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637769）
          source: &a1
            id: s_9umAUnit7U1Kq21WNHTAz7
            source_type: api_record
            title: 中国历代人物传记资料库：王志范（CBDB 637769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637769&o=json
            external_identifier: CBDB:637769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aKsdvRP5EPsbbDyEwsq75C
        subject_person_id: p_KedHe7xuh2tSeRagmouTdd
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
        - id: cs_KvAAZp813DbsiYE6Yb4FNL
          claim_id: c_aKsdvRP5EPsbbDyEwsq75C
          source_id: s_9umAUnit7U1Kq21WNHTAz7
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

# 王志范

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志范 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志范（CBDB 637769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637769&o=json)

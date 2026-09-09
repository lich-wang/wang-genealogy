---
schema: wang-person/v1
id: p_d6AUTkQWpnuc8irDg9G8i4
status: active
merged_into: null
display_name: 王紹乾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LqDVDEj7VoaCG9C7JaBs5H
        subject_person_id: p_d6AUTkQWpnuc8irDg9G8i4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mHtKKqgD6g1ja3JmbUFnDL
          claim_id: c_LqDVDEj7VoaCG9C7JaBs5H
          source_id: s_tn9N9cLn6XAKSDbhs8jYEb
          stance: supports
          locator: CBDB:639745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639745）
          source: &a1
            id: s_tn9N9cLn6XAKSDbhs8jYEb
            source_type: api_record
            title: 中国历代人物传记资料库：王紹乾（CBDB 639745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639745&o=json
            external_identifier: CBDB:639745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y1xMDYD3hgr2er4hbgLzod
        subject_person_id: p_d6AUTkQWpnuc8irDg9G8i4
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
        - id: cs_gF1pZnNL9VJGM3A8Aopj4p
          claim_id: c_Y1xMDYD3hgr2er4hbgLzod
          source_id: s_tn9N9cLn6XAKSDbhs8jYEb
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

# 王紹乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹乾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹乾（CBDB 639745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639745&o=json)

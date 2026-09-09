---
schema: wang-person/v1
id: p_MU1Mg6BQZCfKKVae7ByEi5
status: active
merged_into: null
display_name: 王璵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hQXG9qx3myqBZVF2cZyWDj
        subject_person_id: p_MU1Mg6BQZCfKKVae7ByEi5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7cS7sxbS8D5vvG9H7XEemC
          claim_id: c_hQXG9qx3myqBZVF2cZyWDj
          source_id: s_8eydpa28X7BxUrwyJj99nH
          stance: supports
          locator: CBDB:376065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（376065）
          source: &a1
            id: s_8eydpa28X7BxUrwyJj99nH
            source_type: api_record
            title: 中国历代人物传记资料库：王璵（CBDB 376065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376065&o=json
            external_identifier: CBDB:376065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_chRBy4kNqgGgDQx9tfGAzu
        subject_person_id: p_MU1Mg6BQZCfKKVae7ByEi5
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
        - id: cs_xUEpqWF5TY9TbqJ2TcbjGA
          claim_id: c_chRBy4kNqgGgDQx9tfGAzu
          source_id: s_8eydpa28X7BxUrwyJj99nH
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

# 王璵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璵 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璵（CBDB 376065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376065&o=json)

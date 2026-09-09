---
schema: wang-person/v1
id: p_zDkCVKJDedjgm5kDDP1yKA
status: active
merged_into: null
display_name: 王曛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QE4YAf2J9M9S157z6S93Re
        subject_person_id: p_zDkCVKJDedjgm5kDDP1yKA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2tMTndB4nMjR7yUB1rY31L
          claim_id: c_QE4YAf2J9M9S157z6S93Re
          source_id: s_99ZEhiJB1guMvp77knJN9Y
          stance: supports
          locator: CBDB:247834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247834）
          source: &a1
            id: s_99ZEhiJB1guMvp77knJN9Y
            source_type: api_record
            title: 中国历代人物传记资料库：王曛（CBDB 247834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247834&o=json
            external_identifier: CBDB:247834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bWLBQsE6ueFfwkuiZB45e1
        subject_person_id: p_zDkCVKJDedjgm5kDDP1yKA
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
        - id: cs_1fBYL6e7cYmyevGM3AAnBJ
          claim_id: c_bWLBQsE6ueFfwkuiZB45e1
          source_id: s_99ZEhiJB1guMvp77knJN9Y
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

# 王曛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曛（CBDB 247834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247834&o=json)

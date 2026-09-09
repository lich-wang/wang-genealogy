---
schema: wang-person/v1
id: p_KZxn6FDgjyEFto272vZBvH
status: active
merged_into: null
display_name: 王無咎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XzvsNCh86kJc1v8CgpY155
        subject_person_id: p_KZxn6FDgjyEFto272vZBvH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無咎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eTY6wag3RBjvpi2t6tFFUN
          claim_id: c_XzvsNCh86kJc1v8CgpY155
          source_id: s_RW2CatBvkfu7juZPi4hCMj
          stance: supports
          locator: CBDB:117594
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117594）
          source: &a1
            id: s_RW2CatBvkfu7juZPi4hCMj
            source_type: api_record
            title: 中国历代人物传记资料库：王無咎（CBDB 117594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117594&o=json
            external_identifier: CBDB:117594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NU9BB2xXYd1mNNWn9EC8bm
        subject_person_id: p_KZxn6FDgjyEFto272vZBvH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1189年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_59hQnw3kaq6i11zsnCgPqj
          claim_id: c_NU9BB2xXYd1mNNWn9EC8bm
          source_id: s_RW2CatBvkfu7juZPi4hCMj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FLgHgbzwzmBKkD6TFVNhn2
        subject_person_id: p_KZxn6FDgjyEFto272vZBvH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1254年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qp3tSRaQCWPELQxvYEAUxf
          claim_id: c_FLgHgbzwzmBKkD6TFVNhn2
          source_id: s_RW2CatBvkfu7juZPi4hCMj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d3pSmMKwovZ7FcezKD6Dar
        subject_person_id: p_KZxn6FDgjyEFto272vZBvH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_roCd3z9ssALL8qMdGUibJV
          claim_id: c_d3pSmMKwovZ7FcezKD6Dar
          source_id: s_RW2CatBvkfu7juZPi4hCMj
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

# 王無咎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王無咎 | accepted |
| birth.date | 1189年 | accepted |
| death.date | 1254年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王無咎（CBDB 117594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117594&o=json)

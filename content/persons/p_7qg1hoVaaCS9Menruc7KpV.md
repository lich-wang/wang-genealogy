---
schema: wang-person/v1
id: p_7qg1hoVaaCS9Menruc7KpV
status: active
merged_into: null
display_name: 王應斗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rY1VxEpwf4zscG2SZ55X5g
        subject_person_id: p_7qg1hoVaaCS9Menruc7KpV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應斗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9EKgF1CFQcEG1ohET4XAtV
          claim_id: c_rY1VxEpwf4zscG2SZ55X5g
          source_id: s_rUswzQ3nx5oBGnceXNfLWc
          stance: supports
          locator: CBDB:71692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71692）
          source: &a1
            id: s_rUswzQ3nx5oBGnceXNfLWc
            source_type: api_record
            title: 中国历代人物传记资料库：王應斗（CBDB 71692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71692&o=json
            external_identifier: CBDB:71692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JkyyuKuwEb6ygSChFPXKhR
        subject_person_id: p_7qg1hoVaaCS9Menruc7KpV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1594年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_noB38GFYM764oFjXUpbtZH
          claim_id: c_JkyyuKuwEb6ygSChFPXKhR
          source_id: s_rUswzQ3nx5oBGnceXNfLWc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tf2DzHpFeK6r61n2WUS73H
        subject_person_id: p_7qg1hoVaaCS9Menruc7KpV
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
        - id: cs_7qUE74TwkWSB2GjEDiJxZp
          claim_id: c_Tf2DzHpFeK6r61n2WUS73H
          source_id: s_rUswzQ3nx5oBGnceXNfLWc
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

# 王應斗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應斗 | accepted |
| birth.date | 1594年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應斗（CBDB 71692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71692&o=json)

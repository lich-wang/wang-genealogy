---
schema: wang-person/v1
id: p_CDLJWkm31UwnGEortAz1ut
status: active
merged_into: null
display_name: 王掞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_shF7qu1QUBEFiZUtK28YTb
        subject_person_id: p_CDLJWkm31UwnGEortAz1ut
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kD7CzsDwazVgrh37XtR3W3
          claim_id: c_shF7qu1QUBEFiZUtK28YTb
          source_id: s_NzMWSEehU9C9LpjHJrDjWy
          stance: supports
          locator: CBDB:65762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65762）
          source: &a1
            id: s_NzMWSEehU9C9LpjHJrDjWy
            source_type: api_record
            title: 中国历代人物传记资料库：王掞（CBDB 65762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65762&o=json
            external_identifier: CBDB:65762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ALR7gUesfDBChcQw3gzo5Z
        subject_person_id: p_CDLJWkm31UwnGEortAz1ut
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1645年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JLmiyJSWMZqQH3AqdrmiKj
          claim_id: c_ALR7gUesfDBChcQw3gzo5Z
          source_id: s_NzMWSEehU9C9LpjHJrDjWy
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
        id: c_oQCGfKasb6xx3nWndbcgAy
        subject_person_id: p_CDLJWkm31UwnGEortAz1ut
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1728年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sbXuuPmaZ1AFvd4Rxr8uEu
          claim_id: c_oQCGfKasb6xx3nWndbcgAy
          source_id: s_NzMWSEehU9C9LpjHJrDjWy
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
        id: c_rvba9st8fzWVwoywDMYgkp
        subject_person_id: p_CDLJWkm31UwnGEortAz1ut
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
        - id: cs_RpuMKy9p3YfvrDF7Ehd1Kb
          claim_id: c_rvba9st8fzWVwoywDMYgkp
          source_id: s_NzMWSEehU9C9LpjHJrDjWy
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

# 王掞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王掞 | accepted |
| birth.date | 1645年 | accepted |
| death.date | 1728年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王掞（CBDB 65762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65762&o=json)

---
schema: wang-person/v1
id: p_wrYjpDvL8MtRavfwnm1dKh
status: active
merged_into: null
display_name: 王滋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nBhKvLp3fwUo6tN1nCQXj3
        subject_person_id: p_wrYjpDvL8MtRavfwnm1dKh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yefRB4M3EjwKw8YjrQYMMH
          claim_id: c_nBhKvLp3fwUo6tN1nCQXj3
          source_id: s_93r5r5LQXwkrbf4ZxQpZ6c
          stance: supports
          locator: CBDB:202462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202462）
          source: &a1
            id: s_93r5r5LQXwkrbf4ZxQpZ6c
            source_type: api_record
            title: 中国历代人物传记资料库：王滋（CBDB 202462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202462&o=json
            external_identifier: CBDB:202462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cZLwzV3nA7Coy6srm9DxZw
        subject_person_id: p_wrYjpDvL8MtRavfwnm1dKh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1495年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_urhYLip6chpRd8QBoQKa7E
          claim_id: c_cZLwzV3nA7Coy6srm9DxZw
          source_id: s_93r5r5LQXwkrbf4ZxQpZ6c
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
        id: c_n3DCvVrE8Mnkur3jrFa14n
        subject_person_id: p_wrYjpDvL8MtRavfwnm1dKh
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
        - id: cs_XQAtp1gspHVpFkvkipLYRY
          claim_id: c_n3DCvVrE8Mnkur3jrFa14n
          source_id: s_93r5r5LQXwkrbf4ZxQpZ6c
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

# 王滋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滋 | accepted |
| birth.date | 1495年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滋（CBDB 202462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202462&o=json)

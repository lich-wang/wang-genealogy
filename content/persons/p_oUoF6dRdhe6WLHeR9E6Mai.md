---
schema: wang-person/v1
id: p_oUoF6dRdhe6WLHeR9E6Mai
status: active
merged_into: null
display_name: 王鏜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RCdBiW6xp2cPHkXmaQp8C6
        subject_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hHMHhsGkKfqc1aBHHJ9UEX
          claim_id: c_RCdBiW6xp2cPHkXmaQp8C6
          source_id: s_3h9jMp1kkxEm7dHXB3nobM
          stance: supports
          locator: CBDB:201524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201524）
          source: &a1
            id: s_3h9jMp1kkxEm7dHXB3nobM
            source_type: api_record
            title: 中国历代人物传记资料库：王鏜（CBDB 201524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201524&o=json
            external_identifier: CBDB:201524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R8WX5LGxEUHz5owVckX4SN
        subject_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1471年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qQuCc1JM7DxNgQ6f8QEzqH
          claim_id: c_R8WX5LGxEUHz5owVckX4SN
          source_id: s_3h9jMp1kkxEm7dHXB3nobM
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
        id: c_K44XHuLR124LjoRp92JqD9
        subject_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
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
        - id: cs_KpSTt97WAvyxXvAJMBJAGk
          claim_id: c_K44XHuLR124LjoRp92JqD9
          source_id: s_3h9jMp1kkxEm7dHXB3nobM
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

# 王鏜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏜 | accepted |
| birth.date | 1471年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏜（CBDB 201524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201524&o=json)

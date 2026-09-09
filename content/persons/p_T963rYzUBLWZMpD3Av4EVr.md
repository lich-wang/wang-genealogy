---
schema: wang-person/v1
id: p_T963rYzUBLWZMpD3Av4EVr
status: active
merged_into: null
display_name: 王之驥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZWJEQNY18zku4VqNVdfZg8
        subject_person_id: p_T963rYzUBLWZMpD3Av4EVr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之驥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4eCdhZ7Hqcxf9RkqChyz6Z
          claim_id: c_ZWJEQNY18zku4VqNVdfZg8
          source_id: s_UVqcRzA73vb8rVgBLKbBC9
          stance: supports
          locator: CBDB:71361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71361）
          source: &a1
            id: s_UVqcRzA73vb8rVgBLKbBC9
            source_type: api_record
            title: 中国历代人物传记资料库：王之驥（CBDB 71361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71361&o=json
            external_identifier: CBDB:71361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_w9AJa3Ed9BBVo7Hu4jmG2w
        subject_person_id: p_T963rYzUBLWZMpD3Av4EVr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1661年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zsUEbxfHZY9wndXDLGQtEj
          claim_id: c_w9AJa3Ed9BBVo7Hu4jmG2w
          source_id: s_UVqcRzA73vb8rVgBLKbBC9
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
        id: c_UrQkZyQ2h9rQn4j1A5HjXw
        subject_person_id: p_T963rYzUBLWZMpD3Av4EVr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1715年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9bwLPT18DjRzD6vYGWMnHZ
          claim_id: c_UrQkZyQ2h9rQn4j1A5HjXw
          source_id: s_UVqcRzA73vb8rVgBLKbBC9
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
        id: c_TEUNUVTcRdC3Y6SWq7skrQ
        subject_person_id: p_T963rYzUBLWZMpD3Av4EVr
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
        - id: cs_SDRiEZpkmT1zB5AE1mWWhS
          claim_id: c_TEUNUVTcRdC3Y6SWq7skrQ
          source_id: s_UVqcRzA73vb8rVgBLKbBC9
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

# 王之驥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之驥 | accepted |
| birth.date | 1661年 | accepted |
| death.date | 1715年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之驥（CBDB 71361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71361&o=json)

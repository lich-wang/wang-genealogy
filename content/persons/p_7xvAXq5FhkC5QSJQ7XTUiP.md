---
schema: wang-person/v1
id: p_7xvAXq5FhkC5QSJQ7XTUiP
status: active
merged_into: null
display_name: 王成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WZn7v5pRt7pfF7oa9yyAqP
        subject_person_id: p_7xvAXq5FhkC5QSJQ7XTUiP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6JuCJMStptPqCnPJHEx5Pt
          claim_id: c_WZn7v5pRt7pfF7oa9yyAqP
          source_id: s_1s2wzALwUS8pkDBhPytA9X
          stance: supports
          locator: CBDB:100675
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100675）
          source: &a1
            id: s_1s2wzALwUS8pkDBhPytA9X
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 100675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100675&o=json
            external_identifier: CBDB:100675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ybBUXf2FVeAsmGrTHwF3xx
        subject_person_id: p_7xvAXq5FhkC5QSJQ7XTUiP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1331年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kwA59HxuHNMWHZpZ7t2FHF
          claim_id: c_ybBUXf2FVeAsmGrTHwF3xx
          source_id: s_1s2wzALwUS8pkDBhPytA9X
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
        id: c_y5kMXLNs6Q7HXtsCGFfkc2
        subject_person_id: p_7xvAXq5FhkC5QSJQ7XTUiP
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
        - id: cs_ScYHqaXLppVxPzBrYYmCEs
          claim_id: c_y5kMXLNs6Q7HXtsCGFfkc2
          source_id: s_1s2wzALwUS8pkDBhPytA9X
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

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| death.date | 1331年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 100675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100675&o=json)

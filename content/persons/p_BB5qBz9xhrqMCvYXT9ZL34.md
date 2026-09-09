---
schema: wang-person/v1
id: p_BB5qBz9xhrqMCvYXT9ZL34
status: active
merged_into: null
display_name: 王南余
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_icjiDEgrbGWCMLR1J5apHK
        subject_person_id: p_BB5qBz9xhrqMCvYXT9ZL34
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王南余
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vtim5H599yxLN4iKb1U6go
          claim_id: c_icjiDEgrbGWCMLR1J5apHK
          source_id: s_xohhTovoUifLC6s5BJAJNZ
          stance: supports
          locator: CBDB:169176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169176）
          source: &a1
            id: s_xohhTovoUifLC6s5BJAJNZ
            source_type: api_record
            title: 中国历代人物传记资料库：王南余（CBDB 169176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169176&o=json
            external_identifier: CBDB:169176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NDCNGG54N3xDSjJyGgPbph
        subject_person_id: p_BB5qBz9xhrqMCvYXT9ZL34
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 764年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WuiQwKN4CY58hjBFC8qp5v
          claim_id: c_NDCNGG54N3xDSjJyGgPbph
          source_id: s_xohhTovoUifLC6s5BJAJNZ
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
        id: c_Eu2DDY51vxnHg9uaWwMqk6
        subject_person_id: p_BB5qBz9xhrqMCvYXT9ZL34
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
        - id: cs_9XAKEKp3dpvAFfgnYX3rF2
          claim_id: c_Eu2DDY51vxnHg9uaWwMqk6
          source_id: s_xohhTovoUifLC6s5BJAJNZ
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

# 王南余

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王南余 | accepted |
| death.date | 764年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王南余（CBDB 169176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169176&o=json)

---
schema: wang-person/v1
id: p_H3JQjmbj4PwJbeKzfQyB6E
status: active
merged_into: null
display_name: 王千仞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yg3RRKPwuzMySbHXo6vuP4
        subject_person_id: p_H3JQjmbj4PwJbeKzfQyB6E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王千仞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uJ9YZhDgFqjxpHme1h5mEe
          claim_id: c_Yg3RRKPwuzMySbHXo6vuP4
          source_id: s_3ffbHqB1Aknmm6K9G32vMM
          stance: supports
          locator: CBDB:71343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71343）
          source: &a1
            id: s_3ffbHqB1Aknmm6K9G32vMM
            source_type: api_record
            title: 中国历代人物传记资料库：王千仞（CBDB 71343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71343&o=json
            external_identifier: CBDB:71343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JSb4htyjfV9uLevQqBax44
        subject_person_id: p_H3JQjmbj4PwJbeKzfQyB6E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1709年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P6y2AjCGT7KGKS6YXDGAM4
          claim_id: c_JSb4htyjfV9uLevQqBax44
          source_id: s_3ffbHqB1Aknmm6K9G32vMM
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
        id: c_98PXsbYinTbGTVScLnaQEA
        subject_person_id: p_H3JQjmbj4PwJbeKzfQyB6E
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4a1n5wGWh2RbPahYtXtLM1
          claim_id: c_98PXsbYinTbGTVScLnaQEA
          source_id: s_3ffbHqB1Aknmm6K9G32vMM
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
        id: c_8QXtcQzZMrjmC5fNZiaeFq
        subject_person_id: p_H3JQjmbj4PwJbeKzfQyB6E
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
        - id: cs_3uKto1s172tmgJdQ16vTka
          claim_id: c_8QXtcQzZMrjmC5fNZiaeFq
          source_id: s_3ffbHqB1Aknmm6K9G32vMM
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

# 王千仞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王千仞 | accepted |
| birth.date | 1709年 | accepted |
| death.date | 1797年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王千仞（CBDB 71343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71343&o=json)

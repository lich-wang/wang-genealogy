---
schema: wang-person/v1
id: p_Mc2mQq9Rjz4SnfzptDgMrZ
status: active
merged_into: null
display_name: 王慶雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XLj88R1CWMfBYVbiYr73NE
        subject_person_id: p_Mc2mQq9Rjz4SnfzptDgMrZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cxu729GAL83A5h6D8pYGnw
          claim_id: c_XLj88R1CWMfBYVbiYr73NE
          source_id: s_ZBC8Lwd9ENeEJApEWvZ1na
          stance: supports
          locator: CBDB:56975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56975）
          source: &a1
            id: s_ZBC8Lwd9ENeEJApEWvZ1na
            source_type: api_record
            title: 中国历代人物传记资料库：王慶雲（CBDB 56975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56975&o=json
            external_identifier: CBDB:56975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pR1X61QKMgV5GEo6ebywKq
        subject_person_id: p_Mc2mQq9Rjz4SnfzptDgMrZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q1UonofqGNDN3kkn11Ws3Z
          claim_id: c_pR1X61QKMgV5GEo6ebywKq
          source_id: s_ZBC8Lwd9ENeEJApEWvZ1na
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
        id: c_h14jvXXBoLkJcSBTBhB2jL
        subject_person_id: p_Mc2mQq9Rjz4SnfzptDgMrZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1862年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXv716DW9kasoGTp9J9qCX
          claim_id: c_h14jvXXBoLkJcSBTBhB2jL
          source_id: s_ZBC8Lwd9ENeEJApEWvZ1na
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
        id: c_kxPSUgDyDsMDMNRhUhBCSb
        subject_person_id: p_Mc2mQq9Rjz4SnfzptDgMrZ
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
        - id: cs_M56yDY649jKDVT8m72Ng8a
          claim_id: c_kxPSUgDyDsMDMNRhUhBCSb
          source_id: s_ZBC8Lwd9ENeEJApEWvZ1na
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

# 王慶雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶雲 | accepted |
| birth.date | 1798年 | accepted |
| death.date | 1862年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶雲（CBDB 56975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56975&o=json)

---
schema: wang-person/v1
id: p_dKrdHweWB3nFL1PMJagWsh
status: active
merged_into: null
display_name: 王萬岱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qN7otihqfYHf61BMvLBuFj
        subject_person_id: p_dKrdHweWB3nFL1PMJagWsh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬岱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qnZbn7Ah7D1E93whrW45zY
          claim_id: c_qN7otihqfYHf61BMvLBuFj
          source_id: s_sp4AaKpSEJAyVaHsWdayHn
          stance: supports
          locator: CBDB:69441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69441）
          source: &a1
            id: s_sp4AaKpSEJAyVaHsWdayHn
            source_type: api_record
            title: 中国历代人物传记资料库：王萬岱（CBDB 69441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69441&o=json
            external_identifier: CBDB:69441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EJfi3C22xMjvM1HpzDK8nS
        subject_person_id: p_dKrdHweWB3nFL1PMJagWsh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1801年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1VwK6Bp3e21H3gK5AF4W8
          claim_id: c_EJfi3C22xMjvM1HpzDK8nS
          source_id: s_sp4AaKpSEJAyVaHsWdayHn
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
        id: c_M86XoBboByx97xBNmB2vXd
        subject_person_id: p_dKrdHweWB3nFL1PMJagWsh
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
        - id: cs_uY6QrtXF7ETVUXi8Ydnru5
          claim_id: c_M86XoBboByx97xBNmB2vXd
          source_id: s_sp4AaKpSEJAyVaHsWdayHn
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

# 王萬岱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬岱 | accepted |
| death.date | 1801年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬岱（CBDB 69441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69441&o=json)

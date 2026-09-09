---
schema: wang-person/v1
id: p_hnLURAAZEYEb8os9n3xAxz
status: active
merged_into: null
display_name: 王恕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xvttCFD1jWMCF1jtG7prPf
        subject_person_id: p_hnLURAAZEYEb8os9n3xAxz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XDEq1kW14v2KAjpPCAkKpH
          claim_id: c_xvttCFD1jWMCF1jtG7prPf
          source_id: s_7FC8vLjjEAEZ58BvUEE6yg
          stance: supports
          locator: CBDB:21973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21973）
          source: &a1
            id: s_7FC8vLjjEAEZ58BvUEE6yg
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 21973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21973&o=json
            external_identifier: CBDB:21973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4DTEyMcMTYQL4Ay5owWggB
        subject_person_id: p_hnLURAAZEYEb8os9n3xAxz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 972年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F4t9se79stNroMpq7Pj8p6
          claim_id: c_4DTEyMcMTYQL4Ay5owWggB
          source_id: s_7FC8vLjjEAEZ58BvUEE6yg
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
        id: c_zjN3PHHbGCpjoqpzkBpgBe
        subject_person_id: p_hnLURAAZEYEb8os9n3xAxz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YEj5JEU9KhE8aSURG6GVow
          claim_id: c_zjN3PHHbGCpjoqpzkBpgBe
          source_id: s_7FC8vLjjEAEZ58BvUEE6yg
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

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| death.date | 972年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 21973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21973&o=json)

---
schema: wang-person/v1
id: p_JpEAEBFyGhMPLQ8dmzvDyq
status: active
merged_into: null
display_name: 王家勤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4XCT1E7Rw7TQRpweF7cTAL
        subject_person_id: p_JpEAEBFyGhMPLQ8dmzvDyq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家勤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T27C6LQM1iMRZf6gjzEzhQ
          claim_id: c_4XCT1E7Rw7TQRpweF7cTAL
          source_id: s_CVNhvDE4E73AGGE5hzTGym
          stance: supports
          locator: CBDB:71973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71973）
          source: &a1
            id: s_CVNhvDE4E73AGGE5hzTGym
            source_type: api_record
            title: 中国历代人物传记资料库：王家勤（CBDB 71973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71973&o=json
            external_identifier: CBDB:71973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Xip1go6CYHWK9VFtUwCvgX
        subject_person_id: p_JpEAEBFyGhMPLQ8dmzvDyq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1813年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mvD31RLYD48dAAPFsSEAaN
          claim_id: c_Xip1go6CYHWK9VFtUwCvgX
          source_id: s_CVNhvDE4E73AGGE5hzTGym
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
        id: c_EXmFk4KBt26GGqipg2171Z
        subject_person_id: p_JpEAEBFyGhMPLQ8dmzvDyq
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
        - id: cs_LUxDkDN36WjohjLpmHiSeM
          claim_id: c_EXmFk4KBt26GGqipg2171Z
          source_id: s_CVNhvDE4E73AGGE5hzTGym
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

# 王家勤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家勤 | accepted |
| birth.date | 1813年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家勤（CBDB 71973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71973&o=json)

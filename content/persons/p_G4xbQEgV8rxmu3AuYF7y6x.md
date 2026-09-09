---
schema: wang-person/v1
id: p_G4xbQEgV8rxmu3AuYF7y6x
status: active
merged_into: null
display_name: 王約
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FrArqS9nr8DMo7zsJqwqBF
        subject_person_id: p_G4xbQEgV8rxmu3AuYF7y6x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ePHx1QbxqZrf6F28xH4xf1
          claim_id: c_FrArqS9nr8DMo7zsJqwqBF
          source_id: s_Wn1FiqAFQ4saVnnuNKoDDY
          stance: supports
          locator: CBDB:100730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100730）
          source: &a1
            id: s_Wn1FiqAFQ4saVnnuNKoDDY
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 100730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100730&o=json
            external_identifier: CBDB:100730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.400Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yDdz6RSSd1BE7qeAaN5a6j
        subject_person_id: p_G4xbQEgV8rxmu3AuYF7y6x
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1252年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ahiVih4Bwz9kiHoCfdWGDp
          claim_id: c_yDdz6RSSd1BE7qeAaN5a6j
          source_id: s_Wn1FiqAFQ4saVnnuNKoDDY
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
        id: c_rGV9eEyogh4VVF2CzTJDM1
        subject_person_id: p_G4xbQEgV8rxmu3AuYF7y6x
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1333年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VVNZukUoCXXfbAp84F7cZD
          claim_id: c_rGV9eEyogh4VVF2CzTJDM1
          source_id: s_Wn1FiqAFQ4saVnnuNKoDDY
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
        id: c_KGYqp3sM3Yr2Wmdz2GmtRK
        subject_person_id: p_G4xbQEgV8rxmu3AuYF7y6x
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
        - id: cs_NHQJUJDPrgBzAJCZkrnLQY
          claim_id: c_KGYqp3sM3Yr2Wmdz2GmtRK
          source_id: s_Wn1FiqAFQ4saVnnuNKoDDY
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

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| birth.date | 1252年 | accepted |
| death.date | 1333年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王約（CBDB 100730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100730&o=json)

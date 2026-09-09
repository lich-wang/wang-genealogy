---
schema: wang-person/v1
id: p_Va27aZRgdi5W8FWJiWP4zt
status: active
merged_into: null
display_name: 王琳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CVdrDdQ415xwySv7VmqGcq
        subject_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hQux2RujmCUgpPcc5HRRJJ
          claim_id: c_CVdrDdQ415xwySv7VmqGcq
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
          stance: supports
          locator: CBDB:198163
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198163）
          source: &a1
            id: s_hRCDgLQBmdUDEyE1cofkQA
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 198163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198163&o=json
            external_identifier: CBDB:198163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MLFRNCQAYXhwwn2gdKoYsF
        subject_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_efvYvACEq7f4a9E3gpQuoV
          claim_id: c_MLFRNCQAYXhwwn2gdKoYsF
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
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
        id: c_KRy6nG3Nn7bw8h5hTv3fap
        subject_person_id: p_Va27aZRgdi5W8FWJiWP4zt
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
        - id: cs_68dHdmYRq5JyMNRZ6ndYmy
          claim_id: c_KRy6nG3Nn7bw8h5hTv3fap
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
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

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| birth.date | 1428年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 198163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198163&o=json)

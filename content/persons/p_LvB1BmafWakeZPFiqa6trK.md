---
schema: wang-person/v1
id: p_LvB1BmafWakeZPFiqa6trK
status: active
merged_into: null
display_name: 王偉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_59ytDCWQXLtHPBJd86CjQs
        subject_person_id: p_LvB1BmafWakeZPFiqa6trK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xeFPRHJKC9TsPb45dfkWEM
          claim_id: c_59ytDCWQXLtHPBJd86CjQs
          source_id: s_DVmGTWuY3xEpbLaXH1ajMf
          stance: supports
          locator: CBDB:201651
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201651）
          source: &a1
            id: s_DVmGTWuY3xEpbLaXH1ajMf
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 201651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201651&o=json
            external_identifier: CBDB:201651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CKhozREXGoJhhXdV6FoQhR
        subject_person_id: p_LvB1BmafWakeZPFiqa6trK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1468年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wgSDn95g4ixjz8pdA6uj11
          claim_id: c_CKhozREXGoJhhXdV6FoQhR
          source_id: s_DVmGTWuY3xEpbLaXH1ajMf
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
        id: c_KDLKzx8MC5s5B1MGyWNmZa
        subject_person_id: p_LvB1BmafWakeZPFiqa6trK
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
        - id: cs_8u5fMfK6DZpV6zDqfCRTtL
          claim_id: c_KDLKzx8MC5s5B1MGyWNmZa
          source_id: s_DVmGTWuY3xEpbLaXH1ajMf
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

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| birth.date | 1468年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偉（CBDB 201651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201651&o=json)

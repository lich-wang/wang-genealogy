---
schema: wang-person/v1
id: p_jKFF9iT89CkNwjWt3EgbBb
status: active
merged_into: null
display_name: 王士俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ESWoivNnx78cAuEcvJFJ5p
        subject_person_id: p_jKFF9iT89CkNwjWt3EgbBb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ntzZKxdokqBHKbRuQdj3Km
          claim_id: c_ESWoivNnx78cAuEcvJFJ5p
          source_id: s_joxEN8rqgpxduSBfoKkKu2
          stance: supports
          locator: CBDB:57118
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57118）
          source: &a1
            id: s_joxEN8rqgpxduSBfoKkKu2
            source_type: api_record
            title: 中国历代人物传记资料库：王士俊（CBDB 57118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57118&o=json
            external_identifier: CBDB:57118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7HGtcbLNPr2xBNttGfCD2i
        subject_person_id: p_jKFF9iT89CkNwjWt3EgbBb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1694年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nEHaf1gfYiKqTihPqMT5BR
          claim_id: c_7HGtcbLNPr2xBNttGfCD2i
          source_id: s_joxEN8rqgpxduSBfoKkKu2
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
        id: c_ycd3B3VFw4XUx7ifsVT1v1
        subject_person_id: p_jKFF9iT89CkNwjWt3EgbBb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1756年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nEKhCP5BD3px2RnJBzwd9A
          claim_id: c_ycd3B3VFw4XUx7ifsVT1v1
          source_id: s_joxEN8rqgpxduSBfoKkKu2
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
        id: c_6pHs6FCNnFPiHyG7f5FrUi
        subject_person_id: p_jKFF9iT89CkNwjWt3EgbBb
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
        - id: cs_h4rs7ff7hjKekUteTbHKbo
          claim_id: c_6pHs6FCNnFPiHyG7f5FrUi
          source_id: s_joxEN8rqgpxduSBfoKkKu2
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

# 王士俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士俊 | accepted |
| birth.date | 1694年 | accepted |
| death.date | 1756年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士俊（CBDB 57118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57118&o=json)

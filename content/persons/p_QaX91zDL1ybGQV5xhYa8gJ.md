---
schema: wang-person/v1
id: p_QaX91zDL1ybGQV5xhYa8gJ
status: active
merged_into: null
display_name: 王啟緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cbZMEtMqY4K493Vtbp8GSo
        subject_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PGktWjcb2VdCumsbVXdnXs
          claim_id: c_cbZMEtMqY4K493Vtbp8GSo
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
          stance: supports
          locator: CBDB:69340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69340）
          source: &a1
            id: s_a3SeBAa1ZuS2LQEwQYm8m9
            source_type: api_record
            title: 中国历代人物传记资料库：王啟緒（CBDB 69340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69340&o=json
            external_identifier: CBDB:69340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cM5SrXeG2oXktwB6x1c8eq
        subject_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1732年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2PE8RxLzD7VfQecCwgEnc
          claim_id: c_cM5SrXeG2oXktwB6x1c8eq
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
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
        id: c_TnvHVztJpfQj5WrpdBCbLt
        subject_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1781年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8Y5RvjaHMzypn1Bni68RU
          claim_id: c_TnvHVztJpfQj5WrpdBCbLt
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
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
        id: c_ZvwcuV4etM9izAvJDGGbgy
        subject_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
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
        - id: cs_b4HZxmh15AgdDeCoorNm9x
          claim_id: c_ZvwcuV4etM9izAvJDGGbgy
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
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

# 王啟緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟緒 | accepted |
| birth.date | 1732年 | accepted |
| death.date | 1781年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟緒（CBDB 69340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69340&o=json)

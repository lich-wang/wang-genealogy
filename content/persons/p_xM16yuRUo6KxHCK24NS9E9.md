---
schema: wang-person/v1
id: p_xM16yuRUo6KxHCK24NS9E9
status: active
merged_into: null
display_name: 王魁鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WNXz2oAWeMn8EA8qNhMh8r
        subject_person_id: p_xM16yuRUo6KxHCK24NS9E9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魁鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1dDCwz1J9X19jBPDU4K7GD
          claim_id: c_WNXz2oAWeMn8EA8qNhMh8r
          source_id: s_4V8yuDZUsMv7i1CaVknLqW
          stance: supports
          locator: CBDB:72130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72130）
          source: &a1
            id: s_4V8yuDZUsMv7i1CaVknLqW
            source_type: api_record
            title: 中国历代人物传记资料库：王魁鑾（CBDB 72130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72130&o=json
            external_identifier: CBDB:72130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.008Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_U6zxCZUxFwtpycDBiBzNx4
        subject_person_id: p_xM16yuRUo6KxHCK24NS9E9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1831年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rQN2w7TSLbG3gJNQCRnooa
          claim_id: c_U6zxCZUxFwtpycDBiBzNx4
          source_id: s_4V8yuDZUsMv7i1CaVknLqW
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
        id: c_t4gAeQxLBPKXPM4vW58WEt
        subject_person_id: p_xM16yuRUo6KxHCK24NS9E9
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
        - id: cs_erZt8T9f4R5QvqgkpoZ32F
          claim_id: c_t4gAeQxLBPKXPM4vW58WEt
          source_id: s_4V8yuDZUsMv7i1CaVknLqW
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

# 王魁鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魁鑾 | accepted |
| birth.date | 1831年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王魁鑾（CBDB 72130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72130&o=json)

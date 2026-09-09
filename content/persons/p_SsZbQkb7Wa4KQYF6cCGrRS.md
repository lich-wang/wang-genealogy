---
schema: wang-person/v1
id: p_SsZbQkb7Wa4KQYF6cCGrRS
status: active
merged_into: null
display_name: 王鶚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d12QJCnhiFHQg7haXA84TJ
        subject_person_id: p_SsZbQkb7Wa4KQYF6cCGrRS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7dQoCp2QCTskwpE3XMKnRX
          claim_id: c_d12QJCnhiFHQg7haXA84TJ
          source_id: s_jNVVEFD8UKqEmF6EzBtfPR
          stance: supports
          locator: CBDB:169316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169316）
          source: &a1
            id: s_jNVVEFD8UKqEmF6EzBtfPR
            source_type: api_record
            title: 中国历代人物传记资料库：王鶚（CBDB 169316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169316&o=json
            external_identifier: CBDB:169316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bUcNhNVCkwYRfReB7WU5bi
        subject_person_id: p_SsZbQkb7Wa4KQYF6cCGrRS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 948年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iA5yt5et8NWujm8vuSfRNq
          claim_id: c_bUcNhNVCkwYRfReB7WU5bi
          source_id: s_jNVVEFD8UKqEmF6EzBtfPR
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
        id: c_dT77dzEQCiuqhmcT19p98D
        subject_person_id: p_SsZbQkb7Wa4KQYF6cCGrRS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HCxY8N4rVKfFNXXeU71oGq
          claim_id: c_dT77dzEQCiuqhmcT19p98D
          source_id: s_jNVVEFD8UKqEmF6EzBtfPR
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

# 王鶚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鶚 | accepted |
| death.date | 948年 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鶚（CBDB 169316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169316&o=json)

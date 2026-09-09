---
schema: wang-person/v1
id: p_R4LVMcPvbgUUiP4KLtuDfx
status: active
merged_into: null
display_name: 王端朝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DnG6PFYUK8MG6w82VH4KwE
        subject_person_id: p_R4LVMcPvbgUUiP4KLtuDfx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端朝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6GSXnZYJvuB8WzCEM5Kfro
          claim_id: c_DnG6PFYUK8MG6w82VH4KwE
          source_id: s_25Gd1iHFB2pd3kjY4YYiQn
          stance: supports
          locator: CBDB:1905
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1905）
          source: &a1
            id: s_25Gd1iHFB2pd3kjY4YYiQn
            source_type: api_record
            title: 中国历代人物传记资料库：王端朝（CBDB 1905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1905&o=json
            external_identifier: CBDB:1905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NvvayN9i3nk64oDPKxAAQ2
        subject_person_id: p_R4LVMcPvbgUUiP4KLtuDfx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1123年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HPoWSzqkyaok6Z2HoC5BEf
          claim_id: c_NvvayN9i3nk64oDPKxAAQ2
          source_id: s_25Gd1iHFB2pd3kjY4YYiQn
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
        id: c_kAQzd82enzsSrSKnKByiew
        subject_person_id: p_R4LVMcPvbgUUiP4KLtuDfx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1166年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_seC2vjjNMHX8PsazRt5gh4
          claim_id: c_kAQzd82enzsSrSKnKByiew
          source_id: s_25Gd1iHFB2pd3kjY4YYiQn
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
        id: c_9Fn7nJ8hhVddrnZ8DH56Kw
        subject_person_id: p_R4LVMcPvbgUUiP4KLtuDfx
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
        - id: cs_LM5p9MrANQzqveSh7xis47
          claim_id: c_9Fn7nJ8hhVddrnZ8DH56Kw
          source_id: s_25Gd1iHFB2pd3kjY4YYiQn
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

# 王端朝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端朝 | accepted |
| birth.date | 1123年 | accepted |
| death.date | 1166年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王端朝（CBDB 1905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1905&o=json)

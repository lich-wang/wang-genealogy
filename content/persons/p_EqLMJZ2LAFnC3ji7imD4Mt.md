---
schema: wang-person/v1
id: p_EqLMJZ2LAFnC3ji7imD4Mt
status: active
merged_into: null
display_name: 王震龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EXYrsEM2BCLbny1DgDrXnU
        subject_person_id: p_EqLMJZ2LAFnC3ji7imD4Mt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c8M7FZw8fzNb6p9B4N7ocu
          claim_id: c_EXYrsEM2BCLbny1DgDrXnU
          source_id: s_cX6gJFtAPwgdfy7rB2L4K5
          stance: supports
          locator: CBDB:72182
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72182）
          source: &a1
            id: s_cX6gJFtAPwgdfy7rB2L4K5
            source_type: api_record
            title: 中国历代人物传记资料库：王震龍（CBDB 72182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72182&o=json
            external_identifier: CBDB:72182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UmZA5q7zuckFEyc3b4Kzh7
        subject_person_id: p_EqLMJZ2LAFnC3ji7imD4Mt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1628年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FKs7yPV4E619HCnsKHe8jj
          claim_id: c_UmZA5q7zuckFEyc3b4Kzh7
          source_id: s_cX6gJFtAPwgdfy7rB2L4K5
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
        id: c_nR8thVK7WLqvMJQkaEpC3d
        subject_person_id: p_EqLMJZ2LAFnC3ji7imD4Mt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震龍（生于1628年），清人物。籍贯山西省。（中国历代人物传记资料库 CBDB 72182）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lHbAEm8W5Klkk7Vo3hY0cZ
          claim_id: c_nR8thVK7WLqvMJQkaEpC3d
          source_id: s_cX6gJFtAPwgdfy7rB2L4K5
          stance: supports
          locator: CBDB:72182
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王震龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震龍 | accepted |
| birth.date | 1628年 | accepted |
| bio.summary | 王震龍（生于1628年），清人物。籍贯山西省。（中国历代人物传记资料库 CBDB 72182） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震龍（CBDB 72182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72182&o=json)

---
schema: wang-person/v1
id: p_8AHkHr6wzRuf4A8VDQmmJg
status: active
merged_into: null
display_name: 王抑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SGTc3JjNcfyyrHCM4WgU7d
        subject_person_id: p_8AHkHr6wzRuf4A8VDQmmJg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王抑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6XkoqP8xoQw4KV8rkv5s5N
          claim_id: c_SGTc3JjNcfyyrHCM4WgU7d
          source_id: s_d4jKMsAQy4XsvxeE8ykwYS
          stance: supports
          locator: CBDB:71076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71076）
          source: &a1
            id: s_d4jKMsAQy4XsvxeE8ykwYS
            source_type: api_record
            title: 中国历代人物传记资料库：王抑（CBDB 71076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71076&o=json
            external_identifier: CBDB:71076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9d5CHRdxfqAGwJHHPLzCAZ
        subject_person_id: p_8AHkHr6wzRuf4A8VDQmmJg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1699年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ygHZpp8ZCfK6h7CbDBp9Ty
          claim_id: c_9d5CHRdxfqAGwJHHPLzCAZ
          source_id: s_d4jKMsAQy4XsvxeE8ykwYS
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
        id: c_77PS9MBm7dbjD5FZGhAGwB
        subject_person_id: p_8AHkHr6wzRuf4A8VDQmmJg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王抑（卒于1699年），清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 71076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gUSipefV3KkJWGJW2fm_-l
          claim_id: c_77PS9MBm7dbjD5FZGhAGwB
          source_id: s_d4jKMsAQy4XsvxeE8ykwYS
          stance: supports
          locator: CBDB:71076
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

# 王抑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王抑 | accepted |
| death.date | 1699年 | accepted |
| bio.summary | 王抑（卒于1699年），清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 71076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王抑（CBDB 71076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71076&o=json)

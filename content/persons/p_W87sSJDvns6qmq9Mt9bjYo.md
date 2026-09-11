---
schema: wang-person/v1
id: p_W87sSJDvns6qmq9Mt9bjYo
status: active
merged_into: null
display_name: 王泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1VkQvtjPKNpAqwvkAuP3pm
        subject_person_id: p_W87sSJDvns6qmq9Mt9bjYo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_znkDGp2oFMjjE7sV3AB1HE
          claim_id: c_1VkQvtjPKNpAqwvkAuP3pm
          source_id: s_zrvuM71yyJiCaYv7v1oUKR
          stance: supports
          locator: CBDB:190357
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190357）
          source: &a1
            id: s_zrvuM71yyJiCaYv7v1oUKR
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 190357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190357&o=json
            external_identifier: CBDB:190357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_R99Bc6tB2QUnzqFBH29J1t
        subject_person_id: p_W87sSJDvns6qmq9Mt9bjYo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1z3CJxsbFUgsaTMEtjfze9
          claim_id: c_R99Bc6tB2QUnzqFBH29J1t
          source_id: s_zrvuM71yyJiCaYv7v1oUKR
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
        id: c_g1rBT7aNCBLTnGpD7oJuw1
        subject_person_id: p_W87sSJDvns6qmq9Mt9bjYo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰（卒于842年），唐人物。曾任左千牛。（中国历代人物传记资料库 CBDB 190357）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DA0M4SfTzN7ZwpSJfjuKEV
          claim_id: c_g1rBT7aNCBLTnGpD7oJuw1
          source_id: s_zrvuM71yyJiCaYv7v1oUKR
          stance: supports
          locator: CBDB:190357
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

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| death.date | 842年 | accepted |
| bio.summary | 王泰（卒于842年），唐人物。曾任左千牛。（中国历代人物传记资料库 CBDB 190357） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 190357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190357&o=json)

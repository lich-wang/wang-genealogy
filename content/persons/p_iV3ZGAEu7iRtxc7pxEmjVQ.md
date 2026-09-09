---
schema: wang-person/v1
id: p_iV3ZGAEu7iRtxc7pxEmjVQ
status: active
merged_into: null
display_name: 王宴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GKdb4nNttygoFke5RsK7Cm
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7GBJWsPxvMqAbiRFLiKaM4
          claim_id: c_GKdb4nNttygoFke5RsK7Cm
          source_id: s_sAqCF7taW9xBh2FsGdKucb
          stance: supports
          locator: CBDB:252246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252246）
          source: &a1
            id: s_sAqCF7taW9xBh2FsGdKucb
            source_type: api_record
            title: 中国历代人物传记资料库：王宴（CBDB 252246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252246&o=json
            external_identifier: CBDB:252246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GFJGgJNbkLUDMy442ELikA
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
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
        - id: cs_qAsPEbKKA1m4m6GN8RjyQy
          claim_id: c_GFJGgJNbkLUDMy442ELikA
          source_id: s_sAqCF7taW9xBh2FsGdKucb
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

# 王宴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宴 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宴（CBDB 252246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252246&o=json)

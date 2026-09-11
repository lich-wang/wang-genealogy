---
schema: wang-person/v1
id: p_4erF1dz8KdJQkQzwmtGFTT
status: active
merged_into: null
display_name: 王啟烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9XtPUG2u6n5nB4UMDD7Yfk
        subject_person_id: p_4erF1dz8KdJQkQzwmtGFTT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iuMpdrzZcK6DkzEPFtCupM
          claim_id: c_9XtPUG2u6n5nB4UMDD7Yfk
          source_id: s_ptNU6dXTg6FqGznL5ZCa4Q
          stance: supports
          locator: CBDB:71719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71719）
          source: &a1
            id: s_ptNU6dXTg6FqGznL5ZCa4Q
            source_type: api_record
            title: 中国历代人物传记资料库：王啟烈（CBDB 71719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71719&o=json
            external_identifier: CBDB:71719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PoRF4we1HyEMqdqepWdBMx
        subject_person_id: p_4erF1dz8KdJQkQzwmtGFTT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1849年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_71jKeGDLwjehWWD1ehAxyS
          claim_id: c_PoRF4we1HyEMqdqepWdBMx
          source_id: s_ptNU6dXTg6FqGznL5ZCa4Q
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
        id: c_SGx3owDaRwa8eqMx1ea6Nr
        subject_person_id: p_4erF1dz8KdJQkQzwmtGFTT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟烈（生于1849年），清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 71719）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1ji1nlS8i8NtrvSc4T0h4n
          claim_id: c_SGx3owDaRwa8eqMx1ea6Nr
          source_id: s_ptNU6dXTg6FqGznL5ZCa4Q
          stance: supports
          locator: CBDB:71719
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

# 王啟烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟烈 | accepted |
| birth.date | 1849年 | accepted |
| bio.summary | 王啟烈（生于1849年），清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 71719） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟烈（CBDB 71719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71719&o=json)

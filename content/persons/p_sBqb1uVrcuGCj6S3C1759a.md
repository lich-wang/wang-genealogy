---
schema: wang-person/v1
id: p_sBqb1uVrcuGCj6S3C1759a
status: active
merged_into: null
display_name: 王磻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qUsasi1tPVABWFWS4tGK7H
        subject_person_id: p_sBqb1uVrcuGCj6S3C1759a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kpERTQjzCoPhUG8E9c8VDo
          claim_id: c_qUsasi1tPVABWFWS4tGK7H
          source_id: s_dbK12kQG8aLnW3M7TQgqfq
          stance: supports
          locator: CBDB:190358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190358）
          source: &a1
            id: s_dbK12kQG8aLnW3M7TQgqfq
            source_type: api_record
            title: 中国历代人物传记资料库：王磻（CBDB 190358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190358&o=json
            external_identifier: CBDB:190358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_43Z4M1teZHthgF5s1p35LX
        subject_person_id: p_sBqb1uVrcuGCj6S3C1759a
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
        - id: cs_Rr8KZWKHx8WpvQQPz9m4w6
          claim_id: c_43Z4M1teZHthgF5s1p35LX
          source_id: s_dbK12kQG8aLnW3M7TQgqfq
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
        id: c_xxc9GMNXbSe2MMGKbur93v
        subject_person_id: p_sBqb1uVrcuGCj6S3C1759a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磻（卒于842年），唐人物。曾任太常寺協律郎。（中国历代人物传记资料库 CBDB 190358）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2LYUm_W93ZnP2OYBLbilDk
          claim_id: c_xxc9GMNXbSe2MMGKbur93v
          source_id: s_dbK12kQG8aLnW3M7TQgqfq
          stance: supports
          locator: CBDB:190358
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

# 王磻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王磻 | accepted |
| death.date | 842年 | accepted |
| bio.summary | 王磻（卒于842年），唐人物。曾任太常寺協律郎。（中国历代人物传记资料库 CBDB 190358） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王磻（CBDB 190358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190358&o=json)

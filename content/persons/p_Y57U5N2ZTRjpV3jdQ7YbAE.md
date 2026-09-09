---
schema: wang-person/v1
id: p_Y57U5N2ZTRjpV3jdQ7YbAE
status: active
merged_into: null
display_name: 王鰲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1JusW9CcikpAL68tgLLPfo
        subject_person_id: p_Y57U5N2ZTRjpV3jdQ7YbAE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鰲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FUTwUHPv1QfqT2Qr4x6f24
          claim_id: c_1JusW9CcikpAL68tgLLPfo
          source_id: s_ggx45BQR2Db3PAECa94Xom
          stance: supports
          locator: CBDB:214069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214069）
          source: &a1
            id: s_ggx45BQR2Db3PAECa94Xom
            source_type: api_record
            title: 中国历代人物传记资料库：王鰲（CBDB 214069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214069&o=json
            external_identifier: CBDB:214069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KfEayYt6G8hVGnEe8DX23B
        subject_person_id: p_Y57U5N2ZTRjpV3jdQ7YbAE
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
        - id: cs_FhXbH4LvYoZoB3ZzkbBoTf
          claim_id: c_KfEayYt6G8hVGnEe8DX23B
          source_id: s_ggx45BQR2Db3PAECa94Xom
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

# 王鰲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鰲 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鰲（CBDB 214069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214069&o=json)

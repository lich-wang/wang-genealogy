---
schema: wang-person/v1
id: p_u2L4kLmsGknK51dFCbrro6
status: active
merged_into: null
display_name: 王德昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wSaU9DxByJ6Dj5FEGyvmpJ
        subject_person_id: p_u2L4kLmsGknK51dFCbrro6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TTp7PYGon7L6XJkpZFUUgw
          claim_id: c_wSaU9DxByJ6Dj5FEGyvmpJ
          source_id: s_KaRLHMtpTuSifT27qrxxad
          stance: supports
          locator: CBDB:637682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637682）
          source: &a1
            id: s_KaRLHMtpTuSifT27qrxxad
            source_type: api_record
            title: 中国历代人物传记资料库：王德昌（CBDB 637682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637682&o=json
            external_identifier: CBDB:637682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S7EfEe8Kyav8PUtCuRg7LE
        subject_person_id: p_u2L4kLmsGknK51dFCbrro6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德昌，清人物。籍贯洪雅，入仕廩生，曾任同知。（中国历代人物传记资料库 CBDB 637682）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f3Q2eVccISbH5p_Pww3ACO
          claim_id: c_S7EfEe8Kyav8PUtCuRg7LE
          source_id: s_KaRLHMtpTuSifT27qrxxad
          stance: supports
          locator: CBDB:637682
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

# 王德昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德昌 | accepted |
| bio.summary | 王德昌，清人物。籍贯洪雅，入仕廩生，曾任同知。（中国历代人物传记资料库 CBDB 637682） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德昌（CBDB 637682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637682&o=json)

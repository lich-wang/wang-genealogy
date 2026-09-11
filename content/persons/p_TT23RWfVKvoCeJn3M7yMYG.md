---
schema: wang-person/v1
id: p_TT23RWfVKvoCeJn3M7yMYG
status: active
merged_into: null
display_name: 王憲清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r1Cxus61c4SVu2FeeYDnen
        subject_person_id: p_TT23RWfVKvoCeJn3M7yMYG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k1e316oLaoBoMM6KBq7wvz
          claim_id: c_r1Cxus61c4SVu2FeeYDnen
          source_id: s_vLhaLC5gEHyE9dWFi5s5n2
          stance: supports
          locator: CBDB:637970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637970）
          source: &a1
            id: s_vLhaLC5gEHyE9dWFi5s5n2
            source_type: api_record
            title: 中国历代人物传记资料库：王憲清（CBDB 637970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637970&o=json
            external_identifier: CBDB:637970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_evr9XsbUNVUWn9sk6uzFm2
        subject_person_id: p_TT23RWfVKvoCeJn3M7yMYG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲清，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637970）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cWeZx4Y84i9EZ3x7uFu_VR
          claim_id: c_evr9XsbUNVUWn9sk6uzFm2
          source_id: s_vLhaLC5gEHyE9dWFi5s5n2
          stance: supports
          locator: CBDB:637970
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

# 王憲清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲清 | accepted |
| bio.summary | 王憲清，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637970） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王憲清（CBDB 637970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637970&o=json)

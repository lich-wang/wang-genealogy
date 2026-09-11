---
schema: wang-person/v1
id: p_Zx5A5RHQZBBjrvjs8GTGpW
status: active
merged_into: null
display_name: 王因植
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ShC53T9p4dKPU3X9CscELy
        subject_person_id: p_Zx5A5RHQZBBjrvjs8GTGpW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王因植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2YdArNK4zbMVN2hEPrjLxA
          claim_id: c_ShC53T9p4dKPU3X9CscELy
          source_id: s_eSXmXTp9LZ9fnWtXf7FHyJ
          stance: supports
          locator: CBDB:636637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636637）
          source: &a1
            id: s_eSXmXTp9LZ9fnWtXf7FHyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王因植（CBDB 636637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636637&o=json
            external_identifier: CBDB:636637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZFEhqirb51aj3gwNstaeKX
        subject_person_id: p_Zx5A5RHQZBBjrvjs8GTGpW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王因植，清人物。籍贯青州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 636637）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EDxPbq8fb-N-YM_Juv1__Q
          claim_id: c_ZFEhqirb51aj3gwNstaeKX
          source_id: s_eSXmXTp9LZ9fnWtXf7FHyJ
          stance: supports
          locator: CBDB:636637
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

# 王因植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王因植 | accepted |
| bio.summary | 王因植，清人物。籍贯青州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 636637） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王因植（CBDB 636637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636637&o=json)

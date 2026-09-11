---
schema: wang-person/v1
id: p_P38AAzwLYdV3zNNhXR1ENv
status: active
merged_into: null
display_name: 王敬柔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DXpmno5DJy32Lcd5J5G9zm
        subject_person_id: p_P38AAzwLYdV3zNNhXR1ENv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬柔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UpUZH4tVqGE4FyUzeZN7EV
          claim_id: c_DXpmno5DJy32Lcd5J5G9zm
          source_id: s_43MGkcmCRDEV7sne1toDtA
          stance: supports
          locator: CBDB:380382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380382）
          source: &a1
            id: s_43MGkcmCRDEV7sne1toDtA
            source_type: api_record
            title: 中国历代人物传记资料库：王敬柔（CBDB 380382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380382&o=json
            external_identifier: CBDB:380382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jZSJXS6WLDxN696pHrf55z
        subject_person_id: p_P38AAzwLYdV3zNNhXR1ENv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬柔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380382）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cl0qPy5NW8cF_MGXq-6QxJ
          claim_id: c_jZSJXS6WLDxN696pHrf55z
          source_id: s_43MGkcmCRDEV7sne1toDtA
          stance: supports
          locator: CBDB:380382
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

# 王敬柔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬柔 | accepted |
| bio.summary | 王敬柔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬柔（CBDB 380382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380382&o=json)

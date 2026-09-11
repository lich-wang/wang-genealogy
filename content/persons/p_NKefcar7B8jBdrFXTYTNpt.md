---
schema: wang-person/v1
id: p_NKefcar7B8jBdrFXTYTNpt
status: active
merged_into: null
display_name: 王世奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PC38VYRKF2UEYiwKXELETT
        subject_person_id: p_NKefcar7B8jBdrFXTYTNpt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9k3EAnkifdKq9KQLJiJ1G7
          claim_id: c_PC38VYRKF2UEYiwKXELETT
          source_id: s_8XJ2a75RSjayKZys8SuDx8
          stance: supports
          locator: CBDB:343183
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343183）
          source: &a1
            id: s_8XJ2a75RSjayKZys8SuDx8
            source_type: api_record
            title: 中国历代人物传记资料库：王世奎（CBDB 343183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343183&o=json
            external_identifier: CBDB:343183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BxpoNbM6qkk4G3wHYDwkDa
        subject_person_id: p_NKefcar7B8jBdrFXTYTNpt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世奎，清人物。明清進士進士，籍贯皋蘭，入仕進士。（中国历代人物传记资料库 CBDB 343183）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b7QXQlp3QR7zr1PeECiKhs
          claim_id: c_BxpoNbM6qkk4G3wHYDwkDa
          source_id: s_8XJ2a75RSjayKZys8SuDx8
          stance: supports
          locator: CBDB:343183
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

# 王世奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世奎 | accepted |
| bio.summary | 王世奎，清人物。明清進士進士，籍贯皋蘭，入仕進士。（中国历代人物传记资料库 CBDB 343183） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世奎（CBDB 343183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343183&o=json)

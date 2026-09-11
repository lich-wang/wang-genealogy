---
schema: wang-person/v1
id: p_FrEh4RoDfGH1irJy7muhxs
status: active
merged_into: null
display_name: 王禧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YCeSiwg1fxAUYN1E5Vp8Uc
        subject_person_id: p_FrEh4RoDfGH1irJy7muhxs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4MwJcRRGCU2HskrNwsf3oR
          claim_id: c_YCeSiwg1fxAUYN1E5Vp8Uc
          source_id: s_HBMs9tcq6jppg6KKBbxWQN
          stance: supports
          locator: CBDB:331175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331175）
          source: &a1
            id: s_HBMs9tcq6jppg6KKBbxWQN
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 331175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331175&o=json
            external_identifier: CBDB:331175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7ZjxXVbeHMo6DEswDw8vRu
        subject_person_id: p_FrEh4RoDfGH1irJy7muhxs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331175）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nA6JVuDTruTn6eE41hgaMj
          claim_id: c_7ZjxXVbeHMo6DEswDw8vRu
          source_id: s_HBMs9tcq6jppg6KKBbxWQN
          stance: supports
          locator: CBDB:331175
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
  descendants:
    - claim:
        id: c_0jQ3Pbjro8ozPdtHV9tNCk
        subject_person_id: p_FrEh4RoDfGH1irJy7muhxs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sZEnnJm6tMYD9G3rVKEL7w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m5mkkb9WSdobIS9JuEFXGe
          claim_id: c_0jQ3Pbjro8ozPdtHV9tNCk
          source_id: s_HBMs9tcq6jppg6KKBbxWQN
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第八十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sZEnnJm6tMYD9G3rVKEL7w
        status: active
        display_name: 王弘誨
        merged_into_person_id: null
  other: []
---

# 王禧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禧 | accepted |
| bio.summary | 王禧，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331175） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sZEnnJm6tMYD9G3rVKEL7w | 王弘誨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禧（CBDB 331175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331175&o=json)

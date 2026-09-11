---
schema: wang-person/v1
id: p_8SfbNUa9c5K4NMLzzfdGZb
status: active
merged_into: null
display_name: 王汝成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TxCs5ux9X5BGzEu5kFjo5k
        subject_person_id: p_8SfbNUa9c5K4NMLzzfdGZb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RePnjyYPJd3UrNrrPt9uka
          claim_id: c_TxCs5ux9X5BGzEu5kFjo5k
          source_id: s_WDHRNSfWYaS6zatBbZJCD3
          stance: supports
          locator: CBDB:696858
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696858）
          source: &a1
            id: s_WDHRNSfWYaS6zatBbZJCD3
            source_type: api_record
            title: 中国历代人物传记资料库：王汝成（CBDB 696858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696858&o=json
            external_identifier: CBDB:696858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G31siTuexqo7S83dPfz4tQ
        subject_person_id: p_8SfbNUa9c5K4NMLzzfdGZb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_spanJjF1F589cEr2tZSqn8
          claim_id: c_G31siTuexqo7S83dPfz4tQ
          source_id: s_WDHRNSfWYaS6zatBbZJCD3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8dqImfJ7CtMCUVj8Cygbwc
        subject_person_id: p_pfkAJ6LT6dUqP7JHbgQTA7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8SfbNUa9c5K4NMLzzfdGZb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UfIy5HezkpRbZ55_Gx2JjK
          claim_id: c_8dqImfJ7CtMCUVj8Cygbwc
          source_id: s_WDHRNSfWYaS6zatBbZJCD3
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pfkAJ6LT6dUqP7JHbgQTA7
        status: active
        display_name: 王廷言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_YXr-ptwX2kWf5INXSM4lzN
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8SfbNUa9c5K4NMLzzfdGZb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7jS6FGMK_G0qMxczpTOXHm
          claim_id: c_YXr-ptwX2kWf5INXSM4lzN
          source_id: s_WDHRNSfWYaS6zatBbZJCD3
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cBGCXtQ6wkhv554viPc99n
        status: active
        display_name: 王文德
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王汝成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝成 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pfkAJ6LT6dUqP7JHbgQTA7 | 王廷言 | accepted |
| ancestors | p_cBGCXtQ6wkhv554viPc99n | 王文德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝成（CBDB 696858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696858&o=json)

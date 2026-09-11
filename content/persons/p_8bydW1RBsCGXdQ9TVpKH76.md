---
schema: wang-person/v1
id: p_8bydW1RBsCGXdQ9TVpKH76
status: active
merged_into: null
display_name: 王藹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f4JMqr3cNJwebwqSDutBeF
        subject_person_id: p_8bydW1RBsCGXdQ9TVpKH76
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YQ7RMCFpH9yJ9LkytK7jHG
          claim_id: c_f4JMqr3cNJwebwqSDutBeF
          source_id: s_yCCBj6zUnKFxCGLMEV1qTQ
          stance: supports
          locator: CBDB:282556
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282556）
          source: &a1
            id: s_yCCBj6zUnKFxCGLMEV1qTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王藹（CBDB 282556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282556&o=json
            external_identifier: CBDB:282556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.096Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XP3FtP1t6LD825LA1eC3nt
        subject_person_id: p_8bydW1RBsCGXdQ9TVpKH76
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
        - id: cs_x1vm6R3zn7WBbFJtgh38PR
          claim_id: c_XP3FtP1t6LD825LA1eC3nt
          source_id: s_yCCBj6zUnKFxCGLMEV1qTQ
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
  descendants:
    - claim:
        id: c_AA0k0J9zcfRRgUK2ttDeSa
        subject_person_id: p_8bydW1RBsCGXdQ9TVpKH76
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P7zJqgvbYP5g8TxtNP9GCp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gmzS-hs72VAoQcWouapLl5
          claim_id: c_AA0k0J9zcfRRgUK2ttDeSa
          source_id: s_yCCBj6zUnKFxCGLMEV1qTQ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P7zJqgvbYP5g8TxtNP9GCp
        status: active
        display_name: 王文
        merged_into_person_id: null
  other: []
---

# 王藹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藹 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_P7zJqgvbYP5g8TxtNP9GCp | 王文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王藹（CBDB 282556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282556&o=json)

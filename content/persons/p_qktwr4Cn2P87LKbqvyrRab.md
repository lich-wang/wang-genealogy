---
schema: wang-person/v1
id: p_qktwr4Cn2P87LKbqvyrRab
status: active
merged_into: null
display_name: 王復
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_THNpLkYVqctyMUwymowjXi
        subject_person_id: p_qktwr4Cn2P87LKbqvyrRab
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zPm6qd11oD7gBtsK6VNdGe
          claim_id: c_THNpLkYVqctyMUwymowjXi
          source_id: s_Y7DfMHzfFZMV3moe31hJPq
          stance: supports
          locator: CBDB:386296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386296）
          source: &a1
            id: s_Y7DfMHzfFZMV3moe31hJPq
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 386296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386296&o=json
            external_identifier: CBDB:386296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BCEucHSfM4RyyBA1v7vtM7
        subject_person_id: p_qktwr4Cn2P87LKbqvyrRab
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復，元人物。籍贯東陽。（中国历代人物传记资料库 CBDB 386296）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t8ehuzbLRm8wn9MILFJNwA
          claim_id: c_BCEucHSfM4RyyBA1v7vtM7
          source_id: s_Y7DfMHzfFZMV3moe31hJPq
          stance: supports
          locator: CBDB:386296
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
  other:
    - claim:
        id: c_sWOn7br6PCAs2z48yj6N1p
        subject_person_id: p_J9zQk9yETuwFDgMrEDaD8Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qktwr4Cn2P87LKbqvyrRab
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O8kp9DdxWloaXA1SSNl5uf
          claim_id: c_sWOn7br6PCAs2z48yj6N1p
          source_id: s_1wWeME5jExvZmOh8CFYuZT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 386296 王復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1wWeME5jExvZmOh8CFYuZT
            source_type: api_record
            title: 中国历代人物传记资料库：王武（CBDB 386295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386295&o=json
            external_identifier: CBDB:386295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J9zQk9yETuwFDgMrEDaD8Y
        status: active
        display_name: 王武
        merged_into_person_id: null
---

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| bio.summary | 王復，元人物。籍贯東陽。（中国历代人物传记资料库 CBDB 386296） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_J9zQk9yETuwFDgMrEDaD8Y | 王武 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 386296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386296&o=json)
- [中国历代人物传记资料库：王武（CBDB 386295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386295&o=json)

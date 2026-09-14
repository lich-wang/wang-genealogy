---
schema: wang-person/v1
id: p_iP4yKPZdLXFDra4a93FyV8
status: active
merged_into: null
display_name: 王梧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tUze5n2JJpKKiHZUTHEUfo
        subject_person_id: p_iP4yKPZdLXFDra4a93FyV8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PY8BZP3536tnH233pcuNhh
          claim_id: c_tUze5n2JJpKKiHZUTHEUfo
          source_id: s_ycyJ6n8moSxvsms911FEru
          stance: supports
          locator: CBDB:320126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320126）
          source: &a1
            id: s_ycyJ6n8moSxvsms911FEru
            source_type: api_record
            title: 中国历代人物传记资料库：王梧（CBDB 320126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320126&o=json
            external_identifier: CBDB:320126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QYK5RgLxhRAZPndqF2wBsr
        subject_person_id: p_iP4yKPZdLXFDra4a93FyV8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梧，明人物。嘉靖三十五年進士，籍贯永康，入仕監生。（中国历代人物传记资料库 CBDB 320126）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MrLSeZlYS1s_83eGeD6DMO
          claim_id: c_QYK5RgLxhRAZPndqF2wBsr
          source_id: s_ycyJ6n8moSxvsms911FEru
          stance: supports
          locator: CBDB:320126
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QmNG_Eem6Z1FLbwKW0Ke1H
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iP4yKPZdLXFDra4a93FyV8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WBJD9-Iy4JxiA66-8HFtoe
          claim_id: c_QmNG_Eem6Z1FLbwKW0Ke1H
          source_id: s_iTPrctbA46815lxrVIF5og
          stance: supports
          locator: CBDB：兄弟 王楷（126753）之父／母 王淮
          quotation: null
          interpretation_note: 由兄弟关系推断：王梧 与 王楷 为同胞（CBDB 记「兄」），王楷 之父／母即 王梧 之父／母。
          source:
            id: s_iTPrctbA46815lxrVIF5og
            source_type: api_record
            title: 中国历代人物传记资料库：王梧（CBDB 320126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320126&o=json
            external_identifier: CBDB:320126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4TKB9CF1Pcy4hP4NGvXiGk
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DwNxZGc5EYBSCxiqcIQVBi
        subject_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iP4yKPZdLXFDra4a93FyV8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lCkO9OVQUbsgLlfgvmNeqW
          claim_id: c_DwNxZGc5EYBSCxiqcIQVBi
          source_id: s_iTPrctbA46815lxrVIF5og
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126753 王楷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iTPrctbA46815lxrVIF5og
            source_type: api_record
            title: 中国历代人物传记资料库：王梧（CBDB 320126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320126&o=json
            external_identifier: CBDB:320126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R58pqFjKH7zhFPrnUA5Ato
        status: active
        display_name: 王楷
        merged_into_person_id: null
---

# 王梧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梧 | accepted |
| bio.summary | 王梧，明人物。嘉靖三十五年進士，籍贯永康，入仕監生。（中国历代人物传记资料库 CBDB 320126） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4TKB9CF1Pcy4hP4NGvXiGk | 王淮 | accepted |
| other | p_R58pqFjKH7zhFPrnUA5Ato | 王楷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王梧（CBDB 320126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320126&o=json)

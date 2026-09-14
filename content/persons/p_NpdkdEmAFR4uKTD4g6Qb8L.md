---
schema: wang-person/v1
id: p_NpdkdEmAFR4uKTD4g6Qb8L
status: active
merged_into: null
display_name: 王瑤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8eN9NFSG82kr7cYkB1jbS4
        subject_person_id: p_NpdkdEmAFR4uKTD4g6Qb8L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cqiJeJH3uq5BzJEvXoVbGM
          claim_id: c_8eN9NFSG82kr7cYkB1jbS4
          source_id: s_tQEvoP2dZjWJrXAmobvcCX
          stance: supports
          locator: CBDB:244702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244702）
          source: &a1
            id: s_tQEvoP2dZjWJrXAmobvcCX
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 244702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244702&o=json
            external_identifier: CBDB:244702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2RyCWjXGWhnGqyo7WnQGcH
        subject_person_id: p_NpdkdEmAFR4uKTD4g6Qb8L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤，明人物。成化五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 244702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z_E9SCyFSRP2MAmMOTnSX8
          claim_id: c_2RyCWjXGWhnGqyo7WnQGcH
          source_id: s_tQEvoP2dZjWJrXAmobvcCX
          stance: supports
          locator: CBDB:244702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HWiVD_d4-va8qv9wSRCLnB
        subject_person_id: p_NpyCf5W5QfEUuJVcAPTPqZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NpdkdEmAFR4uKTD4g6Qb8L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_STVTHmdu6a6BjDzjAZDgzx
          claim_id: c_HWiVD_d4-va8qv9wSRCLnB
          source_id: s_GCP2n8cgjWu01t1uRbUKP-
          stance: supports
          locator: CBDB：兄弟 王玹（126600）之父／母 王幹
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑤 与 王玹 为同胞（CBDB 记「兄」），王玹 之父／母即 王瑤 之父／母。
          source:
            id: s_GCP2n8cgjWu01t1uRbUKP-
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 244702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244702&o=json
            external_identifier: CBDB:244702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NpyCf5W5QfEUuJVcAPTPqZ
        status: active
        display_name: 王幹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Zo0qfvYcaxYoSO1TE1RLGt
        subject_person_id: p_3oKFdGHi8BKifcXxMMERFS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NpdkdEmAFR4uKTD4g6Qb8L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XX_wgz6b6Vr5Yy8WRO1ZqX
          claim_id: c_Zo0qfvYcaxYoSO1TE1RLGt
          source_id: s_GCP2n8cgjWu01t1uRbUKP-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126600 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GCP2n8cgjWu01t1uRbUKP-
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 244702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244702&o=json
            external_identifier: CBDB:244702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3oKFdGHi8BKifcXxMMERFS
        status: active
        display_name: 王玹
        merged_into_person_id: null
---

# 王瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑤 | accepted |
| bio.summary | 王瑤，明人物。成化五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 244702） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NpyCf5W5QfEUuJVcAPTPqZ | 王幹 | accepted |
| other | p_3oKFdGHi8BKifcXxMMERFS | 王玹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑤（CBDB 244702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244702&o=json)

---
schema: wang-person/v1
id: p_TVEo3drMA9vQ4vKm58Ss7J
status: active
merged_into: null
display_name: 王同方
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_96xcttLZ2iFCW8wvMDEMj4
        subject_person_id: p_TVEo3drMA9vQ4vKm58Ss7J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HMRrtuZ9axx1BwvJTbLHpW
          claim_id: c_96xcttLZ2iFCW8wvMDEMj4
          source_id: s_JD2AMo2GAmD3QJEQJkzW5B
          stance: supports
          locator: CBDB:321415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321415）
          source: &a1
            id: s_JD2AMo2GAmD3QJEQJkzW5B
            source_type: api_record
            title: 中国历代人物传记资料库：王同方（CBDB 321415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321415&o=json
            external_identifier: CBDB:321415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZYCSQHkUK7oqY7qRZ7D5zg
        subject_person_id: p_TVEo3drMA9vQ4vKm58Ss7J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同方，明人物。嘉靖三十五年進士，籍贯輝縣。（中国历代人物传记资料库 CBDB 321415）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XJ6NOub7bTEuExDMQhIrxI
          claim_id: c_ZYCSQHkUK7oqY7qRZ7D5zg
          source_id: s_JD2AMo2GAmD3QJEQJkzW5B
          stance: supports
          locator: CBDB:321415
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KBG_8y9kVuEy-PQvT4_wd-
        subject_person_id: p_kSZuSxLVRUx1AX2npsBxe9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TVEo3drMA9vQ4vKm58Ss7J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRrvgcfWHzNbYV_mRltaYl
          claim_id: c_KBG_8y9kVuEy-PQvT4_wd-
          source_id: s_bTzn9OshJt5ix93M49UcLp
          stance: supports
          locator: CBDB：兄弟 王同倫（204603）之父／母 王垽
          quotation: null
          interpretation_note: 由兄弟关系推断：王同方 与 王同倫 为同胞（CBDB 记「兄」），王同倫 之父／母即 王同方 之父／母。
          source:
            id: s_bTzn9OshJt5ix93M49UcLp
            source_type: api_record
            title: 中国历代人物传记资料库：王同方（CBDB 321415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321415&o=json
            external_identifier: CBDB:321415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kSZuSxLVRUx1AX2npsBxe9
        status: active
        display_name: 王垽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qdegwl1bwMFTliZlox-f7T
        subject_person_id: p_TVEo3drMA9vQ4vKm58Ss7J
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ikdhf4ktDu5SgJeZARjmDS
          claim_id: c_qdegwl1bwMFTliZlox-f7T
          source_id: s_bTzn9OshJt5ix93M49UcLp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204603 王同倫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bTzn9OshJt5ix93M49UcLp
            source_type: api_record
            title: 中国历代人物传记资料库：王同方（CBDB 321415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321415&o=json
            external_identifier: CBDB:321415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jxJb77T2SQUuZWU7nrgLP5
        status: active
        display_name: 王同倫
        merged_into_person_id: null
---

# 王同方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同方 | accepted |
| bio.summary | 王同方，明人物。嘉靖三十五年進士，籍贯輝縣。（中国历代人物传记资料库 CBDB 321415） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kSZuSxLVRUx1AX2npsBxe9 | 王垽 | accepted |
| other | p_jxJb77T2SQUuZWU7nrgLP5 | 王同倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同方（CBDB 321415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321415&o=json)

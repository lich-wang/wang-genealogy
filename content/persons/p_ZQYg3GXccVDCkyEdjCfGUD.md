---
schema: wang-person/v1
id: p_ZQYg3GXccVDCkyEdjCfGUD
status: active
merged_into: null
display_name: 王補之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1KHJuCAVNibhQhrBV7BHCR
        subject_person_id: p_ZQYg3GXccVDCkyEdjCfGUD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王補之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d4xJqh9MtEU28CtpoZCuJx
          claim_id: c_1KHJuCAVNibhQhrBV7BHCR
          source_id: s_sXHQTasa9TiG6yjiNmNN3A
          stance: supports
          locator: CBDB:326830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326830）
          source: &a1
            id: s_sXHQTasa9TiG6yjiNmNN3A
            source_type: api_record
            title: 中国历代人物传记资料库：王補之（CBDB 326830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326830&o=json
            external_identifier: CBDB:326830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yXV5wCy75mmNfPDSMhwfAA
        subject_person_id: p_ZQYg3GXccVDCkyEdjCfGUD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王補之，明人物。嘉靖四十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 326830）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kUW6eUMyP_Gr6kYphcWVCc
          claim_id: c_yXV5wCy75mmNfPDSMhwfAA
          source_id: s_sXHQTasa9TiG6yjiNmNN3A
          stance: supports
          locator: CBDB:326830
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TlT_iFWAF496_Wd58BUkXs
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZQYg3GXccVDCkyEdjCfGUD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mfcwSxqLqIy0d9dreDVYs7
          claim_id: c_TlT_iFWAF496_Wd58BUkXs
          source_id: s_8upuHHr5IumF3nDmAVLxSs
          stance: supports
          locator: CBDB：兄弟 王續之（204986）之父／母 王廷
          quotation: null
          interpretation_note: 由兄弟关系推断：王補之 与 王續之 为同胞（CBDB 记「兄」），王續之 之父／母即 王補之 之父／母。
          source:
            id: s_8upuHHr5IumF3nDmAVLxSs
            source_type: api_record
            title: 中国历代人物传记资料库：王補之（CBDB 326830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326830&o=json
            external_identifier: CBDB:326830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vK3QABJxLZ3CGaf98onw4k
        status: active
        display_name: 王廷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1WPuztufywbnlt8Y0C53mc
        subject_person_id: p_LNAKBPYt9PQCz44835GtLD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZQYg3GXccVDCkyEdjCfGUD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jmcd61oFbYW0UAVYR19q-r
          claim_id: c_1WPuztufywbnlt8Y0C53mc
          source_id: s_8upuHHr5IumF3nDmAVLxSs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204986 王續之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8upuHHr5IumF3nDmAVLxSs
            source_type: api_record
            title: 中国历代人物传记资料库：王補之（CBDB 326830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326830&o=json
            external_identifier: CBDB:326830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LNAKBPYt9PQCz44835GtLD
        status: active
        display_name: 王續之
        merged_into_person_id: null
---

# 王補之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王補之 | accepted |
| bio.summary | 王補之，明人物。嘉靖四十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 326830） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vK3QABJxLZ3CGaf98onw4k | 王廷 | accepted |
| other | p_LNAKBPYt9PQCz44835GtLD | 王續之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王補之（CBDB 326830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326830&o=json)

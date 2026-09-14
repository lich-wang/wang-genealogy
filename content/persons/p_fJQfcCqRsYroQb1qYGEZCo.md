---
schema: wang-person/v1
id: p_fJQfcCqRsYroQb1qYGEZCo
status: active
merged_into: null
display_name: 王子恭
cbdb_id: 231329
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iRB4CtgQTsq3QFwxu14fqf
        subject_person_id: p_fJQfcCqRsYroQb1qYGEZCo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子恭，明人物。宣德八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 231329）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_DZSXvshVoP5YCihtgKw4Cc
          claim_id: c_iRB4CtgQTsq3QFwxu14fqf
          source_id: s_GTqWXK7F8bdFDVMSSWmZRF
          stance: supports
          locator: CBDB:231329
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GTqWXK7F8bdFDVMSSWmZRF
            source_type: api_record
            title: 中国历代人物传记资料库：王子恭（CBDB 231329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231329&o=json
            external_identifier: CBDB:231329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ndGTPrJM33v7C4DX641qMs
        subject_person_id: p_fJQfcCqRsYroQb1qYGEZCo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BccC9WkK2cwjT3GaPFbSyC
          claim_id: c_ndGTPrJM33v7C4DX641qMs
          source_id: s_GTqWXK7F8bdFDVMSSWmZRF
          stance: supports
          locator: CBDB:231329
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2O0d4TtScF-MqyLLgf2rKU
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fJQfcCqRsYroQb1qYGEZCo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVIpYq5VosZ4GMdSlLgjYT
          claim_id: c_2O0d4TtScF-MqyLLgf2rKU
          source_id: s_UmjBuILhThnn75tOATtYyQ
          stance: supports
          locator: CBDB：兄弟 王鐸（126884）之父／母 王希仙
          quotation: null
          interpretation_note: 由兄弟关系推断：王子恭 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王子恭 之父／母。
          source:
            id: s_UmjBuILhThnn75tOATtYyQ
            source_type: api_record
            title: 中国历代人物传记资料库：王子恭（CBDB 231329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231329&o=json
            external_identifier: CBDB:231329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tmHpBVPPGJeDHKDFHFAyWx
        status: active
        display_name: 王希仙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_B5Jd0HfiqkYd87l56hf0mc
        subject_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fJQfcCqRsYroQb1qYGEZCo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRU0gIFuzGsflJwwBFhxYe
          claim_id: c_B5Jd0HfiqkYd87l56hf0mc
          source_id: s_UmjBuILhThnn75tOATtYyQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126884 王鐸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UmjBuILhThnn75tOATtYyQ
            source_type: api_record
            title: 中国历代人物传记资料库：王子恭（CBDB 231329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231329&o=json
            external_identifier: CBDB:231329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VVkAYnQtUyWdWCpmXePbBp
        status: active
        display_name: 王鐸
        merged_into_person_id: null
---

# 王子恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子恭，明人物。宣德八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 231329） | accepted |
| name.primary | 王子恭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tmHpBVPPGJeDHKDFHFAyWx | 王希仙 | accepted |
| other | p_VVkAYnQtUyWdWCpmXePbBp | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子恭（CBDB 231329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231329&o=json)

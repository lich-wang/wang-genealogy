---
schema: wang-person/v1
id: p_nET6Uxa9d2CFz6C2veevHN
status: active
merged_into: null
display_name: 王昇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m7AW73EpuKQgi2c4s7PK8y
        subject_person_id: p_nET6Uxa9d2CFz6C2veevHN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F7pMjGMKfPEubUMEBt4oDo
          claim_id: c_m7AW73EpuKQgi2c4s7PK8y
          source_id: s_61myKmzYwAsKzYNsnf1zfE
          stance: supports
          locator: CBDB:270225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270225）
          source: &a1
            id: s_61myKmzYwAsKzYNsnf1zfE
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 270225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270225&o=json
            external_identifier: CBDB:270225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5KNR3SVHJV7BWxQNBm2sbQ
        subject_person_id: p_nET6Uxa9d2CFz6C2veevHN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇，明人物。弘治十五年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 270225）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GL0OBvADkA_oe6BVz7KtVG
          claim_id: c_5KNR3SVHJV7BWxQNBm2sbQ
          source_id: s_61myKmzYwAsKzYNsnf1zfE
          stance: supports
          locator: CBDB:270225
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ieq1z1P1S0HoURP9EquE_D
        subject_person_id: p_82EciDCbTEknL5Nksc81QY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nET6Uxa9d2CFz6C2veevHN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KjmfY96kByaq-0M-p5vqvl
          claim_id: c_Ieq1z1P1S0HoURP9EquE_D
          source_id: s_3R4TLkuf7EEbrUNth4X94N
          stance: supports
          locator: CBDB：兄弟 王昹（201301）之父／母 王輔
          quotation: null
          interpretation_note: 由兄弟关系推断：王昇 与 王昹 为同胞（CBDB 记「弟」），王昹 之父／母即 王昇 之父／母。
          source:
            id: s_3R4TLkuf7EEbrUNth4X94N
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 270225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270225&o=json
            external_identifier: CBDB:270225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_82EciDCbTEknL5Nksc81QY
        status: active
        display_name: 王輔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Sskk2wHmEvEkmnV-mmvGhO
        subject_person_id: p_izy1XkGQRABqBnA1F9R3jt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nET6Uxa9d2CFz6C2veevHN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nhIc0RJ2D-jLCQdi4cOFIa
          claim_id: c_Sskk2wHmEvEkmnV-mmvGhO
          source_id: s_3R4TLkuf7EEbrUNth4X94N
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201301 王昹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3R4TLkuf7EEbrUNth4X94N
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 270225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270225&o=json
            external_identifier: CBDB:270225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_izy1XkGQRABqBnA1F9R3jt
        status: active
        display_name: 王昹
        merged_into_person_id: null
---

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | 王昇，明人物。弘治十五年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 270225） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_82EciDCbTEknL5Nksc81QY | 王輔 | accepted |
| other | p_izy1XkGQRABqBnA1F9R3jt | 王昹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 270225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270225&o=json)

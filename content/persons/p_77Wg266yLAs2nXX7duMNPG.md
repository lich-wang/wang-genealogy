---
schema: wang-person/v1
id: p_77Wg266yLAs2nXX7duMNPG
status: active
merged_into: null
display_name: 王尚忠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1AVZHsDLdbEFCMQ4wZtvZM
        subject_person_id: p_77Wg266yLAs2nXX7duMNPG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JERvGS7H87s6NrdusceWS9
          claim_id: c_1AVZHsDLdbEFCMQ4wZtvZM
          source_id: s_3Jib2J53hcMZYsbV8BX82D
          stance: supports
          locator: CBDB:280593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280593）
          source: &a1
            id: s_3Jib2J53hcMZYsbV8BX82D
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 280593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280593&o=json
            external_identifier: CBDB:280593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1zbPGL7bb2HJ7n3grTwhKC
        subject_person_id: p_77Wg266yLAs2nXX7duMNPG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚忠，明人物。正德十二年進士，籍贯淅川，入仕監生。（中国历代人物传记资料库 CBDB 280593）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fq6O-APh34JuW35225aJzz
          claim_id: c_1zbPGL7bb2HJ7n3grTwhKC
          source_id: s_3Jib2J53hcMZYsbV8BX82D
          stance: supports
          locator: CBDB:280593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RbDr2fvhKeAFvPbjrupdN5
        subject_person_id: p_dH2xuW5Lt7eGA9nJNsvby5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_77Wg266yLAs2nXX7duMNPG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jVbqR3iWT7WzX--KNIFHtS
          claim_id: c_RbDr2fvhKeAFvPbjrupdN5
          source_id: s_MKkVb_R77g_gcLzESKe_YH
          stance: supports
          locator: CBDB：兄弟 王尚志（201927）之父／母 王浩
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚忠 与 王尚志 为同胞（CBDB 记「弟」），王尚志 之父／母即 王尚忠 之父／母。
          source:
            id: s_MKkVb_R77g_gcLzESKe_YH
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 280593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280593&o=json
            external_identifier: CBDB:280593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dH2xuW5Lt7eGA9nJNsvby5
        status: active
        display_name: 王浩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_J3Y0hZousWGJjh62gxZTn5
        subject_person_id: p_77Wg266yLAs2nXX7duMNPG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kCdr4Vt3ng3vFN4WR6C2uB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6enLriJIC8x-fVZlER9nhd
          claim_id: c_J3Y0hZousWGJjh62gxZTn5
          source_id: s_MKkVb_R77g_gcLzESKe_YH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201927 王尚志）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MKkVb_R77g_gcLzESKe_YH
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 280593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280593&o=json
            external_identifier: CBDB:280593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kCdr4Vt3ng3vFN4WR6C2uB
        status: active
        display_name: 王尚志
        merged_into_person_id: null
---

# 王尚忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚忠 | accepted |
| bio.summary | 王尚忠，明人物。正德十二年進士，籍贯淅川，入仕監生。（中国历代人物传记资料库 CBDB 280593） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dH2xuW5Lt7eGA9nJNsvby5 | 王浩 | accepted |
| other | p_kCdr4Vt3ng3vFN4WR6C2uB | 王尚志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚忠（CBDB 280593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280593&o=json)

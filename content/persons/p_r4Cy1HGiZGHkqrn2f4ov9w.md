---
schema: wang-person/v1
id: p_r4Cy1HGiZGHkqrn2f4ov9w
status: active
merged_into: null
display_name: 王霆
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3TBBAGCvJJk6NxQ5cdPX27
        subject_person_id: p_r4Cy1HGiZGHkqrn2f4ov9w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C9rzT8u34BoQx194LTVD5F
          claim_id: c_3TBBAGCvJJk6NxQ5cdPX27
          source_id: s_NAN23fJRrgsAHcG7Zb4Afy
          stance: supports
          locator: CBDB:266739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266739）
          source: &a1
            id: s_NAN23fJRrgsAHcG7Zb4Afy
            source_type: api_record
            title: 中国历代人物传记资料库：王霆（CBDB 266739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266739&o=json
            external_identifier: CBDB:266739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VVghYgASEBUUgeZNEtb6Nn
        subject_person_id: p_r4Cy1HGiZGHkqrn2f4ov9w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霆，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266739）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J0_qPXPm_L803HNgb2KB8Z
          claim_id: c_VVghYgASEBUUgeZNEtb6Nn
          source_id: s_NAN23fJRrgsAHcG7Zb4Afy
          stance: supports
          locator: CBDB:266739
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_srRs6cmgoSnH1SmVDpjmuz
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r4Cy1HGiZGHkqrn2f4ov9w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ho7Fvk9RhWOLpAUStnQ22-
          claim_id: c_srRs6cmgoSnH1SmVDpjmuz
          source_id: s_B2vwCBrHX4nnzHXf53QB9r
          stance: supports
          locator: CBDB：兄弟 王震（126809）之父／母 王整
          quotation: null
          interpretation_note: 由兄弟关系推断：王霆 与 王震 为同胞（CBDB 记「兄」），王震 之父／母即 王霆 之父／母。
          source:
            id: s_B2vwCBrHX4nnzHXf53QB9r
            source_type: api_record
            title: 中国历代人物传记资料库：王霆（CBDB 266739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266739&o=json
            external_identifier: CBDB:266739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fQRM5daE8Wp7q6E4q4CiyU
        status: active
        display_name: 王整
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MjDHWTBpzIh4SQaKmCymNO
        subject_person_id: p_r4Cy1HGiZGHkqrn2f4ov9w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ayry6Yk6qRvA0mmej_-UX6
          claim_id: c_MjDHWTBpzIh4SQaKmCymNO
          source_id: s_B2vwCBrHX4nnzHXf53QB9r
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126809 王震）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B2vwCBrHX4nnzHXf53QB9r
            source_type: api_record
            title: 中国历代人物传记资料库：王霆（CBDB 266739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266739&o=json
            external_identifier: CBDB:266739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xF6zkmGrf6YvrKuUEphBZ1
        status: active
        display_name: 王震
        merged_into_person_id: null
---

# 王霆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霆 | accepted |
| bio.summary | 王霆，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266739） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fQRM5daE8Wp7q6E4q4CiyU | 王整 | accepted |
| other | p_xF6zkmGrf6YvrKuUEphBZ1 | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霆（CBDB 266739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266739&o=json)

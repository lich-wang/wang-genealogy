---
schema: wang-person/v1
id: p_e56pacND3mCEEv2EAQdG4F
status: active
merged_into: null
display_name: 王轂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Kf7C4hE7pwcKbB34iuCvJ
        subject_person_id: p_e56pacND3mCEEv2EAQdG4F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j5YnNJKmGAvgNG3SH2MFnr
          claim_id: c_2Kf7C4hE7pwcKbB34iuCvJ
          source_id: s_xofJq9RKgDqzqaEGXYKuMi
          stance: supports
          locator: CBDB:329353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329353）
          source: &a1
            id: s_xofJq9RKgDqzqaEGXYKuMi
            source_type: api_record
            title: 中国历代人物传记资料库：王轂（CBDB 329353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329353&o=json
            external_identifier: CBDB:329353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ta8CiKG8JYvvYGaKZpHCb
        subject_person_id: p_e56pacND3mCEEv2EAQdG4F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轂，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329353）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gbHdkURkLqU_D9JCJqMprf
          claim_id: c_8ta8CiKG8JYvvYGaKZpHCb
          source_id: s_xofJq9RKgDqzqaEGXYKuMi
          stance: supports
          locator: CBDB:329353
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__hIB0gxJ6ahuLREe2xjilk
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e56pacND3mCEEv2EAQdG4F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cUDR4L52BKdC0HQjClDM9b
          claim_id: c__hIB0gxJ6ahuLREe2xjilk
          source_id: s_RnBtdCrLMlKP8VaqnijpBI
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王轂 与 王輦 为同胞（CBDB 记「兄」），王輦 之父／母即 王轂 之父／母。
          source:
            id: s_RnBtdCrLMlKP8VaqnijpBI
            source_type: api_record
            title: 中国历代人物传记资料库：王轂（CBDB 329353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329353&o=json
            external_identifier: CBDB:329353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rhYt9t4gYuDEpCnQq4aywZ
        status: active
        display_name: 王利
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QVPRIjr3Q5Y9_jblkm-G5X
        subject_person_id: p_MT9QqQenXKizWtnnGxJQyH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e56pacND3mCEEv2EAQdG4F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-mG5OzaXrxg_rKzSXX3FOg
          claim_id: c_QVPRIjr3Q5Y9_jblkm-G5X
          source_id: s_RnBtdCrLMlKP8VaqnijpBI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RnBtdCrLMlKP8VaqnijpBI
            source_type: api_record
            title: 中国历代人物传记资料库：王轂（CBDB 329353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329353&o=json
            external_identifier: CBDB:329353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MT9QqQenXKizWtnnGxJQyH
        status: active
        display_name: 王輦
        merged_into_person_id: null
---

# 王轂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王轂 | accepted |
| bio.summary | 王轂，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329353） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rhYt9t4gYuDEpCnQq4aywZ | 王利 | accepted |
| other | p_MT9QqQenXKizWtnnGxJQyH | 王輦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王轂（CBDB 329353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329353&o=json)

---
schema: wang-person/v1
id: p_SNxcwVE3mRaMhzML1z9b1H
status: active
merged_into: null
display_name: 王軏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FKPCnLBLw6TKNSP3iAAKGw
        subject_person_id: p_SNxcwVE3mRaMhzML1z9b1H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ugh3zopwPrf9WnPzdUATpq
          claim_id: c_FKPCnLBLw6TKNSP3iAAKGw
          source_id: s_c8srNXbB4Q5SyN2LTNUtd3
          stance: supports
          locator: CBDB:329356
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329356）
          source: &a1
            id: s_c8srNXbB4Q5SyN2LTNUtd3
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 329356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329356&o=json
            external_identifier: CBDB:329356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MFBoN51PS1qteEtt2niYKZ
        subject_person_id: p_SNxcwVE3mRaMhzML1z9b1H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軏，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329356）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DFHDMGarXZWljrhHwfypeu
          claim_id: c_MFBoN51PS1qteEtt2niYKZ
          source_id: s_c8srNXbB4Q5SyN2LTNUtd3
          stance: supports
          locator: CBDB:329356
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UTO2evtxLTShNlZo87Adez
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SNxcwVE3mRaMhzML1z9b1H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QTRXrg95Y50TZZohBDLZAV
          claim_id: c_UTO2evtxLTShNlZo87Adez
          source_id: s_ClC3sF8nXjat-_f_PxI7XU
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王軏 与 王輦 为同胞（CBDB 记「兄」），王輦 之父／母即 王軏 之父／母。
          source:
            id: s_ClC3sF8nXjat-_f_PxI7XU
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 329356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329356&o=json
            external_identifier: CBDB:329356
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
        id: c_waZLklElo_OUkIRDVOAItW
        subject_person_id: p_MT9QqQenXKizWtnnGxJQyH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SNxcwVE3mRaMhzML1z9b1H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sj_A4wRR92B1tD5J-ezU2x
          claim_id: c_waZLklElo_OUkIRDVOAItW
          source_id: s_ClC3sF8nXjat-_f_PxI7XU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ClC3sF8nXjat-_f_PxI7XU
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 329356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329356&o=json
            external_identifier: CBDB:329356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MT9QqQenXKizWtnnGxJQyH
        status: active
        display_name: 王輦
        merged_into_person_id: null
---

# 王軏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軏 | accepted |
| bio.summary | 王軏，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329356） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rhYt9t4gYuDEpCnQq4aywZ | 王利 | accepted |
| other | p_MT9QqQenXKizWtnnGxJQyH | 王輦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王軏（CBDB 329356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329356&o=json)

---
schema: wang-person/v1
id: p_SJBWu9Xd2q6he7vBE6hr8A
status: active
merged_into: null
display_name: 王佑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hPkSLjpdC9qc2g1KWYZTwk
        subject_person_id: p_SJBWu9Xd2q6he7vBE6hr8A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3wVcGW2c28dWnfJvmfdAAx
          claim_id: c_hPkSLjpdC9qc2g1KWYZTwk
          source_id: s_HmpZBeyDHo94Ja8aRhRhN7
          stance: supports
          locator: CBDB:286075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286075）
          source: &a1
            id: s_HmpZBeyDHo94Ja8aRhRhN7
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 286075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286075&o=json
            external_identifier: CBDB:286075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WBpZ8e6ANLCADbJB4AB9Nj
        subject_person_id: p_SJBWu9Xd2q6he7vBE6hr8A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑，明人物。正德十六年進士，籍贯金吾右衛。（中国历代人物传记资料库 CBDB 286075）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NObM5gSyXgtX8UUM8Wtmdr
          claim_id: c_WBpZ8e6ANLCADbJB4AB9Nj
          source_id: s_HmpZBeyDHo94Ja8aRhRhN7
          stance: supports
          locator: CBDB:286075
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_86Y-s5oINx6QrrzQP8Ux6p
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SJBWu9Xd2q6he7vBE6hr8A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lQbn6Zo-3MusSHhthsb4KS
          claim_id: c_86Y-s5oINx6QrrzQP8Ux6p
          source_id: s_cbWH3noehCRlNSh-hsLzUj
          stance: supports
          locator: CBDB：兄弟 王傅（202284）之父／母 王琦
          quotation: null
          interpretation_note: 由兄弟关系推断：王佑 与 王傅 为同胞（CBDB 记「弟」），王傅 之父／母即 王佑 之父／母。
          source:
            id: s_cbWH3noehCRlNSh-hsLzUj
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 286075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286075&o=json
            external_identifier: CBDB:286075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_exNPQqiad19zXtFzRk4E7x
        status: active
        display_name: 王琦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3SuSaiVK9Dek53HVT8c-Db
        subject_person_id: p_SJBWu9Xd2q6he7vBE6hr8A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ol-nZ9fGSoCAnzbw6PjTiQ
          claim_id: c_3SuSaiVK9Dek53HVT8c-Db
          source_id: s_cbWH3noehCRlNSh-hsLzUj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202284 王傅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cbWH3noehCRlNSh-hsLzUj
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 286075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286075&o=json
            external_identifier: CBDB:286075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UHUqHrmc3KJzYiDRgXCMg7
        status: active
        display_name: 王傅
        merged_into_person_id: null
---

# 王佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑 | accepted |
| bio.summary | 王佑，明人物。正德十六年進士，籍贯金吾右衛。（中国历代人物传记资料库 CBDB 286075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_exNPQqiad19zXtFzRk4E7x | 王琦 | accepted |
| other | p_UHUqHrmc3KJzYiDRgXCMg7 | 王傅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佑（CBDB 286075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286075&o=json)

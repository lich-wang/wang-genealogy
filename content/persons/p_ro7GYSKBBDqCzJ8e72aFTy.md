---
schema: wang-person/v1
id: p_ro7GYSKBBDqCzJ8e72aFTy
status: active
merged_into: null
display_name: 王覲
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8jGa9g7nK7uWJ7T8SKoJbu
        subject_person_id: p_ro7GYSKBBDqCzJ8e72aFTy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PVfRyK4xPb62qrBbW11R9T
          claim_id: c_8jGa9g7nK7uWJ7T8SKoJbu
          source_id: s_DspLg139gMwWCcSBdVEEMT
          stance: supports
          locator: CBDB:302885
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302885）
          source: &a1
            id: s_DspLg139gMwWCcSBdVEEMT
            source_type: api_record
            title: 中国历代人物传记资料库：王覲（CBDB 302885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302885&o=json
            external_identifier: CBDB:302885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MBAt6oLUAKhu7NaKJkxHw8
        subject_person_id: p_ro7GYSKBBDqCzJ8e72aFTy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覲，明人物。嘉靖二十年進士，籍贯武進，曾任義官。（中国历代人物传记资料库 CBDB 302885）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P3DuvkMYpgNVo4H_CRH1Bp
          claim_id: c_MBAt6oLUAKhu7NaKJkxHw8
          source_id: s_DspLg139gMwWCcSBdVEEMT
          stance: supports
          locator: CBDB:302885
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fqPaSmwVV6r7i3nxAcJJux
        subject_person_id: p_ro7GYSKBBDqCzJ8e72aFTy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cCprcjpjpt289qr3jZC2GQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7ZqDudC87BDDaaqBZDV9N
          claim_id: c_fqPaSmwVV6r7i3nxAcJJux
          source_id: s_DspLg139gMwWCcSBdVEEMT
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cCprcjpjpt289qr3jZC2GQ
        status: active
        display_name: 王覺
        merged_into_person_id: null
    - claim:
        id: c_MshI44CP9FtEsR6BQ2vFxP
        subject_person_id: p_ro7GYSKBBDqCzJ8e72aFTy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W1V9AitJXD1s8vNALX32dJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Ey0vGjHOZjPp6I9eWgxav
          claim_id: c_MshI44CP9FtEsR6BQ2vFxP
          source_id: s_eRrsdRqlozUuWEa8Qe6R1d
          stance: supports
          locator: CBDB：兄弟 王覺（203312）之父／母 王覲
          quotation: null
          interpretation_note: 由兄弟关系推断：王學 与 王覺 为同胞（CBDB 记「弟」），王覺 之父／母即 王學 之父／母。
          source:
            id: s_eRrsdRqlozUuWEa8Qe6R1d
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 302889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302889&o=json
            external_identifier: CBDB:302889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W1V9AitJXD1s8vNALX32dJ
        status: active
        display_name: 王學
        merged_into_person_id: null
    - claim:
        id: c_BuBQSszhhpacYT9FyEPq_L
        subject_person_id: p_ro7GYSKBBDqCzJ8e72aFTy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jQMo6KQCt9uucGKbC5rA3E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fEc92NTxwiHg7Fec8SswFr
          claim_id: c_BuBQSszhhpacYT9FyEPq_L
          source_id: s_cgnRUw-B-4qN0DkPKt76kR
          stance: supports
          locator: CBDB：兄弟 王覺（203312）之父／母 王覲
          quotation: null
          interpretation_note: 由兄弟关系推断：王譽 与 王覺 为同胞（CBDB 记「兄」），王覺 之父／母即 王譽 之父／母。
          source:
            id: s_cgnRUw-B-4qN0DkPKt76kR
            source_type: api_record
            title: 中国历代人物传记资料库：王譽（CBDB 302891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302891&o=json
            external_identifier: CBDB:302891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jQMo6KQCt9uucGKbC5rA3E
        status: active
        display_name: 王譽
        merged_into_person_id: null
    - claim:
        id: c_kU_zxEzqsy_U0e_mG28DUE
        subject_person_id: p_ro7GYSKBBDqCzJ8e72aFTy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jtbbnJ97c33A6V8HD4z6ow
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GFyn7goDQPQH1B1egHqSzv
          claim_id: c_kU_zxEzqsy_U0e_mG28DUE
          source_id: s__69kw5QJpa3sgrPAVuolRi
          stance: supports
          locator: CBDB：兄弟 王覺（203312）之父／母 王覲
          quotation: null
          interpretation_note: 由兄弟关系推断：王舉 与 王覺 为同胞（CBDB 记「弟」），王覺 之父／母即 王舉 之父／母。
          source:
            id: s__69kw5QJpa3sgrPAVuolRi
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 302890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302890&o=json
            external_identifier: CBDB:302890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jtbbnJ97c33A6V8HD4z6ow
        status: active
        display_name: 王舉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王覲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王覲 | accepted |
| bio.summary | 王覲，明人物。嘉靖二十年進士，籍贯武進，曾任義官。（中国历代人物传记资料库 CBDB 302885） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cCprcjpjpt289qr3jZC2GQ | 王覺 | accepted |
| children | p_W1V9AitJXD1s8vNALX32dJ | 王學 | accepted |
| children | p_jQMo6KQCt9uucGKbC5rA3E | 王譽 | accepted |
| children | p_jtbbnJ97c33A6V8HD4z6ow | 王舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王覲（CBDB 302885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302885&o=json)
- [中国历代人物传记资料库：王舉（CBDB 302890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302890&o=json)
- [中国历代人物传记资料库：王學（CBDB 302889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302889&o=json)
- [中国历代人物传记资料库：王譽（CBDB 302891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302891&o=json)

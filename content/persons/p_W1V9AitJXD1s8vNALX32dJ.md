---
schema: wang-person/v1
id: p_W1V9AitJXD1s8vNALX32dJ
status: active
merged_into: null
display_name: 王學
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8gmhqRVojAVCPh8VvAPoEV
        subject_person_id: p_W1V9AitJXD1s8vNALX32dJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZhXED2avtDnnDjphfD7TeX
          claim_id: c_8gmhqRVojAVCPh8VvAPoEV
          source_id: s_7BvLHGcoop1rPxtDtj37kY
          stance: supports
          locator: CBDB:302889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302889）
          source: &a1
            id: s_7BvLHGcoop1rPxtDtj37kY
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 302889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302889&o=json
            external_identifier: CBDB:302889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_46TFv4zpTRTQa31tPQBLta
        subject_person_id: p_W1V9AitJXD1s8vNALX32dJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學，明人物。嘉靖二十年進士，籍贯武進，曾任奉祀正。（中国历代人物传记资料库 CBDB 302889）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__7Rl64k5aADaRbt3yx9j8r
          claim_id: c_46TFv4zpTRTQa31tPQBLta
          source_id: s_7BvLHGcoop1rPxtDtj37kY
          stance: supports
          locator: CBDB:302889
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_ro7GYSKBBDqCzJ8e72aFTy
        status: active
        display_name: 王覲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pA14bxtsQIIqysEmOFqaZ9
        subject_person_id: p_W1V9AitJXD1s8vNALX32dJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cCprcjpjpt289qr3jZC2GQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wGxQDbUxOPFXEnO0_cmLJC
          claim_id: c_pA14bxtsQIIqysEmOFqaZ9
          source_id: s_eRrsdRqlozUuWEa8Qe6R1d
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203312 王覺）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_cCprcjpjpt289qr3jZC2GQ
        status: active
        display_name: 王覺
        merged_into_person_id: null
---

# 王學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學 | accepted |
| bio.summary | 王學，明人物。嘉靖二十年進士，籍贯武進，曾任奉祀正。（中国历代人物传记资料库 CBDB 302889） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ro7GYSKBBDqCzJ8e72aFTy | 王覲 | accepted |
| other | p_cCprcjpjpt289qr3jZC2GQ | 王覺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學（CBDB 302889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302889&o=json)

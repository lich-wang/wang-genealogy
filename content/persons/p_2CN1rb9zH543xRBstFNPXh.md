---
schema: wang-person/v1
id: p_2CN1rb9zH543xRBstFNPXh
status: active
merged_into: null
display_name: 王保璐
cbdb_id: 515675
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mNc9akPpGhfjPy128shYMY
        subject_person_id: p_2CN1rb9zH543xRBstFNPXh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保璐，清人物。中国历代人物传记资料库（CBDB）以人物编号 515675 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_867RnRm4PPOmtHxt--M0lN
          claim_id: c_mNc9akPpGhfjPy128shYMY
          source_id: s_VqjGss3MSg631j2e1t7cwU
          stance: supports
          locator: CBDB:515675
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_VqjGss3MSg631j2e1t7cwU
            source_type: api_record
            title: 中国历代人物传记资料库：王保璐（CBDB 515675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515675&o=json
            external_identifier: CBDB:515675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VJLGbp83MUFjBJb1zuE6dQ
        subject_person_id: p_2CN1rb9zH543xRBstFNPXh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保璐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3EpgSoPqFT2sE3mZZpuJg4
          claim_id: c_VJLGbp83MUFjBJb1zuE6dQ
          source_id: s_VqjGss3MSg631j2e1t7cwU
          stance: supports
          locator: CBDB:515675
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_VqjGss3MSg631j2e1t7cwU
            source_type: api_record
            title: 中国历代人物传记资料库：王保璐（CBDB 515675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515675&o=json
            external_identifier: CBDB:515675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_UQjkKGjzw8q3xY2kZAbFAC
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2CN1rb9zH543xRBstFNPXh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JWYUiLuFLxMmLzeDhaEtA4
          claim_id: c_UQjkKGjzw8q3xY2kZAbFAC
          source_id: s_gcATuP6CQr39pk8hp1ieE8
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1042：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gcATuP6CQr39pk8hp1ieE8
            source_type: api_record
            title: 中国历代人物传记资料库：王文錦（CBDB 57810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57810&o=json
            external_identifier: CBDB:57810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5MbQaN6sLNicuc7FmMieJd
        status: active
        display_name: 王文錦
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王保璐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王保璐，清人物。中国历代人物传记资料库（CBDB）以人物编号 515675 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王保璐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_5MbQaN6sLNicuc7FmMieJd | 王文錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保璐（CBDB 515675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515675&o=json)
- [中国历代人物传记资料库：王文錦（CBDB 57810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57810&o=json)

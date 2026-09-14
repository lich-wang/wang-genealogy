---
schema: wang-person/v1
id: p_9E8oYsqeKwVApirRF2TQVh
status: active
merged_into: null
display_name: 王叔懋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_15dh3nkkN6RtA23yWEzr7e
        subject_person_id: p_9E8oYsqeKwVApirRF2TQVh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5DKzwgKeYW3DyYi9trRE2R
          claim_id: c_15dh3nkkN6RtA23yWEzr7e
          source_id: s_aZD2qBALyquWWVQa4sqWVW
          stance: supports
          locator: CBDB:210727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210727）
          source: &a1
            id: s_aZD2qBALyquWWVQa4sqWVW
            source_type: api_record
            title: 中国历代人物传记资料库：王叔懋（CBDB 210727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210727&o=json
            external_identifier: CBDB:210727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1P1pDZ4QLswoLLhW3Lx65S
        subject_person_id: p_9E8oYsqeKwVApirRF2TQVh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔懋，明人物。隆慶五年進士，籍贯永嘉，曾任鴻臚寺署丞。（中国历代人物传记资料库 CBDB 210727）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cXQd3gp6N21Es8cO_k0HKg
          claim_id: c_1P1pDZ4QLswoLLhW3Lx65S
          source_id: s_aZD2qBALyquWWVQa4sqWVW
          stance: supports
          locator: CBDB:210727
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mF486NMIyNiSjb2CkK2Fhd
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9E8oYsqeKwVApirRF2TQVh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UfBPHNNvIi1LW21Cusfb_q
          claim_id: c_mF486NMIyNiSjb2CkK2Fhd
          source_id: s_OLS2nbu9F1HdE3hssDLuki
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔懋 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王叔懋 之父／母。
          source:
            id: s_OLS2nbu9F1HdE3hssDLuki
            source_type: api_record
            title: 中国历代人物传记资料库：王叔懋（CBDB 210727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210727&o=json
            external_identifier: CBDB:210727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dXbTkC8fTHTjd8NRUY9aDL
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dD4E2AKBLoiDkp6Ti4C00P
        subject_person_id: p_9E8oYsqeKwVApirRF2TQVh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rSF6BQNiXIo_OIQCdAWppf
          claim_id: c_dD4E2AKBLoiDkp6Ti4C00P
          source_id: s_OLS2nbu9F1HdE3hssDLuki
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OLS2nbu9F1HdE3hssDLuki
            source_type: api_record
            title: 中国历代人物传记资料库：王叔懋（CBDB 210727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210727&o=json
            external_identifier: CBDB:210727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sAZUvMC7u8bMFh2JrU8PMj
        status: active
        display_name: 王良心
        merged_into_person_id: null
---

# 王叔懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔懋 | accepted |
| bio.summary | 王叔懋，明人物。隆慶五年進士，籍贯永嘉，曾任鴻臚寺署丞。（中国历代人物传记资料库 CBDB 210727） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dXbTkC8fTHTjd8NRUY9aDL | 王弼 | accepted |
| other | p_sAZUvMC7u8bMFh2JrU8PMj | 王良心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔懋（CBDB 210727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210727&o=json)

---
schema: wang-person/v1
id: p_mKCVx5cBKFqteh61qQUhmL
status: active
merged_into: null
display_name: 王淮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S2uogAL4Vhmi9cTrTQDJ8a
        subject_person_id: p_mKCVx5cBKFqteh61qQUhmL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aYKXoCRehFXK6EyCFfbv9s
          claim_id: c_S2uogAL4Vhmi9cTrTQDJ8a
          source_id: s_ezxhEYYi6EH3kvJKwqPxHR
          stance: supports
          locator: CBDB:237831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237831）
          source: &a1
            id: s_ezxhEYYi6EH3kvJKwqPxHR
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 237831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237831&o=json
            external_identifier: CBDB:237831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EJ2sxokrcV1uhDrKpEhMgN
        subject_person_id: p_mKCVx5cBKFqteh61qQUhmL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮，明人物。成化二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 237831）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r2vopdjxznN1yONhXAQ_mE
          claim_id: c_EJ2sxokrcV1uhDrKpEhMgN
          source_id: s_ezxhEYYi6EH3kvJKwqPxHR
          stance: supports
          locator: CBDB:237831
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z4_Y9EHgI1gSmJslxoiJvs
        subject_person_id: p_13RmhF22e6LFRmpmecd8LK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mKCVx5cBKFqteh61qQUhmL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ThcnSBnCu3onTbsQe204aL
          claim_id: c_Z4_Y9EHgI1gSmJslxoiJvs
          source_id: s_iLK0eMlAye83RhQp6azSsT
          stance: supports
          locator: CBDB：兄弟 王浩（199153）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王淮 与 王浩 为同胞（CBDB 记「兄」），王浩 之父／母即 王淮 之父／母。
          source:
            id: s_iLK0eMlAye83RhQp6azSsT
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 237831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237831&o=json
            external_identifier: CBDB:237831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_13RmhF22e6LFRmpmecd8LK
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_L2Z7FYTvV0shsTZQ5uCW_Y
        subject_person_id: p_mKCVx5cBKFqteh61qQUhmL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_05iOEz290Rn5y4TIkbyUKs
          claim_id: c_L2Z7FYTvV0shsTZQ5uCW_Y
          source_id: s_iLK0eMlAye83RhQp6azSsT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199153 王浩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iLK0eMlAye83RhQp6azSsT
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 237831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237831&o=json
            external_identifier: CBDB:237831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rEM4FmnErK6MdZnXyWnxsa
        status: active
        display_name: 王浩
        merged_into_person_id: null
---

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| bio.summary | 王淮，明人物。成化二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 237831） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_13RmhF22e6LFRmpmecd8LK | 王忠 | accepted |
| other | p_rEM4FmnErK6MdZnXyWnxsa | 王浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 237831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237831&o=json)

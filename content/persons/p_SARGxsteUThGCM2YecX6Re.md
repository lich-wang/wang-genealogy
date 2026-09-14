---
schema: wang-person/v1
id: p_SARGxsteUThGCM2YecX6Re
status: active
merged_into: null
display_name: 王道溥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2GgtEkU9WnkzXtrNJSiNJb
        subject_person_id: p_SARGxsteUThGCM2YecX6Re
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AMxENTVBYsPJ6GsuhsSbN6
          claim_id: c_2GgtEkU9WnkzXtrNJSiNJb
          source_id: s_2paVtnciLbMjf2CHhQDHCW
          stance: supports
          locator: CBDB:210028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210028）
          source: &a1
            id: s_2paVtnciLbMjf2CHhQDHCW
            source_type: api_record
            title: 中国历代人物传记资料库：王道溥（CBDB 210028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210028&o=json
            external_identifier: CBDB:210028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9xkhyn7yQRnVz6b7u5reFs
        subject_person_id: p_SARGxsteUThGCM2YecX6Re
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道溥，明人物。隆慶五年進士，籍贯巴縣，曾任州判官。（中国历代人物传记资料库 CBDB 210028）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VAHqrQfOliXEMHGBdBdgGN
          claim_id: c_9xkhyn7yQRnVz6b7u5reFs
          source_id: s_2paVtnciLbMjf2CHhQDHCW
          stance: supports
          locator: CBDB:210028
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_khmkiYzsxfUbDlKFgRAbUO
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SARGxsteUThGCM2YecX6Re
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w1R-T_dtFDn3ioxF_wct5W
          claim_id: c_khmkiYzsxfUbDlKFgRAbUO
          source_id: s_phz8IWYmH3Eyrs-a3m9qEq
          stance: supports
          locator: CBDB：兄弟 王道成（126745）之父／母 王廷宣
          quotation: null
          interpretation_note: 由兄弟关系推断：王道溥 与 王道成 为同胞（CBDB 记「兄」），王道成 之父／母即 王道溥 之父／母。
          source:
            id: s_phz8IWYmH3Eyrs-a3m9qEq
            source_type: api_record
            title: 中国历代人物传记资料库：王道溥（CBDB 210028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210028&o=json
            external_identifier: CBDB:210028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        status: active
        display_name: 王廷宣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zn2QFzysBsEbNhg556kccZ
        subject_person_id: p_EaFxi6NHrChzwLEA1T89LT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SARGxsteUThGCM2YecX6Re
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kBjTKQQ6HOL5M-00HKdk6Q
          claim_id: c_zn2QFzysBsEbNhg556kccZ
          source_id: s_phz8IWYmH3Eyrs-a3m9qEq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126745 王道成）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_phz8IWYmH3Eyrs-a3m9qEq
            source_type: api_record
            title: 中国历代人物传记资料库：王道溥（CBDB 210028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210028&o=json
            external_identifier: CBDB:210028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EaFxi6NHrChzwLEA1T89LT
        status: active
        display_name: 王道成
        merged_into_person_id: null
---

# 王道溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道溥 | accepted |
| bio.summary | 王道溥，明人物。隆慶五年進士，籍贯巴縣，曾任州判官。（中国历代人物传记资料库 CBDB 210028） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4CkBCwtn2nCSmzMrTCZ7Ut | 王廷宣 | accepted |
| other | p_EaFxi6NHrChzwLEA1T89LT | 王道成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道溥（CBDB 210028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210028&o=json)

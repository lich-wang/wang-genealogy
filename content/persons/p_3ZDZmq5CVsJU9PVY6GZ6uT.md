---
schema: wang-person/v1
id: p_3ZDZmq5CVsJU9PVY6GZ6uT
status: active
merged_into: null
display_name: 王申錫
cbdb_id: 222536
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fMmA2qsXBrNrRNQZut2BnB
        subject_person_id: p_3ZDZmq5CVsJU9PVY6GZ6uT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王申錫，明人物。萬曆十一年進士，籍贯膠州。（中国历代人物传记资料库 CBDB 222536）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NQXn1DJGivdo0Fv_ZMV4ZD
          claim_id: c_fMmA2qsXBrNrRNQZut2BnB
          source_id: s_aFUXNAUqQdK3EceYLnHk9X
          stance: supports
          locator: CBDB:222536
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aFUXNAUqQdK3EceYLnHk9X
            source_type: api_record
            title: 中国历代人物传记资料库：王申錫（CBDB 222536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222536&o=json
            external_identifier: CBDB:222536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AiBtcvkHeTyMRoB1GDKkwa
        subject_person_id: p_3ZDZmq5CVsJU9PVY6GZ6uT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王申錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EfLZDLSbfUARFHKiofYDok
          claim_id: c_AiBtcvkHeTyMRoB1GDKkwa
          source_id: s_aFUXNAUqQdK3EceYLnHk9X
          stance: supports
          locator: CBDB:222536
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_80HTIsmwJZIZmoTbmR73DA
        subject_person_id: p_VoTEz62YCbTPVvreKQ83nM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ZDZmq5CVsJU9PVY6GZ6uT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sK5mfqyDwKmGtRzTWXGnP_
          claim_id: c_80HTIsmwJZIZmoTbmR73DA
          source_id: s_muQ4HH1CeoHELCSPcMMK8v
          stance: supports
          locator: CBDB：兄弟 王岳錫（206741）之父／母 王价
          quotation: null
          interpretation_note: 由兄弟关系推断：王申錫 与 王岳錫 为同胞（CBDB 记「兄」），王岳錫 之父／母即 王申錫 之父／母。
          source:
            id: s_muQ4HH1CeoHELCSPcMMK8v
            source_type: api_record
            title: 中国历代人物传记资料库：王申錫（CBDB 222536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222536&o=json
            external_identifier: CBDB:222536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VoTEz62YCbTPVvreKQ83nM
        status: active
        display_name: 王价
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HkXVaJuM2vdG0uvAl-axwr
        subject_person_id: p_3ZDZmq5CVsJU9PVY6GZ6uT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RKkqJtmY8xpK68H9TU7V2h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cbduya9Rkw-xYa_-gSfwXG
          claim_id: c_HkXVaJuM2vdG0uvAl-axwr
          source_id: s_muQ4HH1CeoHELCSPcMMK8v
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206741 王岳錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_muQ4HH1CeoHELCSPcMMK8v
            source_type: api_record
            title: 中国历代人物传记资料库：王申錫（CBDB 222536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222536&o=json
            external_identifier: CBDB:222536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RKkqJtmY8xpK68H9TU7V2h
        status: active
        display_name: 王岳錫
        merged_into_person_id: null
---

# 王申錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王申錫，明人物。萬曆十一年進士，籍贯膠州。（中国历代人物传记资料库 CBDB 222536） | accepted |
| name.primary | 王申錫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VoTEz62YCbTPVvreKQ83nM | 王价 | accepted |
| other | p_RKkqJtmY8xpK68H9TU7V2h | 王岳錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王申錫（CBDB 222536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222536&o=json)

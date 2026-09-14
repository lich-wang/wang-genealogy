---
schema: wang-person/v1
id: p_3ycLLkQiq1sG8LFTHzLFzK
status: active
merged_into: null
display_name: 王大邦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V9qGZyTeVJAcTBHDGwPdtH
        subject_person_id: p_3ycLLkQiq1sG8LFTHzLFzK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大邦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EC8dpLKCYvH6RCoyXufJcN
          claim_id: c_V9qGZyTeVJAcTBHDGwPdtH
          source_id: s_7vN25Bsip1BNZMmxUC8CPs
          stance: supports
          locator: CBDB:311223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311223）
          source: &a1
            id: s_7vN25Bsip1BNZMmxUC8CPs
            source_type: api_record
            title: 中国历代人物传记资料库：王大邦（CBDB 311223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311223&o=json
            external_identifier: CBDB:311223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AJ3vDG5ioA6HasNJgSj8Fo
        subject_person_id: p_3ycLLkQiq1sG8LFTHzLFzK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大邦，明人物。嘉靖二十六年進士，籍贯海鹽，曾任指揮使。（中国历代人物传记资料库 CBDB 311223）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3YjpXAbR6_iMSz1tcfam0H
          claim_id: c_AJ3vDG5ioA6HasNJgSj8Fo
          source_id: s_7vN25Bsip1BNZMmxUC8CPs
          stance: supports
          locator: CBDB:311223
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Bok2mOyzK-IRF8ju0IjYCj
        subject_person_id: p_ddWY4cKu36BYCB9sUmQGQH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ycLLkQiq1sG8LFTHzLFzK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_agAirXR6bldXoSpeHkxrKJ
          claim_id: c_Bok2mOyzK-IRF8ju0IjYCj
          source_id: s_kN_ZcUrYk0g8kRtMvnvb3E
          stance: supports
          locator: CBDB：兄弟 王大猷（203868）之父／母 王勇
          quotation: null
          interpretation_note: 由兄弟关系推断：王大邦 与 王大猷 为同胞（CBDB 记「弟」），王大猷 之父／母即 王大邦 之父／母。
          source:
            id: s_kN_ZcUrYk0g8kRtMvnvb3E
            source_type: api_record
            title: 中国历代人物传记资料库：王大邦（CBDB 311223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311223&o=json
            external_identifier: CBDB:311223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ddWY4cKu36BYCB9sUmQGQH
        status: active
        display_name: 王勇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_a4corgUX_lCQ0e9kS4u-Y5
        subject_person_id: p_3ycLLkQiq1sG8LFTHzLFzK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dBDSp35EhkaWHCV6D81q6n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h0op9VNgmIxftU1YoFOfyt
          claim_id: c_a4corgUX_lCQ0e9kS4u-Y5
          source_id: s_kN_ZcUrYk0g8kRtMvnvb3E
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203868 王大猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kN_ZcUrYk0g8kRtMvnvb3E
            source_type: api_record
            title: 中国历代人物传记资料库：王大邦（CBDB 311223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311223&o=json
            external_identifier: CBDB:311223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dBDSp35EhkaWHCV6D81q6n
        status: active
        display_name: 王大猷
        merged_into_person_id: null
---

# 王大邦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大邦 | accepted |
| bio.summary | 王大邦，明人物。嘉靖二十六年進士，籍贯海鹽，曾任指揮使。（中国历代人物传记资料库 CBDB 311223） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ddWY4cKu36BYCB9sUmQGQH | 王勇 | accepted |
| other | p_dBDSp35EhkaWHCV6D81q6n | 王大猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大邦（CBDB 311223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311223&o=json)

---
schema: wang-person/v1
id: p_RkgPAAzN6XYGaHpH5KLt3F
status: active
merged_into: null
display_name: 王如珪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tSavAyoZ4Q81DaaaWTPC48
        subject_person_id: p_RkgPAAzN6XYGaHpH5KLt3F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ktujA9A734Me2iHv3o9hQr
          claim_id: c_tSavAyoZ4Q81DaaaWTPC48
          source_id: s_GJWMNqwBV4NH2JLRLt2XbS
          stance: supports
          locator: CBDB:215082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215082）
          source: &a1
            id: s_GJWMNqwBV4NH2JLRLt2XbS
            source_type: api_record
            title: 中国历代人物传记资料库：王如珪（CBDB 215082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215082&o=json
            external_identifier: CBDB:215082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EG4J1f1rqU3Bnc5kU81ba2
        subject_person_id: p_RkgPAAzN6XYGaHpH5KLt3F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如珪，明人物。萬曆二年進士，籍贯永嘉，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 215082）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pk0l7Zk6bO7borBQpN2mUA
          claim_id: c_EG4J1f1rqU3Bnc5kU81ba2
          source_id: s_GJWMNqwBV4NH2JLRLt2XbS
          stance: supports
          locator: CBDB:215082
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tiBIgj3jSMCOIbejRz_NEU
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RkgPAAzN6XYGaHpH5KLt3F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FDWAu1pSjZ9t0JLRDPPDPa
          claim_id: c_tiBIgj3jSMCOIbejRz_NEU
          source_id: s_cIkeAvahB6bNzrxVoblS6B
          stance: supports
          locator: CBDB：兄弟 王繼明（126880）之父／母 王允文
          quotation: null
          interpretation_note: 由兄弟关系推断：王如珪 与 王繼明 为同胞（CBDB 记「弟」），王繼明 之父／母即 王如珪 之父／母。
          source:
            id: s_cIkeAvahB6bNzrxVoblS6B
            source_type: api_record
            title: 中国历代人物传记资料库：王如珪（CBDB 215082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215082&o=json
            external_identifier: CBDB:215082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5sMmYXtRexRwYuYUk2GvGP
        status: active
        display_name: 王允文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_I99qDBjv-orzPWycK3tI1X
        subject_person_id: p_RkgPAAzN6XYGaHpH5KLt3F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y1G8JO7YVEAGBKCpa5795p
          claim_id: c_I99qDBjv-orzPWycK3tI1X
          source_id: s_cIkeAvahB6bNzrxVoblS6B
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126880 王繼明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cIkeAvahB6bNzrxVoblS6B
            source_type: api_record
            title: 中国历代人物传记资料库：王如珪（CBDB 215082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215082&o=json
            external_identifier: CBDB:215082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Uu3PhDPTRD4oQGaMJP7i1y
        status: active
        display_name: 王繼明
        merged_into_person_id: null
---

# 王如珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如珪 | accepted |
| bio.summary | 王如珪，明人物。萬曆二年進士，籍贯永嘉，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 215082） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5sMmYXtRexRwYuYUk2GvGP | 王允文 | accepted |
| other | p_Uu3PhDPTRD4oQGaMJP7i1y | 王繼明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王如珪（CBDB 215082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215082&o=json)

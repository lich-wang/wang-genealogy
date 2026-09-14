---
schema: wang-person/v1
id: p_mUmL7DUthv7tNukis6eX5t
status: active
merged_into: null
display_name: 王煒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_moHLXhixi37LaiULzrR4Vd
        subject_person_id: p_mUmL7DUthv7tNukis6eX5t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TDTDurWHNfZ6bK5uWCFd9K
          claim_id: c_moHLXhixi37LaiULzrR4Vd
          source_id: s_HdJjmPxfxCQjNLZCK1qBnB
          stance: supports
          locator: CBDB:328403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328403）
          source: &a1
            id: s_HdJjmPxfxCQjNLZCK1qBnB
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 328403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328403&o=json
            external_identifier: CBDB:328403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YHf566iDz4pk2o6h166Gwu
        subject_person_id: p_mUmL7DUthv7tNukis6eX5t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒，明人物。嘉靖四十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 328403）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eqwh2JbWchspbLtGWEy-6A
          claim_id: c_YHf566iDz4pk2o6h166Gwu
          source_id: s_HdJjmPxfxCQjNLZCK1qBnB
          stance: supports
          locator: CBDB:328403
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lGDcvsOxrEtLGWomqkKNXb
        subject_person_id: p_H8E9DJ6cL51HbCtFQ3ZmfS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mUmL7DUthv7tNukis6eX5t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N8dPangBUszUqXyzOy57Ix
          claim_id: c_lGDcvsOxrEtLGWomqkKNXb
          source_id: s_S8aAWXLgYAbNHF03mcTRrk
          stance: supports
          locator: CBDB：兄弟 王爕（205106）之父／母 王楩
          quotation: null
          interpretation_note: 由兄弟关系推断：王煒 与 王爕 为同胞（CBDB 记「弟」），王爕 之父／母即 王煒 之父／母。
          source:
            id: s_S8aAWXLgYAbNHF03mcTRrk
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 328403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328403&o=json
            external_identifier: CBDB:328403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H8E9DJ6cL51HbCtFQ3ZmfS
        status: active
        display_name: 王楩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RseRd62HUOcdo7-EFN2ea3
        subject_person_id: p_2X56zUa2MYrGErZu5r54un
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mUmL7DUthv7tNukis6eX5t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DOJdV2jbIQzSHF-kDbnuDU
          claim_id: c_RseRd62HUOcdo7-EFN2ea3
          source_id: s_S8aAWXLgYAbNHF03mcTRrk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205106 王爕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_S8aAWXLgYAbNHF03mcTRrk
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 328403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328403&o=json
            external_identifier: CBDB:328403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2X56zUa2MYrGErZu5r54un
        status: active
        display_name: 王爕
        merged_into_person_id: null
---

# 王煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煒 | accepted |
| bio.summary | 王煒，明人物。嘉靖四十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 328403） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H8E9DJ6cL51HbCtFQ3ZmfS | 王楩 | accepted |
| other | p_2X56zUa2MYrGErZu5r54un | 王爕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煒（CBDB 328403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328403&o=json)

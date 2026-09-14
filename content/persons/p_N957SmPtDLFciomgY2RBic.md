---
schema: wang-person/v1
id: p_N957SmPtDLFciomgY2RBic
status: active
merged_into: null
display_name: 王敖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wqHJrUJ5MJLUpqs1KxSTMJ
        subject_person_id: p_N957SmPtDLFciomgY2RBic
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Ua2oiBAg5vpT77hhuS3Ad
          claim_id: c_wqHJrUJ5MJLUpqs1KxSTMJ
          source_id: s_DC2FirKDuoaLGHHxS2BorE
          stance: supports
          locator: CBDB:253907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253907）
          source: &a1
            id: s_DC2FirKDuoaLGHHxS2BorE
            source_type: api_record
            title: 中国历代人物传记资料库：王敖（CBDB 253907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253907&o=json
            external_identifier: CBDB:253907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C57ZPJo23YpTLKeurx9PZN
        subject_person_id: p_N957SmPtDLFciomgY2RBic
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敖，明人物。成化十四年進士，籍贯和順。（中国历代人物传记资料库 CBDB 253907）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fL9vDvxaHqps2XgER3qqW-
          claim_id: c_C57ZPJo23YpTLKeurx9PZN
          source_id: s_DC2FirKDuoaLGHHxS2BorE
          stance: supports
          locator: CBDB:253907
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QUV-jy8IyqXR5y-V74gYYW
        subject_person_id: p_3zqRTvVoZ83XX9ehuTK1mN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N957SmPtDLFciomgY2RBic
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jopb4jM-m7G4vjEo1hIp-O
          claim_id: c_QUV-jy8IyqXR5y-V74gYYW
          source_id: s_AK5YPkcArh8fPPFsLIxNfv
          stance: supports
          locator: CBDB：兄弟 王佐（67292）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王敖 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王敖 之父／母。
          source:
            id: s_AK5YPkcArh8fPPFsLIxNfv
            source_type: api_record
            title: 中国历代人物传记资料库：王敖（CBDB 253907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253907&o=json
            external_identifier: CBDB:253907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3zqRTvVoZ83XX9ehuTK1mN
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ghcqk057-QJCZ5e_cs9f20
        subject_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_N957SmPtDLFciomgY2RBic
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dd9PAWENUe5TFXTesOiHqs
          claim_id: c_Ghcqk057-QJCZ5e_cs9f20
          source_id: s_AK5YPkcArh8fPPFsLIxNfv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67292 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AK5YPkcArh8fPPFsLIxNfv
            source_type: api_record
            title: 中国历代人物传记资料库：王敖（CBDB 253907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253907&o=json
            external_identifier: CBDB:253907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2yQZFqgpXJgeoQtn7WfsC5
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王敖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敖 | accepted |
| bio.summary | 王敖，明人物。成化十四年進士，籍贯和順。（中国历代人物传记资料库 CBDB 253907） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3zqRTvVoZ83XX9ehuTK1mN | 王義 | accepted |
| other | p_2yQZFqgpXJgeoQtn7WfsC5 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敖（CBDB 253907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253907&o=json)

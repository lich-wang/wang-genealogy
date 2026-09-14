---
schema: wang-person/v1
id: p_wCi78YioVHt7oatwsxnqMs
status: active
merged_into: null
display_name: 王景星
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jnkqqpoi81ZE7uxt9vRo7n
        subject_person_id: p_wCi78YioVHt7oatwsxnqMs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景星
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YERhVVv3p9KGnPzo7Q8MbV
          claim_id: c_jnkqqpoi81ZE7uxt9vRo7n
          source_id: s_48Z6TTdYLYHVMbbAQ98fcE
          stance: supports
          locator: CBDB:302527
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302527）
          source: &a1
            id: s_48Z6TTdYLYHVMbbAQ98fcE
            source_type: api_record
            title: 中国历代人物传记资料库：王景星（CBDB 302527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302527&o=json
            external_identifier: CBDB:302527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7NiUWbsGBA1CtXmP3yyNbF
        subject_person_id: p_wCi78YioVHt7oatwsxnqMs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景星，明人物。嘉靖二十年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 302527）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BPdBMN97ONI9Zm_iEJLMhv
          claim_id: c_7NiUWbsGBA1CtXmP3yyNbF
          source_id: s_48Z6TTdYLYHVMbbAQ98fcE
          stance: supports
          locator: CBDB:302527
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PhZXTezAB2QRqzOzlgEDDw
        subject_person_id: p_oT96LPoCHtD2MEJwV4LGNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wCi78YioVHt7oatwsxnqMs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJD9NNYpIVP9E65apX_aJa
          claim_id: c_PhZXTezAB2QRqzOzlgEDDw
          source_id: s_RwqYgFIntD34BFA2ML-ZDr
          stance: supports
          locator: CBDB：兄弟 王景象（203284）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王景星 与 王景象 为同胞（CBDB 记「兄」），王景象 之父／母即 王景星 之父／母。
          source:
            id: s_RwqYgFIntD34BFA2ML-ZDr
            source_type: api_record
            title: 中国历代人物传记资料库：王景星（CBDB 302527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302527&o=json
            external_identifier: CBDB:302527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oT96LPoCHtD2MEJwV4LGNZ
        status: active
        display_name: 王經
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_H7962GdMyHqNinaY7X2QbS
        subject_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wCi78YioVHt7oatwsxnqMs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WIIFJsE03aF16gl2Xguo4r
          claim_id: c_H7962GdMyHqNinaY7X2QbS
          source_id: s_RwqYgFIntD34BFA2ML-ZDr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203284 王景象）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RwqYgFIntD34BFA2ML-ZDr
            source_type: api_record
            title: 中国历代人物传记资料库：王景星（CBDB 302527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302527&o=json
            external_identifier: CBDB:302527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UcjkWZqqBQxTHAd68nDNjt
        status: active
        display_name: 王景象
        merged_into_person_id: null
---

# 王景星

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景星 | accepted |
| bio.summary | 王景星，明人物。嘉靖二十年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 302527） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oT96LPoCHtD2MEJwV4LGNZ | 王經 | accepted |
| other | p_UcjkWZqqBQxTHAd68nDNjt | 王景象 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景星（CBDB 302527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302527&o=json)

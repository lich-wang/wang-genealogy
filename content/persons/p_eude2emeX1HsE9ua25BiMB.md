---
schema: wang-person/v1
id: p_eude2emeX1HsE9ua25BiMB
status: active
merged_into: null
display_name: 王珊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_74T9ZQt9B7pndFWWxkoQXo
        subject_person_id: p_eude2emeX1HsE9ua25BiMB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CnBVCzpUeuH36x3gV6erLx
          claim_id: c_74T9ZQt9B7pndFWWxkoQXo
          source_id: s_1Mj6d1pEbvqAPH8FY5Q4Lb
          stance: supports
          locator: CBDB:259415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259415）
          source: &a1
            id: s_1Mj6d1pEbvqAPH8FY5Q4Lb
            source_type: api_record
            title: 中国历代人物传记资料库：王珊（CBDB 259415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259415&o=json
            external_identifier: CBDB:259415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jjetCiBTwJBKpE4spfD5ro
        subject_person_id: p_eude2emeX1HsE9ua25BiMB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珊，明人物。成化二十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 259415）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1KLMjpvcoNBl4PQsbjIWXW
          claim_id: c_jjetCiBTwJBKpE4spfD5ro
          source_id: s_1Mj6d1pEbvqAPH8FY5Q4Lb
          stance: supports
          locator: CBDB:259415
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I80yxJKL6X67rMQzrHduXg
        subject_person_id: p_PiGQRrZ25P7Jmsf8AnzTUr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eude2emeX1HsE9ua25BiMB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wHT6jeYVJWHz-Lpdcv65_I
          claim_id: c_I80yxJKL6X67rMQzrHduXg
          source_id: s_QiGTYsW0LEtoHfM2I0GDgL
          stance: supports
          locator: CBDB：兄弟 王珍（200536）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王珊 与 王珍 为同胞（CBDB 记「兄」），王珍 之父／母即 王珊 之父／母。
          source:
            id: s_QiGTYsW0LEtoHfM2I0GDgL
            source_type: api_record
            title: 中国历代人物传记资料库：王珊（CBDB 259415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259415&o=json
            external_identifier: CBDB:259415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PiGQRrZ25P7Jmsf8AnzTUr
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_lj1mcsHmLTgFAH6ZNmHnKr
        subject_person_id: p_eude2emeX1HsE9ua25BiMB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uwC7U2dhe6Kyw5xBECanBE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Q9HS3d78usaCNBVFuO9G2
          claim_id: c_lj1mcsHmLTgFAH6ZNmHnKr
          source_id: s_QiGTYsW0LEtoHfM2I0GDgL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200536 王珍）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QiGTYsW0LEtoHfM2I0GDgL
            source_type: api_record
            title: 中国历代人物传记资料库：王珊（CBDB 259415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259415&o=json
            external_identifier: CBDB:259415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uwC7U2dhe6Kyw5xBECanBE
        status: active
        display_name: 王珍
        merged_into_person_id: null
---

# 王珊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珊 | accepted |
| bio.summary | 王珊，明人物。成化二十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 259415） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PiGQRrZ25P7Jmsf8AnzTUr | 王敬 | accepted |
| other | p_uwC7U2dhe6Kyw5xBECanBE | 王珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珊（CBDB 259415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259415&o=json)

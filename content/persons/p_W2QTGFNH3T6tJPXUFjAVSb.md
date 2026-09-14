---
schema: wang-person/v1
id: p_W2QTGFNH3T6tJPXUFjAVSb
status: active
merged_into: null
display_name: 王公
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U2G3mqh34oYrERhrXVnvca
        subject_person_id: p_W2QTGFNH3T6tJPXUFjAVSb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TYsYjZYfxwbrjTj5KXVQ9e
          claim_id: c_U2G3mqh34oYrERhrXVnvca
          source_id: s_SmTiZDXxeJ72vQFmULUtAd
          stance: supports
          locator: CBDB:278857
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278857）
          source: &a1
            id: s_SmTiZDXxeJ72vQFmULUtAd
            source_type: api_record
            title: 中国历代人物传记资料库：王公（CBDB 278857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278857&o=json
            external_identifier: CBDB:278857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ehHtehoPBicLZtGQmTNZVc
        subject_person_id: p_W2QTGFNH3T6tJPXUFjAVSb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 278857）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OMC9vjKvVosJkS7JfsY-Ev
          claim_id: c_ehHtehoPBicLZtGQmTNZVc
          source_id: s_SmTiZDXxeJ72vQFmULUtAd
          stance: supports
          locator: CBDB:278857
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ab46jfNoxP_vJnrsDzm5iB
        subject_person_id: p_493jjNvpMG2MDc1hCwrQiK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W2QTGFNH3T6tJPXUFjAVSb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_irR3IM5V6OCbgVqt7QOxN9
          claim_id: c_ab46jfNoxP_vJnrsDzm5iB
          source_id: s_7FWy5efYXfvAS268rswIp3
          stance: supports
          locator: CBDB：兄弟 王完（201827）之父／母 王紹某
          quotation: null
          interpretation_note: 由兄弟关系推断：王公 与 王完 为同胞（CBDB 记「弟」），王完 之父／母即 王公 之父／母。
          source:
            id: s_7FWy5efYXfvAS268rswIp3
            source_type: api_record
            title: 中国历代人物传记资料库：王公（CBDB 278857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278857&o=json
            external_identifier: CBDB:278857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_493jjNvpMG2MDc1hCwrQiK
        status: active
        display_name: 王紹某
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zGd1Qq8jI-hUQXOCJA_38Z
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W2QTGFNH3T6tJPXUFjAVSb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FBMrjdUx8marM6qOBdMUPI
          claim_id: c_zGd1Qq8jI-hUQXOCJA_38Z
          source_id: s_7FWy5efYXfvAS268rswIp3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7FWy5efYXfvAS268rswIp3
            source_type: api_record
            title: 中国历代人物传记资料库：王公（CBDB 278857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278857&o=json
            external_identifier: CBDB:278857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_87vQWSqin1Cc8rN4TeH3X4
        status: active
        display_name: 王完
        merged_into_person_id: null
---

# 王公

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公 | accepted |
| bio.summary | 王公，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 278857） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_493jjNvpMG2MDc1hCwrQiK | 王紹某 | accepted |
| other | p_87vQWSqin1Cc8rN4TeH3X4 | 王完 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公（CBDB 278857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278857&o=json)

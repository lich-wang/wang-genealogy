---
schema: wang-person/v1
id: p_QgRACuZHRaHM7T6tySo9qb
status: active
merged_into: null
display_name: 王漢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UXZ4L827Hv9SNRGrKH8Wfd
        subject_person_id: p_QgRACuZHRaHM7T6tySo9qb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7N6chuJweWpNzJ82S943dB
          claim_id: c_UXZ4L827Hv9SNRGrKH8Wfd
          source_id: s_VD9wAQJj2fPFgJGvSk7qF9
          stance: supports
          locator: CBDB:277074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277074）
          source: &a1
            id: s_VD9wAQJj2fPFgJGvSk7qF9
            source_type: api_record
            title: 中国历代人物传记资料库：王漢（CBDB 277074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277074&o=json
            external_identifier: CBDB:277074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6L6LKaWBbAPhmEZLpvHfgG
        subject_person_id: p_QgRACuZHRaHM7T6tySo9qb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢，明人物。正德六年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 277074）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aEk3i9Nk57ccBQLQNFnP9W
          claim_id: c_6L6LKaWBbAPhmEZLpvHfgG
          source_id: s_VD9wAQJj2fPFgJGvSk7qF9
          stance: supports
          locator: CBDB:277074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IxJveI8G7yuRTXuxlzCpcY
        subject_person_id: p_TBRbQ4tV2WfCnjRSSpkfCv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QgRACuZHRaHM7T6tySo9qb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WQTUO2QP7H-Xbcn3L3JO-L
          claim_id: c_IxJveI8G7yuRTXuxlzCpcY
          source_id: s_W0FzIhhjJhbFFgpX2txFHM
          stance: supports
          locator: CBDB：兄弟 王江（126498）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王漢 与 王江 为同胞（CBDB 记「弟」），王江 之父／母即 王漢 之父／母。
          source:
            id: s_W0FzIhhjJhbFFgpX2txFHM
            source_type: api_record
            title: 中国历代人物传记资料库：王漢（CBDB 277074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277074&o=json
            external_identifier: CBDB:277074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TBRbQ4tV2WfCnjRSSpkfCv
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RHIfEY20gNU5jwiGmZGh88
        subject_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QgRACuZHRaHM7T6tySo9qb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nLOTYZ0023gTO4uwvoWjk9
          claim_id: c_RHIfEY20gNU5jwiGmZGh88
          source_id: s_W0FzIhhjJhbFFgpX2txFHM
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126498 王江）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W0FzIhhjJhbFFgpX2txFHM
            source_type: api_record
            title: 中国历代人物传记资料库：王漢（CBDB 277074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277074&o=json
            external_identifier: CBDB:277074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CcL9yeQgRriMhVY3hPmz5a
        status: active
        display_name: 王江
        merged_into_person_id: null
---

# 王漢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢 | accepted |
| bio.summary | 王漢，明人物。正德六年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 277074） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TBRbQ4tV2WfCnjRSSpkfCv | 王釗 | accepted |
| other | p_CcL9yeQgRriMhVY3hPmz5a | 王江 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漢（CBDB 277074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277074&o=json)

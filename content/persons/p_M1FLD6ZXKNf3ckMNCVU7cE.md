---
schema: wang-person/v1
id: p_M1FLD6ZXKNf3ckMNCVU7cE
status: active
merged_into: null
display_name: 王瀚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jnJZEooSAPP4GzTL3MbckB
        subject_person_id: p_M1FLD6ZXKNf3ckMNCVU7cE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qJG5HhTCRKYh8jjqiFx3bT
          claim_id: c_jnJZEooSAPP4GzTL3MbckB
          source_id: s_wz5wpYahh43MvnDn53eZC6
          stance: supports
          locator: CBDB:237820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237820）
          source: &a1
            id: s_wz5wpYahh43MvnDn53eZC6
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 237820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237820&o=json
            external_identifier: CBDB:237820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JpU38ytvtESRZQqAxBk4DM
        subject_person_id: p_M1FLD6ZXKNf3ckMNCVU7cE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚，明人物。成化二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 237820）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZVDH6C7vEJIVXUnijVrk4C
          claim_id: c_JpU38ytvtESRZQqAxBk4DM
          source_id: s_wz5wpYahh43MvnDn53eZC6
          stance: supports
          locator: CBDB:237820
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lIDqWMLTUI0v19MaDP5wwf
        subject_person_id: p_13RmhF22e6LFRmpmecd8LK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M1FLD6ZXKNf3ckMNCVU7cE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_INUpNmg9oSnwMvQrd-B-l0
          claim_id: c_lIDqWMLTUI0v19MaDP5wwf
          source_id: s_TM6GX1ywcHeQ8Vy0CFoBDj
          stance: supports
          locator: CBDB：兄弟 王浩（199153）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王瀚 与 王浩 为同胞（CBDB 记「兄」），王浩 之父／母即 王瀚 之父／母。
          source:
            id: s_TM6GX1ywcHeQ8Vy0CFoBDj
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 237820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237820&o=json
            external_identifier: CBDB:237820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_13RmhF22e6LFRmpmecd8LK
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ieWl2gycbt-pceNoTBQqd0
        subject_person_id: p_M1FLD6ZXKNf3ckMNCVU7cE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uxo4rVr7iw39w4whnEfVKJ
          claim_id: c_ieWl2gycbt-pceNoTBQqd0
          source_id: s_TM6GX1ywcHeQ8Vy0CFoBDj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199153 王浩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TM6GX1ywcHeQ8Vy0CFoBDj
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 237820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237820&o=json
            external_identifier: CBDB:237820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rEM4FmnErK6MdZnXyWnxsa
        status: active
        display_name: 王浩
        merged_into_person_id: null
---

# 王瀚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀚 | accepted |
| bio.summary | 王瀚，明人物。成化二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 237820） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_13RmhF22e6LFRmpmecd8LK | 王忠 | accepted |
| other | p_rEM4FmnErK6MdZnXyWnxsa | 王浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀚（CBDB 237820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237820&o=json)

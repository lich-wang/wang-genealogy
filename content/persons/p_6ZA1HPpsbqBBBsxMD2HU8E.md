---
schema: wang-person/v1
id: p_6ZA1HPpsbqBBBsxMD2HU8E
status: active
merged_into: null
display_name: 王有守
cbdb_id: 309081
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zNF9iFJUvyVeEuUGJsbxEA
        subject_person_id: p_6ZA1HPpsbqBBBsxMD2HU8E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有守，明人物。嘉靖二十六年進士，籍贯黔陽。（中国历代人物传记资料库 CBDB 309081）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mDsL94ZbjBkpPYO-xN6Zlm
          claim_id: c_zNF9iFJUvyVeEuUGJsbxEA
          source_id: s_CAACpfpcYh68aHiuCbe1cu
          stance: supports
          locator: CBDB:309081
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CAACpfpcYh68aHiuCbe1cu
            source_type: api_record
            title: 中国历代人物传记资料库：王有守（CBDB 309081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309081&o=json
            external_identifier: CBDB:309081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UwKhM9qHBu41dFJTKrMrEe
        subject_person_id: p_6ZA1HPpsbqBBBsxMD2HU8E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有守
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3M98F7uBtQDAyv5GGwYdgz
          claim_id: c_UwKhM9qHBu41dFJTKrMrEe
          source_id: s_CAACpfpcYh68aHiuCbe1cu
          stance: supports
          locator: CBDB:309081
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pujE8B7fnhoK1oneZb1qX_
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6ZA1HPpsbqBBBsxMD2HU8E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x_D8YtZpYEanvjet2qj8wr
          claim_id: c_pujE8B7fnhoK1oneZb1qX_
          source_id: s_2wnKy6Y67A-B5VURXxskU7
          stance: supports
          locator: CBDB：兄弟 王有為（203722）之父／母 王鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王有守 与 王有為 为同胞（CBDB 记「兄」），王有為 之父／母即 王有守 之父／母。
          source:
            id: s_2wnKy6Y67A-B5VURXxskU7
            source_type: api_record
            title: 中国历代人物传记资料库：王有守（CBDB 309081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309081&o=json
            external_identifier: CBDB:309081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XiFFgCxGPLXnJMQFHkL5MX
        status: active
        display_name: 王鵬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_L3ztVsnM29ERZndMYvpxE2
        subject_person_id: p_6ZA1HPpsbqBBBsxMD2HU8E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QKssFDXPVBFCTdrRKrssHY
          claim_id: c_L3ztVsnM29ERZndMYvpxE2
          source_id: s_2wnKy6Y67A-B5VURXxskU7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203722 王有為）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2wnKy6Y67A-B5VURXxskU7
            source_type: api_record
            title: 中国历代人物传记资料库：王有守（CBDB 309081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309081&o=json
            external_identifier: CBDB:309081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_m1KPPjDFuB77sgosg8dB61
        status: active
        display_name: 王有為
        merged_into_person_id: null
---

# 王有守

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王有守，明人物。嘉靖二十六年進士，籍贯黔陽。（中国历代人物传记资料库 CBDB 309081） | accepted |
| name.primary | 王有守 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XiFFgCxGPLXnJMQFHkL5MX | 王鵬 | accepted |
| other | p_m1KPPjDFuB77sgosg8dB61 | 王有為 | accepted |

## 外部来源

- [中国历代人物传记资料库：王有守（CBDB 309081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309081&o=json)

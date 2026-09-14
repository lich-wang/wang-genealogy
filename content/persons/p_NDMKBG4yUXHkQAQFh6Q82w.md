---
schema: wang-person/v1
id: p_NDMKBG4yUXHkQAQFh6Q82w
status: active
merged_into: null
display_name: 王瓃
cbdb_id: 250459
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_igH1XRi5VAAHJFTKBWCL2D
        subject_person_id: p_NDMKBG4yUXHkQAQFh6Q82w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓃，明人物。成化十一年進士，籍贯趙州。（中国历代人物传记资料库 CBDB 250459）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Kr-VeZYxyDHcWOludv0YnH
          claim_id: c_igH1XRi5VAAHJFTKBWCL2D
          source_id: s_UG1ZehZQoUs3X5xzRxPHeN
          stance: supports
          locator: CBDB:250459
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UG1ZehZQoUs3X5xzRxPHeN
            source_type: api_record
            title: 中国历代人物传记资料库：王瓃（CBDB 250459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250459&o=json
            external_identifier: CBDB:250459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EiJLQMAyVLbzx8UdjAXVxN
        subject_person_id: p_NDMKBG4yUXHkQAQFh6Q82w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J7mJdV77eBHaa9QGcso5rB
          claim_id: c_EiJLQMAyVLbzx8UdjAXVxN
          source_id: s_UG1ZehZQoUs3X5xzRxPHeN
          stance: supports
          locator: CBDB:250459
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yVLvmXJf9-5imWPE7psRQ8
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NDMKBG4yUXHkQAQFh6Q82w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OiK89X61GAfJ6Oo6tU6FVC
          claim_id: c_yVLvmXJf9-5imWPE7psRQ8
          source_id: s_AdvzUgAJTiiHqlKFZxU_c5
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓃 与 王珩 为同胞（CBDB 记「兄」），王珩 之父／母即 王瓃 之父／母。
          source:
            id: s_AdvzUgAJTiiHqlKFZxU_c5
            source_type: api_record
            title: 中国历代人物传记资料库：王瓃（CBDB 250459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250459&o=json
            external_identifier: CBDB:250459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f7t9X2kJV7EUtQDpi6JhvW
        status: active
        display_name: 王惟政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ymBxzbKbU6gfbqg6jQoDd4
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NDMKBG4yUXHkQAQFh6Q82w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_drGzYQExDUNaJezTYARA1-
          claim_id: c_ymBxzbKbU6gfbqg6jQoDd4
          source_id: s_AdvzUgAJTiiHqlKFZxU_c5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AdvzUgAJTiiHqlKFZxU_c5
            source_type: api_record
            title: 中国历代人物传记资料库：王瓃（CBDB 250459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250459&o=json
            external_identifier: CBDB:250459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4FbGby9fFeKQMmker7tMMP
        status: active
        display_name: 王珩
        merged_into_person_id: null
---

# 王瓃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瓃，明人物。成化十一年進士，籍贯趙州。（中国历代人物传记资料库 CBDB 250459） | accepted |
| name.primary | 王瓃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_f7t9X2kJV7EUtQDpi6JhvW | 王惟政 | accepted |
| other | p_4FbGby9fFeKQMmker7tMMP | 王珩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓃（CBDB 250459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250459&o=json)

---
schema: wang-person/v1
id: p_Fy3r2A3KPWx1RETDQshWb8
status: active
merged_into: null
display_name: 王瑄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AVMqy3yfm3ypRLBP8H9KL3
        subject_person_id: p_Fy3r2A3KPWx1RETDQshWb8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LgBMCPPjdz5wJEBZF3KEBz
          claim_id: c_AVMqy3yfm3ypRLBP8H9KL3
          source_id: s_B3Fn67juPCJqDZXmyYL2vr
          stance: supports
          locator: CBDB:250455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250455）
          source: &a1
            id: s_B3Fn67juPCJqDZXmyYL2vr
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 250455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250455&o=json
            external_identifier: CBDB:250455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ENRPREwfXHXhU3pfacDZUf
        subject_person_id: p_Fy3r2A3KPWx1RETDQshWb8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。成化十一年進士，籍贯趙州，曾任縣丞。（中国历代人物传记资料库 CBDB 250455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SOURD_cK5Lm6zSgsSRBSRz
          claim_id: c_ENRPREwfXHXhU3pfacDZUf
          source_id: s_B3Fn67juPCJqDZXmyYL2vr
          stance: supports
          locator: CBDB:250455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4uexWFHSBXxukJ5uWpkDnb
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fy3r2A3KPWx1RETDQshWb8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l5C7XXFlEw1-u-tSk3NF-s
          claim_id: c_4uexWFHSBXxukJ5uWpkDnb
          source_id: s_fj1PBPcWIOF472Pyd2yNmn
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑄 与 王珩 为同胞（CBDB 记「弟」），王珩 之父／母即 王瑄 之父／母。
          source:
            id: s_fj1PBPcWIOF472Pyd2yNmn
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 250455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250455&o=json
            external_identifier: CBDB:250455
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
        id: c_yDW6MeT_JMT4L4NQEBp40o
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Fy3r2A3KPWx1RETDQshWb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pjKtXMjBofweHh358je8hc
          claim_id: c_yDW6MeT_JMT4L4NQEBp40o
          source_id: s_fj1PBPcWIOF472Pyd2yNmn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fj1PBPcWIOF472Pyd2yNmn
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 250455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250455&o=json
            external_identifier: CBDB:250455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4FbGby9fFeKQMmker7tMMP
        status: active
        display_name: 王珩
        merged_into_person_id: null
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。成化十一年進士，籍贯趙州，曾任縣丞。（中国历代人物传记资料库 CBDB 250455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_f7t9X2kJV7EUtQDpi6JhvW | 王惟政 | accepted |
| other | p_4FbGby9fFeKQMmker7tMMP | 王珩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 250455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250455&o=json)

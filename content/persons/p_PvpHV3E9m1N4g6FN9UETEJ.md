---
schema: wang-person/v1
id: p_PvpHV3E9m1N4g6FN9UETEJ
status: active
merged_into: null
display_name: 王憲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_78Bep5tpDQQfEiTmAaVgE6
        subject_person_id: p_PvpHV3E9m1N4g6FN9UETEJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XS3dQrSZb8sW8TAvZ8FGrR
          claim_id: c_78Bep5tpDQQfEiTmAaVgE6
          source_id: s_CnLD5osgYoHpZcSggrUUx3
          stance: supports
          locator: CBDB:315713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315713）
          source: &a1
            id: s_CnLD5osgYoHpZcSggrUUx3
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 315713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315713&o=json
            external_identifier: CBDB:315713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KeUKQeCEbJFf41LTkmjXHL
        subject_person_id: p_PvpHV3E9m1N4g6FN9UETEJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315713）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rx49hiIzaQaOLZgrtiscSf
          claim_id: c_KeUKQeCEbJFf41LTkmjXHL
          source_id: s_CnLD5osgYoHpZcSggrUUx3
          stance: supports
          locator: CBDB:315713
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rgyNoSZy-ym4lcD9gwSv6C
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PvpHV3E9m1N4g6FN9UETEJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B9Rtic-VjjQKAcYJlvUB93
          claim_id: c_rgyNoSZy-ym4lcD9gwSv6C
          source_id: s_X8bDBxsH9wv7-LrIiOmhPe
          stance: supports
          locator: CBDB：兄弟 王宇（204187）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲 与 王宇 为同胞（CBDB 记「兄」），王宇 之父／母即 王憲 之父／母。
          source:
            id: s_X8bDBxsH9wv7-LrIiOmhPe
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 315713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315713&o=json
            external_identifier: CBDB:315713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QuF4DaKK4SqaM66dLXVH8d
        status: active
        display_name: 王億
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BAfjUibw-tAm_9MbjM-SSg
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PvpHV3E9m1N4g6FN9UETEJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sMv1gWYNJUoWFntoaLOqQT
          claim_id: c_BAfjUibw-tAm_9MbjM-SSg
          source_id: s_X8bDBxsH9wv7-LrIiOmhPe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204187 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X8bDBxsH9wv7-LrIiOmhPe
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 315713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315713&o=json
            external_identifier: CBDB:315713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GXZCrH2ek2TqbFGJ8qqmqw
        status: active
        display_name: 王宇
        merged_into_person_id: null
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | 王憲，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315713） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QuF4DaKK4SqaM66dLXVH8d | 王億 | accepted |
| other | p_GXZCrH2ek2TqbFGJ8qqmqw | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憲（CBDB 315713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315713&o=json)

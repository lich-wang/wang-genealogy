---
schema: wang-person/v1
id: p_KrHnGbQLbkswCDhSDvm9i4
status: active
merged_into: null
display_name: 王寀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a363CMNmXCKFuXiEccP15b
        subject_person_id: p_KrHnGbQLbkswCDhSDvm9i4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZkHpNxGGAEFyq1ZK12PhEJ
          claim_id: c_a363CMNmXCKFuXiEccP15b
          source_id: s_p7M466FtGDx2pubpFQWdFX
          stance: supports
          locator: CBDB:279065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279065）
          source: &a1
            id: s_p7M466FtGDx2pubpFQWdFX
            source_type: api_record
            title: 中国历代人物传记资料库：王寀（CBDB 279065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279065&o=json
            external_identifier: CBDB:279065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5DAkhAoB2d6j7USgK7QxJU
        subject_person_id: p_KrHnGbQLbkswCDhSDvm9i4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寀，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 279065）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yrhf6IVbYp7oAXlpTLpYAj
          claim_id: c_5DAkhAoB2d6j7USgK7QxJU
          source_id: s_p7M466FtGDx2pubpFQWdFX
          stance: supports
          locator: CBDB:279065
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aD6jpM2jgJF5NwwIG89_GI
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KrHnGbQLbkswCDhSDvm9i4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zwyGmqMOyPMSYMZWlt5MG0
          claim_id: c_aD6jpM2jgJF5NwwIG89_GI
          source_id: s_JNGWXIPaw0mCQ5vGeIplFH
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王寀 与 王寧 为同胞（CBDB 记「弟」），王寧 之父／母即 王寀 之父／母。
          source:
            id: s_JNGWXIPaw0mCQ5vGeIplFH
            source_type: api_record
            title: 中国历代人物传记资料库：王寀（CBDB 279065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279065&o=json
            external_identifier: CBDB:279065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xFFdPdJwKEcff8qRsr4b53
        status: active
        display_name: 王紹紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_42FXNoZl3JB_By3KmYVbwc
        subject_person_id: p_KrHnGbQLbkswCDhSDvm9i4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OC0zVALbaKzBYixlrvZ8pL
          claim_id: c_42FXNoZl3JB_By3KmYVbwc
          source_id: s_JNGWXIPaw0mCQ5vGeIplFH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JNGWXIPaw0mCQ5vGeIplFH
            source_type: api_record
            title: 中国历代人物传记资料库：王寀（CBDB 279065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279065&o=json
            external_identifier: CBDB:279065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yE8R4Fu2xBRHQnxP4vnrau
        status: active
        display_name: 王寧
        merged_into_person_id: null
---

# 王寀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寀 | accepted |
| bio.summary | 王寀，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 279065） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xFFdPdJwKEcff8qRsr4b53 | 王紹紀 | accepted |
| other | p_yE8R4Fu2xBRHQnxP4vnrau | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寀（CBDB 279065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279065&o=json)

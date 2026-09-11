---
schema: wang-person/v1
id: p_W4Uw5tx84WkFrLAeBu8JGu
status: active
merged_into: null
display_name: 王嘉孝
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VzCVd1GP98jziiNSHoayHz
        subject_person_id: p_W4Uw5tx84WkFrLAeBu8JGu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4cr5ZvGb8QJbBVqLF4tKgh
          claim_id: c_VzCVd1GP98jziiNSHoayHz
          source_id: s_Tu5Yy1Q4MY5AJtrhpLK6t8
          stance: supports
          locator: CBDB:203440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203440）
          source: &a1
            id: s_Tu5Yy1Q4MY5AJtrhpLK6t8
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉孝（CBDB 203440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203440&o=json
            external_identifier: CBDB:203440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yobDYAAcumuuBvMKnzb6PT
        subject_person_id: p_W4Uw5tx84WkFrLAeBu8JGu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1500年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G8DSbQaYU8tbQabAKMyXuA
          claim_id: c_yobDYAAcumuuBvMKnzb6PT
          source_id: s_Tu5Yy1Q4MY5AJtrhpLK6t8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3M3EGECy6tW3YmW5ykZRc1
        subject_person_id: p_W4Uw5tx84WkFrLAeBu8JGu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FXNqCAuCAGCYCdjtcG4st6
          claim_id: c_3M3EGECy6tW3YmW5ykZRc1
          source_id: s_Tu5Yy1Q4MY5AJtrhpLK6t8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6bcKq9oC73_RHwhxRffeGW
        subject_person_id: p_Rh1K2iP8xhRWnRgvAy7R1F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W4Uw5tx84WkFrLAeBu8JGu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vcvIa-Y283Gxcm29_gIuTV
          claim_id: c_6bcKq9oC73_RHwhxRffeGW
          source_id: s_1PyPsCZHhFBQNjrtcqnnKA
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1PyPsCZHhFBQNjrtcqnnKA
            source_type: api_record
            title: 中国历代人物传记资料库：王時庸（CBDB 304774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304774&o=json
            external_identifier: CBDB:304774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Rh1K2iP8xhRWnRgvAy7R1F
        status: active
        display_name: 王時庸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ifI1I9XRbsgoVRwJvTFBg2
        subject_person_id: p_Q4zHMaLc6WfcgCJNBJHez6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W4Uw5tx84WkFrLAeBu8JGu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tO_ZKKWcSelgoKwakdkQQl
          claim_id: c_ifI1I9XRbsgoVRwJvTFBg2
          source_id: s_M3kPTG3QjBmsaoNGDg2P4J
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百六十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M3kPTG3QjBmsaoNGDg2P4J
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 304773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304773&o=json
            external_identifier: CBDB:304773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Q4zHMaLc6WfcgCJNBJHez6
        status: active
        display_name: 王璋
        merged_into_person_id: null
    - claim:
        id: c_WXNqUVch6734c8SCJjqaDU
        subject_person_id: p_TDLYpZV6QvrzV8d89Kjarb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W4Uw5tx84WkFrLAeBu8JGu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zm9j8sde3fpbl3s_8vupZg
          claim_id: c_WXNqUVch6734c8SCJjqaDU
          source_id: s_E858gvYPmnpz563i6WqKDs
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E858gvYPmnpz563i6WqKDs
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 304768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304768&o=json
            external_identifier: CBDB:304768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.733Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TDLYpZV6QvrzV8d89Kjarb
        status: active
        display_name: 王信
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嘉孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉孝 | accepted |
| birth.date | 1500年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Rh1K2iP8xhRWnRgvAy7R1F | 王時庸 | accepted |
| ancestors | p_Q4zHMaLc6WfcgCJNBJHez6 | 王璋 | accepted |
| ancestors | p_TDLYpZV6QvrzV8d89Kjarb | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉孝（CBDB 203440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203440&o=json)
- [中国历代人物传记资料库：王時庸（CBDB 304774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304774&o=json)
- [中国历代人物传记资料库：王信（CBDB 304768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304768&o=json)
- [中国历代人物传记资料库：王璋（CBDB 304773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304773&o=json)

---
schema: wang-person/v1
id: p_4uqEpzsZPn5Pq8rwSNhRpH
status: active
merged_into: null
display_name: 王以作
cbdb_id: 331779
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xoFnBq8PRPXTJrEWgwfDtH
        subject_person_id: p_4uqEpzsZPn5Pq8rwSNhRpH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以作，明人物。嘉靖四十四年進士，籍贯達州。（中国历代人物传记资料库 CBDB 331779）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zqRrI7HoSGGVgY9GuggYWc
          claim_id: c_xoFnBq8PRPXTJrEWgwfDtH
          source_id: s_EmZPDoqdP7nx5sMH8EeJVc
          stance: supports
          locator: CBDB:331779
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EmZPDoqdP7nx5sMH8EeJVc
            source_type: api_record
            title: 中国历代人物传记资料库：王以作（CBDB 331779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331779&o=json
            external_identifier: CBDB:331779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SB4gdW1WebL7u6L17u2wRY
        subject_person_id: p_4uqEpzsZPn5Pq8rwSNhRpH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以作
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zXYN8J5KwZ1vdwtGoE7A4b
          claim_id: c_SB4gdW1WebL7u6L17u2wRY
          source_id: s_EmZPDoqdP7nx5sMH8EeJVc
          stance: supports
          locator: CBDB:331779
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1aSRxMLdeIAVMR86Hxtu7C
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4uqEpzsZPn5Pq8rwSNhRpH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a8LKMRz2tbhEmnPo92bQsF
          claim_id: c_1aSRxMLdeIAVMR86Hxtu7C
          source_id: s_O-l33pGcw32zsci6EQy-c7
          stance: supports
          locator: CBDB：兄弟 王以修（126492）之父／母 王言中
          quotation: null
          interpretation_note: 由兄弟关系推断：王以作 与 王以修 为同胞（CBDB 记「兄」），王以修 之父／母即 王以作 之父／母。
          source:
            id: s_O-l33pGcw32zsci6EQy-c7
            source_type: api_record
            title: 中国历代人物传记资料库：王以作（CBDB 331779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331779&o=json
            external_identifier: CBDB:331779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iHMh7eWrNMdmn3tpjzgVvy
        status: active
        display_name: 王言中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ycr2rO1dKmFA1Kskehkcnc
        subject_person_id: p_4uqEpzsZPn5Pq8rwSNhRpH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5joJqoMyociS4kycpuaY9i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bp2nJQKg9TCg2qa2A5NAdO
          claim_id: c_ycr2rO1dKmFA1Kskehkcnc
          source_id: s_O-l33pGcw32zsci6EQy-c7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126492 王以修）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_O-l33pGcw32zsci6EQy-c7
            source_type: api_record
            title: 中国历代人物传记资料库：王以作（CBDB 331779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331779&o=json
            external_identifier: CBDB:331779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5joJqoMyociS4kycpuaY9i
        status: active
        display_name: 王以修
        merged_into_person_id: null
---

# 王以作

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以作，明人物。嘉靖四十四年進士，籍贯達州。（中国历代人物传记资料库 CBDB 331779） | accepted |
| name.primary | 王以作 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iHMh7eWrNMdmn3tpjzgVvy | 王言中 | accepted |
| other | p_5joJqoMyociS4kycpuaY9i | 王以修 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以作（CBDB 331779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331779&o=json)

---
schema: wang-person/v1
id: p_sLGcpXkcUwRP3A3iTDNDA4
status: active
merged_into: null
display_name: 王伊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UZc9aM5fHwbRGVYm4MS66R
        subject_person_id: p_sLGcpXkcUwRP3A3iTDNDA4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d9y3FKJ18yf7VD5mi6Ls24
          claim_id: c_UZc9aM5fHwbRGVYm4MS66R
          source_id: s_3J6FCvY7ai9tdMm95GqvUk
          stance: supports
          locator: CBDB:247751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247751）
          source: &a1
            id: s_3J6FCvY7ai9tdMm95GqvUk
            source_type: api_record
            title: 中国历代人物传记资料库：王伊（CBDB 247751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247751&o=json
            external_identifier: CBDB:247751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YkP5MzJv2BUTdaobpLL5nC
        subject_person_id: p_sLGcpXkcUwRP3A3iTDNDA4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伊，明人物。成化十一年進士，籍贯盩厔。（中国历代人物传记资料库 CBDB 247751）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-5k0X8Ba7KkOKMK9lftIq6
          claim_id: c_YkP5MzJv2BUTdaobpLL5nC
          source_id: s_3J6FCvY7ai9tdMm95GqvUk
          stance: supports
          locator: CBDB:247751
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8UvD2b6RoWjnWQPRKfmc9m
        subject_person_id: p_76zy8a3P4X496DVsdChzJX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sLGcpXkcUwRP3A3iTDNDA4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJ1wrgwfQJA2MmiODDLUBb
          claim_id: c_8UvD2b6RoWjnWQPRKfmc9m
          source_id: s_28AiNgaUhhKbaPOFmKdD1P
          stance: supports
          locator: CBDB：兄弟 王傳（126769）之父／母 王璽
          quotation: null
          interpretation_note: 由兄弟关系推断：王伊 与 王傳 为同胞（CBDB 记「弟」），王傳 之父／母即 王伊 之父／母。
          source:
            id: s_28AiNgaUhhKbaPOFmKdD1P
            source_type: api_record
            title: 中国历代人物传记资料库：王伊（CBDB 247751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247751&o=json
            external_identifier: CBDB:247751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_76zy8a3P4X496DVsdChzJX
        status: active
        display_name: 王璽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bwJtHahMYYX4Q4pg9Rqkvf
        subject_person_id: p_RMejjGJewJRvFyGM3arPK4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sLGcpXkcUwRP3A3iTDNDA4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rmsBZeLjromNsd_Y_ht9pD
          claim_id: c_bwJtHahMYYX4Q4pg9Rqkvf
          source_id: s_28AiNgaUhhKbaPOFmKdD1P
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126769 王傳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_28AiNgaUhhKbaPOFmKdD1P
            source_type: api_record
            title: 中国历代人物传记资料库：王伊（CBDB 247751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247751&o=json
            external_identifier: CBDB:247751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RMejjGJewJRvFyGM3arPK4
        status: active
        display_name: 王傳
        merged_into_person_id: null
---

# 王伊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伊 | accepted |
| bio.summary | 王伊，明人物。成化十一年進士，籍贯盩厔。（中国历代人物传记资料库 CBDB 247751） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_76zy8a3P4X496DVsdChzJX | 王璽 | accepted |
| other | p_RMejjGJewJRvFyGM3arPK4 | 王傳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伊（CBDB 247751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247751&o=json)

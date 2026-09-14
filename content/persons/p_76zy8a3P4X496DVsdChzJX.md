---
schema: wang-person/v1
id: p_76zy8a3P4X496DVsdChzJX
status: active
merged_into: null
display_name: 王璽
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nsD17NM9hA345GU3DpQST2
        subject_person_id: p_76zy8a3P4X496DVsdChzJX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A1yAa1qLVJJWoQ2DhMGFkU
          claim_id: c_nsD17NM9hA345GU3DpQST2
          source_id: s_P27XVLDE1sgkVrKWQ8LHeb
          stance: supports
          locator: CBDB:247748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247748）
          source: &a1
            id: s_P27XVLDE1sgkVrKWQ8LHeb
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 247748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247748&o=json
            external_identifier: CBDB:247748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JBGDTJ13gNjD51S7PobRHG
        subject_person_id: p_76zy8a3P4X496DVsdChzJX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽，明人物。成化十一年進士，籍贯盩厔，曾任知府。（中国历代人物传记资料库 CBDB 247748）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oV1GIJvii1sVvcjqVdEjKD
          claim_id: c_JBGDTJ13gNjD51S7PobRHG
          source_id: s_P27XVLDE1sgkVrKWQ8LHeb
          stance: supports
          locator: CBDB:247748
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Ipn_53riyWpwNAIt7NIv-X
        subject_person_id: p_76zy8a3P4X496DVsdChzJX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RMejjGJewJRvFyGM3arPK4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vxxXoEJ0jVAq-ieWTpi9gZ
          claim_id: c_Ipn_53riyWpwNAIt7NIv-X
          source_id: s_P27XVLDE1sgkVrKWQ8LHeb
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RMejjGJewJRvFyGM3arPK4
        status: active
        display_name: 王傳
        merged_into_person_id: null
    - claim:
        id: c_5Vw4V8NniH9VZrwIiuD2OC
        subject_person_id: p_76zy8a3P4X496DVsdChzJX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DZY6aHxpr8JVgjjw4wCFQu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tqEUsc5QzSmsUWK0afCKzB
          claim_id: c_5Vw4V8NniH9VZrwIiuD2OC
          source_id: s_pIC2a_ZvuzCAYT3SvSJHcW
          stance: supports
          locator: CBDB：兄弟 王傳（126769）之父／母 王璽
          quotation: null
          interpretation_note: 由兄弟关系推断：王伋 与 王傳 为同胞（CBDB 记「兄」），王傳 之父／母即 王伋 之父／母。
          source:
            id: s_pIC2a_ZvuzCAYT3SvSJHcW
            source_type: api_record
            title: 中国历代人物传记资料库：王伋（CBDB 247752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247752&o=json
            external_identifier: CBDB:247752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DZY6aHxpr8JVgjjw4wCFQu
        status: active
        display_name: 王伋
        merged_into_person_id: null
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
        id: p_sLGcpXkcUwRP3A3iTDNDA4
        status: active
        display_name: 王伊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | 王璽，明人物。成化十一年進士，籍贯盩厔，曾任知府。（中国历代人物传记资料库 CBDB 247748） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RMejjGJewJRvFyGM3arPK4 | 王傳 | accepted |
| children | p_DZY6aHxpr8JVgjjw4wCFQu | 王伋 | accepted |
| children | p_sLGcpXkcUwRP3A3iTDNDA4 | 王伊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伋（CBDB 247752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247752&o=json)
- [中国历代人物传记资料库：王璽（CBDB 247748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247748&o=json)
- [中国历代人物传记资料库：王伊（CBDB 247751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247751&o=json)

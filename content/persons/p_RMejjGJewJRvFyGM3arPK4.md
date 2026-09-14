---
schema: wang-person/v1
id: p_RMejjGJewJRvFyGM3arPK4
status: active
merged_into: null
display_name: 王傳
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ehaWtxdnVq5n3C4KSyEbK2
        subject_person_id: p_RMejjGJewJRvFyGM3arPK4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NqGnB2pdL7BkxJNewLM37U
          claim_id: c_ehaWtxdnVq5n3C4KSyEbK2
          source_id: s_mtzFcUnhgHMZDzNRPPXieH
          stance: supports
          locator: CBDB:126769
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126769）
          source: &a1
            id: s_mtzFcUnhgHMZDzNRPPXieH
            source_type: api_record
            title: 中国历代人物传记资料库：王傳（CBDB 126769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126769&o=json
            external_identifier: CBDB:126769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gRSPRpD1j1raZvpRHQaZrJ
        subject_person_id: p_RMejjGJewJRvFyGM3arPK4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_31ovCLXXCrQMueBQ139Q1C
          claim_id: c_gRSPRpD1j1raZvpRHQaZrJ
          source_id: s_mtzFcUnhgHMZDzNRPPXieH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gHSSSnMYm7PRZYKLDwEkeZ
        subject_person_id: p_RMejjGJewJRvFyGM3arPK4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_srbr1BhG9EaeqwBMngGprX
          claim_id: c_gHSSSnMYm7PRZYKLDwEkeZ
          source_id: s_mtzFcUnhgHMZDzNRPPXieH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jA5bT7JnDzNi5Jer4QNYmE
        subject_person_id: p_RMejjGJewJRvFyGM3arPK4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳（1450年—1493年），明人物。籍贯盩厔，身份为良吏;循吏，入仕進士，曾任太僕寺卿、知縣。（中国历代人物传记资料库 CBDB 126769）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DdJYMPXzz0LM4_W_j0GC37
          claim_id: c_jA5bT7JnDzNi5Jer4QNYmE
          source_id: s_mtzFcUnhgHMZDzNRPPXieH
          stance: supports
          locator: CBDB:126769
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_76zy8a3P4X496DVsdChzJX
        status: active
        display_name: 王璽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_PoegNcaVsMI7YaWkbACDG9
        subject_person_id: p_7Yja38GWcuBt14xXp8sQcE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RMejjGJewJRvFyGM3arPK4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xTacdUOfTaVn-FILFsMJN5
          claim_id: c_PoegNcaVsMI7YaWkbACDG9
          source_id: s_oSszWEg5kMiHPQWYSM9SdB
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oSszWEg5kMiHPQWYSM9SdB
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 247747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247747&o=json
            external_identifier: CBDB:247747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7Yja38GWcuBt14xXp8sQcE
        status: active
        display_name: 王榮
        merged_into_person_id: null
    - claim:
        id: c_ZH559Na7KfpmMk8sUpvdHz
        subject_person_id: p_UPEaGSR5BWodRiY8QZ4gbo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RMejjGJewJRvFyGM3arPK4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g8Oge3t5Sux8gTaLJ_m8rJ
          claim_id: c_ZH559Na7KfpmMk8sUpvdHz
          source_id: s_MGjrtUZS2Rn3x7FBV84Pa7
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MGjrtUZS2Rn3x7FBV84Pa7
            source_type: api_record
            title: 中国历代人物传记资料库：王克中（CBDB 247746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247746&o=json
            external_identifier: CBDB:247746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UPEaGSR5BWodRiY8QZ4gbo
        status: active
        display_name: 王克中
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_dN5vbAc4VQGhKSbJgbPyPW
        subject_person_id: p_DZY6aHxpr8JVgjjw4wCFQu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RMejjGJewJRvFyGM3arPK4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vhlIlq6jEu5uAjkcdev4eV
          claim_id: c_dN5vbAc4VQGhKSbJgbPyPW
          source_id: s_pIC2a_ZvuzCAYT3SvSJHcW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126769 王傳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_sLGcpXkcUwRP3A3iTDNDA4
        status: active
        display_name: 王伊
        merged_into_person_id: null
---

# 王傳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傳 | accepted |
| birth.date | 1450年 | accepted |
| death.date | 1493年 | accepted |
| bio.summary | 王傳（1450年—1493年），明人物。籍贯盩厔，身份为良吏;循吏，入仕進士，曾任太僕寺卿、知縣。（中国历代人物传记资料库 CBDB 126769） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_76zy8a3P4X496DVsdChzJX | 王璽 | accepted |
| ancestors | p_7Yja38GWcuBt14xXp8sQcE | 王榮 | accepted |
| ancestors | p_UPEaGSR5BWodRiY8QZ4gbo | 王克中 | accepted |
| other | p_DZY6aHxpr8JVgjjw4wCFQu | 王伋 | accepted |
| other | p_sLGcpXkcUwRP3A3iTDNDA4 | 王伊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傳（CBDB 126769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126769&o=json)
- [中国历代人物传记资料库：王伋（CBDB 247752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247752&o=json)
- [中国历代人物传记资料库：王克中（CBDB 247746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247746&o=json)
- [中国历代人物传记资料库：王榮（CBDB 247747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247747&o=json)
- [中国历代人物传记资料库：王璽（CBDB 247748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247748&o=json)
- [中国历代人物传记资料库：王伊（CBDB 247751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247751&o=json)

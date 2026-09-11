---
schema: wang-person/v1
id: p_vpzDXBrQjqPJnEN64LCsPF
status: active
merged_into: null
display_name: 王臬
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kNP2rkatHAQFwog3Nku98L
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tUCAgJ82z2iGdC3ERuA6GD
          claim_id: c_kNP2rkatHAQFwog3Nku98L
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
          stance: supports
          locator: CBDB:34721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34721）
          source: &a1
            id: s_UHN7c8NuMtWnHbj7TRXFcr
            source_type: api_record
            title: 中国历代人物传记资料库：王臬（CBDB 34721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34721&o=json
            external_identifier: CBDB:34721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zdELpwhN7LYgzWHogdqaXm
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1477年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ehVM5MKRq9iAcgJujJfbDL
          claim_id: c_zdELpwhN7LYgzWHogdqaXm
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
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
        id: c_bRDA2vRrrSiQENvZ31inVY
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SsPZ9Fm7NoNKDDD1jD8pkt
          claim_id: c_bRDA2vRrrSiQENvZ31inVY
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
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
        id: c_ynBBB38gxovgLMJbSL2Fzw
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
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
        - id: cs_o1Ybjscx1AMMdzX4gABSC6
          claim_id: c_ynBBB38gxovgLMJbSL2Fzw
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
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
        id: c_mbUNz3v4PNphNu-c2PzKU-
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IlcNLngQk831OiBa81m3IM
          claim_id: c_mbUNz3v4PNphNu-c2PzKU-
          source_id: s_cZjZjRkhyrucvBPMXtGQHT
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cZjZjRkhyrucvBPMXtGQHT
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 279548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279548&o=json
            external_identifier: CBDB:279548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QN7EhCDtejfmZYbCTCBWyv
        status: active
        display_name: 王瀚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_5HJBqXucsLfejpoY2rSa2h
        subject_person_id: p_9HwAdJGnojFgrqfjKCEfL9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tbgtgIDRjNCcTM_kT6Yobq
          claim_id: c_5HJBqXucsLfejpoY2rSa2h
          source_id: s_1UDUD3D6FdAJiq4hTESMsb
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1UDUD3D6FdAJiq4hTESMsb
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 279546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279546&o=json
            external_identifier: CBDB:279546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9HwAdJGnojFgrqfjKCEfL9
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_CuWDoXc19ZvudGlQztTCE6
        subject_person_id: p_Mu6RFBp4T1u3QTCS8N1auf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zqEhNw_8Qk6VFbMtyLIWe_
          claim_id: c_CuWDoXc19ZvudGlQztTCE6
          source_id: s_qK1aPpaNE25WGMEArMaSTK
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qK1aPpaNE25WGMEArMaSTK
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 279547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279547&o=json
            external_identifier: CBDB:279547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Mu6RFBp4T1u3QTCS8N1auf
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_RXnnaCP1jotYsevS1ot94F
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FE6i55GXzPWLVER3EtdHfo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oH9k8Z3iQ-Bnlp_I3REJK_
          claim_id: c_RXnnaCP1jotYsevS1ot94F
          source_id: s_FjES678jDu1PEn5f7GLKsm
          stance: supports
          locator: 明詩紀事:一百八十七卷，辛籤卷三二：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FjES678jDu1PEn5f7GLKsm
            source_type: api_record
            title: 中国历代人物传记资料库：王彥泓（CBDB 120462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120462&o=json
            external_identifier: CBDB:120462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FE6i55GXzPWLVER3EtdHfo
        status: active
        display_name: 王彥泓
        merged_into_person_id: null
  other: []
---

# 王臬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臬 | accepted |
| birth.date | 1477年 | accepted |
| death.date | 1553年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QN7EhCDtejfmZYbCTCBWyv | 王瀚 | accepted |
| ancestors | p_9HwAdJGnojFgrqfjKCEfL9 | 王政 | accepted |
| ancestors | p_Mu6RFBp4T1u3QTCS8N1auf | 王鎮 | accepted |
| descendants | p_FE6i55GXzPWLVER3EtdHfo | 王彥泓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀚（CBDB 279548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279548&o=json)
- [中国历代人物传记资料库：王臬（CBDB 34721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34721&o=json)
- [中国历代人物传记资料库：王彥泓（CBDB 120462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120462&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 279547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279547&o=json)
- [中国历代人物传记资料库：王政（CBDB 279546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279546&o=json)

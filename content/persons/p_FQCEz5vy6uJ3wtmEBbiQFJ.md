---
schema: wang-person/v1
id: p_FQCEz5vy6uJ3wtmEBbiQFJ
status: active
merged_into: null
display_name: 王希旦
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u3CCg5FrjRcrB1R5D1aXfG
        subject_person_id: p_FQCEz5vy6uJ3wtmEBbiQFJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5sStgYHo5KcZVK572KBF4K
          claim_id: c_u3CCg5FrjRcrB1R5D1aXfG
          source_id: s_A74xpieLYUdMi4t46PwEp9
          stance: supports
          locator: CBDB:200627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200627）
          source: &a1
            id: s_A74xpieLYUdMi4t46PwEp9
            source_type: api_record
            title: 中国历代人物传记资料库：王希旦（CBDB 200627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200627&o=json
            external_identifier: CBDB:200627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3eCwd2h4w9iESHERtadvrX
        subject_person_id: p_FQCEz5vy6uJ3wtmEBbiQFJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1444年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tZeccyuA7sANuPrtZa1FLH
          claim_id: c_3eCwd2h4w9iESHERtadvrX
          source_id: s_A74xpieLYUdMi4t46PwEp9
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
        id: c_B4drkD3PTXrCMNV6h7U6AH
        subject_person_id: p_FQCEz5vy6uJ3wtmEBbiQFJ
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
        - id: cs_Qnj6yTD5VxF5YYxKczPUoF
          claim_id: c_B4drkD3PTXrCMNV6h7U6AH
          source_id: s_A74xpieLYUdMi4t46PwEp9
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
        id: c_PmtgW0oggDzIT9lerLoeXx
        subject_person_id: p_BXVMCk3TEgxQzDvmdzMdk1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FQCEz5vy6uJ3wtmEBbiQFJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zn8VSecQZWFmR4isw9Wti_
          claim_id: c_PmtgW0oggDzIT9lerLoeXx
          source_id: s_jFoED3mFQE9hyaunhtB1DQ
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百零八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jFoED3mFQE9hyaunhtB1DQ
            source_type: api_record
            title: 中国历代人物传记资料库：王伯珍（CBDB 260602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260602&o=json
            external_identifier: CBDB:260602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BXVMCk3TEgxQzDvmdzMdk1
        status: active
        display_name: 王伯珍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oxgh3Vqe5hFWSZUcY0-a4R
        subject_person_id: p_3EQDGhT3eH6JPKFmWzrJ7C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FQCEz5vy6uJ3wtmEBbiQFJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_csBBHrlpIn-RMhmV35Ro_p
          claim_id: c_oxgh3Vqe5hFWSZUcY0-a4R
          source_id: s_F3KhDQaLPRHkSTcRjcrSuz
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百零八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F3KhDQaLPRHkSTcRjcrSuz
            source_type: api_record
            title: 中国历代人物传记资料库：王思文（CBDB 260600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260600&o=json
            external_identifier: CBDB:260600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3EQDGhT3eH6JPKFmWzrJ7C
        status: active
        display_name: 王思文
        merged_into_person_id: null
    - claim:
        id: c_tQ_t6wsPMkc_H1oHEFW_ws
        subject_person_id: p_LARAt24oR926k4SE9Qqoz7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FQCEz5vy6uJ3wtmEBbiQFJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZwludlaaLKkvKF_6lBO5jr
          claim_id: c_tQ_t6wsPMkc_H1oHEFW_ws
          source_id: s_2WcWZBQBaoY9D95wm48iAn
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百零八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2WcWZBQBaoY9D95wm48iAn
            source_type: api_record
            title: 中国历代人物传记资料库：王諒（CBDB 260601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260601&o=json
            external_identifier: CBDB:260601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LARAt24oR926k4SE9Qqoz7
        status: active
        display_name: 王諒
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王希旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希旦 | accepted |
| birth.date | 1444年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BXVMCk3TEgxQzDvmdzMdk1 | 王伯珍 | accepted |
| ancestors | p_3EQDGhT3eH6JPKFmWzrJ7C | 王思文 | accepted |
| ancestors | p_LARAt24oR926k4SE9Qqoz7 | 王諒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯珍（CBDB 260602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260602&o=json)
- [中国历代人物传记资料库：王諒（CBDB 260601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260601&o=json)
- [中国历代人物传记资料库：王思文（CBDB 260600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260600&o=json)
- [中国历代人物传记资料库：王希旦（CBDB 200627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200627&o=json)

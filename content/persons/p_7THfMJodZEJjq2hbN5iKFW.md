---
schema: wang-person/v1
id: p_7THfMJodZEJjq2hbN5iKFW
status: active
merged_into: null
display_name: 王秩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wFNRAq7tkEZDkBWGqAa1G6
        subject_person_id: p_7THfMJodZEJjq2hbN5iKFW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q176PeKg1wC89yWnjViy4F
          claim_id: c_wFNRAq7tkEZDkBWGqAa1G6
          source_id: s_tHp2FnyoXei6ksmFF82P9Q
          stance: supports
          locator: CBDB:200588
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200588）
          source: &a1
            id: s_tHp2FnyoXei6ksmFF82P9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王秩（CBDB 200588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200588&o=json
            external_identifier: CBDB:200588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_civpaE5DRDSDjPWmsbycJ6
        subject_person_id: p_7THfMJodZEJjq2hbN5iKFW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xf6q722n8CwmGKMVbAsboy
          claim_id: c_civpaE5DRDSDjPWmsbycJ6
          source_id: s_tHp2FnyoXei6ksmFF82P9Q
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
        id: c_UDxM25BjZrZPoRMmrrNPw9
        subject_person_id: p_7THfMJodZEJjq2hbN5iKFW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秩（生于1460年），明人物。明清進士進士，籍贯崑山，入仕進士。（中国历代人物传记资料库 CBDB 200588）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kpus5myA4RYRKOXDY5m5Wa
          claim_id: c_UDxM25BjZrZPoRMmrrNPw9
          source_id: s_tHp2FnyoXei6ksmFF82P9Q
          stance: supports
          locator: CBDB:200588
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i1W2nh0h3BJksLSD7NyHak
        subject_person_id: p_t8KEZXxBW1dy3kvu8XnvuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7THfMJodZEJjq2hbN5iKFW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBaLhYRXNPay0NcLruQYtD
          claim_id: c_i1W2nh0h3BJksLSD7NyHak
          source_id: s_tHp2FnyoXei6ksmFF82P9Q
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t8KEZXxBW1dy3kvu8XnvuX
        status: active
        display_name: 王詁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_0HqfJz36KbEtU_-8eGHKFP
        subject_person_id: p_7THfMJodZEJjq2hbN5iKFW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Rk6UZPGzGNsjxcm4q78tiz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gzGB9SwBicph3Q-59SkyHj
          claim_id: c_0HqfJz36KbEtU_-8eGHKFP
          source_id: s_QBh1En54nsFwLGrITRbmOA
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QBh1En54nsFwLGrITRbmOA
            source_type: api_record
            title: 中国历代人物传记资料库：杭氏(王秩妻)（CBDB 260099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260099&o=json
            external_identifier: CBDB:260099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Rk6UZPGzGNsjxcm4q78tiz
        status: active
        display_name: 杭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_xBqVSJZ4O-r5ltFD2waRNT
        subject_person_id: p_bxxh23FAAimQ2ndoytUA4A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7THfMJodZEJjq2hbN5iKFW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bVoBqPJhEjM3C7Y3kVchoH
          claim_id: c_xBqVSJZ4O-r5ltFD2waRNT
          source_id: s_tHp2FnyoXei6ksmFF82P9Q
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bxxh23FAAimQ2ndoytUA4A
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_vY8TtNecw5FhhT5waWozdj
        subject_person_id: p_y1nD4szFzD4sTFzaJzYuTv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7THfMJodZEJjq2hbN5iKFW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qZ9W9GLJ9eXZI8dBgFUleI
          claim_id: c_vY8TtNecw5FhhT5waWozdj
          source_id: s_tHp2FnyoXei6ksmFF82P9Q
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y1nD4szFzD4sTFzaJzYuTv
        status: active
        display_name: 王玠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王秩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秩 | accepted |
| birth.date | 1460年 | accepted |
| bio.summary | 王秩（生于1460年），明人物。明清進士進士，籍贯崑山，入仕進士。（中国历代人物传记资料库 CBDB 200588） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t8KEZXxBW1dy3kvu8XnvuX | 王詁 | accepted |
| spouses | p_Rk6UZPGzGNsjxcm4q78tiz | 杭氏 | accepted |
| ancestors | p_bxxh23FAAimQ2ndoytUA4A | 王鼎 | accepted |
| ancestors | p_y1nD4szFzD4sTFzaJzYuTv | 王玠 | accepted |

## 外部来源

- [中国历代人物传记资料库：杭氏(王秩妻)（CBDB 260099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260099&o=json)
- [中国历代人物传记资料库：王秩（CBDB 200588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200588&o=json)

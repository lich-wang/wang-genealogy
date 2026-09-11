---
schema: wang-person/v1
id: p_8p8i7Z5DnFRpA5N3rwc9Uu
status: active
merged_into: null
display_name: 何氏
revision: 1
cbdb_id: 309078
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QGqGwVe15MXbUHO4jLocTS
        subject_person_id: p_8p8i7Z5DnFRpA5N3rwc9Uu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何氏，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 309078）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ydZA3A61IwVTJWOv-YP1JV
          claim_id: c_QGqGwVe15MXbUHO4jLocTS
          source_id: s_pTPMWo7IU3UPqK27qpyceS
          stance: supports
          locator: CBDB:309078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pTPMWo7IU3UPqK27qpyceS
            source_type: api_record
            title: 中国历代人物传记资料库：何氏(王有為妻)（CBDB 309078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309078&o=json
            external_identifier: CBDB:309078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xCMWvTQngkNy1oKsr1jd-b
        subject_person_id: p_8p8i7Z5DnFRpA5N3rwc9Uu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dHl5MT5P-CIDQvLNFVJ4gZ
          claim_id: c_xCMWvTQngkNy1oKsr1jd-b
          source_id: s_pTPMWo7IU3UPqK27qpyceS
          stance: supports
          locator: CBDB:309078
          quotation: null
          interpretation_note: CBDB 明确记录的王有為配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fo5vPbF2C8w5Bf8wq4149J
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8p8i7Z5DnFRpA5N3rwc9Uu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qHEwMSge3CPbuNpSXrMTYw
          claim_id: c_fo5vPbF2C8w5Bf8wq4149J
          source_id: s_pTPMWo7IU3UPqK27qpyceS
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_m1KPPjDFuB77sgosg8dB61
        status: active
        display_name: 王有為
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 何氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 何氏，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 309078） | accepted |
| name.primary | 何氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_m1KPPjDFuB77sgosg8dB61 | 王有為 | accepted |

## 外部来源

- [中国历代人物传记资料库：何氏(王有為妻)（CBDB 309078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309078&o=json)

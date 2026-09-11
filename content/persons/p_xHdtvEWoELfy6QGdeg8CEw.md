---
schema: wang-person/v1
id: p_xHdtvEWoELfy6QGdeg8CEw
status: active
merged_into: null
display_name: 錢氏
revision: 1
cbdb_id: 326702
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kh6iW2seHJ5BggGHC9nOel
        subject_person_id: p_xHdtvEWoELfy6QGdeg8CEw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 錢氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1OVZ3p4qStU-VmB7zD735P
          claim_id: c_Kh6iW2seHJ5BggGHC9nOel
          source_id: s_CIJjZW3Ubm-gg19hOnVGT3
          stance: supports
          locator: CBDB:326702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CIJjZW3Ubm-gg19hOnVGT3
            source_type: api_record
            title: 中国历代人物传记资料库：錢氏(王錫命妻)（CBDB 326702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326702&o=json
            external_identifier: CBDB:326702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFRSHeTDAS6fqfEdiUfloZ
        subject_person_id: p_xHdtvEWoELfy6QGdeg8CEw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 錢氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NQNFOAT5VZKbnEPfsV1Vxp
          claim_id: c_JFRSHeTDAS6fqfEdiUfloZ
          source_id: s_CIJjZW3Ubm-gg19hOnVGT3
          stance: supports
          locator: CBDB:326702
          quotation: null
          interpretation_note: CBDB 明确记录的王錫命配偶
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
        id: c_oIsRrZvlBAYGrfn5oC2__G
        subject_person_id: p_4A5DBME64j8hrumwV1y25Y
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xHdtvEWoELfy6QGdeg8CEw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wwuWFQNHyfo2L7QOR5rZDV
          claim_id: c_oIsRrZvlBAYGrfn5oC2__G
          source_id: s_CIJjZW3Ubm-gg19hOnVGT3
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第四十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4A5DBME64j8hrumwV1y25Y
        status: active
        display_name: 王錫命
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 錢氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 錢氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326702） | accepted |
| name.primary | 錢氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4A5DBME64j8hrumwV1y25Y | 王錫命 | accepted |

## 外部来源

- [中国历代人物传记资料库：錢氏(王錫命妻)（CBDB 326702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326702&o=json)

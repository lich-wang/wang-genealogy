---
schema: wang-person/v1
id: p_HHB6KiedwGSamtkhMrXAsL
status: active
merged_into: null
display_name: 陸氏
revision: 1
cbdb_id: 326387
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BPC6918qZa7zWVmK6mNssG
        subject_person_id: p_HHB6KiedwGSamtkhMrXAsL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陸氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326387）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kXvFLGd4_WqUXcbT5BzcuM
          claim_id: c_BPC6918qZa7zWVmK6mNssG
          source_id: s_we1r_dsuEGU-HX5FIBVXTV
          stance: supports
          locator: CBDB:326387
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_we1r_dsuEGU-HX5FIBVXTV
            source_type: api_record
            title: 中国历代人物传记资料库：陸氏(王宜妻)（CBDB 326387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326387&o=json
            external_identifier: CBDB:326387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8QNP_WEQ4g31qxF7XJFZPt
        subject_person_id: p_HHB6KiedwGSamtkhMrXAsL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陸氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nt-GTsMzaqOUTKXAt0Kk-M
          claim_id: c_8QNP_WEQ4g31qxF7XJFZPt
          source_id: s_we1r_dsuEGU-HX5FIBVXTV
          stance: supports
          locator: CBDB:326387
          quotation: null
          interpretation_note: CBDB 明确记录的王宜配偶
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
        id: c_5SkMpwr2oJKYykxvFu659-
        subject_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HHB6KiedwGSamtkhMrXAsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VR8mjpUYuahrJ0sO1d5cSN
          claim_id: c_5SkMpwr2oJKYykxvFu659-
          source_id: s_we1r_dsuEGU-HX5FIBVXTV
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zRoaCHSKLmhLA6JAg13u3d
        status: active
        display_name: 王宜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陸氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陸氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326387） | accepted |
| name.primary | 陸氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_zRoaCHSKLmhLA6JAg13u3d | 王宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：陸氏(王宜妻)（CBDB 326387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326387&o=json)

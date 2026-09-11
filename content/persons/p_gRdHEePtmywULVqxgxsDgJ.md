---
schema: wang-person/v1
id: p_gRdHEePtmywULVqxgxsDgJ
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 5138
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XKdWOK8X9YAwlsiOJDZoAD
        subject_person_id: p_gRdHEePtmywULVqxgxsDgJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dhbvnGrt_-6jx9bQ0ifm4n
          claim_id: c_XKdWOK8X9YAwlsiOJDZoAD
          source_id: s_hU7LQ4-q4rlAp0Iok0gpg4
          stance: supports
          locator: CBDB:5138
          quotation: null
          interpretation_note: CBDB 明确记录的王師約配偶
          source: &a1
            id: s_hU7LQ4-q4rlAp0Iok0gpg4
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王師約妻)（CBDB 5138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5138&o=json
            external_identifier: CBDB:5138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_WW4Gtp4QHQ7TCKIRQApqGg
        subject_person_id: p_goJF8MJfNWY7M84o4rFghT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gRdHEePtmywULVqxgxsDgJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qthBiE6lbk0bkQ79XJmqT7
          claim_id: c_WW4Gtp4QHQ7TCKIRQApqGg
          source_id: s_hU7LQ4-q4rlAp0Iok0gpg4
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1849;1850：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_goJF8MJfNWY7M84o4rFghT
        status: active
        display_name: 王師約
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_goJF8MJfNWY7M84o4rFghT | 王師約 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王師約妻)（CBDB 5138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5138&o=json)

---
schema: wang-person/v1
id: p_YRvo9CuK73QtGtepmbJ4Hh
status: active
merged_into: null
display_name: 顧玉英
revision: 1
cbdb_id: 121967
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xOya45RzstlOShWK908tUM
        subject_person_id: p_YRvo9CuK73QtGtepmbJ4Hh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 顧玉英
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Efjt7_MTChUZH3u2iK7iGz
          claim_id: c_xOya45RzstlOShWK908tUM
          source_id: s_oaJJ74k5wtR5jzS8MMNz0G
          stance: supports
          locator: CBDB:121967
          quotation: null
          interpretation_note: CBDB 明确记录的王醴泉配偶
          source: &a1
            id: s_oaJJ74k5wtR5jzS8MMNz0G
            source_type: api_record
            title: 中国历代人物传记资料库：顧玉英（CBDB 121967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121967&o=json
            external_identifier: CBDB:121967
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
        id: c_Ua29w3WBRSLaSCz_PjXHGi
        subject_person_id: p_JJAMHktHVsNh4PdjuG5NDs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YRvo9CuK73QtGtepmbJ4Hh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5dwoMgv5Gx6Ssajl5WjQHZ
          claim_id: c_Ua29w3WBRSLaSCz_PjXHGi
          source_id: s_oaJJ74k5wtR5jzS8MMNz0G
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4359, HuWenKai #801：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JJAMHktHVsNh4PdjuG5NDs
        status: active
        display_name: 王醴泉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 顧玉英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 顧玉英 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_JJAMHktHVsNh4PdjuG5NDs | 王醴泉 | accepted |

## 外部来源

- [中国历代人物传记资料库：顧玉英（CBDB 121967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121967&o=json)

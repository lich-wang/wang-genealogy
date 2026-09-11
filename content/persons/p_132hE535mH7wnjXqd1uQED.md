---
schema: wang-person/v1
id: p_132hE535mH7wnjXqd1uQED
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 277150
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D2NwCSF4msYqIm4DmFsZp1
        subject_person_id: p_132hE535mH7wnjXqd1uQED
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3r0hU1opLSi0umwvVx9NAI
          claim_id: c_D2NwCSF4msYqIm4DmFsZp1
          source_id: s_Na2tGSSgbugeO99xbnk7Yr
          stance: supports
          locator: CBDB:277150
          quotation: null
          interpretation_note: CBDB 明确记录的王璽配偶
          source: &a1
            id: s_Na2tGSSgbugeO99xbnk7Yr
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王璽妻)（CBDB 277150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277150&o=json
            external_identifier: CBDB:277150
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
        id: c_29Z2xeqFsGB5MeUvJl3tzh
        subject_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_132hE535mH7wnjXqd1uQED
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YoOq3I1WwLGuuNmPL-KEUH
          claim_id: c_29Z2xeqFsGB5MeUvJl3tzh
          source_id: s_Na2tGSSgbugeO99xbnk7Yr
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D2oNcSP9ujVXCgNLvsNQq7
        status: active
        display_name: 王璽
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_D2oNcSP9ujVXCgNLvsNQq7 | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王璽妻)（CBDB 277150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277150&o=json)

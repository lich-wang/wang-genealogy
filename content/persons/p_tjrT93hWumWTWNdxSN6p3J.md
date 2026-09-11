---
schema: wang-person/v1
id: p_tjrT93hWumWTWNdxSN6p3J
status: active
merged_into: null
display_name: 史氏
revision: 1
cbdb_id: 309763
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S42GCWOF9GD4NnX1nny_-m
        subject_person_id: p_tjrT93hWumWTWNdxSN6p3J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 史氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l7L7DucYEFFbzR8UBndhgv
          claim_id: c_S42GCWOF9GD4NnX1nny_-m
          source_id: s_U4nB63N6M_7RgO3_VMms1X
          stance: supports
          locator: CBDB:309763
          quotation: null
          interpretation_note: CBDB 明确记录的王尚禮配偶
          source: &a1
            id: s_U4nB63N6M_7RgO3_VMms1X
            source_type: api_record
            title: 中国历代人物传记资料库：史氏(王尚禮妻)（CBDB 309763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309763&o=json
            external_identifier: CBDB:309763
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
        id: c_oGO5cQ__JXq2JY8cKfLAAr
        subject_person_id: p_CLVogrJsobqnPvkSGHQ8V4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_tjrT93hWumWTWNdxSN6p3J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5S-5sQnKZgIe-F4R8f-v8
          claim_id: c_oGO5cQ__JXq2JY8cKfLAAr
          source_id: s_U4nB63N6M_7RgO3_VMms1X
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第二十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CLVogrJsobqnPvkSGHQ8V4
        status: active
        display_name: 王尚禮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 史氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 史氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CLVogrJsobqnPvkSGHQ8V4 | 王尚禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：史氏(王尚禮妻)（CBDB 309763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309763&o=json)

---
schema: wang-person/v1
id: p_ToupUjJL68ruwfuGBFLp2R
status: active
merged_into: null
display_name: 蘇敏
revision: 1
cbdb_id: 123378
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8T5jRT3qqZqqmJeiN97A4j
        subject_person_id: p_ToupUjJL68ruwfuGBFLp2R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蘇敏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UfERMiuLn0HBiEMrH91pXM
          claim_id: c_8T5jRT3qqZqqmJeiN97A4j
          source_id: s_DU71a-qLCC2KGoLEKqE_LA
          stance: supports
          locator: CBDB:123378
          quotation: null
          interpretation_note: CBDB 明确记录的王琰配偶
          source: &a1
            id: s_DU71a-qLCC2KGoLEKqE_LA
            source_type: api_record
            title: 中国历代人物传记资料库：蘇敏（CBDB 123378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123378&o=json
            external_identifier: CBDB:123378
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
        id: c_TQaCdpKPTj1Oa6Qz9mFqFB
        subject_person_id: p_QFDDtWcAnS5HdHiHH9q3dC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ToupUjJL68ruwfuGBFLp2R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fvYbLl8iBwzIpXG1v0trJh
          claim_id: c_TQaCdpKPTj1Oa6Qz9mFqFB
          source_id: s_DU71a-qLCC2KGoLEKqE_LA
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #517：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QFDDtWcAnS5HdHiHH9q3dC
        status: active
        display_name: 王琰
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蘇敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 蘇敏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_QFDDtWcAnS5HdHiHH9q3dC | 王琰 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇敏（CBDB 123378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123378&o=json)

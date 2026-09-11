---
schema: wang-person/v1
id: p_3zqRTvVoZ83XX9ehuTK1mN
status: active
merged_into: null
display_name: 王義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gMDBAi92k77KRoQWUcZmee
        subject_person_id: p_3zqRTvVoZ83XX9ehuTK1mN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zQSq2m5dWH5P67SxeWwhD7
          claim_id: c_gMDBAi92k77KRoQWUcZmee
          source_id: s_Z94KJsSnydiTNsUSx3jM4Z
          stance: supports
          locator: CBDB:253904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253904）
          source: &a1
            id: s_Z94KJsSnydiTNsUSx3jM4Z
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 253904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253904&o=json
            external_identifier: CBDB:253904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G5fojjht8zxBbgg58VvFyQ
        subject_person_id: p_3zqRTvVoZ83XX9ehuTK1mN
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
        - id: cs_QasghpZoifrbgTtYPVWq2u
          claim_id: c_G5fojjht8zxBbgg58VvFyQ
          source_id: s_Z94KJsSnydiTNsUSx3jM4Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3UX0TgTh4cWiOWFsaBibaO
        subject_person_id: p_3zqRTvVoZ83XX9ehuTK1mN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jhuKt2zDV_NwtsCFjTd6PU
          claim_id: c_3UX0TgTh4cWiOWFsaBibaO
          source_id: s_swTACms8KFk1ksLaDU531V
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第二百三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_swTACms8KFk1ksLaDU531V
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 67292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67292&o=json
            external_identifier: CBDB:67292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2yQZFqgpXJgeoQtn7WfsC5
        status: active
        display_name: 王佐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2yQZFqgpXJgeoQtn7WfsC5 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 253904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253904&o=json)
- [中国历代人物传记资料库：王佐（CBDB 67292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67292&o=json)

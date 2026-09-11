---
schema: wang-person/v1
id: p_4645iYbkHLJUi3dawpW4di
status: active
merged_into: null
display_name: 王福榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_htrfvyhQ6dNijcvRtRreQt
        subject_person_id: p_4645iYbkHLJUi3dawpW4di
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8YRQtitzp5LizpJQzDTn7a
          claim_id: c_htrfvyhQ6dNijcvRtRreQt
          source_id: s_1LyCf7jNLC7S7J7X2aUjtf
          stance: supports
          locator: CBDB:272830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272830）
          source: &a1
            id: s_1LyCf7jNLC7S7J7X2aUjtf
            source_type: api_record
            title: 中国历代人物传记资料库：王福榮（CBDB 272830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272830&o=json
            external_identifier: CBDB:272830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NEh9gd9WDu89C6jg81uFbW
        subject_person_id: p_4645iYbkHLJUi3dawpW4di
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
        - id: cs_Yyi9LXs5TirYfGaDcDr6xQ
          claim_id: c_NEh9gd9WDu89C6jg81uFbW
          source_id: s_1LyCf7jNLC7S7J7X2aUjtf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_mSOZcg3QbsGpyAsbmWGeib
        subject_person_id: p_4645iYbkHLJUi3dawpW4di
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WF551B42q65ujmx95gTJGt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9yCRMtHyDU3x2bOQs7svjp
          claim_id: c_mSOZcg3QbsGpyAsbmWGeib
          source_id: s_1LyCf7jNLC7S7J7X2aUjtf
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WF551B42q65ujmx95gTJGt
        status: active
        display_name: 王綖
        merged_into_person_id: null
  other: []
---

# 王福榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福榮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WF551B42q65ujmx95gTJGt | 王綖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福榮（CBDB 272830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272830&o=json)

---
schema: wang-person/v1
id: p_djPzJATqP8N3fAgZuiGdme
status: active
merged_into: null
display_name: 王琥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gKXYTMEfWy1359vGaS27r6
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8CRpHGA5VEuoxZ5bDjctTE
          claim_id: c_gKXYTMEfWy1359vGaS27r6
          source_id: s_VF36nge6KQN5v437W8CR1Z
          stance: supports
          locator: CBDB:300354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300354）
          source: &a1
            id: s_VF36nge6KQN5v437W8CR1Z
            source_type: api_record
            title: 中国历代人物传记资料库：王琥（CBDB 300354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300354&o=json
            external_identifier: CBDB:300354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t1aGC365c3uMaf6pWvm6V2
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
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
        - id: cs_oviUMcdc5FZbQ7J8Z9C812
          claim_id: c_t1aGC365c3uMaf6pWvm6V2
          source_id: s_VF36nge6KQN5v437W8CR1Z
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
        id: c__rQgbjFd8gbRnF4kpoeRE4
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U_BaWOxyl630bmI3nZJADM
          claim_id: c__rQgbjFd8gbRnF4kpoeRE4
          source_id: s_VF36nge6KQN5v437W8CR1Z
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PBPvLNJEK4jPNCWDSKfDp5
        status: active
        display_name: 王春復
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PBPvLNJEK4jPNCWDSKfDp5 | 王春復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琥（CBDB 300354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300354&o=json)

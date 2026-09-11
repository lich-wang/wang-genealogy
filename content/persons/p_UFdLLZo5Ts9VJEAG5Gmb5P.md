---
schema: wang-person/v1
id: p_UFdLLZo5Ts9VJEAG5Gmb5P
status: active
merged_into: null
display_name: 王鉞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9K9J8tkJWHVKP3yUofCPsJ
        subject_person_id: p_UFdLLZo5Ts9VJEAG5Gmb5P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_25pg5BeKLJmUR7tg67yMdb
          claim_id: c_9K9J8tkJWHVKP3yUofCPsJ
          source_id: s_4epBjMKyzTryQnLnaFpsAJ
          stance: supports
          locator: CBDB:254946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254946）
          source: &a1
            id: s_4epBjMKyzTryQnLnaFpsAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 254946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254946&o=json
            external_identifier: CBDB:254946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.327Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q1nwaHpWX3G6yz4m3V2iam
        subject_person_id: p_UFdLLZo5Ts9VJEAG5Gmb5P
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
        - id: cs_RkCxxfrTEcaWizbHnvjNod
          claim_id: c_q1nwaHpWX3G6yz4m3V2iam
          source_id: s_4epBjMKyzTryQnLnaFpsAJ
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
        id: c_XNqPZjWuCljXZZ9NBvpUZO
        subject_person_id: p_UFdLLZo5Ts9VJEAG5Gmb5P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vdSUpoDlXsIX2A0uoYcoId
          claim_id: c_XNqPZjWuCljXZZ9NBvpUZO
          source_id: s_D8dDpacficMiYsJ44XxbBo
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第二十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D8dDpacficMiYsJ44XxbBo
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 200214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200214&o=json
            external_identifier: CBDB:200214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G8UB9fUGo95gK5v77Cu4Q6
        status: active
        display_name: 王機
        merged_into_person_id: null
  other: []
---

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_G8UB9fUGo95gK5v77Cu4Q6 | 王機 | accepted |

## 外部来源

- [中国历代人物传记资料库：王機（CBDB 200214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200214&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 254946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254946&o=json)

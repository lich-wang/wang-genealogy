---
schema: wang-person/v1
id: p_1C6bHqL5Hn8xvnbvNPpqXn
status: active
merged_into: null
display_name: 王崳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4pVd7dHU28ULk4NWsM5xEQ
        subject_person_id: p_1C6bHqL5Hn8xvnbvNPpqXn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U8MWJ399WELD4rL99oEC1J
          claim_id: c_4pVd7dHU28ULk4NWsM5xEQ
          source_id: s_t5UmGN76eR9NhFE4ekm3vS
          stance: supports
          locator: CBDB:637363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637363）
          source: &a1
            id: s_t5UmGN76eR9NhFE4ekm3vS
            source_type: api_record
            title: 中国历代人物传记资料库：王崳（CBDB 637363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637363&o=json
            external_identifier: CBDB:637363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vMobWnYCHDBLvtReRoCV9T
        subject_person_id: p_1C6bHqL5Hn8xvnbvNPpqXn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XQr36mLNEW3gEjQRwNVUAP
          claim_id: c_vMobWnYCHDBLvtReRoCV9T
          source_id: s_t5UmGN76eR9NhFE4ekm3vS
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
  descendants: []
  other: []
---

# 王崳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崳（CBDB 637363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637363&o=json)

---
schema: wang-person/v1
id: p_eTRLQJg6viP8NBivGDaNPo
status: active
merged_into: null
display_name: 王用
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7MRQZJCwh6Y1F4CMwQM9j8
        subject_person_id: p_eTRLQJg6viP8NBivGDaNPo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dNCpCsq4YNd1J4hNv89K3E
          claim_id: c_7MRQZJCwh6Y1F4CMwQM9j8
          source_id: s_6dY63wXAYRsBKbXMe9acbE
          stance: supports
          locator: CBDB:333524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333524）
          source: &a1
            id: s_6dY63wXAYRsBKbXMe9acbE
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 333524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333524&o=json
            external_identifier: CBDB:333524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p5SaKuqaaSGP5UDWcQk6Xb
        subject_person_id: p_eTRLQJg6viP8NBivGDaNPo
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
        - id: cs_a25eoBhcNMr2sBp5R9Ex6i
          claim_id: c_p5SaKuqaaSGP5UDWcQk6Xb
          source_id: s_6dY63wXAYRsBKbXMe9acbE
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
        id: c_uIiN07pXJzhJrrqT4-r88I
        subject_person_id: p_eTRLQJg6viP8NBivGDaNPo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wFLoh_Ez9zBc2rsYV8JBfn
          claim_id: c_uIiN07pXJzhJrrqT4-r88I
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ojc1Nx2sKvUhzNK6QBShJA
            source_type: api_record
            title: 中国历代人物传记资料库：王一治（CBDB 205461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205461&o=json
            external_identifier: CBDB:205461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C9cGcDit6NRvdLZ3oy6Mbe
        status: active
        display_name: 王一治
        merged_into_person_id: null
  other: []
---

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_C9cGcDit6NRvdLZ3oy6Mbe | 王一治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一治（CBDB 205461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205461&o=json)
- [中国历代人物传记资料库：王用（CBDB 333524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333524&o=json)

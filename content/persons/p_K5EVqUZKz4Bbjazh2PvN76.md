---
schema: wang-person/v1
id: p_K5EVqUZKz4Bbjazh2PvN76
status: active
merged_into: null
display_name: 王筠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rVJKrsVMAMFTqqsaFU4Duo
        subject_person_id: p_K5EVqUZKz4Bbjazh2PvN76
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J6fJVAt1kzJBEgsp1CknEP
          claim_id: c_rVJKrsVMAMFTqqsaFU4Duo
          source_id: s_P3T2Z3AG5uzMaoZtLQKAFr
          stance: supports
          locator: CBDB:100872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100872）
          source: &a1
            id: s_P3T2Z3AG5uzMaoZtLQKAFr
            source_type: api_record
            title: 中国历代人物传记资料库：王筠（CBDB 100872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100872&o=json
            external_identifier: CBDB:100872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sJtzf1FVe8ZKhGi7XgE4vK
        subject_person_id: p_K5EVqUZKz4Bbjazh2PvN76
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y2C5MTK3EG79waSTNrm9RP
          claim_id: c_sJtzf1FVe8ZKhGi7XgE4vK
          source_id: s_P3T2Z3AG5uzMaoZtLQKAFr
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

# 王筠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筠 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王筠（CBDB 100872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100872&o=json)

---
schema: wang-person/v1
id: p_JmRrnSkxhs34xmMBgfdfLA
status: active
merged_into: null
display_name: 王定
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PqnJxu7fZJrvRNgCMMSFx2
        subject_person_id: p_JmRrnSkxhs34xmMBgfdfLA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zUkDXYwckaj32PP4Abayht
          claim_id: c_PqnJxu7fZJrvRNgCMMSFx2
          source_id: s_PRAvYYPNBPkijgLYr5ivTQ
          stance: supports
          locator: CBDB:262295
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262295）
          source: &a1
            id: s_PRAvYYPNBPkijgLYr5ivTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 262295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262295&o=json
            external_identifier: CBDB:262295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KCJGUoCvncRL4fdd2xwZcS
        subject_person_id: p_JmRrnSkxhs34xmMBgfdfLA
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
        - id: cs_MjEHe5REj1BDAzCx4xR7K5
          claim_id: c_KCJGUoCvncRL4fdd2xwZcS
          source_id: s_PRAvYYPNBPkijgLYr5ivTQ
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

# 王定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 262295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262295&o=json)

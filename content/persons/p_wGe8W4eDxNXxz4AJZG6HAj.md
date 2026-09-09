---
schema: wang-person/v1
id: p_wGe8W4eDxNXxz4AJZG6HAj
status: active
merged_into: null
display_name: 王恆清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZJX9j2qVCAJ799x5M1G6bB
        subject_person_id: p_wGe8W4eDxNXxz4AJZG6HAj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4DgvDZ3H2mM8H85F2zvGS1
          claim_id: c_ZJX9j2qVCAJ799x5M1G6bB
          source_id: s_d6N33FqRcn8LQJJuTgs1Bo
          stance: supports
          locator: CBDB:191586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191586）
          source: &a1
            id: s_d6N33FqRcn8LQJJuTgs1Bo
            source_type: api_record
            title: 中国历代人物传记资料库：王恆清（CBDB 191586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191586&o=json
            external_identifier: CBDB:191586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_J427cXetzDsCKuKCUtCGw1
        subject_person_id: p_wGe8W4eDxNXxz4AJZG6HAj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 829年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KiHsiYrp3x5Sn5sxJnwsgM
          claim_id: c_J427cXetzDsCKuKCUtCGw1
          source_id: s_d6N33FqRcn8LQJJuTgs1Bo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DScmVQ65yt5Ns3K9LpjP4A
        subject_person_id: p_wGe8W4eDxNXxz4AJZG6HAj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E2rP3KQ9RSRQtCKKEwAkpz
          claim_id: c_DScmVQ65yt5Ns3K9LpjP4A
          source_id: s_d6N33FqRcn8LQJJuTgs1Bo
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

# 王恆清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆清 | accepted |
| death.date | 829年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恆清（CBDB 191586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191586&o=json)

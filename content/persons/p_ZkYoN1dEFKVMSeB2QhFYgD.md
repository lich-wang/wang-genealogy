---
schema: wang-person/v1
id: p_ZkYoN1dEFKVMSeB2QhFYgD
status: active
merged_into: null
display_name: 王潔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fc7C2HN7pFqWdUQptLcNXh
        subject_person_id: p_ZkYoN1dEFKVMSeB2QhFYgD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oE1rUS6DJ3TYQKeHBZVoWb
          claim_id: c_Fc7C2HN7pFqWdUQptLcNXh
          source_id: s_ovKPUoWSN7YxgDQBKss2dJ
          stance: supports
          locator: CBDB:175892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175892）
          source: &a1
            id: s_ovKPUoWSN7YxgDQBKss2dJ
            source_type: api_record
            title: 中国历代人物传记资料库：王潔（CBDB 175892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175892&o=json
            external_identifier: CBDB:175892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_M2N5QACmKdK2pAuRMDCFFm
        subject_person_id: p_ZkYoN1dEFKVMSeB2QhFYgD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 835年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vK19G92ETkqMgRt1a7pcC4
          claim_id: c_M2N5QACmKdK2pAuRMDCFFm
          source_id: s_ovKPUoWSN7YxgDQBKss2dJ
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
        id: c_4BCCyyNN8KKKarPKF3kNbN
        subject_person_id: p_ZkYoN1dEFKVMSeB2QhFYgD
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
        - id: cs_DDfj3R6omMLt5GLPh3d18W
          claim_id: c_4BCCyyNN8KKKarPKF3kNbN
          source_id: s_ovKPUoWSN7YxgDQBKss2dJ
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

# 王潔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潔 | accepted |
| death.date | 835年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潔（CBDB 175892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175892&o=json)

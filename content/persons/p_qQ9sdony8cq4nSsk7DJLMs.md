---
schema: wang-person/v1
id: p_qQ9sdony8cq4nSsk7DJLMs
status: active
merged_into: null
display_name: 王寬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J5azZHSUNpvWRBS19vconV
        subject_person_id: p_qQ9sdony8cq4nSsk7DJLMs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i3CdRqha6v3LXzfvBMRMAG
          claim_id: c_J5azZHSUNpvWRBS19vconV
          source_id: s_rjTYdrZGB3zJ2BX5292zeC
          stance: supports
          locator: CBDB:342498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342498）
          source: &a1
            id: s_rjTYdrZGB3zJ2BX5292zeC
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 342498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342498&o=json
            external_identifier: CBDB:342498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_65SiRPfmXT75tUCwC9E8hJ
        subject_person_id: p_qQ9sdony8cq4nSsk7DJLMs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬，清人物。明清進士進士，籍贯金匱，入仕進士，曾任兵部郎中、兵部主事、同考官。（中国历代人物传记资料库 CBDB 342498）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hnd_SK2YMIQNBYtG5bE84Y
          claim_id: c_65SiRPfmXT75tUCwC9E8hJ
          source_id: s_rjTYdrZGB3zJ2BX5292zeC
          stance: supports
          locator: CBDB:342498
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | 王寬，清人物。明清進士進士，籍贯金匱，入仕進士，曾任兵部郎中、兵部主事、同考官。（中国历代人物传记资料库 CBDB 342498） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 342498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342498&o=json)

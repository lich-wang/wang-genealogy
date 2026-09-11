---
schema: wang-person/v1
id: p_VZ94VmBy4HTJMnB25EyR6H
status: active
merged_into: null
display_name: 王某某
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HR1pDD25kBJZKEiJCgmfVM
        subject_person_id: p_VZ94VmBy4HTJMnB25EyR6H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p1xNb6wkeZ1cHRuKKUCzWW
          claim_id: c_HR1pDD25kBJZKEiJCgmfVM
          source_id: s_Q7oc3WNuWjCQ55pi787oqu
          stance: supports
          locator: CBDB:456676
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456676）
          source: &a1
            id: s_Q7oc3WNuWjCQ55pi787oqu
            source_type: api_record
            title: 中国历代人物传记资料库：王某某（CBDB 456676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456676&o=json
            external_identifier: CBDB:456676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ujdff2jCFYpKWBVUguFv3b
        subject_person_id: p_VZ94VmBy4HTJMnB25EyR6H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王某某，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任學正。（中国历代人物传记资料库 CBDB 456676）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FgoXC-oW5YOMa7f7nXRD0B
          claim_id: c_Ujdff2jCFYpKWBVUguFv3b
          source_id: s_Q7oc3WNuWjCQ55pi787oqu
          stance: supports
          locator: CBDB:456676
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

# 王某某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王某某 | accepted |
| bio.summary | 王某某，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任學正。（中国历代人物传记资料库 CBDB 456676） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王某某（CBDB 456676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456676&o=json)

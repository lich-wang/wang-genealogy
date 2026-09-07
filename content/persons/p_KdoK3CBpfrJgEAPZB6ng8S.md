---
schema: wang-person/v1
id: p_KdoK3CBpfrJgEAPZB6ng8S
status: active
merged_into: null
display_name: 王微
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CedehcnFZ4N-IS-ppgM85y
        subject_person_id: p_KdoK3CBpfrJgEAPZB6ng8S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王微（415年—453年），字景玄，琅邪臨沂（今山東臨沂）人。南朝宋官員，太保王弘弟王孺之子。王微為人多才多藝，但不喜為官，父親死後就屢辭除授。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GHZVcjkUG4XH0PEd2HrWM4
          claim_id: c_CedehcnFZ4N-IS-ppgM85y
          source_id: s_H6ckSqhCWBtg29oWyzKaf9
          stance: supports
          locator: 导言
          quotation: 王微（415年—453年），字景玄，琅邪臨沂（今山東臨沂）人。南
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_H6ckSqhCWBtg29oWyzKaf9
            source_type: website
            title: 中文维基百科：王微 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%AE_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.310Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_495WRBrdB3AvPQWnWvu8hP
        subject_person_id: p_KdoK3CBpfrJgEAPZB6ng8S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王微
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_McXCS5nD92EdaMCyCsnePe
          claim_id: c_495WRBrdB3AvPQWnWvu8hP
          source_id: s_H6ckSqhCWBtg29oWyzKaf9
          stance: supports
          locator: Q24838650
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MQw83LptYjmi96cuP9okDP
        subject_person_id: p_vetuNuuMyLXipWD875EFwE
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_KdoK3CBpfrJgEAPZB6ng8S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eWv2sg57HmeAwyzV5tF6FD
          claim_id: c_MQw83LptYjmi96cuP9okDP
          source_id: s_H6ckSqhCWBtg29oWyzKaf9
          stance: supports
          locator: 条文：之子/之女
          quotation: 南朝宋官員，太保王弘弟王孺之子
          interpretation_note: null
          source:
            id: s_H6ckSqhCWBtg29oWyzKaf9
            source_type: website
            title: 中文维基百科：王微 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%AE_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.310Z
            metadata_json: null
      object_person:
        id: p_vetuNuuMyLXipWD875EFwE
        status: active
        display_name: 王孺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王微

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王微（415年—453年），字景玄，琅邪臨沂（今山東臨沂）人。南朝宋官員，太保王弘弟王孺之子。王微為人多才多藝，但不喜為官，父親死後就屢辭除授。 | accepted |
| name.primary | 王微 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vetuNuuMyLXipWD875EFwE | 王孺 | accepted |

## 外部来源

- [中文维基百科：王微 (刘宋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%AE_(%E5%88%98%E5%AE%8B))

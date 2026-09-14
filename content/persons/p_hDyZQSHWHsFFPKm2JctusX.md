---
schema: wang-person/v1
id: p_hDyZQSHWHsFFPKm2JctusX
status: active
merged_into: null
display_name: 王恩光
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_czuuiXQjEhXx9mTBXwaKu4
        subject_person_id: p_hDyZQSHWHsFFPKm2JctusX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D4UiHFRo6BjLjoaCbLLHXt
          claim_id: c_czuuiXQjEhXx9mTBXwaKu4
          source_id: s_2bkF7FDHp4gr66SrehEoP2
          stance: supports
          locator: CBDB:302576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302576）
          source: &a1
            id: s_2bkF7FDHp4gr66SrehEoP2
            source_type: api_record
            title: 中国历代人物传记资料库：王恩光（CBDB 302576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302576&o=json
            external_identifier: CBDB:302576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jwS5VvEUHXo93d2FuUDUpn
        subject_person_id: p_hDyZQSHWHsFFPKm2JctusX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩光，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 302576）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4ApqUp-q4BvsRUIa2Jipcu
          claim_id: c_jwS5VvEUHXo93d2FuUDUpn
          source_id: s_2bkF7FDHp4gr66SrehEoP2
          stance: supports
          locator: CBDB:302576
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ULaJrG3WlPBTStjYpcIr7F
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_hDyZQSHWHsFFPKm2JctusX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iu3cqLnWSk7S6fbsgQoCuF
          claim_id: c_ULaJrG3WlPBTStjYpcIr7F
          source_id: s_Ic4H41V8EoY7NeRY5Hg9ae
          stance: supports
          locator: CBDB：兄弟 王重光（126622）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王恩光 与 王重光 为同胞（CBDB 记「兄」），王重光 之父／母即 王恩光 之父／母。
          source:
            id: s_Ic4H41V8EoY7NeRY5Hg9ae
            source_type: api_record
            title: 中国历代人物传记资料库：王恩光（CBDB 302576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302576&o=json
            external_identifier: CBDB:302576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dFBcsKbnFVcHN4YTvXeRwY
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_scBBqDDuj0eUhPF5vQxWoq
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hDyZQSHWHsFFPKm2JctusX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJNmuYyz6VkO4_XORM58ug
          claim_id: c_scBBqDDuj0eUhPF5vQxWoq
          source_id: s_Ic4H41V8EoY7NeRY5Hg9ae
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126622 王重光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ic4H41V8EoY7NeRY5Hg9ae
            source_type: api_record
            title: 中国历代人物传记资料库：王恩光（CBDB 302576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302576&o=json
            external_identifier: CBDB:302576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
---

# 王恩光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩光 | accepted |
| bio.summary | 王恩光，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 302576） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dFBcsKbnFVcHN4YTvXeRwY | 王麟 | accepted |
| other | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩光（CBDB 302576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302576&o=json)

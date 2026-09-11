---
schema: wang-person/v1
id: p_8efdvjdiWnc8B9CDk5BQwe
status: active
merged_into: null
display_name: 王益桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZSrmp9ga6j4S8JX51Cvke8
        subject_person_id: p_8efdvjdiWnc8B9CDk5BQwe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KqvhsbDsdGuiyHbFwm7TDh
          claim_id: c_ZSrmp9ga6j4S8JX51Cvke8
          source_id: s_Pg745sVQfQHUEHJXhVGAvJ
          stance: supports
          locator: CBDB:639528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639528）
          source: &a1
            id: s_Pg745sVQfQHUEHJXhVGAvJ
            source_type: api_record
            title: 中国历代人物传记资料库：王益桂（CBDB 639528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639528&o=json
            external_identifier: CBDB:639528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7YmvREsBSQuRQXqCCMtByD
        subject_person_id: p_8efdvjdiWnc8B9CDk5BQwe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益桂，清人物。籍贯廣東省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 639528）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L87ZbOzJsvRmpoeonDI_gG
          claim_id: c_7YmvREsBSQuRQXqCCMtByD
          source_id: s_Pg745sVQfQHUEHJXhVGAvJ
          stance: supports
          locator: CBDB:639528
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

# 王益桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益桂 | accepted |
| bio.summary | 王益桂，清人物。籍贯廣東省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 639528） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益桂（CBDB 639528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639528&o=json)

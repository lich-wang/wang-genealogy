---
schema: wang-person/v1
id: p_TU9kFZE4xkxtFW6pdmGNQe
status: active
merged_into: null
display_name: 王蓮社
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ax7zQB946qhFiGy4YD7H23
        subject_person_id: p_TU9kFZE4xkxtFW6pdmGNQe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓮社
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KAm4C1V8qKQyG7XY7yd5UA
          claim_id: c_ax7zQB946qhFiGy4YD7H23
          source_id: s_ASeZoMbtPUL23s2uwV1Yei
          stance: supports
          locator: CBDB:640149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640149）
          source: &a1
            id: s_ASeZoMbtPUL23s2uwV1Yei
            source_type: api_record
            title: 中国历代人物传记资料库：王蓮社（CBDB 640149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640149&o=json
            external_identifier: CBDB:640149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LvyUdQqmEig5LvWxqXGENK
        subject_person_id: p_TU9kFZE4xkxtFW6pdmGNQe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王蓮社，清人物。籍贯柘城，入仕學校: 生員(庠生)，曾任縣丞。（中国历代人物传记资料库 CBDB 640149）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xy-qR_EvaQVxeRIlVieBIm
          claim_id: c_LvyUdQqmEig5LvWxqXGENK
          source_id: s_ASeZoMbtPUL23s2uwV1Yei
          stance: supports
          locator: CBDB:640149
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

# 王蓮社

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蓮社 | accepted |
| bio.summary | 王蓮社，清人物。籍贯柘城，入仕學校: 生員(庠生)，曾任縣丞。（中国历代人物传记资料库 CBDB 640149） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蓮社（CBDB 640149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640149&o=json)

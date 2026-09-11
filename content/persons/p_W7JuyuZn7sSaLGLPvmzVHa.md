---
schema: wang-person/v1
id: p_W7JuyuZn7sSaLGLPvmzVHa
status: active
merged_into: null
display_name: 王琇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NvE2Be5jL7y1oKQNn5WRGG
        subject_person_id: p_W7JuyuZn7sSaLGLPvmzVHa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x6Pn3MHpe8TGXs8YL7k98n
          claim_id: c_NvE2Be5jL7y1oKQNn5WRGG
          source_id: s_GZZCjGEeDx4vXx112GoTjA
          stance: supports
          locator: CBDB:639409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639409）
          source: &a1
            id: s_GZZCjGEeDx4vXx112GoTjA
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 639409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639409&o=json
            external_identifier: CBDB:639409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4jHB1Ksi9qVPPraHSWURx8
        subject_person_id: p_W7JuyuZn7sSaLGLPvmzVHa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琇，清人物。籍贯彌勒，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639409）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NLidwQbWAOK6EQQbPd1HIk
          claim_id: c_4jHB1Ksi9qVPPraHSWURx8
          source_id: s_GZZCjGEeDx4vXx112GoTjA
          stance: supports
          locator: CBDB:639409
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

# 王琇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琇 | accepted |
| bio.summary | 王琇，清人物。籍贯彌勒，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639409） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琇（CBDB 639409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639409&o=json)

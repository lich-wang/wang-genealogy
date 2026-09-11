---
schema: wang-person/v1
id: p_JEEEZwHBA34CXw37JmAQEt
status: active
merged_into: null
display_name: 王用錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W31XQtk6GiSzcJUh7AAndp
        subject_person_id: p_JEEEZwHBA34CXw37JmAQEt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fET726WhAaBkDn96yK31DU
          claim_id: c_W31XQtk6GiSzcJUh7AAndp
          source_id: s_MHHhivaDuVMzTE2aaiz4Jw
          stance: supports
          locator: CBDB:639481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639481）
          source: &a1
            id: s_MHHhivaDuVMzTE2aaiz4Jw
            source_type: api_record
            title: 中国历代人物传记资料库：王用錫（CBDB 639481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639481&o=json
            external_identifier: CBDB:639481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yq23jtTU2qa7Z6BE5dUY7x
        subject_person_id: p_JEEEZwHBA34CXw37JmAQEt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用錫，清人物。籍贯嘉興，曾任訓導。（中国历代人物传记资料库 CBDB 639481）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yee0e9p0-iJQL-BzXFVl2P
          claim_id: c_Yq23jtTU2qa7Z6BE5dUY7x
          source_id: s_MHHhivaDuVMzTE2aaiz4Jw
          stance: supports
          locator: CBDB:639481
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

# 王用錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用錫 | accepted |
| bio.summary | 王用錫，清人物。籍贯嘉興，曾任訓導。（中国历代人物传记资料库 CBDB 639481） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用錫（CBDB 639481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639481&o=json)

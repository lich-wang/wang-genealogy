---
schema: wang-person/v1
id: p_TRUtLxfvxjN5Z4a9d89V5i
status: active
merged_into: null
display_name: 王啟棠
cbdb_id: 342885
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uM4A9qwPNjLGo7MveZZ328
        subject_person_id: p_TRUtLxfvxjN5Z4a9d89V5i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟棠，史料所见人物。本项目依据《中国历代人物传记资料库：王啟棠（CBDB 342885）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_TZ2Y9jC9DoCTG3UVOl_w3E
          claim_id: c_uM4A9qwPNjLGo7MveZZ328
          source_id: s_YbTPXxcwDRg1FPoGyFmk5y
          stance: supports
          locator: CBDB:342885
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_YbTPXxcwDRg1FPoGyFmk5y
            source_type: api_record
            title: 中国历代人物传记资料库：王啟棠（CBDB 342885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342885&o=json
            external_identifier: CBDB:342885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:14.084Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e7spyGkqBrwKfND9cHvD2a
        subject_person_id: p_TRUtLxfvxjN5Z4a9d89V5i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟棠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KQ8kTWmBNXDGwsUhGGWjSm
          claim_id: c_e7spyGkqBrwKfND9cHvD2a
          source_id: s_YbTPXxcwDRg1FPoGyFmk5y
          stance: supports
          locator: CBDB:342885
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4401-4500）｜历史性依据：CBDB 朝代 = 明
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

# 王啟棠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王啟棠，史料所见人物。本项目依据《中国历代人物传记资料库：王啟棠（CBDB 342885）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王啟棠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟棠（CBDB 342885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342885&o=json)

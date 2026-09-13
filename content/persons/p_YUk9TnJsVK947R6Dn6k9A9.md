---
schema: wang-person/v1
id: p_YUk9TnJsVK947R6Dn6k9A9
status: active
merged_into: null
display_name: 王伯傑
cbdb_id: 101184
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iEYMREQo3FKzVoTHmVRfWb
        subject_person_id: p_YUk9TnJsVK947R6Dn6k9A9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯傑，史料所见人物。本项目依据《中国历代人物传记资料库：王伯傑（CBDB 101184）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_WfiKJK80UDP0mbhuOTOb-z
          claim_id: c_iEYMREQo3FKzVoTHmVRfWb
          source_id: s_AGKMWT95911VS9mGFy9k5c
          stance: supports
          locator: CBDB:101184
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AGKMWT95911VS9mGFy9k5c
            source_type: api_record
            title: 中国历代人物传记资料库：王伯傑（CBDB 101184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101184&o=json
            external_identifier: CBDB:101184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vmwtDQkmxw9oJajQknJ933
        subject_person_id: p_YUk9TnJsVK947R6Dn6k9A9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x6zbJHZzHAdtEtC4r3Rojo
          claim_id: c_vmwtDQkmxw9oJajQknJ933
          source_id: s_AGKMWT95911VS9mGFy9k5c
          stance: supports
          locator: CBDB:101184
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
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

# 王伯傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯傑，史料所见人物。本项目依据《中国历代人物传记资料库：王伯傑（CBDB 101184）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王伯傑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯傑（CBDB 101184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101184&o=json)

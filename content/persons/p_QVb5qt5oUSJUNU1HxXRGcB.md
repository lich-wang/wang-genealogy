---
schema: wang-person/v1
id: p_QVb5qt5oUSJUNU1HxXRGcB
status: active
merged_into: null
display_name: 王正國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i4THYa1dJKLJdonriV6x7J
        subject_person_id: p_QVb5qt5oUSJUNU1HxXRGcB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y97PJ4Abme41HNERhC1aRc
          claim_id: c_i4THYa1dJKLJdonriV6x7J
          source_id: s_CFyMX46FdwHyg7NH943wFi
          stance: supports
          locator: CBDB:484333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（484333）
          source: &a1
            id: s_CFyMX46FdwHyg7NH943wFi
            source_type: api_record
            title: 中国历代人物传记资料库：王正國（CBDB 484333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484333&o=json
            external_identifier: CBDB:484333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eQmEBfE29SV3JdHvRAdvDq
        subject_person_id: p_QVb5qt5oUSJUNU1HxXRGcB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正國，史料所见人物。本项目依据《中国历代人物传记资料库：王正國（CBDB 484333）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T6WYpvCY00Km07hgZxUPjA
          claim_id: c_eQmEBfE29SV3JdHvRAdvDq
          source_id: s_CFyMX46FdwHyg7NH943wFi
          stance: supports
          locator: CBDB:484333
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王正國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正國 | accepted |
| bio.summary | 王正國，史料所见人物。本项目依据《中国历代人物传记资料库：王正國（CBDB 484333）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正國（CBDB 484333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484333&o=json)

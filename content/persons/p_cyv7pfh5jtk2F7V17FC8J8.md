---
schema: wang-person/v1
id: p_cyv7pfh5jtk2F7V17FC8J8
status: active
merged_into: null
display_name: 王銖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gLF98MnW5JrsjnYGMuSMyW
        subject_person_id: p_cyv7pfh5jtk2F7V17FC8J8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_atsmKBcC1DKegtznx8sX3J
          claim_id: c_gLF98MnW5JrsjnYGMuSMyW
          source_id: s_emrP1SasjYMxRX2y4YHToW
          stance: supports
          locator: CBDB:697407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697407）
          source: &a1
            id: s_emrP1SasjYMxRX2y4YHToW
            source_type: api_record
            title: 中国历代人物传记资料库：王銖（CBDB 697407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697407&o=json
            external_identifier: CBDB:697407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wct7pEGE29ZYhS3581nhhE
        subject_person_id: p_cyv7pfh5jtk2F7V17FC8J8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銖，史料所见人物。本项目依据《中国历代人物传记资料库：王銖（CBDB 697407）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UvUpfxEqSaBUS_bfmPTD0t
          claim_id: c_wct7pEGE29ZYhS3581nhhE
          source_id: s_emrP1SasjYMxRX2y4YHToW
          stance: supports
          locator: CBDB:697407
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

# 王銖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銖 | accepted |
| bio.summary | 王銖，史料所见人物。本项目依据《中国历代人物传记资料库：王銖（CBDB 697407）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銖（CBDB 697407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697407&o=json)

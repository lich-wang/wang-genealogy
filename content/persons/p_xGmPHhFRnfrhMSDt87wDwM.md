---
schema: wang-person/v1
id: p_xGmPHhFRnfrhMSDt87wDwM
status: active
merged_into: null
display_name: 王嶷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B5bkMWx9rruFW97CQJ54Qe
        subject_person_id: p_xGmPHhFRnfrhMSDt87wDwM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_92w9qMNUffD9g9ECpCwEry
          claim_id: c_B5bkMWx9rruFW97CQJ54Qe
          source_id: s_ciqVQss9mAQFMpoLtesyEN
          stance: supports
          locator: CBDB:507563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（507563）
          source: &a1
            id: s_ciqVQss9mAQFMpoLtesyEN
            source_type: api_record
            title: 中国历代人物传记资料库：王嶷（CBDB 507563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507563&o=json
            external_identifier: CBDB:507563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t6BQW83gSfFHNL1Bf8HMYW
        subject_person_id: p_xGmPHhFRnfrhMSDt87wDwM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶷，史料所见人物。本项目依据《中国历代人物传记资料库：王嶷（CBDB 507563）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5V81pyH9RtIRMrplIveSmf
          claim_id: c_t6BQW83gSfFHNL1Bf8HMYW
          source_id: s_ciqVQss9mAQFMpoLtesyEN
          stance: supports
          locator: CBDB:507563
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

# 王嶷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶷 | accepted |
| bio.summary | 王嶷，史料所见人物。本项目依据《中国历代人物传记资料库：王嶷（CBDB 507563）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嶷（CBDB 507563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507563&o=json)

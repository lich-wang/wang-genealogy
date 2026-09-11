---
schema: wang-person/v1
id: p_7LrKUrHHQT3sBDmDUz6ofY
status: active
merged_into: null
display_name: 王玿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nDMPF59ehNS1tdWZke8TRA
        subject_person_id: p_7LrKUrHHQT3sBDmDUz6ofY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ed18bnptzPQtmRnx69yKg4
          claim_id: c_nDMPF59ehNS1tdWZke8TRA
          source_id: s_LKtszVGzsuBACKuQrM4xm5
          stance: supports
          locator: CBDB:526953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526953）
          source: &a1
            id: s_LKtszVGzsuBACKuQrM4xm5
            source_type: api_record
            title: 中国历代人物传记资料库：王玿（CBDB 526953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526953&o=json
            external_identifier: CBDB:526953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ScqTKEAxFU6agCGJmM13hD
        subject_person_id: p_7LrKUrHHQT3sBDmDUz6ofY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玿，史料所见人物。本项目依据《中国历代人物传记资料库：王玿（CBDB 526953）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P2esYK1QagetxcxzReRZhe
          claim_id: c_ScqTKEAxFU6agCGJmM13hD
          source_id: s_LKtszVGzsuBACKuQrM4xm5
          stance: supports
          locator: CBDB:526953
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

# 王玿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玿 | accepted |
| bio.summary | 王玿，史料所见人物。本项目依据《中国历代人物传记资料库：王玿（CBDB 526953）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玿（CBDB 526953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526953&o=json)

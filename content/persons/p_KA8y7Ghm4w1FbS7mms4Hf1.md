---
schema: wang-person/v1
id: p_KA8y7Ghm4w1FbS7mms4Hf1
status: active
merged_into: null
display_name: 王淑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ju37zNtUTyWsh4XcBfUfq6
        subject_person_id: p_KA8y7Ghm4w1FbS7mms4Hf1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Fjt84Fi28PuvUg2kwfoKJ
          claim_id: c_ju37zNtUTyWsh4XcBfUfq6
          source_id: s_sYMpGez2zvJTpnr84kZWBP
          stance: supports
          locator: CBDB:117591
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117591）
          source: &a1
            id: s_sYMpGez2zvJTpnr84kZWBP
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 117591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117591&o=json
            external_identifier: CBDB:117591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rmLiPc6BtQtGPeGoNVwSXC
        subject_person_id: p_KA8y7Ghm4w1FbS7mms4Hf1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1340年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tBngi3H6EgeN4EAR84uNyC
          claim_id: c_rmLiPc6BtQtGPeGoNVwSXC
          source_id: s_sYMpGez2zvJTpnr84kZWBP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Qx6r53bkSK1q6F8kLYXW21
        subject_person_id: p_KA8y7Ghm4w1FbS7mms4Hf1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1367年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XWQzNke9PpgV7Jj42DMfue
          claim_id: c_Qx6r53bkSK1q6F8kLYXW21
          source_id: s_sYMpGez2zvJTpnr84kZWBP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u2PTjKvnRKuxTdGsppiPsR
        subject_person_id: p_KA8y7Ghm4w1FbS7mms4Hf1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑（1340年—1367年），史料所见人物。本项目依据《中国历代人物传记资料库：王淑（CBDB 117591）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7G-srCvJmnjNn0Z7YHcyOL
          claim_id: c_u2PTjKvnRKuxTdGsppiPsR
          source_id: s_sYMpGez2zvJTpnr84kZWBP
          stance: supports
          locator: CBDB:117591
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

# 王淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑 | accepted |
| birth.date | 1340年 | accepted |
| death.date | 1367年 | accepted |
| bio.summary | 王淑（1340年—1367年），史料所见人物。本项目依据《中国历代人物传记资料库：王淑（CBDB 117591）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淑（CBDB 117591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117591&o=json)

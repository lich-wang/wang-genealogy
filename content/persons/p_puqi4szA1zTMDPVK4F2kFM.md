---
schema: wang-person/v1
id: p_puqi4szA1zTMDPVK4F2kFM
status: active
merged_into: null
display_name: 王云生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d4RxzZQ7MdMfAHbTAD351A
        subject_person_id: p_puqi4szA1zTMDPVK4F2kFM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王云生
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hdMfGB6TWWWJhFYLPLWABE
          claim_id: c_d4RxzZQ7MdMfAHbTAD351A
          source_id: s_9aUnu7ADdjj8kPjNZ7KGJx
          stance: supports
          locator: CBDB:186339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186339）
          source: &a1
            id: s_9aUnu7ADdjj8kPjNZ7KGJx
            source_type: api_record
            title: 中国历代人物传记资料库：王云生（CBDB 186339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186339&o=json
            external_identifier: CBDB:186339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_r7FsjrDfSMAu6ALT3Xpv7H
        subject_person_id: p_puqi4szA1zTMDPVK4F2kFM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 850年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K3ud7faC4CZkGSKq47zndE
          claim_id: c_r7FsjrDfSMAu6ALT3Xpv7H
          source_id: s_9aUnu7ADdjj8kPjNZ7KGJx
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
        id: c_P7R2RN67SCBeUdkPbf86cU
        subject_person_id: p_puqi4szA1zTMDPVK4F2kFM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王云生（卒于850年），史料所见人物。本项目依据《中国历代人物传记资料库：王云生（CBDB 186339）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vHL3ubTQe23qPrDHi6JXQB
          claim_id: c_P7R2RN67SCBeUdkPbf86cU
          source_id: s_9aUnu7ADdjj8kPjNZ7KGJx
          stance: supports
          locator: CBDB:186339
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

# 王云生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王云生 | accepted |
| death.date | 850年 | accepted |
| bio.summary | 王云生（卒于850年），史料所见人物。本项目依据《中国历代人物传记资料库：王云生（CBDB 186339）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王云生（CBDB 186339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186339&o=json)

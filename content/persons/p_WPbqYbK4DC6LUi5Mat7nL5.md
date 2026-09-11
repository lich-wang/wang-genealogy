---
schema: wang-person/v1
id: p_WPbqYbK4DC6LUi5Mat7nL5
status: active
merged_into: null
display_name: 王治道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mD1Jf9dbg8JBFoJM7Pdfoe
        subject_person_id: p_WPbqYbK4DC6LUi5Mat7nL5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nwf3RTzfb83RFXCrK6Ptt6
          claim_id: c_mD1Jf9dbg8JBFoJM7Pdfoe
          source_id: s_GSQhEXtxGASdDvsBpQo47u
          stance: supports
          locator: CBDB:126557
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126557）
          source: &a1
            id: s_GSQhEXtxGASdDvsBpQo47u
            source_type: api_record
            title: 中国历代人物传记资料库：王治道（CBDB 126557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126557&o=json
            external_identifier: CBDB:126557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aKEm7Rjq6DUdMM64gvwj51
        subject_person_id: p_WPbqYbK4DC6LUi5Mat7nL5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1535年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gni2tNqndZDhSfj2r1tyA5
          claim_id: c_aKEm7Rjq6DUdMM64gvwj51
          source_id: s_GSQhEXtxGASdDvsBpQo47u
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
        id: c_HvrpcT4zbZ8AsgKXsf5Kjk
        subject_person_id: p_WPbqYbK4DC6LUi5Mat7nL5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1570年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xCcYwmR6L9NckL2JAMmoYu
          claim_id: c_HvrpcT4zbZ8AsgKXsf5Kjk
          source_id: s_GSQhEXtxGASdDvsBpQo47u
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
        id: c_9WfWa1TJi4aRDFUGQcCvdz
        subject_person_id: p_WPbqYbK4DC6LUi5Mat7nL5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治道（1535年—1570年），史料所见人物。本项目依据《中国历代人物传记资料库：王治道（CBDB 126557）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5BvAvopaB3Q0dXQxWF-U9H
          claim_id: c_9WfWa1TJi4aRDFUGQcCvdz
          source_id: s_GSQhEXtxGASdDvsBpQo47u
          stance: supports
          locator: CBDB:126557
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

# 王治道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治道 | accepted |
| birth.date | 1535年 | accepted |
| death.date | 1570年 | accepted |
| bio.summary | 王治道（1535年—1570年），史料所见人物。本项目依据《中国历代人物传记资料库：王治道（CBDB 126557）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治道（CBDB 126557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126557&o=json)

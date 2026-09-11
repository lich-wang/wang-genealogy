---
schema: wang-person/v1
id: p_JHUqWxGy3gF4fPFFhkt6nw
status: active
merged_into: null
display_name: 王思孝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SqcXzUyEKJRJoxdo2c3qip
        subject_person_id: p_JHUqWxGy3gF4fPFFhkt6nw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_81NDNwiaRce4iBUMFPS485
          claim_id: c_SqcXzUyEKJRJoxdo2c3qip
          source_id: s_v65A9PtqDZhJpP8d1KBWqB
          stance: supports
          locator: CBDB:117582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117582）
          source: &a1
            id: s_v65A9PtqDZhJpP8d1KBWqB
            source_type: api_record
            title: 中国历代人物传记资料库：王思孝（CBDB 117582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117582&o=json
            external_identifier: CBDB:117582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WZdvP1kUntn9xAyMmHpLAb
        subject_person_id: p_JHUqWxGy3gF4fPFFhkt6nw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1223年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_emhCt2264PJL15k3nmeC16
          claim_id: c_WZdvP1kUntn9xAyMmHpLAb
          source_id: s_v65A9PtqDZhJpP8d1KBWqB
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
        id: c_Wv8njwjmbR2PiXZdQ5eScA
        subject_person_id: p_JHUqWxGy3gF4fPFFhkt6nw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1290年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W3tbZLt1cXLViBaxFBVPSR
          claim_id: c_Wv8njwjmbR2PiXZdQ5eScA
          source_id: s_v65A9PtqDZhJpP8d1KBWqB
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
        id: c_xNJLy4V1H5tnJ9yPxRdzVj
        subject_person_id: p_JHUqWxGy3gF4fPFFhkt6nw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思孝（1223年—1290年），史料所见人物。本项目依据《中国历代人物传记资料库：王思孝（CBDB 117582）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h_Wr9iFUgulv9hPqEoYJmg
          claim_id: c_xNJLy4V1H5tnJ9yPxRdzVj
          source_id: s_v65A9PtqDZhJpP8d1KBWqB
          stance: supports
          locator: CBDB:117582
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

# 王思孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思孝 | accepted |
| birth.date | 1223年 | accepted |
| death.date | 1290年 | accepted |
| bio.summary | 王思孝（1223年—1290年），史料所见人物。本项目依据《中国历代人物传记资料库：王思孝（CBDB 117582）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思孝（CBDB 117582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117582&o=json)

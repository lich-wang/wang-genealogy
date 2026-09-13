---
schema: wang-person/v1
id: p_tYyHuNqg6dsrYNvifSoLVU
status: active
merged_into: null
display_name: 王允法
cbdb_id: 526831
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FxY8Lp2D9YY1Kc4ipkRX81
        subject_person_id: p_tYyHuNqg6dsrYNvifSoLVU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允法，史料所见人物。本项目依据《中国历代人物传记资料库：王允法（CBDB 526831）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_n0IvERu3v3nnYhDRgF9F0r
          claim_id: c_FxY8Lp2D9YY1Kc4ipkRX81
          source_id: s_T78EG8Uwr8mCbX9vGFZpim
          stance: supports
          locator: CBDB:526831
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_T78EG8Uwr8mCbX9vGFZpim
            source_type: api_record
            title: 中国历代人物传记资料库：王允法（CBDB 526831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526831&o=json
            external_identifier: CBDB:526831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AHtW63JBD2XqxVMy4ifaf9
        subject_person_id: p_tYyHuNqg6dsrYNvifSoLVU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允法
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pdmq4M8nbi5trjFF2jcLgF
          claim_id: c_AHtW63JBD2XqxVMy4ifaf9
          source_id: s_T78EG8Uwr8mCbX9vGFZpim
          stance: supports
          locator: CBDB:526831
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_POb4082OJ0km1lXPtO20X_
        subject_person_id: p_tYyHuNqg6dsrYNvifSoLVU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6dni5BgJW2yu9BYADiYsd3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_meeu3rJOtFccmiOXSgQM6a
          claim_id: c_POb4082OJ0km1lXPtO20X_
          source_id: s_ZsgQGekdDF6G6te58M4abG
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13004：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZsgQGekdDF6G6te58M4abG
            source_type: api_record
            title: 中国历代人物传记资料库：王時亨（CBDB 69301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69301&o=json
            external_identifier: CBDB:69301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6dni5BgJW2yu9BYADiYsd3
        status: active
        display_name: 王時亨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王允法

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王允法，史料所见人物。本项目依据《中国历代人物传记资料库：王允法（CBDB 526831）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王允法 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6dni5BgJW2yu9BYADiYsd3 | 王時亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時亨（CBDB 69301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69301&o=json)
- [中国历代人物传记资料库：王允法（CBDB 526831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526831&o=json)

---
schema: wang-person/v1
id: p_Cs9DXyMxLFxzUREmZp4LNF
status: active
merged_into: null
display_name: 王綺琴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PrMky1LXmc37ZQoCC8DvCC
        subject_person_id: p_Cs9DXyMxLFxzUREmZp4LNF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綺琴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WqyRwfWq1w6ABQfM93LHf5
          claim_id: c_PrMky1LXmc37ZQoCC8DvCC
          source_id: s_1mCJ2oM5nbe6x9cEMAQnTm
          stance: supports
          locator: CBDB:568780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568780）
          source: &a1
            id: s_1mCJ2oM5nbe6x9cEMAQnTm
            source_type: api_record
            title: 中国历代人物传记资料库：王綺琴（CBDB 568780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568780&o=json
            external_identifier: CBDB:568780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_thPurqHnHRQnHWzTiSuqfh
        subject_person_id: p_Cs9DXyMxLFxzUREmZp4LNF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綺琴，史料所见人物。本项目依据《中国历代人物传记资料库：王綺琴（CBDB 568780）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ECtElmdu1eGcBE7hzPqdrq
          claim_id: c_thPurqHnHRQnHWzTiSuqfh
          source_id: s_1mCJ2oM5nbe6x9cEMAQnTm
          stance: supports
          locator: CBDB:568780
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

# 王綺琴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綺琴 | accepted |
| bio.summary | 王綺琴，史料所见人物。本项目依据《中国历代人物传记资料库：王綺琴（CBDB 568780）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綺琴（CBDB 568780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568780&o=json)

---
schema: wang-person/v1
id: p_ejGrFdHoLS3XX2ehB3Ejcx
status: active
merged_into: null
display_name: 王及
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S6XgKsE17m33brBi5HAdDk
        subject_person_id: p_ejGrFdHoLS3XX2ehB3Ejcx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王及
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5dPmSwABMGgy6eQ37nAFA1
          claim_id: c_S6XgKsE17m33brBi5HAdDk
          source_id: s_RkzPE7Hx4DKA2nzEsYCqsv
          stance: supports
          locator: CBDB:451738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（451738）
          source: &a1
            id: s_RkzPE7Hx4DKA2nzEsYCqsv
            source_type: api_record
            title: 中国历代人物传记资料库：王及（CBDB 451738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451738&o=json
            external_identifier: CBDB:451738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ro9Jn1qL5yeYKnjYWV4XJx
        subject_person_id: p_ejGrFdHoLS3XX2ehB3Ejcx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王及，史料所见人物。本项目依据《中国历代人物传记资料库：王及（CBDB 451738）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8pgJbRhVnNcIGjZfTFg6bM
          claim_id: c_Ro9Jn1qL5yeYKnjYWV4XJx
          source_id: s_RkzPE7Hx4DKA2nzEsYCqsv
          stance: supports
          locator: CBDB:451738
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

# 王及

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王及 | accepted |
| bio.summary | 王及，史料所见人物。本项目依据《中国历代人物传记资料库：王及（CBDB 451738）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王及（CBDB 451738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451738&o=json)

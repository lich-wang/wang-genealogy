---
schema: wang-person/v1
id: p_YBkwgA2JdEjE6vkTQJUsm3
status: active
merged_into: null
display_name: 王孝廉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qLqMr4hGzUqYPKjoimE4Wp
        subject_person_id: p_YBkwgA2JdEjE6vkTQJUsm3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rKwA7MFShpXhWmm94w4oCQ
          claim_id: c_qLqMr4hGzUqYPKjoimE4Wp
          source_id: s_jCYGekkr8PzwX9PqG8uoK3
          stance: supports
          locator: CBDB:445606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445606）
          source: &a1
            id: s_jCYGekkr8PzwX9PqG8uoK3
            source_type: api_record
            title: 中国历代人物传记资料库：王孝廉（CBDB 445606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445606&o=json
            external_identifier: CBDB:445606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ccq9Ei7A5g2y5Rqt5EHSeZ
        subject_person_id: p_YBkwgA2JdEjE6vkTQJUsm3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝廉，史料所见人物。本项目依据《中国历代人物传记资料库：王孝廉（CBDB 445606）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iX6KfjtjubZpiPffOz-cvW
          claim_id: c_ccq9Ei7A5g2y5Rqt5EHSeZ
          source_id: s_jCYGekkr8PzwX9PqG8uoK3
          stance: supports
          locator: CBDB:445606
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

# 王孝廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝廉 | accepted |
| bio.summary | 王孝廉，史料所见人物。本项目依据《中国历代人物传记资料库：王孝廉（CBDB 445606）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孝廉（CBDB 445606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445606&o=json)

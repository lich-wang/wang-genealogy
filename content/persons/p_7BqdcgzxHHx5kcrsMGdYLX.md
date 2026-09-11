---
schema: wang-person/v1
id: p_7BqdcgzxHHx5kcrsMGdYLX
status: active
merged_into: null
display_name: 王泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jM76FyozhPeNjEo5UhHw5J
        subject_person_id: p_7BqdcgzxHHx5kcrsMGdYLX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nb5PTKNz2HSZhkxi3AjEoD
          claim_id: c_jM76FyozhPeNjEo5UhHw5J
          source_id: s_jw59NYzDCZYV2UTA4KeTdT
          stance: supports
          locator: CBDB:59817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59817）
          source: &a1
            id: s_jw59NYzDCZYV2UTA4KeTdT
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 59817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59817&o=json
            external_identifier: CBDB:59817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tr6LS9CrwJUHHJ4A8KPYLM
        subject_person_id: p_7BqdcgzxHHx5kcrsMGdYLX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰，史料所见人物。本项目依据《中国历代人物传记资料库：王泰（CBDB 59817）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K8ENHL9WSuBe-C8V-FGCKx
          claim_id: c_Tr6LS9CrwJUHHJ4A8KPYLM
          source_id: s_jw59NYzDCZYV2UTA4KeTdT
          stance: supports
          locator: CBDB:59817
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

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| bio.summary | 王泰，史料所见人物。本项目依据《中国历代人物传记资料库：王泰（CBDB 59817）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 59817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59817&o=json)

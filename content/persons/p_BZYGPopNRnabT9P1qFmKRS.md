---
schema: wang-person/v1
id: p_BZYGPopNRnabT9P1qFmKRS
status: active
merged_into: null
display_name: 王庭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S1d2KLyTvdinHGp2kXKqTA
        subject_person_id: p_BZYGPopNRnabT9P1qFmKRS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zr34FDskV6WLwM6zQ8sh3Z
          claim_id: c_S1d2KLyTvdinHGp2kXKqTA
          source_id: s_64KsVGmPq1NkMqDT8rVbAc
          stance: supports
          locator: CBDB:56451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56451）
          source: &a1
            id: s_64KsVGmPq1NkMqDT8rVbAc
            source_type: api_record
            title: 中国历代人物传记资料库：王庭（CBDB 56451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56451&o=json
            external_identifier: CBDB:56451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9GobE1ZyiCF29w3HAxVQkG
        subject_person_id: p_BZYGPopNRnabT9P1qFmKRS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭，史料所见人物。本项目依据《中国历代人物传记资料库：王庭（CBDB 56451）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RldYWNXQ9szdy5G02rYVZi
          claim_id: c_9GobE1ZyiCF29w3HAxVQkG
          source_id: s_64KsVGmPq1NkMqDT8rVbAc
          stance: supports
          locator: CBDB:56451
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

# 王庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭 | accepted |
| bio.summary | 王庭，史料所见人物。本项目依据《中国历代人物传记资料库：王庭（CBDB 56451）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭（CBDB 56451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56451&o=json)

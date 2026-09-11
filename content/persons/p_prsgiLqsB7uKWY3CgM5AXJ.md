---
schema: wang-person/v1
id: p_prsgiLqsB7uKWY3CgM5AXJ
status: active
merged_into: null
display_name: 王澄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MharuGjxHo7NQpuDnqKP7D
        subject_person_id: p_prsgiLqsB7uKWY3CgM5AXJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YM4QoBwaYgFcSNG46fG2AU
          claim_id: c_MharuGjxHo7NQpuDnqKP7D
          source_id: s_FZ3cEaWHAi9EEx4vn34VfD
          stance: supports
          locator: CBDB:165044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（165044）
          source: &a1
            id: s_FZ3cEaWHAi9EEx4vn34VfD
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 165044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165044&o=json
            external_identifier: CBDB:165044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BRVcsMNgmi9A9tPVddR4Z1
        subject_person_id: p_prsgiLqsB7uKWY3CgM5AXJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄，史料所见人物。本项目依据《中国历代人物传记资料库：王澄（CBDB 165044）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uw44tbNZIfsJ638Wp979zJ
          claim_id: c_BRVcsMNgmi9A9tPVddR4Z1
          source_id: s_FZ3cEaWHAi9EEx4vn34VfD
          stance: supports
          locator: CBDB:165044
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

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澄 | accepted |
| bio.summary | 王澄，史料所见人物。本项目依据《中国历代人物传记资料库：王澄（CBDB 165044）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 165044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165044&o=json)

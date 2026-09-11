---
schema: wang-person/v1
id: p_jw86KjnUNp1Cuy98H9vjep
status: active
merged_into: null
display_name: 王俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C2weFCE6HjYKPCzV3E65HR
        subject_person_id: p_jw86KjnUNp1Cuy98H9vjep
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F96EbQe9pQyk9h9ajTYZDs
          claim_id: c_C2weFCE6HjYKPCzV3E65HR
          source_id: s_XYjPpR1q2ED9TXP94nAxCL
          stance: supports
          locator: CBDB:126614
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126614）
          source: &a1
            id: s_XYjPpR1q2ED9TXP94nAxCL
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 126614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126614&o=json
            external_identifier: CBDB:126614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W2g3kMX99GNwWQgxBApyrb
        subject_person_id: p_jw86KjnUNp1Cuy98H9vjep
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，史料所见人物。本项目依据《中国历代人物传记资料库：王俊（CBDB 126614）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-MdGpqqNxl-bXAgelNkQ72
          claim_id: c_W2g3kMX99GNwWQgxBApyrb
          source_id: s_XYjPpR1q2ED9TXP94nAxCL
          stance: supports
          locator: CBDB:126614
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

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，史料所见人物。本项目依据《中国历代人物传记资料库：王俊（CBDB 126614）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 126614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126614&o=json)

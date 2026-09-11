---
schema: wang-person/v1
id: p_NnQHTtKHsNHDF4VD8p5HWA
status: active
merged_into: null
display_name: 王夢元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GcAmZEQ7yL9qg9QgX3k3hD
        subject_person_id: p_NnQHTtKHsNHDF4VD8p5HWA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5eWCzN4u7koc7JNZ3ghZ5a
          claim_id: c_GcAmZEQ7yL9qg9QgX3k3hD
          source_id: s_6ecDorgFLKMYWpKuSjj8rZ
          stance: supports
          locator: CBDB:414186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414186）
          source: &a1
            id: s_6ecDorgFLKMYWpKuSjj8rZ
            source_type: api_record
            title: 中国历代人物传记资料库：王夢元（CBDB 414186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414186&o=json
            external_identifier: CBDB:414186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RyrXDXuDYK1WN37PwSvnZT
        subject_person_id: p_NnQHTtKHsNHDF4VD8p5HWA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢元，史料所见人物。本项目依据《中国历代人物传记资料库：王夢元（CBDB 414186）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DR7arnfz5PUF_dPrN1jLwR
          claim_id: c_RyrXDXuDYK1WN37PwSvnZT
          source_id: s_6ecDorgFLKMYWpKuSjj8rZ
          stance: supports
          locator: CBDB:414186
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

# 王夢元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢元 | accepted |
| bio.summary | 王夢元，史料所见人物。本项目依据《中国历代人物传记资料库：王夢元（CBDB 414186）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢元（CBDB 414186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414186&o=json)

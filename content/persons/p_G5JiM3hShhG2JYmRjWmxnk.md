---
schema: wang-person/v1
id: p_G5JiM3hShhG2JYmRjWmxnk
status: active
merged_into: null
display_name: 王巽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hL6ZtsHpkeTskEGeEKVVjq
        subject_person_id: p_G5JiM3hShhG2JYmRjWmxnk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9RKL2zFssMYk2Fg33gzCSz
          claim_id: c_hL6ZtsHpkeTskEGeEKVVjq
          source_id: s_FxJApCLzjHpSkMM7mbQAQA
          stance: supports
          locator: CBDB:685415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685415）
          source: &a1
            id: s_FxJApCLzjHpSkMM7mbQAQA
            source_type: api_record
            title: 中国历代人物传记资料库：王巽（CBDB 685415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685415&o=json
            external_identifier: CBDB:685415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oGyoCmjMNBCq47LPiLPhbV
        subject_person_id: p_G5JiM3hShhG2JYmRjWmxnk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巽，宋人物。籍贯漳浦，入仕進士。（中国历代人物传记资料库 CBDB 685415）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OtHyk4dS4UlTdmJbu8IuD3
          claim_id: c_oGyoCmjMNBCq47LPiLPhbV
          source_id: s_FxJApCLzjHpSkMM7mbQAQA
          stance: supports
          locator: CBDB:685415
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王巽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巽 | accepted |
| bio.summary | 王巽，宋人物。籍贯漳浦，入仕進士。（中国历代人物传记资料库 CBDB 685415） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巽（CBDB 685415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685415&o=json)

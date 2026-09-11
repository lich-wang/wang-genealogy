---
schema: wang-person/v1
id: p_pBnbigvG5C3DJoA6oMg6U1
status: active
merged_into: null
display_name: 王日新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b7qGdqQAzJc3HaR9SosKux
        subject_person_id: p_pBnbigvG5C3DJoA6oMg6U1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kFUzL5T7LqYFJn1xL4obXW
          claim_id: c_b7qGdqQAzJc3HaR9SosKux
          source_id: s_Lt3uLn7VBKXey72ftsvWzT
          stance: supports
          locator: CBDB:117564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117564）
          source: &a1
            id: s_Lt3uLn7VBKXey72ftsvWzT
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 117564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117564&o=json
            external_identifier: CBDB:117564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_abBSWTUTUa5441RKgiKQpu
        subject_person_id: p_pBnbigvG5C3DJoA6oMg6U1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新，史料所见人物。本项目依据《中国历代人物传记资料库：王日新（CBDB 117564）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2AT4zx3MUqCBWuxa4m1e47
          claim_id: c_abBSWTUTUa5441RKgiKQpu
          source_id: s_Lt3uLn7VBKXey72ftsvWzT
          stance: supports
          locator: CBDB:117564
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

# 王日新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日新 | accepted |
| bio.summary | 王日新，史料所见人物。本项目依据《中国历代人物传记资料库：王日新（CBDB 117564）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王日新（CBDB 117564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117564&o=json)

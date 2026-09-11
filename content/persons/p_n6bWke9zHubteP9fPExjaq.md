---
schema: wang-person/v1
id: p_n6bWke9zHubteP9fPExjaq
status: active
merged_into: null
display_name: 王慶褆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B6XycLpFmqr1jdNrs7hPAX
        subject_person_id: p_n6bWke9zHubteP9fPExjaq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶褆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QYN93PyQCLT3oCqq39rYdF
          claim_id: c_B6XycLpFmqr1jdNrs7hPAX
          source_id: s_jh52pkDmRs9YEZErtZnPp1
          stance: supports
          locator: CBDB:637951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637951）
          source: &a1
            id: s_jh52pkDmRs9YEZErtZnPp1
            source_type: api_record
            title: 中国历代人物传记资料库：王慶褆（CBDB 637951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637951&o=json
            external_identifier: CBDB:637951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QFv2wo3Hi74XYTLxZLTWNa
        subject_person_id: p_n6bWke9zHubteP9fPExjaq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶褆，清人物。籍贯順天府，入仕進士，曾任學正。（中国历代人物传记资料库 CBDB 637951）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z5iin6459VnYnVF3h5UuLT
          claim_id: c_QFv2wo3Hi74XYTLxZLTWNa
          source_id: s_jh52pkDmRs9YEZErtZnPp1
          stance: supports
          locator: CBDB:637951
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

# 王慶褆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶褆 | accepted |
| bio.summary | 王慶褆，清人物。籍贯順天府，入仕進士，曾任學正。（中国历代人物传记资料库 CBDB 637951） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶褆（CBDB 637951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637951&o=json)

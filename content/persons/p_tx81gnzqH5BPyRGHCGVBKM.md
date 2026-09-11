---
schema: wang-person/v1
id: p_tx81gnzqH5BPyRGHCGVBKM
status: active
merged_into: null
display_name: 王復祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UDGkqiNPYnZPHjRSqkkSX9
        subject_person_id: p_tx81gnzqH5BPyRGHCGVBKM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1QQuYTfwNWJWCAP63LfsyA
          claim_id: c_UDGkqiNPYnZPHjRSqkkSX9
          source_id: s_AC9KRLEGqNfnc4yW9DooJ1
          stance: supports
          locator: CBDB:637662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637662）
          source: &a1
            id: s_AC9KRLEGqNfnc4yW9DooJ1
            source_type: api_record
            title: 中国历代人物传记资料库：王復祥（CBDB 637662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637662&o=json
            external_identifier: CBDB:637662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jC2HiFzL6r4a7FrZjTuEQ1
        subject_person_id: p_tx81gnzqH5BPyRGHCGVBKM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復祥，清人物。籍贯沂州，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637662）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I_pgp_CIFd1JzYKk47xmUm
          claim_id: c_jC2HiFzL6r4a7FrZjTuEQ1
          source_id: s_AC9KRLEGqNfnc4yW9DooJ1
          stance: supports
          locator: CBDB:637662
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

# 王復祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復祥 | accepted |
| bio.summary | 王復祥，清人物。籍贯沂州，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637662） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王復祥（CBDB 637662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637662&o=json)

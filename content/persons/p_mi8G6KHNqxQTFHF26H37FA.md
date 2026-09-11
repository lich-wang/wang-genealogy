---
schema: wang-person/v1
id: p_mi8G6KHNqxQTFHF26H37FA
status: active
merged_into: null
display_name: 王琪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Hnyqeuub5kSZM6yyDdfQA
        subject_person_id: p_mi8G6KHNqxQTFHF26H37FA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JKtxdYa8H1VnGjSPZ6uuEA
          claim_id: c_9Hnyqeuub5kSZM6yyDdfQA
          source_id: s_JUaJ8FSawQq9MkHe4tNWcK
          stance: supports
          locator: CBDB:1765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1765）
          source: &a1
            id: s_JUaJ8FSawQq9MkHe4tNWcK
            source_type: api_record
            title: 中国历代人物传记资料库：王琪（CBDB 1765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1765&o=json
            external_identifier: CBDB:1765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_va7RvbyMepA1ea2J2fgPmM
        subject_person_id: p_mi8G6KHNqxQTFHF26H37FA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琪，宋人物。籍贯東明，身份为校堪學家，入仕進士，曾任殿中省丞、起居郎、三丞。（中国历代人物传记资料库 CBDB 1765）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Je-AFt4ecPoYnhCjCcnYev
          claim_id: c_va7RvbyMepA1ea2J2fgPmM
          source_id: s_JUaJ8FSawQq9MkHe4tNWcK
          stance: supports
          locator: CBDB:1765
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

# 王琪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琪 | accepted |
| bio.summary | 王琪，宋人物。籍贯東明，身份为校堪學家，入仕進士，曾任殿中省丞、起居郎、三丞。（中国历代人物传记资料库 CBDB 1765） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琪（CBDB 1765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1765&o=json)

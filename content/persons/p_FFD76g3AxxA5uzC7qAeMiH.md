---
schema: wang-person/v1
id: p_FFD76g3AxxA5uzC7qAeMiH
status: active
merged_into: null
display_name: 王道遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D4e41yrYBCEMPGc6GZC1iA
        subject_person_id: p_FFD76g3AxxA5uzC7qAeMiH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u8HnhQ7ssuSLc5cDnSrfXk
          claim_id: c_D4e41yrYBCEMPGc6GZC1iA
          source_id: s_9GG9dmDXo631bmfzD7MbG4
          stance: supports
          locator: CBDB:101390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101390）
          source: &a1
            id: s_9GG9dmDXo631bmfzD7MbG4
            source_type: api_record
            title: 中国历代人物传记资料库：王道遠（CBDB 101390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101390&o=json
            external_identifier: CBDB:101390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5YQ4MBgSUaoPrTH7bvCGF9
        subject_person_id: p_FFD76g3AxxA5uzC7qAeMiH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道遠，元人物。曾任諸路總管府醫學正。（中国历代人物传记资料库 CBDB 101390）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1kZ9ywurHjUmU7dhbB5okT
          claim_id: c_5YQ4MBgSUaoPrTH7bvCGF9
          source_id: s_9GG9dmDXo631bmfzD7MbG4
          stance: supports
          locator: CBDB:101390
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

# 王道遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道遠 | accepted |
| bio.summary | 王道遠，元人物。曾任諸路總管府醫學正。（中国历代人物传记资料库 CBDB 101390） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道遠（CBDB 101390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101390&o=json)

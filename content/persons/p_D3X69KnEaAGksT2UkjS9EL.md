---
schema: wang-person/v1
id: p_D3X69KnEaAGksT2UkjS9EL
status: active
merged_into: null
display_name: 王善之
cbdb_id: 38185
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ceGoHYVCNcHwifgeFxDbn8
        subject_person_id: p_D3X69KnEaAGksT2UkjS9EL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善之，宋人物。曾任直龍圖閣。（中国历代人物传记资料库 CBDB 38185）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_am-1otfSgV3B2fn2C0s79q
          claim_id: c_ceGoHYVCNcHwifgeFxDbn8
          source_id: s_3XJ4CDQtNgYk5LumXhm3Mz
          stance: supports
          locator: CBDB:38185
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3XJ4CDQtNgYk5LumXhm3Mz
            source_type: api_record
            title: 中国历代人物传记资料库：王善之（CBDB 38185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38185&o=json
            external_identifier: CBDB:38185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7J7eZJ8ZtEKKC8pxx416NL
        subject_person_id: p_D3X69KnEaAGksT2UkjS9EL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tC5FE6N1cykG4V9ZS3yKhR
          claim_id: c_7J7eZJ8ZtEKKC8pxx416NL
          source_id: s_3XJ4CDQtNgYk5LumXhm3Mz
          stance: supports
          locator: CBDB:38185
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
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

# 王善之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王善之，宋人物。曾任直龍圖閣。（中国历代人物传记资料库 CBDB 38185） | accepted |
| name.primary | 王善之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王善之（CBDB 38185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38185&o=json)

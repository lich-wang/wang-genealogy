---
schema: wang-person/v1
id: p_4L6DCuNBW35w9HT5ufQB19
status: active
merged_into: null
display_name: 王憬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4sQQ9oEY372qA8LJ6TFEHX
        subject_person_id: p_4L6DCuNBW35w9HT5ufQB19
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_psxBrLNKvkpRGkyU5aaYt1
          claim_id: c_4sQQ9oEY372qA8LJ6TFEHX
          source_id: s_VUJ7wTGBNHgS2oCzPQE2S9
          stance: supports
          locator: CBDB:303474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303474）
          source: &a1
            id: s_VUJ7wTGBNHgS2oCzPQE2S9
            source_type: api_record
            title: 中国历代人物传记资料库：王憬（CBDB 303474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303474&o=json
            external_identifier: CBDB:303474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PZSHGHySgg9kXYaaJNS7bE
        subject_person_id: p_4L6DCuNBW35w9HT5ufQB19
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憬，明人物。嘉靖二十年進士，籍贯崑山，曾任知縣。（中国历代人物传记资料库 CBDB 303474）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0C_NOy7mhwXoIC-JmnGPRq
          claim_id: c_PZSHGHySgg9kXYaaJNS7bE
          source_id: s_VUJ7wTGBNHgS2oCzPQE2S9
          stance: supports
          locator: CBDB:303474
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

# 王憬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憬 | accepted |
| bio.summary | 王憬，明人物。嘉靖二十年進士，籍贯崑山，曾任知縣。（中国历代人物传记资料库 CBDB 303474） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王憬（CBDB 303474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303474&o=json)

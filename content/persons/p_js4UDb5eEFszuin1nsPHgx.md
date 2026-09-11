---
schema: wang-person/v1
id: p_js4UDb5eEFszuin1nsPHgx
status: active
merged_into: null
display_name: 王䮐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cGrBgyY8VP1jf6NK2NRixy
        subject_person_id: p_js4UDb5eEFszuin1nsPHgx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䮐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qPhwRTLxY31jmzFkWinWN4
          claim_id: c_cGrBgyY8VP1jf6NK2NRixy
          source_id: s_eZ8jo4NcTQ22vqeRgr1gVd
          stance: supports
          locator: CBDB:635612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635612）
          source: &a1
            id: s_eZ8jo4NcTQ22vqeRgr1gVd
            source_type: api_record
            title: 中国历代人物传记资料库：王䮐（CBDB 635612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635612&o=json
            external_identifier: CBDB:635612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.738Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j78RCNp36YtBJNyiLT6zTQ
        subject_person_id: p_js4UDb5eEFszuin1nsPHgx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䮐，清人物。籍贯韓城，入仕優貢生，曾任知縣。（中国历代人物传记资料库 CBDB 635612）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yAzPd9QBVISUoEOVcl3Da0
          claim_id: c_j78RCNp36YtBJNyiLT6zTQ
          source_id: s_eZ8jo4NcTQ22vqeRgr1gVd
          stance: supports
          locator: CBDB:635612
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

# 王䮐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王䮐 | accepted |
| bio.summary | 王䮐，清人物。籍贯韓城，入仕優貢生，曾任知縣。（中国历代人物传记资料库 CBDB 635612） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王䮐（CBDB 635612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635612&o=json)

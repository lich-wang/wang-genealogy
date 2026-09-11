---
schema: wang-person/v1
id: p_c5awxpuFT6oJN23X51xazf
status: active
merged_into: null
display_name: 王仲元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w3m6AUBczsXgisfCGd5dfc
        subject_person_id: p_c5awxpuFT6oJN23X51xazf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wrG475257vA6bMgxscPkd8
          claim_id: c_w3m6AUBczsXgisfCGd5dfc
          source_id: s_yCkoo2DJAEzeV116GWrcoL
          stance: supports
          locator: CBDB:635938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635938）
          source: &a1
            id: s_yCkoo2DJAEzeV116GWrcoL
            source_type: api_record
            title: 中国历代人物传记资料库：王仲元（CBDB 635938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635938&o=json
            external_identifier: CBDB:635938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QEG1NB96gF2gE9GSKjXh5y
        subject_person_id: p_c5awxpuFT6oJN23X51xazf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲元，清人物。籍贯山丹，曾任經歷、司獄、知縣。（中国历代人物传记资料库 CBDB 635938）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V2-HGNXCIrlNphb6BGrOGm
          claim_id: c_QEG1NB96gF2gE9GSKjXh5y
          source_id: s_yCkoo2DJAEzeV116GWrcoL
          stance: supports
          locator: CBDB:635938
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

# 王仲元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲元 | accepted |
| bio.summary | 王仲元，清人物。籍贯山丹，曾任經歷、司獄、知縣。（中国历代人物传记资料库 CBDB 635938） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲元（CBDB 635938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635938&o=json)

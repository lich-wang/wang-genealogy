---
schema: wang-person/v1
id: p_cXHv7PKynVHMNbBR9FMZQr
status: active
merged_into: null
display_name: 王化
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sZTtXTp4267Qgg4sk8WJkK
        subject_person_id: p_cXHv7PKynVHMNbBR9FMZQr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JQerGNwYLmzEDPZVtf9NRz
          claim_id: c_sZTtXTp4267Qgg4sk8WJkK
          source_id: s_j4jfnuYhhqXGxT6V3ho8SC
          stance: supports
          locator: CBDB:326927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326927）
          source: &a1
            id: s_j4jfnuYhhqXGxT6V3ho8SC
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 326927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326927&o=json
            external_identifier: CBDB:326927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7JU4fB2BM96ikfXsyHmG9b
        subject_person_id: p_cXHv7PKynVHMNbBR9FMZQr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化，明人物。嘉靖四十一年進士，籍贯秀水。（中国历代人物传记资料库 CBDB 326927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mx8ziU1k8ypSo2JR9SfkNZ
          claim_id: c_7JU4fB2BM96ikfXsyHmG9b
          source_id: s_j4jfnuYhhqXGxT6V3ho8SC
          stance: supports
          locator: CBDB:326927
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

# 王化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化 | accepted |
| bio.summary | 王化，明人物。嘉靖四十一年進士，籍贯秀水。（中国历代人物传记资料库 CBDB 326927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 326927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326927&o=json)

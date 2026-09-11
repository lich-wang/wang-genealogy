---
schema: wang-person/v1
id: p_sdE23ihfXo7hcy8UqUyTKr
status: active
merged_into: null
display_name: 王承流
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6yM78N6NWYxPHPpuGCrDKB
        subject_person_id: p_sdE23ihfXo7hcy8UqUyTKr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承流
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S8x2Hojs6aNnpgyBSnYgGF
          claim_id: c_6yM78N6NWYxPHPpuGCrDKB
          source_id: s_ZzRTj5cxquM9DwraDsGXd6
          stance: supports
          locator: CBDB:638090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638090）
          source: &a1
            id: s_ZzRTj5cxquM9DwraDsGXd6
            source_type: api_record
            title: 中国历代人物传记资料库：王承流（CBDB 638090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638090&o=json
            external_identifier: CBDB:638090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zHKYo9E52mgh1iiBQiwYkH
        subject_person_id: p_sdE23ihfXo7hcy8UqUyTKr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承流，清人物。籍贯閩縣，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 638090）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DlT7VZFPH_tvYexCUmTJHd
          claim_id: c_zHKYo9E52mgh1iiBQiwYkH
          source_id: s_ZzRTj5cxquM9DwraDsGXd6
          stance: supports
          locator: CBDB:638090
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

# 王承流

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承流 | accepted |
| bio.summary | 王承流，清人物。籍贯閩縣，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 638090） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承流（CBDB 638090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638090&o=json)

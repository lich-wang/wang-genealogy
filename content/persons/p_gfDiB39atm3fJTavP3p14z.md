---
schema: wang-person/v1
id: p_gfDiB39atm3fJTavP3p14z
status: active
merged_into: null
display_name: 王欒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5cdbZQ9T94brmR7ggjP3nL
        subject_person_id: p_gfDiB39atm3fJTavP3p14z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r73aSVaGifNzz2CCiCAC84
          claim_id: c_5cdbZQ9T94brmR7ggjP3nL
          source_id: s_7ry4Dy2VGiyA2rhcHcQXzU
          stance: supports
          locator: CBDB:271119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271119）
          source: &a1
            id: s_7ry4Dy2VGiyA2rhcHcQXzU
            source_type: api_record
            title: 中国历代人物传记资料库：王欒（CBDB 271119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271119&o=json
            external_identifier: CBDB:271119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y8gShsbUNpWR4QRMjBQV8c
        subject_person_id: p_gfDiB39atm3fJTavP3p14z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欒，明人物。弘治十五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 271119）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VpzBtRTa2-fOeRbMkTuf4_
          claim_id: c_y8gShsbUNpWR4QRMjBQV8c
          source_id: s_7ry4Dy2VGiyA2rhcHcQXzU
          stance: supports
          locator: CBDB:271119
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

# 王欒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欒 | accepted |
| bio.summary | 王欒，明人物。弘治十五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 271119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王欒（CBDB 271119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271119&o=json)

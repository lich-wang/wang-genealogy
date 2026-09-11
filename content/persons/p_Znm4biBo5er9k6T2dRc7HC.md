---
schema: wang-person/v1
id: p_Znm4biBo5er9k6T2dRc7HC
status: active
merged_into: null
display_name: 王鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HPdY5uK7Sa3vfEQyQ9xQzv
        subject_person_id: p_Znm4biBo5er9k6T2dRc7HC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NsjnPH2utAx6213QUzb2oH
          claim_id: c_HPdY5uK7Sa3vfEQyQ9xQzv
          source_id: s_Z2eWV1TCzvmbP5do47HKC2
          stance: supports
          locator: CBDB:262434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262434）
          source: &a1
            id: s_Z2eWV1TCzvmbP5do47HKC2
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 262434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262434&o=json
            external_identifier: CBDB:262434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_epquf6kLQvwf5wmZzM3AbK
        subject_person_id: p_Znm4biBo5er9k6T2dRc7HC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，明人物。弘治三年進士，籍贯開州。（中国历代人物传记资料库 CBDB 262434）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7m6cI0BMPX_iLiaMC9ClUb
          claim_id: c_epquf6kLQvwf5wmZzM3AbK
          source_id: s_Z2eWV1TCzvmbP5do47HKC2
          stance: supports
          locator: CBDB:262434
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

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，明人物。弘治三年進士，籍贯開州。（中国历代人物传记资料库 CBDB 262434） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 262434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262434&o=json)

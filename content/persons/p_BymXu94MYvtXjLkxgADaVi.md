---
schema: wang-person/v1
id: p_BymXu94MYvtXjLkxgADaVi
status: active
merged_into: null
display_name: 王懿修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wPh7WgyUBZn2xTXFY3gLQr
        subject_person_id: p_BymXu94MYvtXjLkxgADaVi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GRAp2R8Fu4g7ZhSBFWET1g
          claim_id: c_wPh7WgyUBZn2xTXFY3gLQr
          source_id: s_zLsE3bZvCByj9CSRMkJK7d
          stance: supports
          locator: CBDB:57218
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57218）
          source: &a1
            id: s_zLsE3bZvCByj9CSRMkJK7d
            source_type: api_record
            title: 中国历代人物传记资料库：王懿修（CBDB 57218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57218&o=json
            external_identifier: CBDB:57218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.808Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MkbXc8qDnedPt6PS1LUaYk
        subject_person_id: p_BymXu94MYvtXjLkxgADaVi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1736年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G8xNhBYACjk1ztAxKtR21U
          claim_id: c_MkbXc8qDnedPt6PS1LUaYk
          source_id: s_zLsE3bZvCByj9CSRMkJK7d
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_U4QWz4kryvHNDWEFmjz8fN
        subject_person_id: p_BymXu94MYvtXjLkxgADaVi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1816年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C5AoCE6L1mRGVyZ3AFWfoB
          claim_id: c_U4QWz4kryvHNDWEFmjz8fN
          source_id: s_zLsE3bZvCByj9CSRMkJK7d
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EEShTavM5QkCFrafHrTyLh
        subject_person_id: p_BymXu94MYvtXjLkxgADaVi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿修（1736年—1816年），清人物。籍贯青陽，曾任鄉試副考官。（中国历代人物传记资料库 CBDB 57218）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TY_cq9PvfK25spxAf7qVec
          claim_id: c_EEShTavM5QkCFrafHrTyLh
          source_id: s_zLsE3bZvCByj9CSRMkJK7d
          stance: supports
          locator: CBDB:57218
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

# 王懿修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懿修 | accepted |
| birth.date | 1736年 | accepted |
| death.date | 1816年 | accepted |
| bio.summary | 王懿修（1736年—1816年），清人物。籍贯青陽，曾任鄉試副考官。（中国历代人物传记资料库 CBDB 57218） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懿修（CBDB 57218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57218&o=json)

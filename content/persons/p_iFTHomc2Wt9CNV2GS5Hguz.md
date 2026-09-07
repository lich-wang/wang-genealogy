---
schema: wang-person/v1
id: p_iFTHomc2Wt9CNV2GS5Hguz
status: active
merged_into: null
display_name: 王維豫
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jolcWc0tfg98q0FEB0SeeC
        subject_person_id: p_iFTHomc2Wt9CNV2GS5Hguz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維豫，清人物。中国历代人物传记资料库（CBDB）以人物编号 526716 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V5Y9mntJnFfUOdDxPvpNKR
          claim_id: c_jolcWc0tfg98q0FEB0SeeC
          source_id: s_cEwPxZ9zHJuUCzQeCkk8SC
          stance: supports
          locator: CBDB:526716
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cEwPxZ9zHJuUCzQeCkk8SC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王維豫（526716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526716&o=json
            external_identifier: CBDB:526716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:25.264Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eEsbCSjNMHJ3hs8GAm2QXx
        subject_person_id: p_iFTHomc2Wt9CNV2GS5Hguz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J96jzT6PrAD6x7sn7YDRJD
          claim_id: c_eEsbCSjNMHJ3hs8GAm2QXx
          source_id: s_cEwPxZ9zHJuUCzQeCkk8SC
          stance: supports
          locator: CBDB:526716
          quotation: null
          interpretation_note: null
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

# 王維豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王維豫，清人物。中国历代人物传记资料库（CBDB）以人物编号 526716 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王維豫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [CBDB 中国历代人物传记资料库：王維豫（526716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526716&o=json)

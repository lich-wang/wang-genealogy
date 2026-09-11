---
schema: wang-person/v1
id: p_4vHM6gNZTvxZM2XR9bP4ac
status: active
merged_into: null
display_name: 王一經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6wDoHjTJCHyU4XzdtUwFmi
        subject_person_id: p_4vHM6gNZTvxZM2XR9bP4ac
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nWx2mFLAusZyg27ZPV4bBv
          claim_id: c_6wDoHjTJCHyU4XzdtUwFmi
          source_id: s_sFqY9zifMj3TN9tDGnVFLv
          stance: supports
          locator: CBDB:213990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213990）
          source: &a1
            id: s_sFqY9zifMj3TN9tDGnVFLv
            source_type: api_record
            title: 中国历代人物传记资料库：王一經（CBDB 213990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213990&o=json
            external_identifier: CBDB:213990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NMza8r9WqXx5qkbvSGbQaT
        subject_person_id: p_4vHM6gNZTvxZM2XR9bP4ac
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一經，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213990）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VH9bX9em9BVxp9pX-9-qzF
          claim_id: c_NMza8r9WqXx5qkbvSGbQaT
          source_id: s_sFqY9zifMj3TN9tDGnVFLv
          stance: supports
          locator: CBDB:213990
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

# 王一經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一經 | accepted |
| bio.summary | 王一經，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213990） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一經（CBDB 213990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213990&o=json)

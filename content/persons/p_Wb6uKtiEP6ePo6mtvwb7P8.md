---
schema: wang-person/v1
id: p_Wb6uKtiEP6ePo6mtvwb7P8
status: active
merged_into: null
display_name: 王淑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wunhqEbKu7f9q753p14dN5
        subject_person_id: p_Wb6uKtiEP6ePo6mtvwb7P8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_efQfNUnfxQa3GK3cTwTZox
          claim_id: c_wunhqEbKu7f9q753p14dN5
          source_id: s_CqkzcbP9SA8GYfVLxCpyM2
          stance: supports
          locator: CBDB:284257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284257）
          source: &a1
            id: s_CqkzcbP9SA8GYfVLxCpyM2
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 284257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284257&o=json
            external_identifier: CBDB:284257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.194Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4UK66FDDm1j2HvNSdXUNmX
        subject_person_id: p_Wb6uKtiEP6ePo6mtvwb7P8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284257）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TPGJkyo2OP1vykw6ewJayz
          claim_id: c_4UK66FDDm1j2HvNSdXUNmX
          source_id: s_CqkzcbP9SA8GYfVLxCpyM2
          stance: supports
          locator: CBDB:284257
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

# 王淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑 | accepted |
| bio.summary | 王淑，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284257） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淑（CBDB 284257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284257&o=json)

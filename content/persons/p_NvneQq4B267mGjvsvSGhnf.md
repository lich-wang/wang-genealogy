---
schema: wang-person/v1
id: p_NvneQq4B267mGjvsvSGhnf
status: active
merged_into: null
display_name: 王隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QaDRje8Gm8hY8fA7YQqAeZ
        subject_person_id: p_NvneQq4B267mGjvsvSGhnf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XBtTgehK6soTwtKFH3LBwa
          claim_id: c_QaDRje8Gm8hY8fA7YQqAeZ
          source_id: s_7b5y27eCx5mfSR1Dmvhjtz
          stance: supports
          locator: CBDB:485223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（485223）
          source: &a1
            id: s_7b5y27eCx5mfSR1Dmvhjtz
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 485223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485223&o=json
            external_identifier: CBDB:485223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3FCdafS8JZM17GHXG9J2Z7
        subject_person_id: p_NvneQq4B267mGjvsvSGhnf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆，元人物。曾任照磨。（中国历代人物传记资料库 CBDB 485223）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gwxbX1r1ofI1jPh7rn3CEZ
          claim_id: c_3FCdafS8JZM17GHXG9J2Z7
          source_id: s_7b5y27eCx5mfSR1Dmvhjtz
          stance: supports
          locator: CBDB:485223
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

# 王隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆 | accepted |
| bio.summary | 王隆，元人物。曾任照磨。（中国历代人物传记资料库 CBDB 485223） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王隆（CBDB 485223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485223&o=json)

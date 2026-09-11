---
schema: wang-person/v1
id: p_q5U5JfwdkxCt43SSTEGKNi
status: active
merged_into: null
display_name: 王翁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d2kG7FMNdKu23atP88WCGL
        subject_person_id: p_q5U5JfwdkxCt43SSTEGKNi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r5oFNHA5BK9SNnXWQR8eGb
          claim_id: c_d2kG7FMNdKu23atP88WCGL
          source_id: s_iTDvPS3bKaqzeRfL34Zx5d
          stance: supports
          locator: CBDB:278412
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278412）
          source: &a1
            id: s_iTDvPS3bKaqzeRfL34Zx5d
            source_type: api_record
            title: 中国历代人物传记资料库：王翁（CBDB 278412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278412&o=json
            external_identifier: CBDB:278412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c8Mzd1V9npG7JB5jAFyFkH
        subject_person_id: p_q5U5JfwdkxCt43SSTEGKNi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翁，明人物。正德六年進士，籍贯涿鹿中衛。（中国历代人物传记资料库 CBDB 278412）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X-2NaR3MD86lOZJTJmIAg2
          claim_id: c_c8Mzd1V9npG7JB5jAFyFkH
          source_id: s_iTDvPS3bKaqzeRfL34Zx5d
          stance: supports
          locator: CBDB:278412
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

# 王翁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翁 | accepted |
| bio.summary | 王翁，明人物。正德六年進士，籍贯涿鹿中衛。（中国历代人物传记资料库 CBDB 278412） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翁（CBDB 278412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278412&o=json)

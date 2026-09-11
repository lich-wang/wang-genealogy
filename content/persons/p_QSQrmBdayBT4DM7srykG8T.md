---
schema: wang-person/v1
id: p_QSQrmBdayBT4DM7srykG8T
status: active
merged_into: null
display_name: 王一元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sXvDHigZRPiRMKdSwobLga
        subject_person_id: p_QSQrmBdayBT4DM7srykG8T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2cBrXTH4B4CYZwKq8Wj1WU
          claim_id: c_sXvDHigZRPiRMKdSwobLga
          source_id: s_5PJo45vNtYENLeXYVJKCM6
          stance: supports
          locator: CBDB:341714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341714）
          source: &a1
            id: s_5PJo45vNtYENLeXYVJKCM6
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 341714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341714&o=json
            external_identifier: CBDB:341714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qm87p4twMcuZQDLTR1dXTh
        subject_person_id: p_QSQrmBdayBT4DM7srykG8T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一元，清人物。明清進士進士，籍贯鐵嶺，入仕進士。（中国历代人物传记资料库 CBDB 341714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0T8cAZLVw3gfrJZgLjEHsY
          claim_id: c_Qm87p4twMcuZQDLTR1dXTh
          source_id: s_5PJo45vNtYENLeXYVJKCM6
          stance: supports
          locator: CBDB:341714
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

# 王一元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一元 | accepted |
| bio.summary | 王一元，清人物。明清進士進士，籍贯鐵嶺，入仕進士。（中国历代人物传记资料库 CBDB 341714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一元（CBDB 341714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341714&o=json)

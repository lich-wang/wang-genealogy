---
schema: wang-person/v1
id: p_W5C5henR9j5M8DcZUztEWA
status: active
merged_into: null
display_name: 王一麒
cbdb_id: 298430
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gkiYCYvgZUFbXGqhynT2QM
        subject_person_id: p_W5C5henR9j5M8DcZUztEWA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一麒，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zCVprPjg1slewvWp-JPMUP
          claim_id: c_gkiYCYvgZUFbXGqhynT2QM
          source_id: s_e1kPN5Qc83MK4CnN8A2jCo
          stance: supports
          locator: CBDB:298430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_e1kPN5Qc83MK4CnN8A2jCo
            source_type: api_record
            title: 中国历代人物传记资料库：王一麒（CBDB 298430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298430&o=json
            external_identifier: CBDB:298430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QqGQ9rh3mXNS9yVjCQVypd
        subject_person_id: p_W5C5henR9j5M8DcZUztEWA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mBGwaEW7NP51C91EK8S45U
          claim_id: c_QqGQ9rh3mXNS9yVjCQVypd
          source_id: s_e1kPN5Qc83MK4CnN8A2jCo
          stance: supports
          locator: CBDB:298430
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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

# 王一麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一麒，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298430） | accepted |
| name.primary | 王一麒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一麒（CBDB 298430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298430&o=json)

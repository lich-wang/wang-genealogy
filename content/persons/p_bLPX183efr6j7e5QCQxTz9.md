---
schema: wang-person/v1
id: p_bLPX183efr6j7e5QCQxTz9
status: active
merged_into: null
display_name: 王允春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ahoxqE8VEn2vpsSrt7AM6K
        subject_person_id: p_bLPX183efr6j7e5QCQxTz9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3kE31dD6TidEAdkMHJStBc
          claim_id: c_ahoxqE8VEn2vpsSrt7AM6K
          source_id: s_73MKGgU7hNydiwFDgGaiVR
          stance: supports
          locator: CBDB:636124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636124）
          source: &a1
            id: s_73MKGgU7hNydiwFDgGaiVR
            source_type: api_record
            title: 中国历代人物传记资料库：王允春（CBDB 636124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636124&o=json
            external_identifier: CBDB:636124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UbXQDuP5mQZxcHJF17g3nH
        subject_person_id: p_bLPX183efr6j7e5QCQxTz9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王允春，清人物。籍贯福州府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 636124）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mu349KO2HdK3TA77qJ6mHB
          claim_id: c_UbXQDuP5mQZxcHJF17g3nH
          source_id: s_73MKGgU7hNydiwFDgGaiVR
          stance: supports
          locator: CBDB:636124
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

# 王允春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允春 | accepted |
| bio.summary | 王允春，清人物。籍贯福州府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 636124） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允春（CBDB 636124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636124&o=json)

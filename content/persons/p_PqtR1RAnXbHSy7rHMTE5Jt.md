---
schema: wang-person/v1
id: p_PqtR1RAnXbHSy7rHMTE5Jt
status: active
merged_into: null
display_name: 王灼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FCduXPEjGuRY24mQZbFaRj
        subject_person_id: p_PqtR1RAnXbHSy7rHMTE5Jt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_joUeQy1z5eKtJKqFtQT44x
          claim_id: c_FCduXPEjGuRY24mQZbFaRj
          source_id: s_io8hNsHJ7mfCjojW2ipqiv
          stance: supports
          locator: CBDB:69174
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69174）
          source: &a1
            id: s_io8hNsHJ7mfCjojW2ipqiv
            source_type: api_record
            title: 中国历代人物传记资料库：王灼（CBDB 69174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69174&o=json
            external_identifier: CBDB:69174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.143Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Nfv9ZKhnAcaKykXsHg4cgE
        subject_person_id: p_PqtR1RAnXbHSy7rHMTE5Jt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1752年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6G9XNJMrbCDYnHnZkrJ9mM
          claim_id: c_Nfv9ZKhnAcaKykXsHg4cgE
          source_id: s_io8hNsHJ7mfCjojW2ipqiv
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
        id: c_7xieTtDetv1DA6sKnDC3Z8
        subject_person_id: p_PqtR1RAnXbHSy7rHMTE5Jt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1819年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yyMirxbQLXb5gvNdUe2VwU
          claim_id: c_7xieTtDetv1DA6sKnDC3Z8
          source_id: s_io8hNsHJ7mfCjojW2ipqiv
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
        id: c_E74VMT7TwFvSyBzgQp1zyr
        subject_person_id: p_PqtR1RAnXbHSy7rHMTE5Jt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灼（1752年—1819年），清人物。籍贯桐城，入仕鄉貢舉人，曾任縣教諭。（中国历代人物传记资料库 CBDB 69174）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uwV3i7KBD1i7thNrdj0sI1
          claim_id: c_E74VMT7TwFvSyBzgQp1zyr
          source_id: s_io8hNsHJ7mfCjojW2ipqiv
          stance: supports
          locator: CBDB:69174
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

# 王灼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王灼 | accepted |
| birth.date | 1752年 | accepted |
| death.date | 1819年 | accepted |
| bio.summary | 王灼（1752年—1819年），清人物。籍贯桐城，入仕鄉貢舉人，曾任縣教諭。（中国历代人物传记资料库 CBDB 69174） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王灼（CBDB 69174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69174&o=json)

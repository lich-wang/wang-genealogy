---
schema: wang-person/v1
id: p_VAs5sqRLtiCtHFUcKToUB8
status: active
merged_into: null
display_name: 王繼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pWhDT23gB5bbG5ert7iabj
        subject_person_id: p_VAs5sqRLtiCtHFUcKToUB8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7cFxKijeCJrWFK1b4R6m8L
          claim_id: c_pWhDT23gB5bbG5ert7iabj
          source_id: s_p23sqjZC18vb525Xg3FtE7
          stance: supports
          locator: CBDB:502832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（502832）
          source: &a1
            id: s_p23sqjZC18vb525Xg3FtE7
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 502832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502832&o=json
            external_identifier: CBDB:502832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JE8gwR5BEws6iqpj757Amk
        subject_person_id: p_VAs5sqRLtiCtHFUcKToUB8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 502832）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uzfWhIUou8Sq0-F6JSE6gs
          claim_id: c_JE8gwR5BEws6iqpj757Amk
          source_id: s_p23sqjZC18vb525Xg3FtE7
          stance: supports
          locator: CBDB:502832
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

# 王繼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼 | accepted |
| bio.summary | 王繼，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 502832） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 502832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502832&o=json)

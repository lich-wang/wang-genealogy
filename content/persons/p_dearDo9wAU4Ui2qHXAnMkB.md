---
schema: wang-person/v1
id: p_dearDo9wAU4Ui2qHXAnMkB
status: active
merged_into: null
display_name: 王忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yLxMwwzdqiA37efJJEKUTk
        subject_person_id: p_dearDo9wAU4Ui2qHXAnMkB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SF5LMZtGdhF75po3KUF75F
          claim_id: c_yLxMwwzdqiA37efJJEKUTk
          source_id: s_NJPiqCx3fuK2qLxWJ5LfjV
          stance: supports
          locator: CBDB:461608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（461608）
          source: &a1
            id: s_NJPiqCx3fuK2qLxWJ5LfjV
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 461608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461608&o=json
            external_identifier: CBDB:461608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xYeC4kupBgXDpFWsvMQcM8
        subject_person_id: p_dearDo9wAU4Ui2qHXAnMkB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，明人物。曾任知事。（中国历代人物传记资料库 CBDB 461608）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SuACPDv9LQLkuSSPMXKzQf
          claim_id: c_xYeC4kupBgXDpFWsvMQcM8
          source_id: s_NJPiqCx3fuK2qLxWJ5LfjV
          stance: supports
          locator: CBDB:461608
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

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | 王忠，明人物。曾任知事。（中国历代人物传记资料库 CBDB 461608） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 461608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461608&o=json)

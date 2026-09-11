---
schema: wang-person/v1
id: p_3AdiZjUgvWfwvQ5dYBX9dY
status: active
merged_into: null
display_name: 王之梅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3aZPM9ejs8CCfQPwqX6nxy
        subject_person_id: p_3AdiZjUgvWfwvQ5dYBX9dY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Co8LeeX24G1nCoUJNvdpD
          claim_id: c_3aZPM9ejs8CCfQPwqX6nxy
          source_id: s_gr32fvSdG5HRYDQ25Qi7Dg
          stance: supports
          locator: CBDB:574063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574063）
          source: &a1
            id: s_gr32fvSdG5HRYDQ25Qi7Dg
            source_type: api_record
            title: 中国历代人物传记资料库：王之梅（CBDB 574063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574063&o=json
            external_identifier: CBDB:574063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Xs8ggPxwWEN1RXnQYgiyH
        subject_person_id: p_3AdiZjUgvWfwvQ5dYBX9dY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之梅，明人物。籍贯黃陂。（中国历代人物传记资料库 CBDB 574063）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JM3458TixmQohjL_RHQHaB
          claim_id: c_8Xs8ggPxwWEN1RXnQYgiyH
          source_id: s_gr32fvSdG5HRYDQ25Qi7Dg
          stance: supports
          locator: CBDB:574063
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

# 王之梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之梅 | accepted |
| bio.summary | 王之梅，明人物。籍贯黃陂。（中国历代人物传记资料库 CBDB 574063） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之梅（CBDB 574063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574063&o=json)

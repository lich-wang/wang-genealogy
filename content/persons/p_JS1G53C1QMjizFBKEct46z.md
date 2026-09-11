---
schema: wang-person/v1
id: p_JS1G53C1QMjizFBKEct46z
status: active
merged_into: null
display_name: 王樂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8NjLNu2fcLXhpje4hkNBQP
        subject_person_id: p_JS1G53C1QMjizFBKEct46z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wa9WFqoLWtD7D6q4DSpELg
          claim_id: c_8NjLNu2fcLXhpje4hkNBQP
          source_id: s_9TRnZ4nAHK5CzysnFtjWss
          stance: supports
          locator: CBDB:261826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261826）
          source: &a1
            id: s_9TRnZ4nAHK5CzysnFtjWss
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 261826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261826&o=json
            external_identifier: CBDB:261826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BFFfavvVcq76mZxNht1aTJ
        subject_person_id: p_JS1G53C1QMjizFBKEct46z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂，明人物。弘治三年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 261826）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uHUqKIanSW858vWWYwT2q5
          claim_id: c_BFFfavvVcq76mZxNht1aTJ
          source_id: s_9TRnZ4nAHK5CzysnFtjWss
          stance: supports
          locator: CBDB:261826
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

# 王樂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樂 | accepted |
| bio.summary | 王樂，明人物。弘治三年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 261826） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樂（CBDB 261826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261826&o=json)

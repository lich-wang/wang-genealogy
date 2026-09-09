---
schema: wang-person/v1
id: p_2XRBAyxJK1NzbNZAjugN5q
status: active
merged_into: null
display_name: 王盛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xe1UhLtDddmJbSEK2SUpNV
        subject_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SvHgRPpux9T87BngLi98vE
          claim_id: c_Xe1UhLtDddmJbSEK2SUpNV
          source_id: s_5GP2mniHEp9CPhLt9j6mmn
          stance: supports
          locator: CBDB:126711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126711）
          source: &a1
            id: s_5GP2mniHEp9CPhLt9j6mmn
            source_type: api_record
            title: 中国历代人物传记资料库：王盛（CBDB 126711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126711&o=json
            external_identifier: CBDB:126711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AW2kPzu5ntbEDKFxpsF5KW
        subject_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W3ysBYqwPurN6yFNbfR96y
          claim_id: c_AW2kPzu5ntbEDKFxpsF5KW
          source_id: s_5GP2mniHEp9CPhLt9j6mmn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王盛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王盛（CBDB 126711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126711&o=json)

---
schema: wang-person/v1
id: p_X4qkcTWN78K6ovDvG1v7QY
status: active
merged_into: null
display_name: 王德輿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sK6XUTXtZ6kMrT8uon1PkZ
        subject_person_id: p_X4qkcTWN78K6ovDvG1v7QY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德輿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DNbk1uK7W8pwJDNK4i7Sau
          claim_id: c_sK6XUTXtZ6kMrT8uon1PkZ
          source_id: s_YxAfyRW5sJ6DdhYmqaWzrU
          stance: supports
          locator: CBDB:92115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92115）
          source: &a1
            id: s_YxAfyRW5sJ6DdhYmqaWzrU
            source_type: api_record
            title: 中国历代人物传记资料库：王德輿（CBDB 92115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92115&o=json
            external_identifier: CBDB:92115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oCHZ5GsN2ZUT6GhEKsBGDz
        subject_person_id: p_X4qkcTWN78K6ovDvG1v7QY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6BiLTGufp1n3xQGUyvLtKD
          claim_id: c_oCHZ5GsN2ZUT6GhEKsBGDz
          source_id: s_YxAfyRW5sJ6DdhYmqaWzrU
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

# 王德輿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德輿 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德輿（CBDB 92115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92115&o=json)

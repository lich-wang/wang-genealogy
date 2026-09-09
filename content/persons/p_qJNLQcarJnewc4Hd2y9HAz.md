---
schema: wang-person/v1
id: p_qJNLQcarJnewc4Hd2y9HAz
status: active
merged_into: null
display_name: 王衍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vqoYdKNZH35KxSP848X8tB
        subject_person_id: p_qJNLQcarJnewc4Hd2y9HAz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x1aDsCbE8aZgN5kdCqkQQA
          claim_id: c_vqoYdKNZH35KxSP848X8tB
          source_id: s_zYhfRk7DbfsxzZRa1KRQ7e
          stance: supports
          locator: CBDB:135461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（135461）
          source: &a1
            id: s_zYhfRk7DbfsxzZRa1KRQ7e
            source_type: api_record
            title: 中国历代人物传记资料库：王衍（CBDB 135461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135461&o=json
            external_identifier: CBDB:135461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HAGzKNbH4stJDVmNB99uim
        subject_person_id: p_qJNLQcarJnewc4Hd2y9HAz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为西晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DGmn4fGGsdSngCZuHaCvN3
          claim_id: c_HAGzKNbH4stJDVmNB99uim
          source_id: s_zYhfRk7DbfsxzZRa1KRQ7e
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

# 王衍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍 | accepted |
| bio.summary | CBDB 记载为西晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衍（CBDB 135461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135461&o=json)

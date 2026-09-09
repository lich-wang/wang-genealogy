---
schema: wang-person/v1
id: p_tHiomu2Kfq3MnRZ27Fd5e9
status: active
merged_into: null
display_name: 王善慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eNem67FKaGhJ497HH3xS5e
        subject_person_id: p_tHiomu2Kfq3MnRZ27Fd5e9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_931Etr7zvcj98HHqRkb7Za
          claim_id: c_eNem67FKaGhJ497HH3xS5e
          source_id: s_5o5zzpdeCf84fZut7Ps8jZ
          stance: supports
          locator: CBDB:636574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636574）
          source: &a1
            id: s_5o5zzpdeCf84fZut7Ps8jZ
            source_type: api_record
            title: 中国历代人物传记资料库：王善慶（CBDB 636574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636574&o=json
            external_identifier: CBDB:636574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ns6Dxn9qvaG4Z3kGCjNxpU
        subject_person_id: p_tHiomu2Kfq3MnRZ27Fd5e9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B2Nx9UrDNY7euYyiV35Ee9
          claim_id: c_Ns6Dxn9qvaG4Z3kGCjNxpU
          source_id: s_5o5zzpdeCf84fZut7Ps8jZ
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

# 王善慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王善慶 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王善慶（CBDB 636574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636574&o=json)

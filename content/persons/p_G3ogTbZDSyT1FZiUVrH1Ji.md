---
schema: wang-person/v1
id: p_G3ogTbZDSyT1FZiUVrH1Ji
status: active
merged_into: null
display_name: 王旉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_go31f44BXNZfEQJZBdrrDF
        subject_person_id: p_G3ogTbZDSyT1FZiUVrH1Ji
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iFPZLpCNUTHF6LcFGuZiKW
          claim_id: c_go31f44BXNZfEQJZBdrrDF
          source_id: s_SFENMM5BGiNNKmpZvsM2eD
          stance: supports
          locator: CBDB:453790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453790）
          source: &a1
            id: s_SFENMM5BGiNNKmpZvsM2eD
            source_type: api_record
            title: 中国历代人物传记资料库：王旉（CBDB 453790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453790&o=json
            external_identifier: CBDB:453790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.417Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kCXEXka26i5GPGiKxaYA1c
        subject_person_id: p_G3ogTbZDSyT1FZiUVrH1Ji
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TR85S62vL9du48HPJWRNo7
          claim_id: c_kCXEXka26i5GPGiKxaYA1c
          source_id: s_SFENMM5BGiNNKmpZvsM2eD
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

# 王旉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旉（CBDB 453790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453790&o=json)

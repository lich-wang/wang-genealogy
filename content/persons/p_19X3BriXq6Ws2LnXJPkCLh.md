---
schema: wang-person/v1
id: p_19X3BriXq6Ws2LnXJPkCLh
status: active
merged_into: null
display_name: 王廷薰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CeGNRaLqACVC8hpL4cVEMG
        subject_person_id: p_19X3BriXq6Ws2LnXJPkCLh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷薰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GDVhLUk9qbZoG1eQUcUtFW
          claim_id: c_CeGNRaLqACVC8hpL4cVEMG
          source_id: s_du4g1VQ4qRBTb5Y9614aCW
          stance: supports
          locator: CBDB:637553
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637553）
          source: &a1
            id: s_du4g1VQ4qRBTb5Y9614aCW
            source_type: api_record
            title: 中国历代人物传记资料库：王廷薰（CBDB 637553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637553&o=json
            external_identifier: CBDB:637553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x1FF2gZYRPbmzEmn2GhXXL
        subject_person_id: p_19X3BriXq6Ws2LnXJPkCLh
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
        - id: cs_caU9JTS2SyD1CH4YA5dkyU
          claim_id: c_x1FF2gZYRPbmzEmn2GhXXL
          source_id: s_du4g1VQ4qRBTb5Y9614aCW
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

# 王廷薰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷薰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷薰（CBDB 637553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637553&o=json)

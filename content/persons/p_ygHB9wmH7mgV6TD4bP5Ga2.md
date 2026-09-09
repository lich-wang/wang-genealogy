---
schema: wang-person/v1
id: p_ygHB9wmH7mgV6TD4bP5Ga2
status: active
merged_into: null
display_name: 王其淦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fL1UB6FjSD2urMViWG3Mwt
        subject_person_id: p_ygHB9wmH7mgV6TD4bP5Ga2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其淦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cg8oAPXMqLAsU4th7H4QNP
          claim_id: c_fL1UB6FjSD2urMViWG3Mwt
          source_id: s_NwBZ6uXChrjy6qDJiWQ28X
          stance: supports
          locator: CBDB:636333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636333）
          source: &a1
            id: s_NwBZ6uXChrjy6qDJiWQ28X
            source_type: api_record
            title: 中国历代人物传记资料库：王其淦（CBDB 636333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636333&o=json
            external_identifier: CBDB:636333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N3K3wXnPdNxQMDMx1S2fBM
        subject_person_id: p_ygHB9wmH7mgV6TD4bP5Ga2
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
        - id: cs_RokjaqMxfpC7JJt8MTL7kz
          claim_id: c_N3K3wXnPdNxQMDMx1S2fBM
          source_id: s_NwBZ6uXChrjy6qDJiWQ28X
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

# 王其淦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其淦 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王其淦（CBDB 636333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636333&o=json)

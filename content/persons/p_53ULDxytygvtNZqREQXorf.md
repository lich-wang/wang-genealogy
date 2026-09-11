---
schema: wang-person/v1
id: p_53ULDxytygvtNZqREQXorf
status: active
merged_into: null
display_name: 王致柔
cbdb_id: 13483
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cY6SHaSxq5f2wTMewPZas1
        subject_person_id: p_53ULDxytygvtNZqREQXorf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致柔，宋人物。中国历代人物传记资料库（CBDB）以人物编号 13483 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Chq7ZQ9oURAL8ASWQFZzSL
          claim_id: c_cY6SHaSxq5f2wTMewPZas1
          source_id: s_x2CLbuNBUwcpyoZaswg1HW
          stance: supports
          locator: CBDB:13483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_x2CLbuNBUwcpyoZaswg1HW
            source_type: api_record
            title: 中国历代人物传记资料库：王致柔（CBDB 13483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13483&o=json
            external_identifier: CBDB:13483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Hf4sDoYpnLra3aZY7TBQG
        subject_person_id: p_53ULDxytygvtNZqREQXorf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致柔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pR4L37EFZM3acDLWpN7SFt
          claim_id: c_5Hf4sDoYpnLra3aZY7TBQG
          source_id: s_x2CLbuNBUwcpyoZaswg1HW
          stance: supports
          locator: CBDB:13483
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_x2CLbuNBUwcpyoZaswg1HW
            source_type: api_record
            title: 中国历代人物传记资料库：王致柔（CBDB 13483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13483&o=json
            external_identifier: CBDB:13483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_XvezikQ4D_pqBa5No2Z36e
        subject_person_id: p_53ULDxytygvtNZqREQXorf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fR4FLcz2ugqUB7HaB2sR2P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_coBmfww5hRdgD_DVEpGwOa
          claim_id: c_XvezikQ4D_pqBa5No2Z36e
          source_id: s_x2CLbuNBUwcpyoZaswg1HW
          stance: supports
          locator: CBDB 双向互证（子 王日永 ⇄ 父 王致柔）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_fR4FLcz2ugqUB7HaB2sR2P
        status: active
        display_name: 王日永
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王致柔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王致柔，宋人物。中国历代人物传记资料库（CBDB）以人物编号 13483 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王致柔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fR4FLcz2ugqUB7HaB2sR2P | 王日永 | accepted |

## 外部来源

- [中国历代人物传记资料库：王致柔（CBDB 13483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13483&o=json)

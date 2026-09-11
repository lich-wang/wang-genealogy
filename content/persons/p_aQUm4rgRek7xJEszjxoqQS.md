---
schema: wang-person/v1
id: p_aQUm4rgRek7xJEszjxoqQS
status: active
merged_into: null
display_name: 王光祖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tXAgyqRV6FaAgxVL7FKU9T
        subject_person_id: p_aQUm4rgRek7xJEszjxoqQS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NeVmFMwQVfYEvg17KjaNNg
          claim_id: c_tXAgyqRV6FaAgxVL7FKU9T
          source_id: s_J7b62J7CxjjbB45rxhnTGR
          stance: supports
          locator: CBDB:38452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38452）
          source: &a1
            id: s_J7b62J7CxjjbB45rxhnTGR
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 38452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38452&o=json
            external_identifier: CBDB:38452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aBr9b1F9qNomV48wq5Fiyw
        subject_person_id: p_aQUm4rgRek7xJEszjxoqQS
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
        - id: cs_hgaosBQx8dXZJ5ttAPB5bR
          claim_id: c_aBr9b1F9qNomV48wq5Fiyw
          source_id: s_J7b62J7CxjjbB45rxhnTGR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_icQ7U9gmx24aCJyCY0XZy9
        subject_person_id: p_4DMwFrJ3LdwEVHWXHa7AR4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aQUm4rgRek7xJEszjxoqQS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QlwjOmso-bEOXShbOMqbPC
          claim_id: c_icQ7U9gmx24aCJyCY0XZy9
          source_id: s_nV4MaUuWGdefQd96RaG1Wf
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1560：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nV4MaUuWGdefQd96RaG1Wf
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 38294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38294&o=json
            external_identifier: CBDB:38294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4DMwFrJ3LdwEVHWXHa7AR4
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王光祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光祖 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4DMwFrJ3LdwEVHWXHa7AR4 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光祖（CBDB 38452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38452&o=json)
- [中国历代人物传记资料库：王珪（CBDB 38294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38294&o=json)

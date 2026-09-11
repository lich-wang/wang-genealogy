---
schema: wang-person/v1
id: p_frf9N66kjg8BdEBvBjaPSU
status: active
merged_into: null
display_name: 王玄爽
cbdb_id: 166617
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uPX2RX6jXLHNqC8JLJZbqm
        subject_person_id: p_frf9N66kjg8BdEBvBjaPSU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄爽，唐人物。中国历代人物传记资料库（CBDB）以人物编号 166617 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_hOhklEtDcZq7ZaNN6OdL_F
          claim_id: c_uPX2RX6jXLHNqC8JLJZbqm
          source_id: s_3Ji4nrM5G8wMmKjLa5NBc3
          stance: supports
          locator: CBDB:166617
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_3Ji4nrM5G8wMmKjLa5NBc3
            source_type: api_record
            title: 中国历代人物传记资料库：王玄爽（CBDB 166617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166617&o=json
            external_identifier: CBDB:166617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pG38Rz86ac9Tka5fgw86LD
        subject_person_id: p_frf9N66kjg8BdEBvBjaPSU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄爽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M88XV4m6Jp49XLGMkDHAzi
          claim_id: c_pG38Rz86ac9Tka5fgw86LD
          source_id: s_3Ji4nrM5G8wMmKjLa5NBc3
          stance: supports
          locator: CBDB:166617
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_3Ji4nrM5G8wMmKjLa5NBc3
            source_type: api_record
            title: 中国历代人物传记资料库：王玄爽（CBDB 166617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166617&o=json
            external_identifier: CBDB:166617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_b0_m85zaAbGOnikxL0KoJM
        subject_person_id: p_frf9N66kjg8BdEBvBjaPSU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fMZyWS3dvGJ6dk4fbtE9VD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u0UFiLt6tZs2r779A_FnEJ
          claim_id: c_b0_m85zaAbGOnikxL0KoJM
          source_id: s_2rG1xxFnTzw5DQEiGM6zZu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2rG1xxFnTzw5DQEiGM6zZu
            source_type: api_record
            title: 中国历代人物传记资料库：王游仙（CBDB 192154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192154&o=json
            external_identifier: CBDB:192154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fMZyWS3dvGJ6dk4fbtE9VD
        status: active
        display_name: 王游仙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玄爽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玄爽，唐人物。中国历代人物传记资料库（CBDB）以人物编号 166617 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王玄爽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fMZyWS3dvGJ6dk4fbtE9VD | 王游仙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玄爽（CBDB 166617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166617&o=json)
- [中国历代人物传记资料库：王游仙（CBDB 192154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192154&o=json)

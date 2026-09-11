---
schema: wang-person/v1
id: p_VXJ2xmm79MM68JW6yyEiQ6
status: active
merged_into: null
display_name: 王穀振
cbdb_id: 343303
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L6tFNPb4G2cgRRPrYREF4p
        subject_person_id: p_VXJ2xmm79MM68JW6yyEiQ6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穀振，清人物。中国历代人物传记资料库（CBDB）以人物编号 343303 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_8mBLoA8Y3f3R7CdZzM7Vn8
          claim_id: c_L6tFNPb4G2cgRRPrYREF4p
          source_id: s_8SRsQBs4sszPJ4dC7qAYZR
          stance: supports
          locator: CBDB:343303
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_8SRsQBs4sszPJ4dC7qAYZR
            source_type: api_record
            title: 中国历代人物传记资料库：王穀振（CBDB 343303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343303&o=json
            external_identifier: CBDB:343303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:15.941Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_s1fMZMNbqfFx2REnVQ43Lg
        subject_person_id: p_VXJ2xmm79MM68JW6yyEiQ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穀振
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MJ9FzyX4No3SBSUzRkENMn
          claim_id: c_s1fMZMNbqfFx2REnVQ43Lg
          source_id: s_8SRsQBs4sszPJ4dC7qAYZR
          stance: supports
          locator: CBDB:343303
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4501-4600）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_8SRsQBs4sszPJ4dC7qAYZR
            source_type: api_record
            title: 中国历代人物传记资料库：王穀振（CBDB 343303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343303&o=json
            external_identifier: CBDB:343303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:15.941Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b1_et7FTwdC6PtZaCKbIb8
        subject_person_id: p_hFvKjcZzAHBT5yPLcNPrer
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VXJ2xmm79MM68JW6yyEiQ6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uh6wNhQFJkZnoUfXmXgmwu
          claim_id: c_b1_et7FTwdC6PtZaCKbIb8
          source_id: s_VZG21ML9jSUQfaey7co6Fh
          stance: supports
          locator: 紹興府志:八十卷，Igid=316225：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VZG21ML9jSUQfaey7co6Fh
            source_type: api_record
            title: 中国历代人物传记资料库：王兆修（CBDB 556142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556142&o=json
            external_identifier: CBDB:556142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.525Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hFvKjcZzAHBT5yPLcNPrer
        status: active
        display_name: 王兆修
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王穀振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王穀振，清人物。中国历代人物传记资料库（CBDB）以人物编号 343303 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王穀振 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hFvKjcZzAHBT5yPLcNPrer | 王兆修 | accepted |

## 外部来源

- [中国历代人物传记资料库：王穀振（CBDB 343303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343303&o=json)
- [中国历代人物传记资料库：王兆修（CBDB 556142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556142&o=json)

---
schema: wang-person/v1
id: p_oJyHrTtA8vuQzWweqp45TE
status: active
merged_into: null
display_name: 王以佐
cbdb_id: 216206
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_twYEnDFGm5WBSovSJisGym
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以佐，明人物。中国历代人物传记资料库（CBDB）以人物编号 216206 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_varGF-lqnc3cg_xCzTiKVC
          claim_id: c_twYEnDFGm5WBSovSJisGym
          source_id: s_SHB1Q3HUDhwHtdLgBrPtUp
          stance: supports
          locator: CBDB:216206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_SHB1Q3HUDhwHtdLgBrPtUp
            source_type: api_record
            title: 中国历代人物传记资料库：王以佐（CBDB 216206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216206&o=json
            external_identifier: CBDB:216206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N4S9nKt1nDvFPHjUAaW6qX
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zgcxtRPWCKT7QNEG6zFNiv
          claim_id: c_N4S9nKt1nDvFPHjUAaW6qX
          source_id: s_SHB1Q3HUDhwHtdLgBrPtUp
          stance: supports
          locator: CBDB:216206
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_SHB1Q3HUDhwHtdLgBrPtUp
            source_type: api_record
            title: 中国历代人物传记资料库：王以佐（CBDB 216206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216206&o=json
            external_identifier: CBDB:216206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Xlbgvxg4M5ARYKg0ZwQ8Mo
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OH5PO2KGnFzB2fcNA3JVbK
          claim_id: c_Xlbgvxg4M5ARYKg0ZwQ8Mo
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q9EatNnQ4FxJEyR2y492WM
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 206312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206312&o=json
            external_identifier: CBDB:206312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J55afBgCkqtPSYRig4M9VL
        status: active
        display_name: 王約
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王以佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以佐，明人物。中国历代人物传记资料库（CBDB）以人物编号 216206 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王以佐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_J55afBgCkqtPSYRig4M9VL | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以佐（CBDB 216206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216206&o=json)
- [中国历代人物传记资料库：王約（CBDB 206312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206312&o=json)

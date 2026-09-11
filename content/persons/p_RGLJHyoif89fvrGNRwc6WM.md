---
schema: wang-person/v1
id: p_RGLJHyoif89fvrGNRwc6WM
status: active
merged_into: null
display_name: 王天位
cbdb_id: 118473
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U2bJwRfN8xyfTQMwkqrtGh
        subject_person_id: p_RGLJHyoif89fvrGNRwc6WM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天位，清人物。中国历代人物传记资料库（CBDB）以人物编号 118473 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Xu0x1WWK20sD_L8VMLYhhe
          claim_id: c_U2bJwRfN8xyfTQMwkqrtGh
          source_id: s_71Mt4553fb1njk1qBu8uUc
          stance: supports
          locator: CBDB:118473
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_71Mt4553fb1njk1qBu8uUc
            source_type: api_record
            title: 中国历代人物传记资料库：王天位（CBDB 118473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118473&o=json
            external_identifier: CBDB:118473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gves1JseHWciHzGbG4653c
        subject_person_id: p_RGLJHyoif89fvrGNRwc6WM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天位
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oDSNeXNikUt6sDgBjPWgLt
          claim_id: c_gves1JseHWciHzGbG4653c
          source_id: s_71Mt4553fb1njk1qBu8uUc
          stance: supports
          locator: CBDB:118473
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_71Mt4553fb1njk1qBu8uUc
            source_type: api_record
            title: 中国历代人物传记资料库：王天位（CBDB 118473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118473&o=json
            external_identifier: CBDB:118473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_te4JeTAQtVYYBMjpGXU1z2
        subject_person_id: p_RGLJHyoif89fvrGNRwc6WM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_x3pFN1AiZ8iYSZd4sS9RJe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IMQPFmH7nVKuUkAYnzd4Vj
          claim_id: c_te4JeTAQtVYYBMjpGXU1z2
          source_id: s_zvEYwp03b5X8oGGTo9BEVu
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2584, HuWenKai #333：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zvEYwp03b5X8oGGTo9BEVu
            source_type: api_record
            title: 中国历代人物传记资料库：李若琛（CBDB 118472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118472&o=json
            external_identifier: CBDB:118472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_x3pFN1AiZ8iYSZd4sS9RJe
        status: active
        display_name: 李若琛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王天位

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王天位，清人物。中国历代人物传记资料库（CBDB）以人物编号 118473 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王天位 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_x3pFN1AiZ8iYSZd4sS9RJe | 李若琛 | accepted |

## 外部来源

- [中国历代人物传记资料库：李若琛（CBDB 118472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118472&o=json)
- [中国历代人物传记资料库：王天位（CBDB 118473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118473&o=json)

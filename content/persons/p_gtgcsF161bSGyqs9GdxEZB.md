---
schema: wang-person/v1
id: p_gtgcsF161bSGyqs9GdxEZB
status: active
merged_into: null
display_name: 王鵾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_efvh7U3Z3NcbD54TZiKcy8
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ynsfZwDXhV546QBkPa8dP8
          claim_id: c_efvh7U3Z3NcbD54TZiKcy8
          source_id: s_TFgYfx152QQ5u1X47MSA34
          stance: supports
          locator: CBDB:217983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217983）
          source: &a1
            id: s_TFgYfx152QQ5u1X47MSA34
            source_type: api_record
            title: 中国历代人物传记资料库：王鵾（CBDB 217983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217983&o=json
            external_identifier: CBDB:217983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JkeLbmaUSSYwhLtXZLAHew
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵾，明人物。萬曆五年進士，籍贯長安，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 217983）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SH7mGuKUPLSfgQmmZzdGtY
          claim_id: c_JkeLbmaUSSYwhLtXZLAHew
          source_id: s_TFgYfx152QQ5u1X47MSA34
          stance: supports
          locator: CBDB:217983
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GetaqOxZxDd1Ei5Z_9zthR
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MoTp1H1qMsn6hE765X8qFG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ys30yOON_tEDJZf-aAb7-U
          claim_id: c_GetaqOxZxDd1Ei5Z_9zthR
          source_id: s_TFgYfx152QQ5u1X47MSA34
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百七十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MoTp1H1qMsn6hE765X8qFG
        status: active
        display_name: 王九儀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鵾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵾 | accepted |
| bio.summary | 王鵾，明人物。萬曆五年進士，籍贯長安，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 217983） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MoTp1H1qMsn6hE765X8qFG | 王九儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鵾（CBDB 217983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217983&o=json)

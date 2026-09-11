---
schema: wang-person/v1
id: p_V5CP7fBxbZw5t7gjsTT95t
status: active
merged_into: null
display_name: 王起茂
cbdb_id: 232788
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qQapV5dNMmro6uBxVDYeRW
        subject_person_id: p_V5CP7fBxbZw5t7gjsTT95t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起茂，明人物。中国历代人物传记资料库（CBDB）以人物编号 232788 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_3lNlES6juFZ8bnh-RndcoU
          claim_id: c_qQapV5dNMmro6uBxVDYeRW
          source_id: s_oop3RoU3kHUZWbLtALNDDJ
          stance: supports
          locator: CBDB:232788
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oop3RoU3kHUZWbLtALNDDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王起茂（CBDB 232788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232788&o=json
            external_identifier: CBDB:232788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7pufsfjGkgbeWhXDaZnGJ9
        subject_person_id: p_V5CP7fBxbZw5t7gjsTT95t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起茂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_naVBzioNBsx5QRvAGa7rNa
          claim_id: c_7pufsfjGkgbeWhXDaZnGJ9
          source_id: s_oop3RoU3kHUZWbLtALNDDJ
          stance: supports
          locator: CBDB:232788
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_oop3RoU3kHUZWbLtALNDDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王起茂（CBDB 232788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232788&o=json
            external_identifier: CBDB:232788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_f27SraT6b_2_RF5HxIgbSE
        subject_person_id: p_V5CP7fBxbZw5t7gjsTT95t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gEPN4Y1sSEhqz6ktqB2iGE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fJBNQummhH_g_qjbZub1JB
          claim_id: c_f27SraT6b_2_RF5HxIgbSE
          source_id: s_oop3RoU3kHUZWbLtALNDDJ
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gEPN4Y1sSEhqz6ktqB2iGE
        status: active
        display_name: 王所用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王起茂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王起茂，明人物。中国历代人物传记资料库（CBDB）以人物编号 232788 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王起茂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gEPN4Y1sSEhqz6ktqB2iGE | 王所用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王起茂（CBDB 232788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232788&o=json)

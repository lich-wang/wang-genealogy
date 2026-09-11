---
schema: wang-person/v1
id: p_hkkZy7J5ztQnL3t6fCHvcP
status: active
merged_into: null
display_name: 王崇志
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SnqyCxwMGjLEvT5Vh66GAm
        subject_person_id: p_hkkZy7J5ztQnL3t6fCHvcP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aLWoVQRcUXEVZ99rQFbYav
          claim_id: c_SnqyCxwMGjLEvT5Vh66GAm
          source_id: s_wHFzb7Qc9sYr3zwUJKt6y2
          stance: supports
          locator: CBDB:248129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248129）
          source: &a1
            id: s_wHFzb7Qc9sYr3zwUJKt6y2
            source_type: api_record
            title: 中国历代人物传记资料库：王崇志（CBDB 248129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248129&o=json
            external_identifier: CBDB:248129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_brKjH4AWbZmZiKugbaYDvT
        subject_person_id: p_hkkZy7J5ztQnL3t6fCHvcP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇志，明人物。成化十一年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 248129）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m2LyzQ_SE1fxM3-NhKub3U
          claim_id: c_brKjH4AWbZmZiKugbaYDvT
          source_id: s_wHFzb7Qc9sYr3zwUJKt6y2
          stance: supports
          locator: CBDB:248129
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BDC364T3DQiPpWQbiFssyW
        subject_person_id: p_hkkZy7J5ztQnL3t6fCHvcP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RhXEAWNQDw7DbX4ChZtyvC
          claim_id: c_BDC364T3DQiPpWQbiFssyW
          source_id: s_dnGcX27WSqLJQi9Wfz8Gdu
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第四十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dnGcX27WSqLJQi9Wfz8Gdu
            source_type: api_record
            title: 中国历代人物传记资料库：王嶽（CBDB 199663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199663&o=json
            external_identifier: CBDB:199663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cQq1LyruU9xa7MkCKy9rQ3
        status: active
        display_name: 王嶽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇志 | accepted |
| bio.summary | 王崇志，明人物。成化十一年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 248129） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cQq1LyruU9xa7MkCKy9rQ3 | 王嶽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇志（CBDB 248129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248129&o=json)
- [中国历代人物传记资料库：王嶽（CBDB 199663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199663&o=json)

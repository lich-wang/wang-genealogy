---
schema: wang-person/v1
id: p_mFjnSDjQyLtEFJz89osNQM
status: active
merged_into: null
display_name: 王思江
cbdb_id: 260516
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NxtFJHYmBncFs1VDc7Mshm
        subject_person_id: p_mFjnSDjQyLtEFJz89osNQM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思江，明人物。中国历代人物传记资料库（CBDB）以人物编号 260516 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_P7TknT0N8UPUOxMLttvdvp
          claim_id: c_NxtFJHYmBncFs1VDc7Mshm
          source_id: s_pRJzwknxkLQG6L3DRfYtt1
          stance: supports
          locator: CBDB:260516
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pRJzwknxkLQG6L3DRfYtt1
            source_type: api_record
            title: 中国历代人物传记资料库：王思江（CBDB 260516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260516&o=json
            external_identifier: CBDB:260516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aGfzMe7D6WVHCKQ2QCfVj1
        subject_person_id: p_mFjnSDjQyLtEFJz89osNQM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思江
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eMP9wbbRG7ZD4365RAkj8K
          claim_id: c_aGfzMe7D6WVHCKQ2QCfVj1
          source_id: s_pRJzwknxkLQG6L3DRfYtt1
          stance: supports
          locator: CBDB:260516
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_pRJzwknxkLQG6L3DRfYtt1
            source_type: api_record
            title: 中国历代人物传记资料库：王思江（CBDB 260516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260516&o=json
            external_identifier: CBDB:260516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_58--UJQ2dUSsUkQDOeq2-z
        subject_person_id: p_mFjnSDjQyLtEFJz89osNQM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qiTRo1Tod-VgBsA6Dah3Ak
          claim_id: c_58--UJQ2dUSsUkQDOeq2-z
          source_id: s_pRJzwknxkLQG6L3DRfYtt1
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百九十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uxPkZUqsvSYKoUuB2wuXGH
        status: active
        display_name: 王鐶
        merged_into_person_id: null
  other: []
---

# 王思江

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思江，明人物。中国历代人物传记资料库（CBDB）以人物编号 260516 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王思江 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_uxPkZUqsvSYKoUuB2wuXGH | 王鐶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思江（CBDB 260516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260516&o=json)

---
schema: wang-person/v1
id: p_nex7VLB7oCWkGk7bP71nNb
status: active
merged_into: null
display_name: 王玉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3N4oMNkrp1cfKPYQzsEm3v
        subject_person_id: p_nex7VLB7oCWkGk7bP71nNb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hwUx4QDWpDJ4PsxFwVdHeP
          claim_id: c_3N4oMNkrp1cfKPYQzsEm3v
          source_id: s_2yLxF8gP3XQpkAcB2GPYx3
          stance: supports
          locator: CBDB:327935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327935）
          source: &a1
            id: s_2yLxF8gP3XQpkAcB2GPYx3
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 327935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327935&o=json
            external_identifier: CBDB:327935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H313SLZ5FLja4Y7zzW72Hm
        subject_person_id: p_nex7VLB7oCWkGk7bP71nNb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327935）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qfCPA0WVxHyJOJN95Dz8nk
          claim_id: c_H313SLZ5FLja4Y7zzW72Hm
          source_id: s_2yLxF8gP3XQpkAcB2GPYx3
          stance: supports
          locator: CBDB:327935
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
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
        id: c_on1r_yV9rYH51gWW5qYuvS
        subject_person_id: p_nex7VLB7oCWkGk7bP71nNb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZK3fTgg7z2XBX2KyZPuyDP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j7E8-IbX4iPACaW2thG0kh
          claim_id: c_on1r_yV9rYH51gWW5qYuvS
          source_id: s_2yLxF8gP3XQpkAcB2GPYx3
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZK3fTgg7z2XBX2KyZPuyDP
        status: active
        display_name: 王澤
        merged_into_person_id: null
  other: []
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | 王玉，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327935） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ZK3fTgg7z2XBX2KyZPuyDP | 王澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 327935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327935&o=json)

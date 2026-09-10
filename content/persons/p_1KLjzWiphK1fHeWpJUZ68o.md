---
schema: wang-person/v1
id: p_1KLjzWiphK1fHeWpJUZ68o
status: active
merged_into: null
display_name: 王祚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wwviRGcXDV4eXZh8FVvyJX
        subject_person_id: p_1KLjzWiphK1fHeWpJUZ68o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qrVYPMafwARL6tHvFzzGVU
          claim_id: c_wwviRGcXDV4eXZh8FVvyJX
          source_id: s_zNe5p4xHKGdWAQfSc7GtbZ
          stance: supports
          locator: CBDB:262667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262667）
          source: &a1
            id: s_zNe5p4xHKGdWAQfSc7GtbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 262667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262667&o=json
            external_identifier: CBDB:262667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M1LzNWN3qB4b4xmdYwkAGL
        subject_person_id: p_1KLjzWiphK1fHeWpJUZ68o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N8HNAvV3MJwo6LtwnMH9Z9
          claim_id: c_M1LzNWN3qB4b4xmdYwkAGL
          source_id: s_zNe5p4xHKGdWAQfSc7GtbZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_riI0ksbXVXtNAH0_4-FPzd
        subject_person_id: p_1KLjzWiphK1fHeWpJUZ68o
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sCt13UNRrBt2qKTE8fxxQi
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OnVXZ1NvjlFc8pFARfCdAg
          claim_id: c_riI0ksbXVXtNAH0_4-FPzd
          source_id: s_zNe5p4xHKGdWAQfSc7GtbZ
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sCt13UNRrBt2qKTE8fxxQi
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  other: []
---

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sCt13UNRrBt2qKTE8fxxQi | 王鉞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祚（CBDB 262667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262667&o=json)

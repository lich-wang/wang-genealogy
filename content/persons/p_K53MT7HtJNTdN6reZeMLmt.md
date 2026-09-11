---
schema: wang-person/v1
id: p_K53MT7HtJNTdN6reZeMLmt
status: active
merged_into: null
display_name: 王愿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_84wSkYyPiPi77Qdwf59k6S
        subject_person_id: p_K53MT7HtJNTdN6reZeMLmt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZZXkt7WND8jznwjqxvh1GV
          claim_id: c_84wSkYyPiPi77Qdwf59k6S
          source_id: s_oCfaAtuzgTByaRQLtsn12H
          stance: supports
          locator: CBDB:217338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217338）
          source: &a1
            id: s_oCfaAtuzgTByaRQLtsn12H
            source_type: api_record
            title: 中国历代人物传记资料库：王愿（CBDB 217338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217338&o=json
            external_identifier: CBDB:217338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GuXEofTXAcXnnjH1FhUKM3
        subject_person_id: p_K53MT7HtJNTdN6reZeMLmt
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
        - id: cs_Ash4t45ukV8MjobsN6QuPG
          claim_id: c_GuXEofTXAcXnnjH1FhUKM3
          source_id: s_oCfaAtuzgTByaRQLtsn12H
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
        id: c_VadXJtFuuRGXg6YGxqwGeI
        subject_person_id: p_K53MT7HtJNTdN6reZeMLmt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vLHvb3BCMGxfLW94457af3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-2Tgz8GrJRt0v3153IzBDx
          claim_id: c_VadXJtFuuRGXg6YGxqwGeI
          source_id: s_oCfaAtuzgTByaRQLtsn12H
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百一十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vLHvb3BCMGxfLW94457af3
        status: active
        display_name: 王亮
        merged_into_person_id: null
  other: []
---

# 王愿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vLHvb3BCMGxfLW94457af3 | 王亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愿（CBDB 217338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217338&o=json)

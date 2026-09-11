---
schema: wang-person/v1
id: p_Cp5VJGjxw9yctx32HyVBDx
status: active
merged_into: null
display_name: 王格
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iNq1reHAop15VA7br1q2Uu
        subject_person_id: p_Cp5VJGjxw9yctx32HyVBDx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_goU9QQyRzJEza4keGMx26a
          claim_id: c_iNq1reHAop15VA7br1q2Uu
          source_id: s_2eZdE8NMR8pMg632BXaVt3
          stance: supports
          locator: CBDB:39536
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39536）
          source: &a1
            id: s_2eZdE8NMR8pMg632BXaVt3
            source_type: api_record
            title: 中国历代人物传记资料库：王格（CBDB 39536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39536&o=json
            external_identifier: CBDB:39536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tgLMPRGoABL7T9HfXv2p1X
        subject_person_id: p_Cp5VJGjxw9yctx32HyVBDx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sNc75W8oAzuEkrfAyKaZrK
          claim_id: c_tgLMPRGoABL7T9HfXv2p1X
          source_id: s_2eZdE8NMR8pMg632BXaVt3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ovWMQAvCO-mtUcpmLJySMe
        subject_person_id: p_Cp5VJGjxw9yctx32HyVBDx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ofxbM2vdn8y7FJpq6LGJYE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-vy3xvPDHbUH4p3h0BlaXg
          claim_id: c_ovWMQAvCO-mtUcpmLJySMe
          source_id: s_2eZdE8NMR8pMg632BXaVt3
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ofxbM2vdn8y7FJpq6LGJYE
        status: active
        display_name: 王侗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王格

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王格 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ofxbM2vdn8y7FJpq6LGJYE | 王侗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王格（CBDB 39536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39536&o=json)

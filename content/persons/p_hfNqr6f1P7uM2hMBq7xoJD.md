---
schema: wang-person/v1
id: p_hfNqr6f1P7uM2hMBq7xoJD
status: active
merged_into: null
display_name: 王崇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MQK8zcwGjUwHrrF4uP6s8A
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k6PmnPPNLw7bgJKfGEzK7r
          claim_id: c_MQK8zcwGjUwHrrF4uP6s8A
          source_id: s_rVUUYi5Q8bixb6BEbrMtKa
          stance: supports
          locator: CBDB:227709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227709）
          source: &a1
            id: s_rVUUYi5Q8bixb6BEbrMtKa
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 227709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227709&o=json
            external_identifier: CBDB:227709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DGDM9KkNF952fRusjnQTjL
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
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
        - id: cs_TNCJWLSGe2d2DVMU9jvfSR
          claim_id: c_DGDM9KkNF952fRusjnQTjL
          source_id: s_rVUUYi5Q8bixb6BEbrMtKa
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
        id: c_5szM0xOixoWqRzEb6GyeBB
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PWkk3D9x0o0ODoiI0nj_x
          claim_id: c_5szM0xOixoWqRzEb6GyeBB
          source_id: s_rVUUYi5Q8bixb6BEbrMtKa
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UehS2yfTZaFGBh7uxhHFCE
        status: active
        display_name: 王之翰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UehS2yfTZaFGBh7uxhHFCE | 王之翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 227709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227709&o=json)

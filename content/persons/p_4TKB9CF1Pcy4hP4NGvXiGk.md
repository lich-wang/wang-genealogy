---
schema: wang-person/v1
id: p_4TKB9CF1Pcy4hP4NGvXiGk
status: active
merged_into: null
display_name: 王淮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iJn7F2MPCUYbNPE3q8yXPH
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VC4Ktvpv113LnNZHQtHGTs
          claim_id: c_iJn7F2MPCUYbNPE3q8yXPH
          source_id: s_Hrb1yr3ZC2CAqEgJVv6zv4
          stance: supports
          locator: CBDB:320121
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320121）
          source: &a1
            id: s_Hrb1yr3ZC2CAqEgJVv6zv4
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 320121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320121&o=json
            external_identifier: CBDB:320121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k6BQJeq77BHffTd2rLES22
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
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
        - id: cs_yBdZWPMpJSfMFCvSezL4Zg
          claim_id: c_k6BQJeq77BHffTd2rLES22
          source_id: s_Hrb1yr3ZC2CAqEgJVv6zv4
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
        id: c_mDCWnUXKbFUIW0AyD74MeW
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6aG-g_jwLQ06H7FzKHy5RU
          claim_id: c_mDCWnUXKbFUIW0AyD74MeW
          source_id: s_Hrb1yr3ZC2CAqEgJVv6zv4
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_R58pqFjKH7zhFPrnUA5Ato
        status: active
        display_name: 王楷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_R58pqFjKH7zhFPrnUA5Ato | 王楷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 320121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320121&o=json)

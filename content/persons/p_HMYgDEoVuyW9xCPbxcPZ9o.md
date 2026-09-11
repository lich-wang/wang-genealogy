---
schema: wang-person/v1
id: p_HMYgDEoVuyW9xCPbxcPZ9o
status: active
merged_into: null
display_name: 王大才
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x9kyybYtaF9C71XBv4KNd4
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rMfnSRiqRA8QfHkDoC95Au
          claim_id: c_x9kyybYtaF9C71XBv4KNd4
          source_id: s_rpmE2qAdCZPZnB4KMQikrZ
          stance: supports
          locator: CBDB:229896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229896）
          source: &a1
            id: s_rpmE2qAdCZPZnB4KMQikrZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大才（CBDB 229896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229896&o=json
            external_identifier: CBDB:229896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xqYtH21M5Sa94g7L3KPeRK
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大才，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229896）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SWMC0WXccZoWgri6U_Kb49
          claim_id: c_xqYtH21M5Sa94g7L3KPeRK
          source_id: s_rpmE2qAdCZPZnB4KMQikrZ
          stance: supports
          locator: CBDB:229896
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WCqGlaJU5Bfb2wTlMBzVQp
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fmzqNDkEawe2Y5acGSvw17
          claim_id: c_WCqGlaJU5Bfb2wTlMBzVQp
          source_id: s_rpmE2qAdCZPZnB4KMQikrZ
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DJcqSVwRMjWd5tk8GAdMxa
        status: active
        display_name: 王佐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大才 | accepted |
| bio.summary | 王大才，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229896） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DJcqSVwRMjWd5tk8GAdMxa | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大才（CBDB 229896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229896&o=json)

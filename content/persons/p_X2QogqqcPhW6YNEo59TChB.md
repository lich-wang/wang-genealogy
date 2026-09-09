---
schema: wang-person/v1
id: p_X2QogqqcPhW6YNEo59TChB
status: active
merged_into: null
display_name: 王瓊瑤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6PLGoGFUgKS72LtabU4hCG
        subject_person_id: p_X2QogqqcPhW6YNEo59TChB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mdqnVVLFw47NBkUHNBj826
          claim_id: c_6PLGoGFUgKS72LtabU4hCG
          source_id: s_aqKuUNS7GLUvaMUf96DyaZ
          stance: supports
          locator: CBDB:69583
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69583）
          source: &a1
            id: s_aqKuUNS7GLUvaMUf96DyaZ
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊瑤（CBDB 69583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69583&o=json
            external_identifier: CBDB:69583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.296Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xCu7PvAk2pvQeZAzby8HoF
        subject_person_id: p_X2QogqqcPhW6YNEo59TChB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WLNqeiXb25dQBQiX1H6ErP
          claim_id: c_xCu7PvAk2pvQeZAzby8HoF
          source_id: s_aqKuUNS7GLUvaMUf96DyaZ
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
  descendants: []
  other: []
---

# 王瓊瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊瑤 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓊瑤（CBDB 69583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69583&o=json)

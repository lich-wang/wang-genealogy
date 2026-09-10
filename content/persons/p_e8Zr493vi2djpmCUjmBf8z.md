---
schema: wang-person/v1
id: p_e8Zr493vi2djpmCUjmBf8z
status: active
merged_into: null
display_name: 王敞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AZmdN9SiYz5Vi7qggca7qS
        subject_person_id: p_e8Zr493vi2djpmCUjmBf8z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4RVKAxKNcqrHqSa3JE797i
          claim_id: c_AZmdN9SiYz5Vi7qggca7qS
          source_id: s_aE6p2JN9AKMB4RiGi2NsRa
          stance: supports
          locator: CBDB:208063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208063）
          source: &a1
            id: s_aE6p2JN9AKMB4RiGi2NsRa
            source_type: api_record
            title: 中国历代人物传记资料库：王敞（CBDB 208063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208063&o=json
            external_identifier: CBDB:208063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ChebR8jLuEse1G6Eo1giyB
        subject_person_id: p_e8Zr493vi2djpmCUjmBf8z
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1411年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wYr9kdZB9qyd5yoscxD2Yq
          claim_id: c_ChebR8jLuEse1G6Eo1giyB
          source_id: s_aE6p2JN9AKMB4RiGi2NsRa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6e4e9Hp9at8R4HR8sFS4NG
        subject_person_id: p_e8Zr493vi2djpmCUjmBf8z
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
        - id: cs_QcZLgYQKkbAD1rdeS8FPJV
          claim_id: c_6e4e9Hp9at8R4HR8sFS4NG
          source_id: s_aE6p2JN9AKMB4RiGi2NsRa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FqksDHW_vFcMjk2TIe9u_u
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e8Zr493vi2djpmCUjmBf8z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XAedQwgBS0Qp5Oqy-ECUvd
          claim_id: c_FqksDHW_vFcMjk2TIe9u_u
          source_id: s_thB3sU3j7kNQGdrbhbCxjz
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_thB3sU3j7kNQGdrbhbCxjz
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 239881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239881&o=json
            external_identifier: CBDB:239881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_14ogWJ1NeYn1acYejdfnia
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敞 | accepted |
| birth.date | 1411年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_14ogWJ1NeYn1acYejdfnia | 王斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 239881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239881&o=json)
- [中国历代人物传记资料库：王敞（CBDB 208063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208063&o=json)

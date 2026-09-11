---
schema: wang-person/v1
id: p_eEdwVvDNjmkAGiPy1oDkFn
status: active
merged_into: null
display_name: 王懋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8KVnWosDBRCs3LHG1RVesR
        subject_person_id: p_eEdwVvDNjmkAGiPy1oDkFn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2vxzJ25ziu4iDe3fQ9EjDC
          claim_id: c_8KVnWosDBRCs3LHG1RVesR
          source_id: s_W6USVnyoKDrkxHa4mF2vcZ
          stance: supports
          locator: CBDB:281063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281063）
          source: &a1
            id: s_W6USVnyoKDrkxHa4mF2vcZ
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 281063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281063&o=json
            external_identifier: CBDB:281063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JPLVtBU4J1C1Zd8rSnLEwG
        subject_person_id: p_eEdwVvDNjmkAGiPy1oDkFn
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
        - id: cs_Q36Ch24PueBJy3DrMQ3RtW
          claim_id: c_JPLVtBU4J1C1Zd8rSnLEwG
          source_id: s_W6USVnyoKDrkxHa4mF2vcZ
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
        id: c_SprXRKHBxhyWhqr2S6ZSBE
        subject_person_id: p_eEdwVvDNjmkAGiPy1oDkFn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PNbNcPEUfkwixuHyP9PuYH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2UNW09ZxjwYL-wCeVjKAY
          claim_id: c_SprXRKHBxhyWhqr2S6ZSBE
          source_id: s_W6USVnyoKDrkxHa4mF2vcZ
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PNbNcPEUfkwixuHyP9PuYH
        status: active
        display_name: 王上齡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PNbNcPEUfkwixuHyP9PuYH | 王上齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 281063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281063&o=json)

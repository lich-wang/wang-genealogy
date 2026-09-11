---
schema: wang-person/v1
id: p_JKisceFFEUfwUm7q1mkMpP
status: active
merged_into: null
display_name: 王瑄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c3AEfDV4dBKiC64iTyD5xS
        subject_person_id: p_JKisceFFEUfwUm7q1mkMpP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o1tsYY48uaT2HfXsFF31t4
          claim_id: c_c3AEfDV4dBKiC64iTyD5xS
          source_id: s_JYyTLN7CfmKY979tA29Dri
          stance: supports
          locator: CBDB:69439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69439）
          source: &a1
            id: s_JYyTLN7CfmKY979tA29Dri
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 69439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69439&o=json
            external_identifier: CBDB:69439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_E87Rb4FTV24p5YCP6hx8tv
        subject_person_id: p_JKisceFFEUfwUm7q1mkMpP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cEbFDfVtt7275a6Zu4f8Ak
          claim_id: c_E87Rb4FTV24p5YCP6hx8tv
          source_id: s_JYyTLN7CfmKY979tA29Dri
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bi3n3R9Ww9t79aNr6ZjMoY
        subject_person_id: p_JKisceFFEUfwUm7q1mkMpP
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
        - id: cs_9eyQwXmMRCPbYBegWCeDRo
          claim_id: c_Bi3n3R9Ww9t79aNr6ZjMoY
          source_id: s_JYyTLN7CfmKY979tA29Dri
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
        id: c_HonFrUOg3pGF6w7ID-PdYH
        subject_person_id: p_JKisceFFEUfwUm7q1mkMpP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fnzYvaUT7QSghLiw5dbeT2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JpMA1XGzhOgOVg6VD5JBVH
          claim_id: c_HonFrUOg3pGF6w7ID-PdYH
          source_id: s_Ls4oaFP64Z3j62YtYCHvD9
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13149：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ls4oaFP64Z3j62YtYCHvD9
            source_type: api_record
            title: 中国历代人物传记资料库：王攀騰（CBDB 526964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526964&o=json
            external_identifier: CBDB:526964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fnzYvaUT7QSghLiw5dbeT2
        status: active
        display_name: 王攀騰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| death.date | 1797年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fnzYvaUT7QSghLiw5dbeT2 | 王攀騰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王攀騰（CBDB 526964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526964&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 69439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69439&o=json)

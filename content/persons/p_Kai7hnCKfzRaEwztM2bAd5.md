---
schema: wang-person/v1
id: p_Kai7hnCKfzRaEwztM2bAd5
status: active
merged_into: null
display_name: 王文雄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i8dWMtYBukjRGyctwwbxMC
        subject_person_id: p_Kai7hnCKfzRaEwztM2bAd5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QxH62tVxHnuZ3CTLrz68xa
          claim_id: c_i8dWMtYBukjRGyctwwbxMC
          source_id: s_3jG4r3SaSNosAQn5tUXs3g
          stance: supports
          locator: CBDB:65274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65274）
          source: &a1
            id: s_3jG4r3SaSNosAQn5tUXs3g
            source_type: api_record
            title: 中国历代人物传记资料库：王文雄（CBDB 65274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65274&o=json
            external_identifier: CBDB:65274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4r1XBA4bHfQSDm95fK4xHC
        subject_person_id: p_Kai7hnCKfzRaEwztM2bAd5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1749年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LoEVxAvPds4oq63scAyLCC
          claim_id: c_4r1XBA4bHfQSDm95fK4xHC
          source_id: s_3jG4r3SaSNosAQn5tUXs3g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GtVUWNtbxfGz1Z79yufxwc
        subject_person_id: p_Kai7hnCKfzRaEwztM2bAd5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1800年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WDzkYQSp23fck37c2f2yXm
          claim_id: c_GtVUWNtbxfGz1Z79yufxwc
          source_id: s_3jG4r3SaSNosAQn5tUXs3g
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
        id: c_kksLbzbPoCsfU4z5uX63Ct
        subject_person_id: p_Kai7hnCKfzRaEwztM2bAd5
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
        - id: cs_Newg4nW2t9iiMoTFF2mPN3
          claim_id: c_kksLbzbPoCsfU4z5uX63Ct
          source_id: s_3jG4r3SaSNosAQn5tUXs3g
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
        id: c_ArnRoNDazaql5hUYwupu4s
        subject_person_id: p_Kai7hnCKfzRaEwztM2bAd5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Wr6W2GYyd3CGqL1V2htAHM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yIpBuAYL1sD1ZXX0WsPwlU
          claim_id: c_ArnRoNDazaql5hUYwupu4s
          source_id: s_3jG4r3SaSNosAQn5tUXs3g
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），8697：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Wr6W2GYyd3CGqL1V2htAHM
        status: active
        display_name: 王肇光
        merged_into_person_id: null
  other: []
---

# 王文雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文雄 | accepted |
| birth.date | 1749年 | accepted |
| death.date | 1800年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Wr6W2GYyd3CGqL1V2htAHM | 王肇光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文雄（CBDB 65274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65274&o=json)

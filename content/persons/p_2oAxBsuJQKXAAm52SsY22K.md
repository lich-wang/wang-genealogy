---
schema: wang-person/v1
id: p_2oAxBsuJQKXAAm52SsY22K
status: active
merged_into: null
display_name: 王媛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F4EdcTF29A1oEegnnjVbzk
        subject_person_id: p_2oAxBsuJQKXAAm52SsY22K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王媛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gXWi8Hg8R4JAmWx45t6XNp
          claim_id: c_F4EdcTF29A1oEegnnjVbzk
          source_id: s_rrZQDbmNdXf25Pr9VFLCFN
          stance: supports
          locator: CBDB:140074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140074）
          source: &a1
            id: s_rrZQDbmNdXf25Pr9VFLCFN
            source_type: api_record
            title: 中国历代人物传记资料库：王媛（CBDB 140074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140074&o=json
            external_identifier: CBDB:140074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CR3RfV7gK6zZHDKivkdEFc
        subject_person_id: p_2oAxBsuJQKXAAm52SsY22K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 641年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CQ9ZCCuc52byJmKneveizA
          claim_id: c_CR3RfV7gK6zZHDKivkdEFc
          source_id: s_rrZQDbmNdXf25Pr9VFLCFN
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
        id: c_oZNCsGxuTPNUWuAHiH8PQG
        subject_person_id: p_2oAxBsuJQKXAAm52SsY22K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 699年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YkH9UnSPbLy2VeZULGJL5e
          claim_id: c_oZNCsGxuTPNUWuAHiH8PQG
          source_id: s_rrZQDbmNdXf25Pr9VFLCFN
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
        id: c_jo4JpDeTNMj5CQnHYRBn1Z
        subject_person_id: p_2oAxBsuJQKXAAm52SsY22K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王媛（641年—699年），周人物。籍贯太原。（中国历代人物传记资料库 CBDB 140074）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XzVOzg3N4qIxxTsg2qhTk3
          claim_id: c_jo4JpDeTNMj5CQnHYRBn1Z
          source_id: s_rrZQDbmNdXf25Pr9VFLCFN
          stance: supports
          locator: CBDB:140074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H9chnCoUOmbd-fwB35Y8_k
        subject_person_id: p_Gh9Fwgvp5NWfP65rQQ728z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2oAxBsuJQKXAAm52SsY22K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Z7RPfB_JO9MzgduA3nLEB
          claim_id: c_H9chnCoUOmbd-fwB35Y8_k
          source_id: s_rrZQDbmNdXf25Pr9VFLCFN
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengli 46：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Gh9Fwgvp5NWfP65rQQ728z
        status: active
        display_name: 王逸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_4fB8Sb39-ioxNk72SNvUw_
        subject_person_id: p_2oAxBsuJQKXAAm52SsY22K
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_otsXLm2etPLkQU1NnYKNXq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xswMZH6ACHheOnLkhsGeJI
          claim_id: c_4fB8Sb39-ioxNk72SNvUw_
          source_id: s_52w68rmb-Cdp8B7S1vbQwS
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengli 46：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_52w68rmb-Cdp8B7S1vbQwS
            source_type: api_record
            title: 中国历代人物传记资料库：尹某(王媛夫)（CBDB 150188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150188&o=json
            external_identifier: CBDB:150188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_otsXLm2etPLkQU1NnYKNXq
        status: active
        display_name: 尹某
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王媛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王媛 | accepted |
| birth.date | 641年 | accepted |
| death.date | 699年 | accepted |
| bio.summary | 王媛（641年—699年），周人物。籍贯太原。（中国历代人物传记资料库 CBDB 140074） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Gh9Fwgvp5NWfP65rQQ728z | 王逸 | accepted |
| spouses | p_otsXLm2etPLkQU1NnYKNXq | 尹某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王媛（CBDB 140074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140074&o=json)
- [中国历代人物传记资料库：尹某(王媛夫)（CBDB 150188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150188&o=json)

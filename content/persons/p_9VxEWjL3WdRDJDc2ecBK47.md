---
schema: wang-person/v1
id: p_9VxEWjL3WdRDJDc2ecBK47
status: active
merged_into: null
display_name: 王汶
cbdb_id: 126525
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DAvwfMVZAPDmsDki6HrheW
        subject_person_id: p_9VxEWjL3WdRDJDc2ecBK47
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vwGxKPbbwSsesnz4dEKYcg
          claim_id: c_DAvwfMVZAPDmsDki6HrheW
          source_id: s_bwii6gJoKczQyBQwPyqkuE
          stance: supports
          locator: Q15897288
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_bwii6gJoKczQyBQwPyqkuE
            source_type: api_record
            title: 维基数据：王汶（Q15897288）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15897288
            external_identifier: Q15897288
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B1%B6
        - id: cs_Zn6ZDGhBLP51XH21JkwoTw
          claim_id: c_DAvwfMVZAPDmsDki6HrheW
          source_id: s_seeMM8M9x8R9M4bJsokGPr
          stance: supports
          locator: CBDB:126525
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_seeMM8M9x8R9M4bJsokGPr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王汶（126525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126525&o=json
            external_identifier: CBDB:126525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ymi8Ya4YsKH8h46kMw3fjF
        subject_person_id: p_9VxEWjL3WdRDJDc2ecBK47
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty politician
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9MGPCUaLXPqjrvwzXCyaof
          claim_id: c_Ymi8Ya4YsKH8h46kMw3fjF
          source_id: s_bwii6gJoKczQyBQwPyqkuE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KVnpDiBDHNA7CCz5jU96ED
        subject_person_id: p_9VxEWjL3WdRDJDc2ecBK47
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1433年
            calendar_note: 维基数据 P569 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z1on7nczvbTsieqBsLmu3Y
          claim_id: c_KVnpDiBDHNA7CCz5jU96ED
          source_id: s_bwii6gJoKczQyBQwPyqkuE
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MFpMPSDAa8mBMgYcVB1qX2
        subject_person_id: p_9VxEWjL3WdRDJDc2ecBK47
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1489年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DJSD4SdsarsBF6S5qPrDHJ
          claim_id: c_MFpMPSDAa8mBMgYcVB1qX2
          source_id: s_bwii6gJoKczQyBQwPyqkuE
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_y8LjyKkDzFekcPLvkB6Egg
        subject_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9VxEWjL3WdRDJDc2ecBK47
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5iTfZiCQKH8Xkwb75zWrwY
          claim_id: c_y8LjyKkDzFekcPLvkB6Egg
          source_id: s_DifVCfdMFb5K6Mo67xCm1z
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_DifVCfdMFb5K6Mo67xCm1z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王稌（437664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437664&o=json
            external_identifier: CBDB:437664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:09.885Z
            metadata_json: null
      object_person:
        id: p_Djkmc4uicJBuT6DjuX7m7t
        status: active
        display_name: 王稌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汶 | accepted |
| bio.summary | Ming dynasty politician | accepted |
| birth.date | 1433年 | accepted |
| death.date | 1489年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Djkmc4uicJBuT6DjuX7m7t | 王稌 | accepted |

## 外部来源

- [维基数据：王汶（Q15897288）](https://www.wikidata.org/wiki/Q15897288)
- [CBDB 中国历代人物传记资料库：王稌（437664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437664&o=json)
- [CBDB 中国历代人物传记资料库：王汶（126525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126525&o=json)

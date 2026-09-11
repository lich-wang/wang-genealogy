---
schema: wang-person/v1
id: p_m9oVG7UM6Unr739HgWUu1H
status: active
merged_into: null
display_name: 王子直
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EwYLDyAuA5d59fth2rLvsk
        subject_person_id: p_m9oVG7UM6Unr739HgWUu1H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MCC9BML2HPKLSvWxSNDZR3
          claim_id: c_EwYLDyAuA5d59fth2rLvsk
          source_id: s_QcYx565hfcBe2CgpBZLEe6
          stance: supports
          locator: CBDB:525601
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（525601）
          source: &a1
            id: s_QcYx565hfcBe2CgpBZLEe6
            source_type: api_record
            title: 中国历代人物传记资料库：王子直（CBDB 525601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525601&o=json
            external_identifier: CBDB:525601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.327Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4udyD96XGk3nB4xfqgDzxH
        subject_person_id: p_m9oVG7UM6Unr739HgWUu1H
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
        - id: cs_W5KCtLKuCLAMU3B78pbiJV
          claim_id: c_4udyD96XGk3nB4xfqgDzxH
          source_id: s_QcYx565hfcBe2CgpBZLEe6
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
        id: c_verc8ntM8fjHGww3N63dxw
        subject_person_id: p_AM2s7ac4Vm7QuHGn7oUxv8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m9oVG7UM6Unr739HgWUu1H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R-CyqU_8NERCuiEiWRe7na
          claim_id: c_verc8ntM8fjHGww3N63dxw
          source_id: s_duDQsCQMvkTQ6nJS4ikRPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11507：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_duDQsCQMvkTQ6nJS4ikRPb
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 67862）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67862&o=json
            external_identifier: CBDB:67862
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AM2s7ac4Vm7QuHGn7oUxv8
        status: active
        display_name: 王禎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子直 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AM2s7ac4Vm7QuHGn7oUxv8 | 王禎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禎（CBDB 67862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67862&o=json)
- [中国历代人物传记资料库：王子直（CBDB 525601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525601&o=json)

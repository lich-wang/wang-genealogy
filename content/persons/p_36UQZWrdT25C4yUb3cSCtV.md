---
schema: wang-person/v1
id: p_36UQZWrdT25C4yUb3cSCtV
status: active
merged_into: null
display_name: 王崇信
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WNnqN2BGWHwLg3jTU5ynx5
        subject_person_id: p_36UQZWrdT25C4yUb3cSCtV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YfCH5DBsKDH2SzBRB6qq3T
          claim_id: c_WNnqN2BGWHwLg3jTU5ynx5
          source_id: s_DK1iBf6WL3Q3amUcgnAeYd
          stance: supports
          locator: CBDB:246483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246483）
          source: &a1
            id: s_DK1iBf6WL3Q3amUcgnAeYd
            source_type: api_record
            title: 中国历代人物传记资料库：王崇信（CBDB 246483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246483&o=json
            external_identifier: CBDB:246483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E7b4QhNgDJ3J5HLudG7n4V
        subject_person_id: p_36UQZWrdT25C4yUb3cSCtV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇信，明人物。成化八年進士，籍贯新喻。（中国历代人物传记资料库 CBDB 246483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-Agy_QoV64RxYCrhWts67C
          claim_id: c_E7b4QhNgDJ3J5HLudG7n4V
          source_id: s_DK1iBf6WL3Q3amUcgnAeYd
          stance: supports
          locator: CBDB:246483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xwmgthPhqBX9hcrhNK6ASz
        subject_person_id: p_2xBigkvdUU97a4F86QBCjb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_36UQZWrdT25C4yUb3cSCtV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lDMxb9Xw2eq6snIBqcSSH-
          claim_id: c_xwmgthPhqBX9hcrhNK6ASz
          source_id: s_X6_l1g3JSOL4V7CUwzpaNz
          stance: supports
          locator: CBDB：兄弟 王肅（199546）之父／母 王同德
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇信 与 王肅 为同胞（CBDB 记「兄」），王肅 之父／母即 王崇信 之父／母。
          source:
            id: s_X6_l1g3JSOL4V7CUwzpaNz
            source_type: api_record
            title: 中国历代人物传记资料库：王崇信（CBDB 246483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246483&o=json
            external_identifier: CBDB:246483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2xBigkvdUU97a4F86QBCjb
        status: active
        display_name: 王同德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ldoc4SR7dAnUDRxOMv3hsE
        subject_person_id: p_36UQZWrdT25C4yUb3cSCtV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bhBtfd3-2nGx9BzllGc2oN
          claim_id: c_Ldoc4SR7dAnUDRxOMv3hsE
          source_id: s_X6_l1g3JSOL4V7CUwzpaNz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199546 王肅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X6_l1g3JSOL4V7CUwzpaNz
            source_type: api_record
            title: 中国历代人物传记资料库：王崇信（CBDB 246483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246483&o=json
            external_identifier: CBDB:246483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rPERXxEMwZa9gPH43DGT1J
        status: active
        display_name: 王肅
        merged_into_person_id: null
---

# 王崇信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇信 | accepted |
| bio.summary | 王崇信，明人物。成化八年進士，籍贯新喻。（中国历代人物传记资料库 CBDB 246483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2xBigkvdUU97a4F86QBCjb | 王同德 | accepted |
| other | p_rPERXxEMwZa9gPH43DGT1J | 王肅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇信（CBDB 246483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246483&o=json)

---
schema: wang-person/v1
id: p_p2ds3eQx6gn32ZVKniwjr9
status: active
merged_into: null
display_name: 王道成
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ikYGDPPSxSmcrNaNQG2Rr7
        subject_person_id: p_p2ds3eQx6gn32ZVKniwjr9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2UHL1tVXd7F57SjP5kBqhd
          claim_id: c_ikYGDPPSxSmcrNaNQG2Rr7
          source_id: s_FAvcEKnPB1C3EF7QnBAJGn
          stance: supports
          locator: CBDB:313345
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313345）
          source: &a1
            id: s_FAvcEKnPB1C3EF7QnBAJGn
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 313345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313345&o=json
            external_identifier: CBDB:313345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qm7UZV8fnqykDUcm576x7i
        subject_person_id: p_p2ds3eQx6gn32ZVKniwjr9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道成，明人物。嘉靖二十九年進士，籍贯咸陽。（中国历代人物传记资料库 CBDB 313345）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s5761m12bmIrX6L-5TErsD
          claim_id: c_Qm7UZV8fnqykDUcm576x7i
          source_id: s_FAvcEKnPB1C3EF7QnBAJGn
          stance: supports
          locator: CBDB:313345
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PwL3r7ffQLmCutyAGDYe05
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p2ds3eQx6gn32ZVKniwjr9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9aDW1HZdv5rf2rEOm-AMIl
          claim_id: c_PwL3r7ffQLmCutyAGDYe05
          source_id: s_V_4pWNSbZh6rNKAzPIqcPc
          stance: supports
          locator: CBDB：兄弟 王道直（204021）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王道成 与 王道直 为同胞（CBDB 记「兄」），王道直 之父／母即 王道成 之父／母。
          source:
            id: s_V_4pWNSbZh6rNKAzPIqcPc
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 313345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313345&o=json
            external_identifier: CBDB:313345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5g7L2cx4uEGXE6LnD5Pz5F
        status: active
        display_name: 王獻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_D08IL4WeuVUnomL-EVXk0r
        subject_person_id: p_emRFonnZuCJKKPb7oDivvy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p2ds3eQx6gn32ZVKniwjr9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b5TXLYPactGeeLE8QZ-q78
          claim_id: c_D08IL4WeuVUnomL-EVXk0r
          source_id: s_V_4pWNSbZh6rNKAzPIqcPc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204021 王道直）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V_4pWNSbZh6rNKAzPIqcPc
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 313345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313345&o=json
            external_identifier: CBDB:313345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_emRFonnZuCJKKPb7oDivvy
        status: active
        display_name: 王道直
        merged_into_person_id: null
---

# 王道成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道成 | accepted |
| bio.summary | 王道成，明人物。嘉靖二十九年進士，籍贯咸陽。（中国历代人物传记资料库 CBDB 313345） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5g7L2cx4uEGXE6LnD5Pz5F | 王獻 | accepted |
| other | p_emRFonnZuCJKKPb7oDivvy | 王道直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道成（CBDB 313345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313345&o=json)

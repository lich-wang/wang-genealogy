---
schema: wang-person/v1
id: p_pPxxCTs7pEHku8hoGnoeUy
status: active
merged_into: null
display_name: 王龍應
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LJHkDZxQKBv2TeeWSipgCo
        subject_person_id: p_pPxxCTs7pEHku8hoGnoeUy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍應
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XH7fVcGZ3iaaA2TcM8DD3Q
          claim_id: c_LJHkDZxQKBv2TeeWSipgCo
          source_id: s_R6tRGPoV3UAVPW52WwNCeZ
          stance: supports
          locator: CBDB:38435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38435）
          source: &a1
            id: s_R6tRGPoV3UAVPW52WwNCeZ
            source_type: api_record
            title: 中国历代人物传记资料库：王龍應（CBDB 38435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38435&o=json
            external_identifier: CBDB:38435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nzBD6Ag4TJtiLuvJwUFF3y
        subject_person_id: p_pPxxCTs7pEHku8hoGnoeUy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1215年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LWGL5QMKW3a7vDNNrZCHUK
          claim_id: c_nzBD6Ag4TJtiLuvJwUFF3y
          source_id: s_R6tRGPoV3UAVPW52WwNCeZ
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
        id: c_vCzyViVp1YmooKYRyhLpbm
        subject_person_id: p_pPxxCTs7pEHku8hoGnoeUy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XSUCPUzzFMX8pRMCgmBotK
          claim_id: c_vCzyViVp1YmooKYRyhLpbm
          source_id: s_R6tRGPoV3UAVPW52WwNCeZ
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
        id: c_I5HMJn4Q5W6JKOvatyXI8P
        subject_person_id: p_tBCH7j3dLnxMnYFDQ9ShZT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pPxxCTs7pEHku8hoGnoeUy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mBktsEiXYfq_gwrbY4CMz9
          claim_id: c_I5HMJn4Q5W6JKOvatyXI8P
          source_id: s_R6tRGPoV3UAVPW52WwNCeZ
          stance: supports
          locator: 寶祐登科錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tBCH7j3dLnxMnYFDQ9ShZT
        status: active
        display_name: 王以寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4WnN8z2RGfoTRzHiPm1Uiy
        subject_person_id: p_5oPycHUW3mpNUYhM7rnWa6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pPxxCTs7pEHku8hoGnoeUy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Iq1ga8sHO9PB0E0CNHmvD
          claim_id: c_4WnN8z2RGfoTRzHiPm1Uiy
          source_id: s_R6tRGPoV3UAVPW52WwNCeZ
          stance: supports
          locator: 寶祐登科錄：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5oPycHUW3mpNUYhM7rnWa6
        status: active
        display_name: 王伯慶
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王龍應

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍應 | accepted |
| birth.date | 1215年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tBCH7j3dLnxMnYFDQ9ShZT | 王以寧 | accepted |
| ancestors | p_5oPycHUW3mpNUYhM7rnWa6 | 王伯慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王龍應（CBDB 38435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38435&o=json)

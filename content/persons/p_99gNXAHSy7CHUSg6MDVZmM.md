---
schema: wang-person/v1
id: p_99gNXAHSy7CHUSg6MDVZmM
status: active
merged_into: null
display_name: 王常
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_43PXv1kAUu2LsKu5znGFLM
        subject_person_id: p_99gNXAHSy7CHUSg6MDVZmM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ato6LULp8u1V15CD1xhZ9X
          claim_id: c_43PXv1kAUu2LsKu5znGFLM
          source_id: s_HNnvggNwswDJGWDv9EXqk2
          stance: supports
          locator: CBDB:198354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198354）
          source: &a1
            id: s_HNnvggNwswDJGWDv9EXqk2
            source_type: api_record
            title: 中国历代人物传记资料库：王常（CBDB 198354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198354&o=json
            external_identifier: CBDB:198354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hgTAc3gwgeArdjuUqik3yD
        subject_person_id: p_99gNXAHSy7CHUSg6MDVZmM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1427年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LpLvBWUVEE7uR6WsvikNWo
          claim_id: c_hgTAc3gwgeArdjuUqik3yD
          source_id: s_HNnvggNwswDJGWDv9EXqk2
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
        id: c_1ftTz9NLcND9Us1Px5h8Zc
        subject_person_id: p_99gNXAHSy7CHUSg6MDVZmM
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
        - id: cs_3HLCvoD7C7vQzdTDjM52cp
          claim_id: c_1ftTz9NLcND9Us1Px5h8Zc
          source_id: s_HNnvggNwswDJGWDv9EXqk2
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
        id: c_PZHhFeyFCfKk04JMfcWWQP
        subject_person_id: p_SeER6gzsJFyEjnyJm77Ynj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_99gNXAHSy7CHUSg6MDVZmM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TRO7EtvFQMlgfnvJ_yenN9
          claim_id: c_PZHhFeyFCfKk04JMfcWWQP
          source_id: s_HNnvggNwswDJGWDv9EXqk2
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SeER6gzsJFyEjnyJm77Ynj
        status: active
        display_name: 王有問
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_TGRbjedQtDXfhHdzgzWr5V
        subject_person_id: p_99gNXAHSy7CHUSg6MDVZmM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cJNQFLg5UpTKMjCMo18Ft5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1onoEkDuEBgrsWFDLvDto1
          claim_id: c_TGRbjedQtDXfhHdzgzWr5V
          source_id: s_xqdpEavh0GOQho0aV5i8Fe
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xqdpEavh0GOQho0aV5i8Fe
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王常妻)（CBDB 261537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261537&o=json
            external_identifier: CBDB:261537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cJNQFLg5UpTKMjCMo18Ft5
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_cCmpoFAZgsauG__j1yLYmG
        subject_person_id: p_y9b65dPC5ByVDFyhVvtNXq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_99gNXAHSy7CHUSg6MDVZmM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_173M7UqPr86d76x4aTuMQX
          claim_id: c_cCmpoFAZgsauG__j1yLYmG
          source_id: s_HNnvggNwswDJGWDv9EXqk2
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y9b65dPC5ByVDFyhVvtNXq
        status: active
        display_name: 王景中
        merged_into_person_id: null
    - claim:
        id: c_AWIU2FW9Dpd9PvX0g6ShXT
        subject_person_id: p_Qafs4uENg7bHttaTMzcQa2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_99gNXAHSy7CHUSg6MDVZmM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r1b7JiO8Ulxqmd69O4WN7J
          claim_id: c_AWIU2FW9Dpd9PvX0g6ShXT
          source_id: s_HNnvggNwswDJGWDv9EXqk2
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Qafs4uENg7bHttaTMzcQa2
        status: active
        display_name: 王琰
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王常 | accepted |
| birth.date | 1427年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SeER6gzsJFyEjnyJm77Ynj | 王有問 | accepted |
| spouses | p_cJNQFLg5UpTKMjCMo18Ft5 | 劉氏 | accepted |
| ancestors | p_y9b65dPC5ByVDFyhVvtNXq | 王景中 | accepted |
| ancestors | p_Qafs4uENg7bHttaTMzcQa2 | 王琰 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王常妻)（CBDB 261537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261537&o=json)
- [中国历代人物传记资料库：王常（CBDB 198354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198354&o=json)

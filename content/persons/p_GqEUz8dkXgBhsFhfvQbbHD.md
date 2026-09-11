---
schema: wang-person/v1
id: p_GqEUz8dkXgBhsFhfvQbbHD
status: active
merged_into: null
display_name: 王撝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iDXzcEWZA2Fayvg4yNC6V2
        subject_person_id: p_GqEUz8dkXgBhsFhfvQbbHD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qcqvSM9MpDfFTHfFdLj6Gn
          claim_id: c_iDXzcEWZA2Fayvg4yNC6V2
          source_id: s_Kq2iwpvJ55vzccDoMi1Uoh
          stance: supports
          locator: CBDB:175681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175681）
          source: &a1
            id: s_Kq2iwpvJ55vzccDoMi1Uoh
            source_type: api_record
            title: 中国历代人物传记资料库：王撝（CBDB 175681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175681&o=json
            external_identifier: CBDB:175681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.054Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_k8YBgzgFsirdgLKw7TkMDV
        subject_person_id: p_GqEUz8dkXgBhsFhfvQbbHD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 663年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XGqnuPVMMAauv3Tf4oEhxP
          claim_id: c_k8YBgzgFsirdgLKw7TkMDV
          source_id: s_Kq2iwpvJ55vzccDoMi1Uoh
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
        id: c_M2VSxzTx9w28TVWK33spAz
        subject_person_id: p_GqEUz8dkXgBhsFhfvQbbHD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JjFizgYFbDh21mMShp4Za6
          claim_id: c_M2VSxzTx9w28TVWK33spAz
          source_id: s_Kq2iwpvJ55vzccDoMi1Uoh
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
        id: c_DHstsw-XqVQRplKG_UiB4i
        subject_person_id: p_Ee4jhwpKMUeV9pY9CQ4y7w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GqEUz8dkXgBhsFhfvQbbHD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b6UuT_L3zfYrPmDKPuTzhO
          claim_id: c_DHstsw-XqVQRplKG_UiB4i
          source_id: s_v3aDqyKbTDo5JRrHEV3vFn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v3aDqyKbTDo5JRrHEV3vFn
            source_type: api_record
            title: 中国历代人物传记资料库：王德本（CBDB 175680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175680&o=json
            external_identifier: CBDB:175680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.054Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ee4jhwpKMUeV9pY9CQ4y7w
        status: active
        display_name: 王德本
        merged_into_person_id: null
  children:
    - claim:
        id: c_BxcK1QP7jQD5CxHbqw-H2g
        subject_person_id: p_GqEUz8dkXgBhsFhfvQbbHD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6C3vbxXJxF39bFVKFJQkoP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w-QbEtn4E2MR7TeeYTnThc
          claim_id: c_BxcK1QP7jQD5CxHbqw-H2g
          source_id: s_K8AkFvjundSsmv52GBKQmw
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K8AkFvjundSsmv52GBKQmw
            source_type: api_record
            title: 中国历代人物传记资料库：王承慶（CBDB 175682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175682&o=json
            external_identifier: CBDB:175682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6C3vbxXJxF39bFVKFJQkoP
        status: active
        display_name: 王承慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王撝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撝 | accepted |
| death.date | 663年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ee4jhwpKMUeV9pY9CQ4y7w | 王德本 | accepted |
| children | p_6C3vbxXJxF39bFVKFJQkoP | 王承慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承慶（CBDB 175682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175682&o=json)
- [中国历代人物传记资料库：王德本（CBDB 175680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175680&o=json)
- [中国历代人物传记资料库：王撝（CBDB 175681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175681&o=json)

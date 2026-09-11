---
schema: wang-person/v1
id: p_eqQL1ccr8qFyDd29v6B9ui
status: active
merged_into: null
display_name: 王慶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bNxAQQmCRB5UnVYXNv38FB
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DLBmvQVkU9MjC6T6NmTHyB
          claim_id: c_bNxAQQmCRB5UnVYXNv38FB
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
          stance: supports
          locator: CBDB:140379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140379）
          source: &a1
            id: s_dKWFbw4nTEroGpFfAb4Bkd
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 140379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140379&o=json
            external_identifier: CBDB:140379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2E35PP25sgvY4pe9Dey78G
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 630年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MwdR7DJV4b86UGFsRixDmH
          claim_id: c_2E35PP25sgvY4pe9Dey78G
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
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
        id: c_wBzVjsHrYwUg672MJdjV7s
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 714年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_26uJfW3BFr2D1rZm2B1dGo
          claim_id: c_wBzVjsHrYwUg672MJdjV7s
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
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
        id: c_3Z9zJ3zD92ep72rtLYJAsQ
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶（630年—714年），周人物。籍贯黎城。（中国历代人物传记资料库 CBDB 140379）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GTPSHcN7gHYJbGFdG98imV
          claim_id: c_3Z9zJ3zD92ep72rtLYJAsQ
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
          stance: supports
          locator: CBDB:140379
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C6uuhhuKrEMcAX3IvTj4UJ
        subject_person_id: p_iXyRjkqssCYF4bDBCJdFMa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Frw7itXR4SQUvsvJ9sDNAN
          claim_id: c_C6uuhhuKrEMcAX3IvTj4UJ
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 105：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iXyRjkqssCYF4bDBCJdFMa
        status: active
        display_name: 王則
        merged_into_person_id: null
  children:
    - claim:
        id: c_lPAMak8ezJHcAg0Mi8rvSa
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9MM4odvcPEpH8HALw8vRdA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kh_JyOdBvnankdsnYN3FXm
          claim_id: c_lPAMak8ezJHcAg0Mi8rvSa
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 105：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9MM4odvcPEpH8HALw8vRdA
        status: active
        display_name: 王崇嗣
        merged_into_person_id: null
    - claim:
        id: c_YpXwAfzMHpGJ4_1GHiqb0K
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F9kgyogs2DDmNJ7Aokj9Ei
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WU4xix8qfKXnSSgTdEyqm1
          claim_id: c_YpXwAfzMHpGJ4_1GHiqb0K
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 105：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_F9kgyogs2DDmNJ7Aokj9Ei
        status: active
        display_name: 王慎微
        merged_into_person_id: null
    - claim:
        id: c_rhq1_pwJ18DDYQj4spjhp1
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4whdppUwRDQhMSPhYjRRva
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n33hfBFObIMhD_bE4ntE-F
          claim_id: c_rhq1_pwJ18DDYQj4spjhp1
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 105：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4whdppUwRDQhMSPhYjRRva
        status: active
        display_name: 王慎知
        merged_into_person_id: null
    - claim:
        id: c_Lt75osvXFq-aTtV_Si7hym
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8mEgKvNLQWdfFCydAjv6aY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uLDblLta7BS75P5s0qaY7H
          claim_id: c_Lt75osvXFq-aTtV_Si7hym
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 105：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8mEgKvNLQWdfFCydAjv6aY
        status: active
        display_name: 王慎貞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_lKY8MTmZoaGxfCfJIu9Jdl
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HhH4x8Htvfrqo9WxusU5M2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_os2CQFVSXlI2F1Gq-bryTF
          claim_id: c_lKY8MTmZoaGxfCfJIu9Jdl
          source_id: s_zxvOw-sg3wgqLzxB9IPohK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 105：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zxvOw-sg3wgqLzxB9IPohK
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王慶妻)（CBDB 151484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151484&o=json
            external_identifier: CBDB:151484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HhH4x8Htvfrqo9WxusU5M2
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| birth.date | 630年 | accepted |
| death.date | 714年 | accepted |
| bio.summary | 王慶（630年—714年），周人物。籍贯黎城。（中国历代人物传记资料库 CBDB 140379） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iXyRjkqssCYF4bDBCJdFMa | 王則 | accepted |
| children | p_9MM4odvcPEpH8HALw8vRdA | 王崇嗣 | accepted |
| children | p_F9kgyogs2DDmNJ7Aokj9Ei | 王慎微 | accepted |
| children | p_4whdppUwRDQhMSPhYjRRva | 王慎知 | accepted |
| children | p_8mEgKvNLQWdfFCydAjv6aY | 王慎貞 | accepted |
| spouses | p_HhH4x8Htvfrqo9WxusU5M2 | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 140379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140379&o=json)
- [中国历代人物传记资料库：張氏(王慶妻)（CBDB 151484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151484&o=json)

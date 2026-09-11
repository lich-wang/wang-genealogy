---
schema: wang-person/v1
id: p_Wmr3LqFp7qRwt5BuEkBnQA
status: active
merged_into: null
display_name: 王琳
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PJBG8NMujNCPNrLWUoJf9j
        subject_person_id: p_Wmr3LqFp7qRwt5BuEkBnQA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c6AZBieme2PykxriKU818q
          claim_id: c_PJBG8NMujNCPNrLWUoJf9j
          source_id: s_Qg2iQraMV4k5asSDFnqMvw
          stance: supports
          locator: CBDB:578122
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578122）
          source: &a1
            id: s_Qg2iQraMV4k5asSDFnqMvw
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 578122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578122&o=json
            external_identifier: CBDB:578122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_umns6uuFPXDrwZQSW7KtCv
        subject_person_id: p_Wmr3LqFp7qRwt5BuEkBnQA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1138年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TpBBe1AZWpLaR9jJ4jaYnQ
          claim_id: c_umns6uuFPXDrwZQSW7KtCv
          source_id: s_Qg2iQraMV4k5asSDFnqMvw
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
        id: c_tbFfXXWGAqDhE584dGdqLP
        subject_person_id: p_Wmr3LqFp7qRwt5BuEkBnQA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1204年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k4tCM8ZF6xUCrzjNykgApY
          claim_id: c_tbFfXXWGAqDhE584dGdqLP
          source_id: s_Qg2iQraMV4k5asSDFnqMvw
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
        id: c_awpWi3fJZRkKFfm1B5AL5W
        subject_person_id: p_Wmr3LqFp7qRwt5BuEkBnQA
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
        - id: cs_g5yMq4r452MguFNxBt4YTz
          claim_id: c_awpWi3fJZRkKFfm1B5AL5W
          source_id: s_Qg2iQraMV4k5asSDFnqMvw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FryR0z1H0hD2WwgmCfo4eF
        subject_person_id: p_Wmr3LqFp7qRwt5BuEkBnQA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_evN6Uqy9Qz76j7ERhbea5o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZS-dCoL6mP_vSqLbn8DWT
          claim_id: c_FryR0z1H0hD2WwgmCfo4eF
          source_id: s_F5YuRXHXhCH16y8At76seb
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王琳及夫人徐氏墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F5YuRXHXhCH16y8At76seb
            source_type: api_record
            title: 中国历代人物传记资料库：王正臣（CBDB 578127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578127&o=json
            external_identifier: CBDB:578127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_evN6Uqy9Qz76j7ERhbea5o
        status: active
        display_name: 王正臣
        merged_into_person_id: null
    - claim:
        id: c_ntZ1Vrkc7M9kA2dPl1hUrQ
        subject_person_id: p_Wmr3LqFp7qRwt5BuEkBnQA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SuM9SmgJZjcxcsNUmJk6Ao
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QsUYCIg5HoFUQX5uxUN8CP
          claim_id: c_ntZ1Vrkc7M9kA2dPl1hUrQ
          source_id: s_nCE2RzMnJRx6Q9ki9Xwx69
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王琳及夫人徐氏墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nCE2RzMnJRx6Q9ki9Xwx69
            source_type: api_record
            title: 中国历代人物传记资料库：王虎臣（CBDB 578126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578126&o=json
            external_identifier: CBDB:578126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SuM9SmgJZjcxcsNUmJk6Ao
        status: active
        display_name: 王虎臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PO-aRK-hHQ908aoJfCBONS
        subject_person_id: p_Wmr3LqFp7qRwt5BuEkBnQA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UzxC95e5kHJM5igkuL3pqc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9pE4GecCFr0bSAGCnfBzOR
          claim_id: c_PO-aRK-hHQ908aoJfCBONS
          source_id: s_Ap2j2tyKRanyRv7vztEg4w
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王琳及夫人徐氏墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ap2j2tyKRanyRv7vztEg4w
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王琳妻)（CBDB 578125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578125&o=json
            external_identifier: CBDB:578125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UzxC95e5kHJM5igkuL3pqc
        status: active
        display_name: 徐氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| birth.date | 1138年 | accepted |
| death.date | 1204年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_evN6Uqy9Qz76j7ERhbea5o | 王正臣 | accepted |
| children | p_SuM9SmgJZjcxcsNUmJk6Ao | 王虎臣 | accepted |
| spouses | p_UzxC95e5kHJM5igkuL3pqc | 徐氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王虎臣（CBDB 578126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578126&o=json)
- [中国历代人物传记资料库：王琳（CBDB 578122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578122&o=json)
- [中国历代人物传记资料库：王正臣（CBDB 578127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578127&o=json)
- [中国历代人物传记资料库：徐氏(王琳妻)（CBDB 578125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578125&o=json)

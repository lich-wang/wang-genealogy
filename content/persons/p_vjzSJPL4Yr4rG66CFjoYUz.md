---
schema: wang-person/v1
id: p_vjzSJPL4Yr4rG66CFjoYUz
status: active
merged_into: null
display_name: 王文進
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gvG74oFZLGbFiyZYZuTpdv
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M1VUYfxiustngeyQb5j1gU
          claim_id: c_gvG74oFZLGbFiyZYZuTpdv
          source_id: s_F2Z16RpR45vjsURtjhTvCi
          stance: supports
          locator: CBDB:142127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142127）
          source: &a1
            id: s_F2Z16RpR45vjsURtjhTvCi
            source_type: api_record
            title: 中国历代人物传记资料库：王文進（CBDB 142127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142127&o=json
            external_identifier: CBDB:142127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uRt2KaC97iqeoJH4r7NV5D
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 826年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2kpSaJ6DsW4py7329DV3C9
          claim_id: c_uRt2KaC97iqeoJH4r7NV5D
          source_id: s_F2Z16RpR45vjsURtjhTvCi
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
        id: c_P5sMfZ4iAHXtoM1JTYwF9y
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 886年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_isAL2gUrv38hFe5iW3CSTw
          claim_id: c_P5sMfZ4iAHXtoM1JTYwF9y
          source_id: s_F2Z16RpR45vjsURtjhTvCi
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
        id: c_JuyWYNX1GTGKSJxd9HdNq2
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
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
        - id: cs_DfSWcLKkhWiiN22ZzRQzGJ
          claim_id: c_JuyWYNX1GTGKSJxd9HdNq2
          source_id: s_F2Z16RpR45vjsURtjhTvCi
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
        id: c_8dRqKXC1cVIE6zsNdM1sgS
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QwfU86wJ5i9Hj62HZkzs8r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1aoE3ZUpwEaLdA7KjY8Fvw
          claim_id: c_8dRqKXC1cVIE6zsNdM1sgS
          source_id: s_F2Z16RpR45vjsURtjhTvCi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Guangqi 3：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QwfU86wJ5i9Hj62HZkzs8r
        status: active
        display_name: 王重實
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_uVbM9drjLedQcy9VlG4lYp
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3DCTLHY9Da8sEFHnb68qW7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9EsbkDshgND7PNMHs-zmdX
          claim_id: c_uVbM9drjLedQcy9VlG4lYp
          source_id: s_Zyo1W3qGrXs0qTsRho2l_V
          stance: supports
          locator: 唐代墓誌匯編:二卷，Guangqi 3：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Zyo1W3qGrXs0qTsRho2l_V
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王文進妻)（CBDB 161527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161527&o=json
            external_identifier: CBDB:161527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3DCTLHY9Da8sEFHnb68qW7
        status: active
        display_name: 張氏
        merged_into_person_id: null
    - claim:
        id: c_iwPzLGi94FHNmdAaC1-iNx
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HcAEMBHcDKKDLKkSsPVY4M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ni_D2lcrR5Ea2NmPfDT1SE
          claim_id: c_iwPzLGi94FHNmdAaC1-iNx
          source_id: s_mVY_C8SSaUJwJxI-kgEE16
          stance: supports
          locator: 唐代墓誌匯編:二卷，Guangqi 3：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mVY_C8SSaUJwJxI-kgEE16
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王文進妻)（CBDB 161528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161528&o=json
            external_identifier: CBDB:161528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HcAEMBHcDKKDLKkSsPVY4M
        status: active
        display_name: 李氏
        merged_into_person_id: null
    - claim:
        id: c_8s1bejXCSYB30MLrqsaMNV
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rcs4teF7cXNkkxDS7Kb3fd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yywM1V2lM5xkxF9P3VpQd8
          claim_id: c_8s1bejXCSYB30MLrqsaMNV
          source_id: s_XDfu_U5IiVW9xAHRh0Za6-
          stance: supports
          locator: 唐代墓誌匯編:二卷，Guangqi 3：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XDfu_U5IiVW9xAHRh0Za6-
            source_type: api_record
            title: 中国历代人物传记资料库：程氏(王文進妻)（CBDB 161529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161529&o=json
            external_identifier: CBDB:161529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rcs4teF7cXNkkxDS7Kb3fd
        status: active
        display_name: 程氏
        merged_into_person_id: null
    - claim:
        id: c_rCyPvi7GWqs-jwOP85Emap
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UhrgRyaQuCyf9twsyHyuUS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3xug2Tfl7-kCzId_RgE0VB
          claim_id: c_rCyPvi7GWqs-jwOP85Emap
          source_id: s_FwFh0inKqrUhfUcXoaNe7y
          stance: supports
          locator: 唐代墓誌匯編:二卷，Guangqi 3：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FwFh0inKqrUhfUcXoaNe7y
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王文進妻)（CBDB 161530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161530&o=json
            external_identifier: CBDB:161530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UhrgRyaQuCyf9twsyHyuUS
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王文進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文進 | accepted |
| birth.date | 826年 | accepted |
| death.date | 886年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QwfU86wJ5i9Hj62HZkzs8r | 王重實 | accepted |
| spouses | p_3DCTLHY9Da8sEFHnb68qW7 | 張氏 | accepted |
| spouses | p_HcAEMBHcDKKDLKkSsPVY4M | 李氏 | accepted |
| spouses | p_rcs4teF7cXNkkxDS7Kb3fd | 程氏 | accepted |
| spouses | p_UhrgRyaQuCyf9twsyHyuUS | 郭氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：程氏(王文進妻)（CBDB 161529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161529&o=json)
- [中国历代人物传记资料库：郭氏(王文進妻)（CBDB 161530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161530&o=json)
- [中国历代人物传记资料库：李氏(王文進妻)（CBDB 161528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161528&o=json)
- [中国历代人物传记资料库：王文進（CBDB 142127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142127&o=json)
- [中国历代人物传记资料库：張氏(王文進妻)（CBDB 161527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161527&o=json)

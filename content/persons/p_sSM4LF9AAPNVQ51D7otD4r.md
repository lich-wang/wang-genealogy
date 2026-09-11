---
schema: wang-person/v1
id: p_sSM4LF9AAPNVQ51D7otD4r
status: active
merged_into: null
display_name: 王郅
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4HFh8QoM8RfNMXAJdjPihE
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B6NX6uZ3ymrkJxvoFcbiKT
          claim_id: c_4HFh8QoM8RfNMXAJdjPihE
          source_id: s_DCVLxy3yDfS7yQJbsQzLfB
          stance: supports
          locator: CBDB:141272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141272）
          source: &a1
            id: s_DCVLxy3yDfS7yQJbsQzLfB
            source_type: api_record
            title: 中国历代人物传记资料库：王郅（CBDB 141272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141272&o=json
            external_identifier: CBDB:141272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qzUxbk43o13MVJBDtSLk3s
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 737年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yQB6CGMBMeiC3NZNoV1L3Z
          claim_id: c_qzUxbk43o13MVJBDtSLk3s
          source_id: s_DCVLxy3yDfS7yQJbsQzLfB
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
        id: c_e5pRWm5w5zA1udmQQBJ5uC
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 789年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VbxDT9PKNEw9MvaPSRRrdt
          claim_id: c_e5pRWm5w5zA1udmQQBJ5uC
          source_id: s_DCVLxy3yDfS7yQJbsQzLfB
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
        id: c_yjNe7HfzcWm9PLHjtiZ6U3
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
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
        - id: cs_1uq8o3Hpxe5sReFdBKLLeg
          claim_id: c_yjNe7HfzcWm9PLHjtiZ6U3
          source_id: s_DCVLxy3yDfS7yQJbsQzLfB
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
        id: c_BHFpjbImT4jzHaZJusWntV
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Yww3BArYHAwhUU3c4fhMK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mkdOsScTv-cPYir85mSLwH
          claim_id: c_BHFpjbImT4jzHaZJusWntV
          source_id: s_r9EM8Km6cyZtg8KGJ7yJ1g
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 21：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r9EM8Km6cyZtg8KGJ7yJ1g
            source_type: api_record
            title: 中国历代人物传记资料库：王遘（CBDB 155482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155482&o=json
            external_identifier: CBDB:155482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1Yww3BArYHAwhUU3c4fhMK
        status: active
        display_name: 王遘
        merged_into_person_id: null
    - claim:
        id: c_vGqxlqCddT0F4KKdyMNeas
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H8j7bhrwDREUoxhxsKxCHJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SXaLZ2wO6jJ3ImH8_0JTR4
          claim_id: c_vGqxlqCddT0F4KKdyMNeas
          source_id: s_ucVEzC3xFd77izjJkWDDYH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 21：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ucVEzC3xFd77izjJkWDDYH
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 155481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155481&o=json
            external_identifier: CBDB:155481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H8j7bhrwDREUoxhxsKxCHJ
        status: active
        display_name: 王逵
        merged_into_person_id: null
    - claim:
        id: c_Dk8QkKNpjvk8tyXct3Zh-2
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MQSPddRZ4fCpx2yucRxqcS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGdt32F8fWgu8wdUIdpX6-
          claim_id: c_Dk8QkKNpjvk8tyXct3Zh-2
          source_id: s_doSdG9nFVCFSzhj6eSWkyb
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 21：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_doSdG9nFVCFSzhj6eSWkyb
            source_type: api_record
            title: 中国历代人物传记资料库：王迢（CBDB 155480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155480&o=json
            external_identifier: CBDB:155480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MQSPddRZ4fCpx2yucRxqcS
        status: active
        display_name: 王迢
        merged_into_person_id: null
    - claim:
        id: c_5moMK5OZcnb-k3TyBwd3oO
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zYuHsm5mtqQ4mLdvhb8Ti4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_adLnjoFhDrh0yChtGZUSaN
          claim_id: c_5moMK5OZcnb-k3TyBwd3oO
          source_id: s_1F8g6Tx4GpEXHV8tAL6gB2
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 21：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1F8g6Tx4GpEXHV8tAL6gB2
            source_type: api_record
            title: 中国历代人物传记资料库：王邈（CBDB 155483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155483&o=json
            external_identifier: CBDB:155483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zYuHsm5mtqQ4mLdvhb8Ti4
        status: active
        display_name: 王邈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lFaz97ZHg121dpDzgxEaRf
        subject_person_id: p_dW2Y9fcQkf4j5aMn8SBkL4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I6HBKq00PtsG7COzfb72G6
          claim_id: c_lFaz97ZHg121dpDzgxEaRf
          source_id: s_rJgABCHNJnJkpEWjYqbxrA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 21：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rJgABCHNJnJkpEWjYqbxrA
            source_type: api_record
            title: 中国历代人物传记资料库：王釴（CBDB 155486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155486&o=json
            external_identifier: CBDB:155486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dW2Y9fcQkf4j5aMn8SBkL4
        status: active
        display_name: 王釴
        merged_into_person_id: null
    - claim:
        id: c_pSd1wa2fZ3zWXtO4UP5YW7
        subject_person_id: p_jc5D9i8KRjZhAgCusMCLC8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EZlvr5CpNdBW8UXUgfwsGk
          claim_id: c_pSd1wa2fZ3zWXtO4UP5YW7
          source_id: s_4jetYRjRZos1oSyGK8B1x6
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 21：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4jetYRjRZos1oSyGK8B1x6
            source_type: api_record
            title: 中国历代人物传记资料库：王暠（CBDB 155485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155485&o=json
            external_identifier: CBDB:155485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jc5D9i8KRjZhAgCusMCLC8
        status: active
        display_name: 王暠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王郅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郅 | accepted |
| birth.date | 737年 | accepted |
| death.date | 789年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1Yww3BArYHAwhUU3c4fhMK | 王遘 | accepted |
| children | p_H8j7bhrwDREUoxhxsKxCHJ | 王逵 | accepted |
| children | p_MQSPddRZ4fCpx2yucRxqcS | 王迢 | accepted |
| children | p_zYuHsm5mtqQ4mLdvhb8Ti4 | 王邈 | accepted |
| ancestors | p_dW2Y9fcQkf4j5aMn8SBkL4 | 王釴 | accepted |
| ancestors | p_jc5D9i8KRjZhAgCusMCLC8 | 王暠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王暠（CBDB 155485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155485&o=json)
- [中国历代人物传记资料库：王遘（CBDB 155482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155482&o=json)
- [中国历代人物传记资料库：王逵（CBDB 155481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155481&o=json)
- [中国历代人物传记资料库：王邈（CBDB 155483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155483&o=json)
- [中国历代人物传记资料库：王迢（CBDB 155480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155480&o=json)
- [中国历代人物传记资料库：王釴（CBDB 155486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155486&o=json)
- [中国历代人物传记资料库：王郅（CBDB 141272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141272&o=json)

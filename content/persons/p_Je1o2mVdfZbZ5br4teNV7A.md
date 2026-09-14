---
schema: wang-person/v1
id: p_Je1o2mVdfZbZ5br4teNV7A
status: active
merged_into: null
display_name: 王守憲
cbdb_id: 290443
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_321xCEbL5wU8rSe4Hwz2g7
        subject_person_id: p_Je1o2mVdfZbZ5br4teNV7A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守憲，明人物。嘉靖八年進士，籍贯保定右衛，曾任訓導。（中国历代人物传记资料库 CBDB 290443）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2REPxenTP_C6ZUyadCwF2I
          claim_id: c_321xCEbL5wU8rSe4Hwz2g7
          source_id: s_6KPe1cr3pLCqBLXj4NAHCu
          stance: supports
          locator: CBDB:290443
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6KPe1cr3pLCqBLXj4NAHCu
            source_type: api_record
            title: 中国历代人物传记资料库：王守憲（CBDB 290443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290443&o=json
            external_identifier: CBDB:290443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zajLUXihtL4JpMqSoCHGur
        subject_person_id: p_Je1o2mVdfZbZ5br4teNV7A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mZozM2KwTBtKRoASLGHE6Y
          claim_id: c_zajLUXihtL4JpMqSoCHGur
          source_id: s_6KPe1cr3pLCqBLXj4NAHCu
          stance: supports
          locator: CBDB:290443
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_0QCUpiDZ4mRyQqJ06Ud37G
        subject_person_id: p_Je1o2mVdfZbZ5br4teNV7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y3ij6WeUEcKDgNeZS3dMHo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_662fUoxo8kv8DCWVs8hMAr
          claim_id: c_0QCUpiDZ4mRyQqJ06Ud37G
          source_id: s_6KPe1cr3pLCqBLXj4NAHCu
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第二百零二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6KPe1cr3pLCqBLXj4NAHCu
            source_type: api_record
            title: 中国历代人物传记资料库：王守憲（CBDB 290443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290443&o=json
            external_identifier: CBDB:290443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_y3ij6WeUEcKDgNeZS3dMHo
        status: active
        display_name: 王祚
        merged_into_person_id: null
    - claim:
        id: c_Cpxi6El3xxaPmeVrwq8xEc
        subject_person_id: p_Je1o2mVdfZbZ5br4teNV7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LYxR2aoyyrd6ZB29P881RW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KhLm_BzLQsaeZxQnr9fnvk
          claim_id: c_Cpxi6El3xxaPmeVrwq8xEc
          source_id: s_TrJDHM5TcFbEbSewpwBIHN
          stance: supports
          locator: CBDB：兄弟 王祚（202593）之父／母 王守憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王禧 与 王祚 为同胞（CBDB 记「兄」），王祚 之父／母即 王禧 之父／母。
          source:
            id: s_TrJDHM5TcFbEbSewpwBIHN
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 290446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290446&o=json
            external_identifier: CBDB:290446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LYxR2aoyyrd6ZB29P881RW
        status: active
        display_name: 王禧
        merged_into_person_id: null
    - claim:
        id: c__9ylzYeE8R9XltAZAGaZLe
        subject_person_id: p_Je1o2mVdfZbZ5br4teNV7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WgLRtbpJaopdDiq1gR5sAk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gBy8rZpWjA59Mx_K3GcmMN
          claim_id: c__9ylzYeE8R9XltAZAGaZLe
          source_id: s_IHoXZ3vFpIulT0LHGJ0_xv
          stance: supports
          locator: CBDB：兄弟 王祚（202593）之父／母 王守憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王襍 与 王祚 为同胞（CBDB 记「兄」），王祚 之父／母即 王襍 之父／母。
          source:
            id: s_IHoXZ3vFpIulT0LHGJ0_xv
            source_type: api_record
            title: 中国历代人物传记资料库：王襍（CBDB 290447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290447&o=json
            external_identifier: CBDB:290447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WgLRtbpJaopdDiq1gR5sAk
        status: active
        display_name: 王襍
        merged_into_person_id: null
    - claim:
        id: c_6vrKc_OBCPhTFCjMsUD8DZ
        subject_person_id: p_Je1o2mVdfZbZ5br4teNV7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xgf4m1uzkErDMpwT8PcnYx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tKbGE9S-pq6AAN1JQAxtMR
          claim_id: c_6vrKc_OBCPhTFCjMsUD8DZ
          source_id: s_Q8kaUho4eM3NigWEewRIj1
          stance: supports
          locator: CBDB：兄弟 王祚（202593）之父／母 王守憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王禎 与 王祚 为同胞（CBDB 记「兄」），王祚 之父／母即 王禎 之父／母。
          source:
            id: s_Q8kaUho4eM3NigWEewRIj1
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 290448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290448&o=json
            external_identifier: CBDB:290448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xgf4m1uzkErDMpwT8PcnYx
        status: active
        display_name: 王禎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守憲，明人物。嘉靖八年進士，籍贯保定右衛，曾任訓導。（中国历代人物传记资料库 CBDB 290443） | accepted |
| name.primary | 王守憲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_y3ij6WeUEcKDgNeZS3dMHo | 王祚 | accepted |
| children | p_LYxR2aoyyrd6ZB29P881RW | 王禧 | accepted |
| children | p_WgLRtbpJaopdDiq1gR5sAk | 王襍 | accepted |
| children | p_xgf4m1uzkErDMpwT8PcnYx | 王禎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守憲（CBDB 290443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290443&o=json)
- [中国历代人物传记资料库：王禧（CBDB 290446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290446&o=json)
- [中国历代人物传记资料库：王襍（CBDB 290447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290447&o=json)
- [中国历代人物传记资料库：王禎（CBDB 290448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290448&o=json)

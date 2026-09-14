---
schema: wang-person/v1
id: p_WgLRtbpJaopdDiq1gR5sAk
status: active
merged_into: null
display_name: 王襍
cbdb_id: 290447
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N7wjNdVtXq6YcEvJQszKEP
        subject_person_id: p_WgLRtbpJaopdDiq1gR5sAk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襍，明人物。嘉靖八年進士，籍贯保定右衛。（中国历代人物传记资料库 CBDB 290447）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_owY-nrxJbKbBQKpPU50YUw
          claim_id: c_N7wjNdVtXq6YcEvJQszKEP
          source_id: s_FHyS2gedwT1sTPCJjEmVpx
          stance: supports
          locator: CBDB:290447
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FHyS2gedwT1sTPCJjEmVpx
            source_type: api_record
            title: 中国历代人物传记资料库：王襍（CBDB 290447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290447&o=json
            external_identifier: CBDB:290447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZmqjPKBXJWX3wJPXn723uS
        subject_person_id: p_WgLRtbpJaopdDiq1gR5sAk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yP4eqACziD2nnauHVV9qHA
          claim_id: c_ZmqjPKBXJWX3wJPXn723uS
          source_id: s_FHyS2gedwT1sTPCJjEmVpx
          stance: supports
          locator: CBDB:290447
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_Je1o2mVdfZbZ5br4teNV7A
        status: active
        display_name: 王守憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WaoYduQveoLreCzHzk3njU
        subject_person_id: p_WgLRtbpJaopdDiq1gR5sAk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y3ij6WeUEcKDgNeZS3dMHo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ieUVaISSJp2vy-0HcgCALB
          claim_id: c_WaoYduQveoLreCzHzk3njU
          source_id: s_IHoXZ3vFpIulT0LHGJ0_xv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202593 王祚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_y3ij6WeUEcKDgNeZS3dMHo
        status: active
        display_name: 王祚
        merged_into_person_id: null
---

# 王襍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王襍，明人物。嘉靖八年進士，籍贯保定右衛。（中国历代人物传记资料库 CBDB 290447） | accepted |
| name.primary | 王襍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Je1o2mVdfZbZ5br4teNV7A | 王守憲 | accepted |
| other | p_y3ij6WeUEcKDgNeZS3dMHo | 王祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王襍（CBDB 290447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290447&o=json)

---
schema: wang-person/v1
id: p_zRoaCHSKLmhLA6JAg13u3d
status: active
merged_into: null
display_name: 王宜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Behy55o4J82Grhz6rPQWip
        subject_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MGY72gQJyQx5sLy92HGFsK
          claim_id: c_Behy55o4J82Grhz6rPQWip
          source_id: s_f2q9x9g9GZZTgBnVm6ZD6i
          stance: supports
          locator: CBDB:204956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204956）
          source: &a1
            id: s_f2q9x9g9GZZTgBnVm6ZD6i
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 204956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204956&o=json
            external_identifier: CBDB:204956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4przFCytKdhqUk966CYvHt
        subject_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1533年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8QmpJDYGg2krbkjvE5LMxh
          claim_id: c_4przFCytKdhqUk966CYvHt
          source_id: s_f2q9x9g9GZZTgBnVm6ZD6i
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
        id: c_6gXsKS56yGYtcvc7i4iPff
        subject_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜（生于1533年），明人物。明清進士進士，籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 204956）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BeKywH5bVeGC-5R9kk27l0
          claim_id: c_6gXsKS56yGYtcvc7i4iPff
          source_id: s_f2q9x9g9GZZTgBnVm6ZD6i
          stance: supports
          locator: CBDB:204956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CSMT1j_v7bvgK_amNFF85p
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ig7hMt2svPC3_kBOkv46J9
          claim_id: c_CSMT1j_v7bvgK_amNFF85p
          source_id: s_f2q9x9g9GZZTgBnVm6ZD6i
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mxcPanzqKKzAH8GE9Zk1aa
        status: active
        display_name: 王絹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_5SkMpwr2oJKYykxvFu659-
        subject_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HHB6KiedwGSamtkhMrXAsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VR8mjpUYuahrJ0sO1d5cSN
          claim_id: c_5SkMpwr2oJKYykxvFu659-
          source_id: s_we1r_dsuEGU-HX5FIBVXTV
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_we1r_dsuEGU-HX5FIBVXTV
            source_type: api_record
            title: 中国历代人物传记资料库：陸氏(王宜妻)（CBDB 326387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326387&o=json
            external_identifier: CBDB:326387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HHB6KiedwGSamtkhMrXAsL
        status: active
        display_name: 陸氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_YU4ZtXVFkUuS-tWWhA6AUE
        subject_person_id: p_XK5ZiQAQhABQCvnLdSN8Sv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eGCxjtwi_RO8bZSCP_V30i
          claim_id: c_YU4ZtXVFkUuS-tWWhA6AUE
          source_id: s_f2q9x9g9GZZTgBnVm6ZD6i
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XK5ZiQAQhABQCvnLdSN8Sv
        status: active
        display_name: 王元二
        merged_into_person_id: null
    - claim:
        id: c_OtdDPYf6i-5nwpvH1iaDr6
        subject_person_id: p_kdjW6AduB8AEV8LL3bUvwF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RF2A4ziopK33mhG8924Qek
          claim_id: c_OtdDPYf6i-5nwpvH1iaDr6
          source_id: s_f2q9x9g9GZZTgBnVm6ZD6i
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kdjW6AduB8AEV8LL3bUvwF
        status: active
        display_name: 王巨甫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宜 | accepted |
| birth.date | 1533年 | accepted |
| bio.summary | 王宜（生于1533年），明人物。明清進士進士，籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 204956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mxcPanzqKKzAH8GE9Zk1aa | 王絹 | accepted |
| spouses | p_HHB6KiedwGSamtkhMrXAsL | 陸氏 | accepted |
| ancestors | p_XK5ZiQAQhABQCvnLdSN8Sv | 王元二 | accepted |
| ancestors | p_kdjW6AduB8AEV8LL3bUvwF | 王巨甫 | accepted |

## 外部来源

- [中国历代人物传记资料库：陸氏(王宜妻)（CBDB 326387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326387&o=json)
- [中国历代人物传记资料库：王宜（CBDB 204956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204956&o=json)

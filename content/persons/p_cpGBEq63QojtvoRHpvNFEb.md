---
schema: wang-person/v1
id: p_cpGBEq63QojtvoRHpvNFEb
status: active
merged_into: null
display_name: 王家相
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CK4JVrSpik52uaLXBELiwT
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yXbjs8TT9FF7hKyiktpt85
          claim_id: c_CK4JVrSpik52uaLXBELiwT
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: CBDB:207666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207666）
          source: &a1
            id: s_hQ4MNw8gYqbwTtzMu8ZNXd
            source_type: api_record
            title: 中国历代人物传记资料库：王家相（CBDB 207666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json
            external_identifier: CBDB:207666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EFt2ptqKnSedYb3h4EaKK8
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1577年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LP9FB1V4vQFYqfm2egVLPQ
          claim_id: c_EFt2ptqKnSedYb3h4EaKK8
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
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
        id: c_R4kfiBErDBYQujXy5jLEYy
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家相（生于1577年），明人物。明清進士進士，籍贯海鹽，入仕進士，曾任刑部主事、主考官。（中国历代人物传记资料库 CBDB 207666）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6VoxqeLnPRS8Zw3XGqFnkT
          claim_id: c_R4kfiBErDBYQujXy5jLEYy
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: CBDB:207666
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_afJkvdubxMvbV5KvpBwPng
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cpGBEq63QojtvoRHpvNFEb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fgrkiNHk5F3eXuyCriCmhS
          claim_id: c_afJkvdubxMvbV5KvpBwPng
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uE1u3bYV3J8fuYnjaWRvAs
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children:
    - claim:
        id: c_ES5BQ6i9ig3ZMB1AGDfeql
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Ar5PzC26XbEgUcnAsMSDe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6juU30jzWlE1-IGAKEm6rt
          claim_id: c_ES5BQ6i9ig3ZMB1AGDfeql
          source_id: s_Cj7m495sNc4oJbqopqAB9f
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=293849：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Cj7m495sNc4oJbqopqAB9f
            source_type: api_record
            title: 中国历代人物传记资料库：王廷傑（CBDB 692033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692033&o=json
            external_identifier: CBDB:692033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7Ar5PzC26XbEgUcnAsMSDe
        status: active
        display_name: 王廷傑
        merged_into_person_id: null
    - claim:
        id: c_WWkykVfvpfiGX55la_UPZR
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LfhBsVrzF5oR2Bfh5AJyMU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NccfNspvWXz2nm7fqoRMHz
          claim_id: c_WWkykVfvpfiGX55la_UPZR
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LfhBsVrzF5oR2Bfh5AJyMU
        status: active
        display_name: 王延階
        merged_into_person_id: null
    - claim:
        id: c_zzWSuVXk8i6AgfG77jNziG
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_di3NxGWQY8Xk9gW3BkcP6V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DeMhSVbaJx4UJ5IZvnpYfx
          claim_id: c_zzWSuVXk8i6AgfG77jNziG
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_di3NxGWQY8Xk9gW3BkcP6V
        status: active
        display_name: 王廷俊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_rxVzqQixUHvpw8wplPZZS4
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bCBQDgJUZiKgAUPPVoJ7g6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tFfMmKLIFCNSobAjXGgur5
          claim_id: c_rxVzqQixUHvpw8wplPZZS4
          source_id: s_yoazuelWg_gvlqqSXL7kKR
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第三十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yoazuelWg_gvlqqSXL7kKR
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(王家相妻)（CBDB 233439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233439&o=json
            external_identifier: CBDB:233439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bCBQDgJUZiKgAUPPVoJ7g6
        status: active
        display_name: 朱氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_zUfmXdWDVFWr1Oj2k77Djc
        subject_person_id: p_FRm6NSfhBRyYx29daZYb7k
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cpGBEq63QojtvoRHpvNFEb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iWr0h_yTA6xQ2e-vdTuIZ9
          claim_id: c_zUfmXdWDVFWr1Oj2k77Djc
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第三十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FRm6NSfhBRyYx29daZYb7k
        status: active
        display_name: 王文達
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王家相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家相 | accepted |
| birth.date | 1577年 | accepted |
| bio.summary | 王家相（生于1577年），明人物。明清進士進士，籍贯海鹽，入仕進士，曾任刑部主事、主考官。（中国历代人物传记资料库 CBDB 207666） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uE1u3bYV3J8fuYnjaWRvAs | 王釗 | accepted |
| children | p_7Ar5PzC26XbEgUcnAsMSDe | 王廷傑 | accepted |
| children | p_LfhBsVrzF5oR2Bfh5AJyMU | 王延階 | accepted |
| children | p_di3NxGWQY8Xk9gW3BkcP6V | 王廷俊 | accepted |
| spouses | p_bCBQDgJUZiKgAUPPVoJ7g6 | 朱氏 | accepted |
| ancestors | p_FRm6NSfhBRyYx29daZYb7k | 王文達 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家相（CBDB 207666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json)
- [中国历代人物传记资料库：王廷傑（CBDB 692033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692033&o=json)
- [中国历代人物传记资料库：朱氏(王家相妻)（CBDB 233439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233439&o=json)

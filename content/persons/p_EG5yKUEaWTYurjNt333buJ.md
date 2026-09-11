---
schema: wang-person/v1
id: p_EG5yKUEaWTYurjNt333buJ
status: active
merged_into: null
display_name: 王同皎
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MDkYS9117yFJW4G5hSRRN1
        subject_person_id: p_EG5yKUEaWTYurjNt333buJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同皎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NvtZ4DFt56pn7JwMvzf2Mi
          claim_id: c_MDkYS9117yFJW4G5hSRRN1
          source_id: s_ZH8N7VhSvuHLNwMMchyZVA
          stance: supports
          locator: CBDB:154781
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154781）
          source: &a1
            id: s_ZH8N7VhSvuHLNwMMchyZVA
            source_type: api_record
            title: 中国历代人物传记资料库：王同皎（CBDB 154781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154781&o=json
            external_identifier: CBDB:154781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nRUd7WCdBwXatvZEvc2Wu7
        subject_person_id: p_EG5yKUEaWTYurjNt333buJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同皎，唐人物。籍贯偃師，曾任光祿卿。（中国历代人物传记资料库 CBDB 154781）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2HKTTWnglISCIHaVZoSTl5
          claim_id: c_nRUd7WCdBwXatvZEvc2Wu7
          source_id: s_ZH8N7VhSvuHLNwMMchyZVA
          stance: supports
          locator: CBDB:154781
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9ALM52nBwLGg3SyeAhWdr7
        subject_person_id: p_P9grpQUuaJm36Kf1zD6ovz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EG5yKUEaWTYurjNt333buJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V4Ti_2UcmF-c2HViAvu0GB
          claim_id: c_9ALM52nBwLGg3SyeAhWdr7
          source_id: s_ZH8N7VhSvuHLNwMMchyZVA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P9grpQUuaJm36Kf1zD6ovz
        status: active
        display_name: 王知道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FvJENcvCOKm8Ogrsr8wajP
        subject_person_id: p_EG5yKUEaWTYurjNt333buJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2dRJyJE448fBvPvc9YM2KF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KWmDQNLmQt61euXYAQp1y6
          claim_id: c_FvJENcvCOKm8Ogrsr8wajP
          source_id: s_Jj6pCs4gtJFib3htowuQW9
          stance: supports
          locator: 新唐書，3653：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Jj6pCs4gtJFib3htowuQW9
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(定安公主)（CBDB 192849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192849&o=json
            external_identifier: CBDB:192849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2dRJyJE448fBvPvc9YM2KF
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_c0s0FhQlV3M0DMCs5r-I53
        subject_person_id: p_EG5yKUEaWTYurjNt333buJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aw88KdfXUrsCupiL6TPrGu
          claim_id: c_c0s0FhQlV3M0DMCs5r-I53
          source_id: s_opASS8N2VcwCXB51vGEx7L
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 3：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_opASS8N2VcwCXB51vGEx7L
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 141157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141157&o=json
            external_identifier: CBDB:141157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7wCLqcQbBY1uXQ63JU3AKf
        status: active
        display_name: 王訓
        merged_into_person_id: null
    - claim:
        id: c_obh7O0k6jAE-vCtA8-ujXf
        subject_person_id: p_EG5yKUEaWTYurjNt333buJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7QrhcSCpByfzYfPYz7zK5h
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AzzmpjBBbLNcvtpe80x5PW
          claim_id: c_obh7O0k6jAE-vCtA8-ujXf
          source_id: s_ZH8N7VhSvuHLNwMMchyZVA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 126：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7QrhcSCpByfzYfPYz7zK5h
        status: active
        display_name: 王支某
        merged_into_person_id: null
  other: []
---

# 王同皎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同皎 | accepted |
| bio.summary | 王同皎，唐人物。籍贯偃師，曾任光祿卿。（中国历代人物传记资料库 CBDB 154781） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P9grpQUuaJm36Kf1zD6ovz | 王知道 | accepted |
| spouses | p_2dRJyJE448fBvPvc9YM2KF | 李氏 | accepted |
| descendants | p_7wCLqcQbBY1uXQ63JU3AKf | 王訓 | accepted |
| descendants | p_7QrhcSCpByfzYfPYz7zK5h | 王支某 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(定安公主)（CBDB 192849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192849&o=json)
- [中国历代人物传记资料库：王同皎（CBDB 154781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154781&o=json)
- [中国历代人物传记资料库：王訓（CBDB 141157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141157&o=json)

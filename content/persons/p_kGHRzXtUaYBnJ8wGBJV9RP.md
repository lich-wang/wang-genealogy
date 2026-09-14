---
schema: wang-person/v1
id: p_kGHRzXtUaYBnJ8wGBJV9RP
status: active
merged_into: null
display_name: 王化
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JzAJeLfEakEWyxFEeQ1kcR
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s7T12wPH9hNLVB5nj2nrAX
          claim_id: c_JzAJeLfEakEWyxFEeQ1kcR
          source_id: s_Tv1UGEZ2uHHJHsnvp62A5n
          stance: supports
          locator: CBDB:337967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337967）
          source: &a1
            id: s_Tv1UGEZ2uHHJHsnvp62A5n
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 337967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337967&o=json
            external_identifier: CBDB:337967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UJmttngEHCfDxDX7M3fZwi
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337967）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JsnQXdV8PGIDSfCj5PAXaB
          claim_id: c_UJmttngEHCfDxDX7M3fZwi
          source_id: s_Tv1UGEZ2uHHJHsnvp62A5n
          stance: supports
          locator: CBDB:337967
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qoN1o6ckAy43iyTigOOZ-V
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eXc60P-nqfneeudv0BYf1f
          claim_id: c_qoN1o6ckAy43iyTigOOZ-V
          source_id: s_Tv1UGEZ2uHHJHsnvp62A5n
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aYr3EPQVvfC6NBKDGNLUTL
        status: active
        display_name: 王懋德
        merged_into_person_id: null
    - claim:
        id: c_aT1MjesbW4TUhu9CHd2PvF
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3gdkjt43co47VHsAwCLJqd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9puQcAezj56W5cftT6jgDS
          claim_id: c_aT1MjesbW4TUhu9CHd2PvF
          source_id: s_EweJhVp17ubt2OoLGFaYje
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋貞 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋貞 之父／母。
          source:
            id: s_EweJhVp17ubt2OoLGFaYje
            source_type: api_record
            title: 中国历代人物传记资料库：王懋貞（CBDB 337978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337978&o=json
            external_identifier: CBDB:337978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3gdkjt43co47VHsAwCLJqd
        status: active
        display_name: 王懋貞
        merged_into_person_id: null
    - claim:
        id: c_6VMtRKPjESnBFjopmjU6yd
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DcNt3SFdz7EKzkR4mggGmA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ty0w65VzNaEDMxz4_dNgEq
          claim_id: c_6VMtRKPjESnBFjopmjU6yd
          source_id: s__4Z8cBQmr5KXxVo1Gh59Lj
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋學 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋學 之父／母。
          source:
            id: s__4Z8cBQmr5KXxVo1Gh59Lj
            source_type: api_record
            title: 中国历代人物传记资料库：王懋學（CBDB 337974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337974&o=json
            external_identifier: CBDB:337974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DcNt3SFdz7EKzkR4mggGmA
        status: active
        display_name: 王懋學
        merged_into_person_id: null
    - claim:
        id: c_JaBtYG9nN1_h6Ybi4um0ON
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KJJrwKD4rAD5pxVK5Q5kna
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYyenmCExZtb5TQDxz8OBw
          claim_id: c_JaBtYG9nN1_h6Ybi4um0ON
          source_id: s_fSNgThC7qgI--Z6VbE951D
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋孝 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋孝 之父／母。
          source:
            id: s_fSNgThC7qgI--Z6VbE951D
            source_type: api_record
            title: 中国历代人物传记资料库：王懋孝（CBDB 337976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337976&o=json
            external_identifier: CBDB:337976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KJJrwKD4rAD5pxVK5Q5kna
        status: active
        display_name: 王懋孝
        merged_into_person_id: null
    - claim:
        id: c_DcPvIWAFhTd6QjAcDfJy0p
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Sj5SgaMTwGzvQR7d1NUC6n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0i9jwFw6Ug2tREWw02mnGN
          claim_id: c_DcPvIWAFhTd6QjAcDfJy0p
          source_id: s_nPcu-8mauZFeE6h6EO37oc
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋官 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋官 之父／母。
          source:
            id: s_nPcu-8mauZFeE6h6EO37oc
            source_type: api_record
            title: 中国历代人物传记资料库：王懋官（CBDB 337971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337971&o=json
            external_identifier: CBDB:337971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Sj5SgaMTwGzvQR7d1NUC6n
        status: active
        display_name: 王懋官
        merged_into_person_id: null
    - claim:
        id: c_ACpIDmFeigrrOxpBHXWXO3
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V24J9LQqiVAHATFGWP1sC9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dkzH_kxVWkvhXWXyk5CaJD
          claim_id: c_ACpIDmFeigrrOxpBHXWXO3
          source_id: s_dnipIEOtAMrGsmWNcra0YK
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋忠 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋忠 之父／母。
          source:
            id: s_dnipIEOtAMrGsmWNcra0YK
            source_type: api_record
            title: 中国历代人物传记资料库：王懋忠（CBDB 337977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337977&o=json
            external_identifier: CBDB:337977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V24J9LQqiVAHATFGWP1sC9
        status: active
        display_name: 王懋忠
        merged_into_person_id: null
    - claim:
        id: c_tq-PhFf7D-FaAFgs7OlTIk
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tKum2F5FoXGD328RaJE1uy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qTDvYyb94_ho3XrBq87h7e
          claim_id: c_tq-PhFf7D-FaAFgs7OlTIk
          source_id: s_KgkMygrMpS84tqaTXodgJz
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋功 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋功 之父／母。
          source:
            id: s_KgkMygrMpS84tqaTXodgJz
            source_type: api_record
            title: 中国历代人物传记资料库：王懋功（CBDB 337973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337973&o=json
            external_identifier: CBDB:337973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tKum2F5FoXGD328RaJE1uy
        status: active
        display_name: 王懋功
        merged_into_person_id: null
    - claim:
        id: c_mwb5SLLbZZ2DfPm9G26ABH
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w1Ax2kLtBNNNB5KyydQwH9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ejuNKg_sujaw3VYL2A71XR
          claim_id: c_mwb5SLLbZZ2DfPm9G26ABH
          source_id: s_MJd9tuxurWrD5gK-EOmKwy
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋誠 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋誠 之父／母。
          source:
            id: s_MJd9tuxurWrD5gK-EOmKwy
            source_type: api_record
            title: 中国历代人物传记资料库：王懋誠（CBDB 337972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337972&o=json
            external_identifier: CBDB:337972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w1Ax2kLtBNNNB5KyydQwH9
        status: active
        display_name: 王懋誠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化 | accepted |
| bio.summary | 王化，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337967） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aYr3EPQVvfC6NBKDGNLUTL | 王懋德 | accepted |
| children | p_3gdkjt43co47VHsAwCLJqd | 王懋貞 | accepted |
| children | p_DcNt3SFdz7EKzkR4mggGmA | 王懋學 | accepted |
| children | p_KJJrwKD4rAD5pxVK5Q5kna | 王懋孝 | accepted |
| children | p_Sj5SgaMTwGzvQR7d1NUC6n | 王懋官 | accepted |
| children | p_V24J9LQqiVAHATFGWP1sC9 | 王懋忠 | accepted |
| children | p_tKum2F5FoXGD328RaJE1uy | 王懋功 | accepted |
| children | p_w1Ax2kLtBNNNB5KyydQwH9 | 王懋誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 337967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337967&o=json)
- [中国历代人物传记资料库：王懋誠（CBDB 337972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337972&o=json)
- [中国历代人物传记资料库：王懋功（CBDB 337973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337973&o=json)
- [中国历代人物传记资料库：王懋官（CBDB 337971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337971&o=json)
- [中国历代人物传记资料库：王懋孝（CBDB 337976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337976&o=json)
- [中国历代人物传记资料库：王懋學（CBDB 337974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337974&o=json)
- [中国历代人物传记资料库：王懋貞（CBDB 337978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337978&o=json)
- [中国历代人物传记资料库：王懋忠（CBDB 337977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337977&o=json)

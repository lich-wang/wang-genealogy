---
schema: wang-person/v1
id: p_V4FwK3zU4QEPhCKRyGhfXG
status: active
merged_into: null
display_name: 王問
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J8BZx8LBLyGhJmmoHuLcaK
        subject_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7HwHGAvS5cWzv2piPTNGn1
          claim_id: c_J8BZx8LBLyGhJmmoHuLcaK
          source_id: s_9RzXF57vR5CxGLrLEAiBPA
          stance: supports
          locator: CBDB:199435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199435）
          source: &a1
            id: s_9RzXF57vR5CxGLrLEAiBPA
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 199435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199435&o=json
            external_identifier: CBDB:199435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xqzRTkENfSnJXeF3JdjgTJ
        subject_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1441年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hHCF3Ux56dyXfBCfYLP3tZ
          claim_id: c_xqzRTkENfSnJXeF3JdjgTJ
          source_id: s_9RzXF57vR5CxGLrLEAiBPA
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
        id: c_Jxwk75MnNqtJEc54jwNCKA
        subject_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問（生于1441年），明人物。明清進士進士，籍贯武城，入仕進士。（中国历代人物传记资料库 CBDB 199435）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-ucwm4Nv9ITHt44kSxWq6A
          claim_id: c_Jxwk75MnNqtJEc54jwNCKA
          source_id: s_9RzXF57vR5CxGLrLEAiBPA
          stance: supports
          locator: CBDB:199435
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2qxJ5_C_Z0SbidN2l4S4ui
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmOrZzlVPH5VQVLExrchBs
          claim_id: c_2qxJ5_C_Z0SbidN2l4S4ui
          source_id: s_VsxZMjTKLcLm5T17FbA1Zd
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VsxZMjTKLcLm5T17FbA1Zd
            source_type: api_record
            title: 中国历代人物传记资料库：王循（CBDB 244955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244955&o=json
            external_identifier: CBDB:244955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GcBvHSffABPszyHqYWBM3f
        status: active
        display_name: 王循
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_bIonGj3XaZeBCxQXA4alDO
        subject_person_id: p_gPxjSLrcRkcbqzAo1NC5Gm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AiSvGdI1QQQ8bKO9sH9eqQ
          claim_id: c_bIonGj3XaZeBCxQXA4alDO
          source_id: s_hqFGY2fJ5wJvMKrbNNz7EJ
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百六十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hqFGY2fJ5wJvMKrbNNz7EJ
            source_type: api_record
            title: 中国历代人物传记资料库：王仲禮（CBDB 244954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244954&o=json
            external_identifier: CBDB:244954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gPxjSLrcRkcbqzAo1NC5Gm
        status: active
        display_name: 王仲禮
        merged_into_person_id: null
    - claim:
        id: c_jbKJENWLeQiaFnA2BeHi0n
        subject_person_id: p_uXdxzkne55hz196gT7ThgP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7oiTTeBW3vjn7rvlYUvPX1
          claim_id: c_jbKJENWLeQiaFnA2BeHi0n
          source_id: s_QaEUc5d45zGWRxn1Ky7pfY
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QaEUc5d45zGWRxn1Ky7pfY
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 244953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244953&o=json
            external_identifier: CBDB:244953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uXdxzkne55hz196gT7ThgP
        status: active
        display_name: 王思誠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_AslNvMTClC4JejH6y2-lhU
        subject_person_id: p_AbZUuyWRBSPKbc1QtJF8Su
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DVvEL6P4BRHxTLTY-OJq6k
          claim_id: c_AslNvMTClC4JejH6y2-lhU
          source_id: s_pOZonQ8Jh6Fs4vg_0X8kFa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199435 王問）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pOZonQ8Jh6Fs4vg_0X8kFa
            source_type: api_record
            title: 中国历代人物传记资料库：王閱（CBDB 244960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244960&o=json
            external_identifier: CBDB:244960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AbZUuyWRBSPKbc1QtJF8Su
        status: active
        display_name: 王閱
        merged_into_person_id: null
    - claim:
        id: c_w1iSi8IghZcVsJw6mbDvqp
        subject_person_id: p_LBnShuBmDjQYAm8429uK1s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCk-ratzYjmknbh-Ieb-TQ
          claim_id: c_w1iSi8IghZcVsJw6mbDvqp
          source_id: s_m9wHiwOEFsrUsLjlscen6-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199435 王問）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_m9wHiwOEFsrUsLjlscen6-
            source_type: api_record
            title: 中国历代人物传记资料库：王慎（CBDB 244965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244965&o=json
            external_identifier: CBDB:244965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LBnShuBmDjQYAm8429uK1s
        status: active
        display_name: 王慎
        merged_into_person_id: null
    - claim:
        id: c_vSzHnRm6zGnsfBm8nWLw7J
        subject_person_id: p_MUxDEHkoMfHPoyTcYqzNyN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iLonMn4hlg0CtRUYeL-CaW
          claim_id: c_vSzHnRm6zGnsfBm8nWLw7J
          source_id: s_xZNtNhYqWFWnOlW-oSuolA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199435 王問）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xZNtNhYqWFWnOlW-oSuolA
            source_type: api_record
            title: 中国历代人物传记资料库：王閏（CBDB 244962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244962&o=json
            external_identifier: CBDB:244962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MUxDEHkoMfHPoyTcYqzNyN
        status: active
        display_name: 王閏
        merged_into_person_id: null
    - claim:
        id: c_YfzzaBn-NgSvzBM_Tamps6
        subject_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZN2Bv7zPhYjpFnT4687tv5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FAoYsxLJPrTUPPl8Gu0zQ3
          claim_id: c_YfzzaBn-NgSvzBM_Tamps6
          source_id: s_Rh-e9Wk0s1qAG6WgUfZw9p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199435 王問）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Rh-e9Wk0s1qAG6WgUfZw9p
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 244961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244961&o=json
            external_identifier: CBDB:244961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZN2Bv7zPhYjpFnT4687tv5
        status: active
        display_name: 王開
        merged_into_person_id: null
    - claim:
        id: c_qV-oN2U0lnIcqzSMtjBQan
        subject_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_grjREFngH89uEV7yrej4T2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iqWnDUgerviLdGqLRa_mdU
          claim_id: c_qV-oN2U0lnIcqzSMtjBQan
          source_id: s_DaByWd3UooSqbekeKejbPG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199435 王問）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DaByWd3UooSqbekeKejbPG
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 244959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244959&o=json
            external_identifier: CBDB:244959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_grjREFngH89uEV7yrej4T2
        status: active
        display_name: 王敏
        merged_into_person_id: null
---

# 王問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問 | accepted |
| birth.date | 1441年 | accepted |
| bio.summary | 王問（生于1441年），明人物。明清進士進士，籍贯武城，入仕進士。（中国历代人物传记资料库 CBDB 199435） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GcBvHSffABPszyHqYWBM3f | 王循 | accepted |
| ancestors | p_gPxjSLrcRkcbqzAo1NC5Gm | 王仲禮 | accepted |
| ancestors | p_uXdxzkne55hz196gT7ThgP | 王思誠 | accepted |
| other | p_AbZUuyWRBSPKbc1QtJF8Su | 王閱 | accepted |
| other | p_LBnShuBmDjQYAm8429uK1s | 王慎 | accepted |
| other | p_MUxDEHkoMfHPoyTcYqzNyN | 王閏 | accepted |
| other | p_ZN2Bv7zPhYjpFnT4687tv5 | 王開 | accepted |
| other | p_grjREFngH89uEV7yrej4T2 | 王敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王開（CBDB 244961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244961&o=json)
- [中国历代人物传记资料库：王敏（CBDB 244959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244959&o=json)
- [中国历代人物传记资料库：王閏（CBDB 244962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244962&o=json)
- [中国历代人物传记资料库：王慎（CBDB 244965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244965&o=json)
- [中国历代人物传记资料库：王思誠（CBDB 244953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244953&o=json)
- [中国历代人物传记资料库：王問（CBDB 199435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199435&o=json)
- [中国历代人物传记资料库：王循（CBDB 244955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244955&o=json)
- [中国历代人物传记资料库：王閱（CBDB 244960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244960&o=json)
- [中国历代人物传记资料库：王仲禮（CBDB 244954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244954&o=json)

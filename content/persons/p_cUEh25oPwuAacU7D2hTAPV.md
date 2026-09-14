---
schema: wang-person/v1
id: p_cUEh25oPwuAacU7D2hTAPV
status: active
merged_into: null
display_name: 王臨亨
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o2ghTrVJ15uMSWhyVVwKjL
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZJMKtJQHhUQX16fGC6yhVV
          claim_id: c_o2ghTrVJ15uMSWhyVVwKjL
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: CBDB:126852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126852）
          source: &a1
            id: s_kEUVXVMNSjJdG7sCHKLhxA
            source_type: api_record
            title: 中国历代人物传记资料库：王臨亨（CBDB 126852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126852&o=json
            external_identifier: CBDB:126852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JDmAJs5vWotHbi9XveDGfd
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1556年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2NuZsGzRhnw87dvLVNVjf7
          claim_id: c_JDmAJs5vWotHbi9XveDGfd
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
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
        id: c_Ds1WnGpQ7UG24r1oWXuLpy
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1603年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a2TiQv1SWqsqQ913GCXycD
          claim_id: c_Ds1WnGpQ7UG24r1oWXuLpy
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
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
        id: c_N5KXd9DzTGBrEKM8S6CffF
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨亨（1556年—1603年），明人物。籍贯崑山，身份为良吏;循吏，入仕進士，曾任縣令、刑部郎中、刑部主事。（中国历代人物传记资料库 CBDB 126852）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nmQB1vlh7Gs7Vy1R9FdHCj
          claim_id: c_N5KXd9DzTGBrEKM8S6CffF
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: CBDB:126852
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9qOlK6xAhFpkI5w8mgLxTM
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t0IkMd5nIfZJPnx5KuJxlL
          claim_id: c_9qOlK6xAhFpkI5w8mgLxTM
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WP2TCGKdqkuWFjHVRTiLcW
        status: active
        display_name: 王志堅
        merged_into_person_id: null
    - claim:
        id: c_5T0b0bySOcpqWHd2x2Pc0r
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S59f4ecKi74gcNZvVCFxMo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BhypxmFj2jZBcA7GC-kIpG
          claim_id: c_5T0b0bySOcpqWHd2x2Pc0r
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: 江南通志，lgid=65730-65731：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_S59f4ecKi74gcNZvVCFxMo
        status: active
        display_name: 王志長
        merged_into_person_id: null
    - claim:
        id: c_YVwI0_lxX2IkrfNLBuj8ij
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uhBvBPtXf315t4tLh9pNU3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BEd5GFRXCQ2Klv_gL99zMA
          claim_id: c_YVwI0_lxX2IkrfNLBuj8ij
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: 江南通志，lgid=65730-65731：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uhBvBPtXf315t4tLh9pNU3
        status: active
        display_name: 王志慶
        merged_into_person_id: null
    - claim:
        id: c_I8d3woIA1S6jtWgDdMelef
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4EEgBQWAFUW189KU5BXtAJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nQfk0IMlMwShs5gYG1oS1S
          claim_id: c_I8d3woIA1S6jtWgDdMelef
          source_id: s_gfXjnGJ686CrjiHqG9Rf44
          stance: supports
          locator: CBDB：兄弟 王志堅（126537）之父／母 王臨亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王志龍 与 王志堅 为同胞（CBDB 记「兄」），王志堅 之父／母即 王志龍 之父／母。
          source:
            id: s_gfXjnGJ686CrjiHqG9Rf44
            source_type: api_record
            title: 中国历代人物传记资料库：王志龍（CBDB 235161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235161&o=json
            external_identifier: CBDB:235161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4EEgBQWAFUW189KU5BXtAJ
        status: active
        display_name: 王志龍
        merged_into_person_id: null
    - claim:
        id: c_Bdzjjl7jj2ehn7f8AcZsmM
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CVfm8QLBPRz6YKLsA5QyLD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kp_PqalcF6aUMJXY5_-GFl
          claim_id: c_Bdzjjl7jj2ehn7f8AcZsmM
          source_id: s_RxEfhC144FlQB0iiWqlo9x
          stance: supports
          locator: CBDB：兄弟 王志堅（126537）之父／母 王臨亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王志伊 与 王志堅 为同胞（CBDB 记「兄」），王志堅 之父／母即 王志伊 之父／母。
          source:
            id: s_RxEfhC144FlQB0iiWqlo9x
            source_type: api_record
            title: 中国历代人物传记资料库：王志伊（CBDB 235157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235157&o=json
            external_identifier: CBDB:235157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CVfm8QLBPRz6YKLsA5QyLD
        status: active
        display_name: 王志伊
        merged_into_person_id: null
    - claim:
        id: c_XefI4VOD8AYyEyCaSASqSa
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KMpUw21MkzdHgcCwnYVS8A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DhPdeWGaDmj9a8fEmmoAFN
          claim_id: c_XefI4VOD8AYyEyCaSASqSa
          source_id: s_1Nm3481J5t4uWA6JiC_Dyj
          stance: supports
          locator: CBDB：兄弟 王志堅（126537）之父／母 王臨亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王志審 与 王志堅 为同胞（CBDB 记「兄」），王志堅 之父／母即 王志審 之父／母。
          source:
            id: s_1Nm3481J5t4uWA6JiC_Dyj
            source_type: api_record
            title: 中国历代人物传记资料库：王志審（CBDB 235160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235160&o=json
            external_identifier: CBDB:235160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KMpUw21MkzdHgcCwnYVS8A
        status: active
        display_name: 王志審
        merged_into_person_id: null
    - claim:
        id: c_FGNsXALwFKAcz7CU-tazzI
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XyT13XqKTnrUi4sdfqMDd2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OOVepZlEAvhj8eAvXqGNRg
          claim_id: c_FGNsXALwFKAcz7CU-tazzI
          source_id: s_Y64nCS6N91wSf4DbwbT4vJ
          stance: supports
          locator: CBDB：兄弟 王志堅（126537）之父／母 王臨亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王志宏 与 王志堅 为同胞（CBDB 记「兄」），王志堅 之父／母即 王志宏 之父／母。
          source:
            id: s_Y64nCS6N91wSf4DbwbT4vJ
            source_type: api_record
            title: 中国历代人物传记资料库：王志宏（CBDB 235158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235158&o=json
            external_identifier: CBDB:235158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XyT13XqKTnrUi4sdfqMDd2
        status: active
        display_name: 王志宏
        merged_into_person_id: null
    - claim:
        id: c_2bA02fkJGkYkjgnkwqjKqb
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fKtWdwRHcKRYSUnR9nmC5g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XIttiyxOXOw0le4CNPVIGz
          claim_id: c_2bA02fkJGkYkjgnkwqjKqb
          source_id: s_jBU7D8GZQVEtN9VrIBX69K
          stance: supports
          locator: CBDB：兄弟 王志堅（126537）之父／母 王臨亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王志密 与 王志堅 为同胞（CBDB 记「兄」），王志堅 之父／母即 王志密 之父／母。
          source:
            id: s_jBU7D8GZQVEtN9VrIBX69K
            source_type: api_record
            title: 中国历代人物传记资料库：王志密（CBDB 235159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235159&o=json
            external_identifier: CBDB:235159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fKtWdwRHcKRYSUnR9nmC5g
        status: active
        display_name: 王志密
        merged_into_person_id: null
    - claim:
        id: c_mErKWUGA6bJReUI0WxSVrI
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rAM7rFx6bZ55xeMwnEB8Vu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oBwVHeG__tpsr6gbYUF9Mh
          claim_id: c_mErKWUGA6bJReUI0WxSVrI
          source_id: s_UzPZmbgesSMTJJedw710E5
          stance: supports
          locator: CBDB：兄弟 王志堅（126537）之父／母 王臨亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王志夔 与 王志堅 为同胞（CBDB 记「弟」），王志堅 之父／母即 王志夔 之父／母。
          source:
            id: s_UzPZmbgesSMTJJedw710E5
            source_type: api_record
            title: 中国历代人物传记资料库：王志夔（CBDB 235155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235155&o=json
            external_identifier: CBDB:235155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rAM7rFx6bZ55xeMwnEB8Vu
        status: active
        display_name: 王志夔
        merged_into_person_id: null
    - claim:
        id: c_K4i_9A9zVtznEC0YZq3XLt
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rZKeoziqhpQbtQiPHqWJ79
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NEEEN42QlirkMscAqdvQ_D
          claim_id: c_K4i_9A9zVtznEC0YZq3XLt
          source_id: s_zngo4oS9ZTtFBfUx3_Yqke
          stance: supports
          locator: CBDB：兄弟 王志堅（126537）之父／母 王臨亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王志望 与 王志堅 为同胞（CBDB 记「兄」），王志堅 之父／母即 王志望 之父／母。
          source:
            id: s_zngo4oS9ZTtFBfUx3_Yqke
            source_type: api_record
            title: 中国历代人物传记资料库：王志望（CBDB 235163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235163&o=json
            external_identifier: CBDB:235163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rZKeoziqhpQbtQiPHqWJ79
        status: active
        display_name: 王志望
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王臨亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臨亨 | accepted |
| birth.date | 1556年 | accepted |
| death.date | 1603年 | accepted |
| bio.summary | 王臨亨（1556年—1603年），明人物。籍贯崑山，身份为良吏;循吏，入仕進士，曾任縣令、刑部郎中、刑部主事。（中国历代人物传记资料库 CBDB 126852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WP2TCGKdqkuWFjHVRTiLcW | 王志堅 | accepted |
| children | p_S59f4ecKi74gcNZvVCFxMo | 王志長 | accepted |
| children | p_uhBvBPtXf315t4tLh9pNU3 | 王志慶 | accepted |
| children | p_4EEgBQWAFUW189KU5BXtAJ | 王志龍 | accepted |
| children | p_CVfm8QLBPRz6YKLsA5QyLD | 王志伊 | accepted |
| children | p_KMpUw21MkzdHgcCwnYVS8A | 王志審 | accepted |
| children | p_XyT13XqKTnrUi4sdfqMDd2 | 王志宏 | accepted |
| children | p_fKtWdwRHcKRYSUnR9nmC5g | 王志密 | accepted |
| children | p_rAM7rFx6bZ55xeMwnEB8Vu | 王志夔 | accepted |
| children | p_rZKeoziqhpQbtQiPHqWJ79 | 王志望 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臨亨（CBDB 126852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126852&o=json)
- [中国历代人物传记资料库：王志宏（CBDB 235158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235158&o=json)
- [中国历代人物传记资料库：王志夔（CBDB 235155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235155&o=json)
- [中国历代人物传记资料库：王志龍（CBDB 235161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235161&o=json)
- [中国历代人物传记资料库：王志密（CBDB 235159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235159&o=json)
- [中国历代人物传记资料库：王志審（CBDB 235160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235160&o=json)
- [中国历代人物传记资料库：王志望（CBDB 235163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235163&o=json)
- [中国历代人物传记资料库：王志伊（CBDB 235157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235157&o=json)

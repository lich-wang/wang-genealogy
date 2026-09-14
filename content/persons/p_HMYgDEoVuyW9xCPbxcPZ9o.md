---
schema: wang-person/v1
id: p_HMYgDEoVuyW9xCPbxcPZ9o
status: active
merged_into: null
display_name: 王大才
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x9kyybYtaF9C71XBv4KNd4
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rMfnSRiqRA8QfHkDoC95Au
          claim_id: c_x9kyybYtaF9C71XBv4KNd4
          source_id: s_rpmE2qAdCZPZnB4KMQikrZ
          stance: supports
          locator: CBDB:229896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229896）
          source: &a1
            id: s_rpmE2qAdCZPZnB4KMQikrZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大才（CBDB 229896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229896&o=json
            external_identifier: CBDB:229896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xqYtH21M5Sa94g7L3KPeRK
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大才，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229896）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SWMC0WXccZoWgri6U_Kb49
          claim_id: c_xqYtH21M5Sa94g7L3KPeRK
          source_id: s_rpmE2qAdCZPZnB4KMQikrZ
          stance: supports
          locator: CBDB:229896
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WCqGlaJU5Bfb2wTlMBzVQp
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fmzqNDkEawe2Y5acGSvw17
          claim_id: c_WCqGlaJU5Bfb2wTlMBzVQp
          source_id: s_rpmE2qAdCZPZnB4KMQikrZ
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DJcqSVwRMjWd5tk8GAdMxa
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_aQa2WIcIF_rYxo5jhR-Ubq
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3gUZDgUcY4twcJGR5cGBqV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__eDsR4Gb4PqW7F5HBtNS5_
          claim_id: c_aQa2WIcIF_rYxo5jhR-Ubq
          source_id: s_K0rAn1kalvCbKbc4o4B3VT
          stance: supports
          locator: CBDB：兄弟 王佐（207228）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王仕 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王仕 之父／母。
          source:
            id: s_K0rAn1kalvCbKbc4o4B3VT
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 229901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229901&o=json
            external_identifier: CBDB:229901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3gUZDgUcY4twcJGR5cGBqV
        status: active
        display_name: 王仕
        merged_into_person_id: null
    - claim:
        id: c_ACnvs9ahjvsO97SwvUIyHx
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_94c89e5wW4HwVLc9t5cktH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GFm028X-xuE4LJzR7ekAsV
          claim_id: c_ACnvs9ahjvsO97SwvUIyHx
          source_id: s_g7AaeNGl43196oxZvejE2Q
          stance: supports
          locator: CBDB：兄弟 王佐（207228）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王位 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王位 之父／母。
          source:
            id: s_g7AaeNGl43196oxZvejE2Q
            source_type: api_record
            title: 中国历代人物传记资料库：王位（CBDB 229904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229904&o=json
            external_identifier: CBDB:229904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_94c89e5wW4HwVLc9t5cktH
        status: active
        display_name: 王位
        merged_into_person_id: null
    - claim:
        id: c_FvYncMJuRrn6_GZwB47G5d
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YQ5nxPpSRDXAG9TwYsDwF2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cD_wdtANvc3gcYt7Z15QAz
          claim_id: c_FvYncMJuRrn6_GZwB47G5d
          source_id: s_1_afEcblhDRggphzyo3msl
          stance: supports
          locator: CBDB：兄弟 王佐（207228）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王化 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王化 之父／母。
          source:
            id: s_1_afEcblhDRggphzyo3msl
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 229903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229903&o=json
            external_identifier: CBDB:229903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YQ5nxPpSRDXAG9TwYsDwF2
        status: active
        display_name: 王化
        merged_into_person_id: null
    - claim:
        id: c_6mid-CV9yidog66BC3dQqX
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fNZadZEQF62pN9HseFJCx8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oE6RH5xBYNQdoKAgHarOCT
          claim_id: c_6mid-CV9yidog66BC3dQqX
          source_id: s_r9SYJaZFB2TiCGINi6xF-3
          stance: supports
          locator: CBDB：兄弟 王佐（207228）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王任 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王任 之父／母。
          source:
            id: s_r9SYJaZFB2TiCGINi6xF-3
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 229902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229902&o=json
            external_identifier: CBDB:229902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fNZadZEQF62pN9HseFJCx8
        status: active
        display_name: 王任
        merged_into_person_id: null
    - claim:
        id: c_iWW_NnxmzyaOAwlFxRQN8r
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nJAyAGcRTC4guGFCXraA7W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eVpOnR69PANtOAdASjP-3z
          claim_id: c_iWW_NnxmzyaOAwlFxRQN8r
          source_id: s_ztRRSzagEcLrnJDut4gz9w
          stance: supports
          locator: CBDB：兄弟 王佐（207228）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王作 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王作 之父／母。
          source:
            id: s_ztRRSzagEcLrnJDut4gz9w
            source_type: api_record
            title: 中国历代人物传记资料库：王作（CBDB 229906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229906&o=json
            external_identifier: CBDB:229906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nJAyAGcRTC4guGFCXraA7W
        status: active
        display_name: 王作
        merged_into_person_id: null
    - claim:
        id: c_o-vXNoSYU2J8i1T93odtXl
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ocbi4TNc3qKRe3qT6f6KJa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2C08ffRdTBGiD9iLtIh7aP
          claim_id: c_o-vXNoSYU2J8i1T93odtXl
          source_id: s_Bkxz7e3xxQaPO-zhZmqvLQ
          stance: supports
          locator: CBDB：兄弟 王佐（207228）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王傚 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王傚 之父／母。
          source:
            id: s_Bkxz7e3xxQaPO-zhZmqvLQ
            source_type: api_record
            title: 中国历代人物传记资料库：王傚（CBDB 229900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229900&o=json
            external_identifier: CBDB:229900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ocbi4TNc3qKRe3qT6f6KJa
        status: active
        display_name: 王傚
        merged_into_person_id: null
    - claim:
        id: c__QhO_6ATnM6b__Yh1mmmXC
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tNoD3zpU8YE5MAho6viEZZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mxHa6cMqEUPaPWPYQggpnJ
          claim_id: c__QhO_6ATnM6b__Yh1mmmXC
          source_id: s_-6ZJn30F3HZWF9eUqwxQOr
          stance: supports
          locator: CBDB：兄弟 王佐（207228）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王佶 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王佶 之父／母。
          source:
            id: s_-6ZJn30F3HZWF9eUqwxQOr
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 229905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229905&o=json
            external_identifier: CBDB:229905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tNoD3zpU8YE5MAho6viEZZ
        status: active
        display_name: 王佶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大才 | accepted |
| bio.summary | 王大才，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229896） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DJcqSVwRMjWd5tk8GAdMxa | 王佐 | accepted |
| children | p_3gUZDgUcY4twcJGR5cGBqV | 王仕 | accepted |
| children | p_94c89e5wW4HwVLc9t5cktH | 王位 | accepted |
| children | p_YQ5nxPpSRDXAG9TwYsDwF2 | 王化 | accepted |
| children | p_fNZadZEQF62pN9HseFJCx8 | 王任 | accepted |
| children | p_nJAyAGcRTC4guGFCXraA7W | 王作 | accepted |
| children | p_ocbi4TNc3qKRe3qT6f6KJa | 王傚 | accepted |
| children | p_tNoD3zpU8YE5MAho6viEZZ | 王佶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大才（CBDB 229896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229896&o=json)
- [中国历代人物传记资料库：王化（CBDB 229903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229903&o=json)
- [中国历代人物传记资料库：王佶（CBDB 229905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229905&o=json)
- [中国历代人物传记资料库：王任（CBDB 229902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229902&o=json)
- [中国历代人物传记资料库：王仕（CBDB 229901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229901&o=json)
- [中国历代人物传记资料库：王位（CBDB 229904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229904&o=json)
- [中国历代人物传记资料库：王傚（CBDB 229900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229900&o=json)
- [中国历代人物传记资料库：王作（CBDB 229906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229906&o=json)

---
schema: wang-person/v1
id: p_PssJzEL6PmniEjHiumeCwT
status: active
merged_into: null
display_name: 王騶虞
cbdb_id: 244055
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rnf6z4gGjMQVC3tPhy4AMt
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騶虞，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244055）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jDtdBVs-wfBBFjxk6frcUm
          claim_id: c_rnf6z4gGjMQVC3tPhy4AMt
          source_id: s_PdhDz4z55W6Zg9LekZmUks
          stance: supports
          locator: CBDB:244055
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PdhDz4z55W6Zg9LekZmUks
            source_type: api_record
            title: 中国历代人物传记资料库：王騶虞（CBDB 244055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244055&o=json
            external_identifier: CBDB:244055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tNvMthZsHJfekXb1Yk7hc3
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騶虞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zZcJC2NA7drdX7dB14d7Tb
          claim_id: c_tNvMthZsHJfekXb1Yk7hc3
          source_id: s_PdhDz4z55W6Zg9LekZmUks
          stance: supports
          locator: CBDB:244055
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Ie4Q7p1HoSLietOxRRh3Mu
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W-ULr1oI23dJ2AWH1w78tc
          claim_id: c_Ie4Q7p1HoSLietOxRRh3Mu
          source_id: s_PdhDz4z55W6Zg9LekZmUks
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PdhDz4z55W6Zg9LekZmUks
            source_type: api_record
            title: 中国历代人物传记资料库：王騶虞（CBDB 244055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244055&o=json
            external_identifier: CBDB:244055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wGeqMr94XHkQUokME5FCJ3
        status: active
        display_name: 王舟
        merged_into_person_id: null
    - claim:
        id: c_uykjghsfQXYz8g-7XRvZJO
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1VS5d5JMGjpzCDb5J1PWuV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aAevK9ypeXs68dn_hwxQM9
          claim_id: c_uykjghsfQXYz8g-7XRvZJO
          source_id: s_oniMCAHLLfYRlwz8sgWIHJ
          stance: supports
          locator: CBDB：兄弟 王舟（199369）之父／母 王騶虞
          quotation: null
          interpretation_note: 由兄弟关系推断：王琯 与 王舟 为同胞（CBDB 记「弟」），王舟 之父／母即 王琯 之父／母。
          source:
            id: s_oniMCAHLLfYRlwz8sgWIHJ
            source_type: api_record
            title: 中国历代人物传记资料库：王琯（CBDB 244058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244058&o=json
            external_identifier: CBDB:244058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1VS5d5JMGjpzCDb5J1PWuV
        status: active
        display_name: 王琯
        merged_into_person_id: null
    - claim:
        id: c_OkJejdD50YNK0aYSc8JWJY
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7CmvTVtcahbLzzN6ngiXaW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OjlCmxBPAzwsgx1JO0MHC4
          claim_id: c_OkJejdD50YNK0aYSc8JWJY
          source_id: s_Uw2uX5iy8_swi8lYIbQh0d
          stance: supports
          locator: CBDB：兄弟 王舟（199369）之父／母 王騶虞
          quotation: null
          interpretation_note: 由兄弟关系推断：王含 与 王舟 为同胞（CBDB 记「兄」），王舟 之父／母即 王含 之父／母。
          source:
            id: s_Uw2uX5iy8_swi8lYIbQh0d
            source_type: api_record
            title: 中国历代人物传记资料库：王含（CBDB 244062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244062&o=json
            external_identifier: CBDB:244062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7CmvTVtcahbLzzN6ngiXaW
        status: active
        display_name: 王含
        merged_into_person_id: null
    - claim:
        id: c_K8GKi0QEnTCQhKOlbT4CNI
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BmEQpjf4j1xNwS6TSfRHD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jtXKgcglrPlPfnlVWa6n-Y
          claim_id: c_K8GKi0QEnTCQhKOlbT4CNI
          source_id: s_Bbmkpdj9MhpoSSuhVOXlq-
          stance: supports
          locator: CBDB：兄弟 王舟（199369）之父／母 王騶虞
          quotation: null
          interpretation_note: 由兄弟关系推断：王由 与 王舟 为同胞（CBDB 记「弟」），王舟 之父／母即 王由 之父／母。
          source:
            id: s_Bbmkpdj9MhpoSSuhVOXlq-
            source_type: api_record
            title: 中国历代人物传记资料库：王由（CBDB 244059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244059&o=json
            external_identifier: CBDB:244059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BmEQpjf4j1xNwS6TSfRHD2
        status: active
        display_name: 王由
        merged_into_person_id: null
    - claim:
        id: c_baxd6PEL4s7jOnbdinz4Jg
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LkW5JtKZG528oiPeriHJh8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h820xI7eS917Hd23IfEcSg
          claim_id: c_baxd6PEL4s7jOnbdinz4Jg
          source_id: s_q6dnKO2061EPRAKC_nwr0U
          stance: supports
          locator: CBDB：兄弟 王舟（199369）之父／母 王騶虞
          quotation: null
          interpretation_note: 由兄弟关系推断：王章 与 王舟 为同胞（CBDB 记「兄」），王舟 之父／母即 王章 之父／母。
          source:
            id: s_q6dnKO2061EPRAKC_nwr0U
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 244064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244064&o=json
            external_identifier: CBDB:244064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LkW5JtKZG528oiPeriHJh8
        status: active
        display_name: 王章
        merged_into_person_id: null
    - claim:
        id: c_2IQLtoz1TglZa4jp4CFUEG
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NwtP6da4w6tUKFJvZPjDZ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYRUrXO73yXoSogF-RgGWe
          claim_id: c_2IQLtoz1TglZa4jp4CFUEG
          source_id: s_3mha0d4OpeayodNq7ggiff
          stance: supports
          locator: CBDB：兄弟 王舟（199369）之父／母 王騶虞
          quotation: null
          interpretation_note: 由兄弟关系推断：王賜 与 王舟 为同胞（CBDB 记「弟」），王舟 之父／母即 王賜 之父／母。
          source:
            id: s_3mha0d4OpeayodNq7ggiff
            source_type: api_record
            title: 中国历代人物传记资料库：王賜（CBDB 244061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244061&o=json
            external_identifier: CBDB:244061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NwtP6da4w6tUKFJvZPjDZ5
        status: active
        display_name: 王賜
        merged_into_person_id: null
    - claim:
        id: c_x4GRHERnnUqexjZbFJ6Nn2
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h4fUgakpkGMP1FF4xuXknq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nPVG1uuEQEkG3VeRWIISgo
          claim_id: c_x4GRHERnnUqexjZbFJ6Nn2
          source_id: s_bVn48-KYOPhldNZ0yuY6i4
          stance: supports
          locator: CBDB：兄弟 王舟（199369）之父／母 王騶虞
          quotation: null
          interpretation_note: 由兄弟关系推断：王遷 与 王舟 为同胞（CBDB 记「弟」），王舟 之父／母即 王遷 之父／母。
          source:
            id: s_bVn48-KYOPhldNZ0yuY6i4
            source_type: api_record
            title: 中国历代人物传记资料库：王遷（CBDB 244060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244060&o=json
            external_identifier: CBDB:244060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h4fUgakpkGMP1FF4xuXknq
        status: active
        display_name: 王遷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王騶虞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王騶虞，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244055） | accepted |
| name.primary | 王騶虞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wGeqMr94XHkQUokME5FCJ3 | 王舟 | accepted |
| children | p_1VS5d5JMGjpzCDb5J1PWuV | 王琯 | accepted |
| children | p_7CmvTVtcahbLzzN6ngiXaW | 王含 | accepted |
| children | p_BmEQpjf4j1xNwS6TSfRHD2 | 王由 | accepted |
| children | p_LkW5JtKZG528oiPeriHJh8 | 王章 | accepted |
| children | p_NwtP6da4w6tUKFJvZPjDZ5 | 王賜 | accepted |
| children | p_h4fUgakpkGMP1FF4xuXknq | 王遷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賜（CBDB 244061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244061&o=json)
- [中国历代人物传记资料库：王琯（CBDB 244058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244058&o=json)
- [中国历代人物传记资料库：王含（CBDB 244062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244062&o=json)
- [中国历代人物传记资料库：王遷（CBDB 244060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244060&o=json)
- [中国历代人物传记资料库：王由（CBDB 244059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244059&o=json)
- [中国历代人物传记资料库：王章（CBDB 244064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244064&o=json)
- [中国历代人物传记资料库：王騶虞（CBDB 244055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244055&o=json)

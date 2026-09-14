---
schema: wang-person/v1
id: p_bDhKdhFXpAzjMqU9hAowzC
status: active
merged_into: null
display_name: 王珽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J8gE9XDLhs2x2cq2oq65tH
        subject_person_id: p_bDhKdhFXpAzjMqU9hAowzC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KtWeYNvxhKgjV27rKPqePr
          claim_id: c_J8gE9XDLhs2x2cq2oq65tH
          source_id: s_GHQF66Gmhmtmw6tsfTbRyx
          stance: supports
          locator: CBDB:255909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255909）
          source: &a1
            id: s_GHQF66Gmhmtmw6tsfTbRyx
            source_type: api_record
            title: 中国历代人物传记资料库：王珽（CBDB 255909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255909&o=json
            external_identifier: CBDB:255909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.363Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PbhAHYk5SFpu2yk9L8cgVq
        subject_person_id: p_bDhKdhFXpAzjMqU9hAowzC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珽，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255909）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J5lpNkVnfT80KrRf3tI4C4
          claim_id: c_PbhAHYk5SFpu2yk9L8cgVq
          source_id: s_GHQF66Gmhmtmw6tsfTbRyx
          stance: supports
          locator: CBDB:255909
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cj96-OBq2ZfQvv2PJ2Xcr6
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bDhKdhFXpAzjMqU9hAowzC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_unDKD5CDT9G3yfY83bLtAP
          claim_id: c_cj96-OBq2ZfQvv2PJ2Xcr6
          source_id: s_rUpMHzgJUz_Dw0AsxouVq-
          stance: supports
          locator: CBDB：兄弟 王瑫（126779）之父／母 王鞏謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王珽 与 王瑫 为同胞（CBDB 记「弟」），王瑫 之父／母即 王珽 之父／母。
          source:
            id: s_rUpMHzgJUz_Dw0AsxouVq-
            source_type: api_record
            title: 中国历代人物传记资料库：王珽（CBDB 255909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255909&o=json
            external_identifier: CBDB:255909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        status: active
        display_name: 王鞏謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Gdegcg4P-qcnPuXakJzj_L
        subject_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bDhKdhFXpAzjMqU9hAowzC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WUJE3Wj6GqqpBYrjj2TzeE
          claim_id: c_Gdegcg4P-qcnPuXakJzj_L
          source_id: s_rUpMHzgJUz_Dw0AsxouVq-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126779 王瑫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rUpMHzgJUz_Dw0AsxouVq-
            source_type: api_record
            title: 中国历代人物传记资料库：王珽（CBDB 255909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255909&o=json
            external_identifier: CBDB:255909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Loswb2HqViVcQmQ8rSFe9
        status: active
        display_name: 王瑫
        merged_into_person_id: null
---

# 王珽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珽 | accepted |
| bio.summary | 王珽，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255909） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vi9ZDtvEhQ6sUw3P3TjQzS | 王鞏謙 | accepted |
| other | p_2Loswb2HqViVcQmQ8rSFe9 | 王瑫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珽（CBDB 255909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255909&o=json)

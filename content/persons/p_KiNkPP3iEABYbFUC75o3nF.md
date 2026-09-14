---
schema: wang-person/v1
id: p_KiNkPP3iEABYbFUC75o3nF
status: active
merged_into: null
display_name: 王咨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MPR7nDzvQJu8xqVUo7p8YM
        subject_person_id: p_KiNkPP3iEABYbFUC75o3nF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FU83TBa7JH5pqHsKhn3b1S
          claim_id: c_MPR7nDzvQJu8xqVUo7p8YM
          source_id: s_renVyFNaA6tpZUsDQ1Etft
          stance: supports
          locator: CBDB:298842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298842）
          source: &a1
            id: s_renVyFNaA6tpZUsDQ1Etft
            source_type: api_record
            title: 中国历代人物传记资料库：王咨（CBDB 298842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298842&o=json
            external_identifier: CBDB:298842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MvUKMHGPDKNi1UjHqvGj17
        subject_person_id: p_KiNkPP3iEABYbFUC75o3nF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咨，明人物。嘉靖十七年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 298842）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LtXRdLN5BiBcNia7zuU0ya
          claim_id: c_MvUKMHGPDKNi1UjHqvGj17
          source_id: s_renVyFNaA6tpZUsDQ1Etft
          stance: supports
          locator: CBDB:298842
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_24Cr_NHcvuZ_9vNm3Plxbk
        subject_person_id: p_y7EyMSu7d6G6tRK3dnwd4b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KiNkPP3iEABYbFUC75o3nF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NAjxhVsHw_EmsZWr2cLVJs
          claim_id: c_24Cr_NHcvuZ_9vNm3Plxbk
          source_id: s_5Sr0BGorT3hgoXQIBft6Dp
          stance: supports
          locator: CBDB：兄弟 王問（126680）之父／母 王澤
          quotation: null
          interpretation_note: 由兄弟关系推断：王咨 与 王問 为同胞（CBDB 记「兄」），王問 之父／母即 王咨 之父／母。
          source:
            id: s_5Sr0BGorT3hgoXQIBft6Dp
            source_type: api_record
            title: 中国历代人物传记资料库：王咨（CBDB 298842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298842&o=json
            external_identifier: CBDB:298842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y7EyMSu7d6G6tRK3dnwd4b
        status: active
        display_name: 王澤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OsuoEXr7yN70fymnFAyo2Q
        subject_person_id: p_KiNkPP3iEABYbFUC75o3nF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bd-1Pl-LWYF56vsCMldqnS
          claim_id: c_OsuoEXr7yN70fymnFAyo2Q
          source_id: s_5Sr0BGorT3hgoXQIBft6Dp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126680 王問）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5Sr0BGorT3hgoXQIBft6Dp
            source_type: api_record
            title: 中国历代人物传记资料库：王咨（CBDB 298842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298842&o=json
            external_identifier: CBDB:298842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yBv5FsmN9BCFNm7cQbu6uG
        status: active
        display_name: 王問
        merged_into_person_id: null
---

# 王咨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王咨 | accepted |
| bio.summary | 王咨，明人物。嘉靖十七年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 298842） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y7EyMSu7d6G6tRK3dnwd4b | 王澤 | accepted |
| other | p_yBv5FsmN9BCFNm7cQbu6uG | 王問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王咨（CBDB 298842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298842&o=json)

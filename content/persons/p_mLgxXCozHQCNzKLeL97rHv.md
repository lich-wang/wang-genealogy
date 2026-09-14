---
schema: wang-person/v1
id: p_mLgxXCozHQCNzKLeL97rHv
status: active
merged_into: null
display_name: 王家民
cbdb_id: 332964
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sEhzWyd6mhtKz1jLpLB5KL
        subject_person_id: p_mLgxXCozHQCNzKLeL97rHv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家民，明人物。嘉靖四十四年進士，籍贯南陽衛。（中国历代人物传记资料库 CBDB 332964）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_n20q4jWM-RLIPiQEgsTvSx
          claim_id: c_sEhzWyd6mhtKz1jLpLB5KL
          source_id: s_2AXCN5GSB6fuX2Kj4v2Hxj
          stance: supports
          locator: CBDB:332964
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2AXCN5GSB6fuX2Kj4v2Hxj
            source_type: api_record
            title: 中国历代人物传记资料库：王家民（CBDB 332964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332964&o=json
            external_identifier: CBDB:332964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VcSctAxPL5THHTf5dGiCMz
        subject_person_id: p_mLgxXCozHQCNzKLeL97rHv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vvAoSA9JFW1dGGQoKrTCUC
          claim_id: c_VcSctAxPL5THHTf5dGiCMz
          source_id: s_2AXCN5GSB6fuX2Kj4v2Hxj
          stance: supports
          locator: CBDB:332964
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lEramFqEy3a4TRbZ-Sg7sE
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mLgxXCozHQCNzKLeL97rHv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3snC6j1UzuMJt2yqdMPlY7
          claim_id: c_lEramFqEy3a4TRbZ-Sg7sE
          source_id: s_AOXw6fV9WjiRofdVmuJMME
          stance: supports
          locator: CBDB：兄弟 王家卿（205423）之父／母 王稷
          quotation: null
          interpretation_note: 由兄弟关系推断：王家民 与 王家卿 为同胞（CBDB 记「兄」），王家卿 之父／母即 王家民 之父／母。
          source:
            id: s_AOXw6fV9WjiRofdVmuJMME
            source_type: api_record
            title: 中国历代人物传记资料库：王家民（CBDB 332964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332964&o=json
            external_identifier: CBDB:332964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p6a6PegDLKhh6e58pdYza1
        status: active
        display_name: 王稷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SQAwPIzK6eYf7fkhHFPAWp
        subject_person_id: p_mLgxXCozHQCNzKLeL97rHv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dfIvEM6n_z0sQ0nq6qg_SB
          claim_id: c_SQAwPIzK6eYf7fkhHFPAWp
          source_id: s_AOXw6fV9WjiRofdVmuJMME
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205423 王家卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AOXw6fV9WjiRofdVmuJMME
            source_type: api_record
            title: 中国历代人物传记资料库：王家民（CBDB 332964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332964&o=json
            external_identifier: CBDB:332964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wfvFAbMeeGg2JCRsQFqRMn
        status: active
        display_name: 王家卿
        merged_into_person_id: null
---

# 王家民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家民，明人物。嘉靖四十四年進士，籍贯南陽衛。（中国历代人物传记资料库 CBDB 332964） | accepted |
| name.primary | 王家民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_p6a6PegDLKhh6e58pdYza1 | 王稷 | accepted |
| other | p_wfvFAbMeeGg2JCRsQFqRMn | 王家卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家民（CBDB 332964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332964&o=json)

---
schema: wang-person/v1
id: p_UZaJrSCB14421jWm2bfu9Q
status: active
merged_into: null
display_name: 王材
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X9mVkjHCpoSDo9Y2VvPVnT
        subject_person_id: p_UZaJrSCB14421jWm2bfu9Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2v59i3qrPqtDdGwBBfCeyB
          claim_id: c_X9mVkjHCpoSDo9Y2VvPVnT
          source_id: s_d8VztgJzB9BEHZRp8uziG9
          stance: supports
          locator: CBDB:291532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291532）
          source: &a1
            id: s_d8VztgJzB9BEHZRp8uziG9
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 291532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291532&o=json
            external_identifier: CBDB:291532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rp3D1mU6cSDnMnTuhmH4ik
        subject_person_id: p_UZaJrSCB14421jWm2bfu9Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材，明人物。嘉靖十一年進士，籍贯錢塘。（中国历代人物传记资料库 CBDB 291532）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uxDBl9J6f9T-Jxmymr41zu
          claim_id: c_rp3D1mU6cSDnMnTuhmH4ik
          source_id: s_d8VztgJzB9BEHZRp8uziG9
          stance: supports
          locator: CBDB:291532
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GW5A-JSu1gGlUlZ2X2EIt8
        subject_person_id: p_hPeC8d79fUWi5bNUMWcM89
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UZaJrSCB14421jWm2bfu9Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X-CffrRi3dbxvysc9DkEeA
          claim_id: c_GW5A-JSu1gGlUlZ2X2EIt8
          source_id: s_KbQnc1DLNNFWyHZD0bRhMH
          stance: supports
          locator: CBDB：兄弟 王椿（202645）之父／母 王璘
          quotation: null
          interpretation_note: 由兄弟关系推断：王材 与 王椿 为同胞（CBDB 记「兄」），王椿 之父／母即 王材 之父／母。
          source:
            id: s_KbQnc1DLNNFWyHZD0bRhMH
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 291532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291532&o=json
            external_identifier: CBDB:291532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hPeC8d79fUWi5bNUMWcM89
        status: active
        display_name: 王璘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zuWblN7TvYC9eetM3SN-Xq
        subject_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UZaJrSCB14421jWm2bfu9Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D5aDZXsU4WcWTI3atXSzAn
          claim_id: c_zuWblN7TvYC9eetM3SN-Xq
          source_id: s_KbQnc1DLNNFWyHZD0bRhMH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202645 王椿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KbQnc1DLNNFWyHZD0bRhMH
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 291532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291532&o=json
            external_identifier: CBDB:291532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1R7tJCQnDzHJMgdYcvFf8v
        status: active
        display_name: 王椿
        merged_into_person_id: null
---

# 王材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材 | accepted |
| bio.summary | 王材，明人物。嘉靖十一年進士，籍贯錢塘。（中国历代人物传记资料库 CBDB 291532） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hPeC8d79fUWi5bNUMWcM89 | 王璘 | accepted |
| other | p_1R7tJCQnDzHJMgdYcvFf8v | 王椿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 291532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291532&o=json)

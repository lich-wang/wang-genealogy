---
schema: wang-person/v1
id: p_5o8FodsPP8caXE1th2gWNd
status: active
merged_into: null
display_name: 王來聘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ez4SXieqQPu6vf1TWXpxEC
        subject_person_id: p_5o8FodsPP8caXE1th2gWNd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cxrZEsNwA2xF1pEEq4gWA9
          claim_id: c_Ez4SXieqQPu6vf1TWXpxEC
          source_id: s_oAykoaoRLZJHxDMXU9Yz4N
          stance: supports
          locator: CBDB:215650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215650）
          source: &a1
            id: s_oAykoaoRLZJHxDMXU9Yz4N
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 215650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215650&o=json
            external_identifier: CBDB:215650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3VtZ7k9mPrCBChSDGrhJ5x
        subject_person_id: p_5o8FodsPP8caXE1th2gWNd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來聘，明人物。萬曆五年進士，籍贯臨邑，曾任訓導、吏部司務。（中国历代人物传记资料库 CBDB 215650）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KmqiUwK-ZaVjYZVfb9qgF7
          claim_id: c_3VtZ7k9mPrCBChSDGrhJ5x
          source_id: s_oAykoaoRLZJHxDMXU9Yz4N
          stance: supports
          locator: CBDB:215650
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OaTtfrheVxBPK_Z4vTb_xm
        subject_person_id: p_BeKUgyXWUJu4r2UviMduG1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5o8FodsPP8caXE1th2gWNd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kbz5tUAR6LdZBwDM45BMPf
          claim_id: c_OaTtfrheVxBPK_Z4vTb_xm
          source_id: s_i6ocaupl6_YN8LXKi-dMCJ
          stance: supports
          locator: CBDB：兄弟 王再聘（206273）之父／母 王富
          quotation: null
          interpretation_note: 由兄弟关系推断：王來聘 与 王再聘 为同胞（CBDB 记「弟」），王再聘 之父／母即 王來聘 之父／母。
          source:
            id: s_i6ocaupl6_YN8LXKi-dMCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 215650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215650&o=json
            external_identifier: CBDB:215650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BeKUgyXWUJu4r2UviMduG1
        status: active
        display_name: 王富
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-L4dn3O6O93U5gzn8potks
        subject_person_id: p_5o8FodsPP8caXE1th2gWNd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Eh3kPKaSjnmi4kvdvTFveB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGQRWCQ3L53aOfZ5pPtCz3
          claim_id: c_-L4dn3O6O93U5gzn8potks
          source_id: s_i6ocaupl6_YN8LXKi-dMCJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206273 王再聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_i6ocaupl6_YN8LXKi-dMCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 215650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215650&o=json
            external_identifier: CBDB:215650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Eh3kPKaSjnmi4kvdvTFveB
        status: active
        display_name: 王再聘
        merged_into_person_id: null
---

# 王來聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來聘 | accepted |
| bio.summary | 王來聘，明人物。萬曆五年進士，籍贯臨邑，曾任訓導、吏部司務。（中国历代人物传记资料库 CBDB 215650） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BeKUgyXWUJu4r2UviMduG1 | 王富 | accepted |
| other | p_Eh3kPKaSjnmi4kvdvTFveB | 王再聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來聘（CBDB 215650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215650&o=json)

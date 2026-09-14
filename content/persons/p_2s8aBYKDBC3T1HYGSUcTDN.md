---
schema: wang-person/v1
id: p_2s8aBYKDBC3T1HYGSUcTDN
status: active
merged_into: null
display_name: 王學淵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rz21LYVYzD2vKLYcASH9D9
        subject_person_id: p_2s8aBYKDBC3T1HYGSUcTDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xNpfeC2TdXy7GLJuJAPNiq
          claim_id: c_rz21LYVYzD2vKLYcASH9D9
          source_id: s_mRV4epPt6ZRHpd8hFgq8Dc
          stance: supports
          locator: CBDB:328258
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328258）
          source: &a1
            id: s_mRV4epPt6ZRHpd8hFgq8Dc
            source_type: api_record
            title: 中国历代人物传记资料库：王學淵（CBDB 328258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328258&o=json
            external_identifier: CBDB:328258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.297Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T84QxkFMhkWLTvuZwGbX6X
        subject_person_id: p_2s8aBYKDBC3T1HYGSUcTDN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學淵，明人物。嘉靖四十一年進士，籍贯朝邑，曾任教諭。（中国历代人物传记资料库 CBDB 328258）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PqdCsS8eAP4vqEXfBoL2Tb
          claim_id: c_T84QxkFMhkWLTvuZwGbX6X
          source_id: s_mRV4epPt6ZRHpd8hFgq8Dc
          stance: supports
          locator: CBDB:328258
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Pn-B3V-1Jrllgv8KIiWIbZ
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2s8aBYKDBC3T1HYGSUcTDN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-BFtYIV8d5R2Lh6rbQO7GY
          claim_id: c_Pn-B3V-1Jrllgv8KIiWIbZ
          source_id: s_OxX0WUFSrbURw70en3Sm-j
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學淵 与 王學古 为同胞（CBDB 记「兄」），王學古 之父／母即 王學淵 之父／母。
          source:
            id: s_OxX0WUFSrbURw70en3Sm-j
            source_type: api_record
            title: 中国历代人物传记资料库：王學淵（CBDB 328258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328258&o=json
            external_identifier: CBDB:328258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4rZFET2VU5QfJTezy8ktoQ
        status: active
        display_name: 王來召
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5HbXQwCdSuyvIJWx6_Dcvj
        subject_person_id: p_2s8aBYKDBC3T1HYGSUcTDN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ip32E-iZKkK3JHh8psC-lF
          claim_id: c_5HbXQwCdSuyvIJWx6_Dcvj
          source_id: s_OxX0WUFSrbURw70en3Sm-j
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OxX0WUFSrbURw70en3Sm-j
            source_type: api_record
            title: 中国历代人物传记资料库：王學淵（CBDB 328258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328258&o=json
            external_identifier: CBDB:328258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EubdaeFSWc8pKsGxhe2PFM
        status: active
        display_name: 王學古
        merged_into_person_id: null
---

# 王學淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學淵 | accepted |
| bio.summary | 王學淵，明人物。嘉靖四十一年進士，籍贯朝邑，曾任教諭。（中国历代人物传记资料库 CBDB 328258） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4rZFET2VU5QfJTezy8ktoQ | 王來召 | accepted |
| other | p_EubdaeFSWc8pKsGxhe2PFM | 王學古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學淵（CBDB 328258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328258&o=json)

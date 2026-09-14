---
schema: wang-person/v1
id: p_BZjpMTM6bqEHaPLLDNWSEG
status: active
merged_into: null
display_name: 王儒林
cbdb_id: 333540
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rVmS9oRLAy51PZzQg5GTid
        subject_person_id: p_BZjpMTM6bqEHaPLLDNWSEG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒林，明人物。嘉靖四十四年進士，籍贯掖縣，曾任訓導。（中国历代人物传记资料库 CBDB 333540）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XvXfPMkVNeByF8cYA8vCwC
          claim_id: c_rVmS9oRLAy51PZzQg5GTid
          source_id: s_yx1jif9G2KQfq9Aa2SwysG
          stance: supports
          locator: CBDB:333540
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yx1jif9G2KQfq9Aa2SwysG
            source_type: api_record
            title: 中国历代人物传记资料库：王儒林（CBDB 333540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333540&o=json
            external_identifier: CBDB:333540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_B2WBfm1LRvALrMzz8AnP3U
        subject_person_id: p_BZjpMTM6bqEHaPLLDNWSEG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UL9Ay8V72HsgiM96A6wvXf
          claim_id: c_B2WBfm1LRvALrMzz8AnP3U
          source_id: s_yx1jif9G2KQfq9Aa2SwysG
          stance: supports
          locator: CBDB:333540
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9zJH0COKaWLn86uUdjrBXA
        subject_person_id: p_DZDgMAJW6oNAC7MVuAcThi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BZjpMTM6bqEHaPLLDNWSEG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cHJG78kax9pHN2fAmxXHAf
          claim_id: c_9zJH0COKaWLn86uUdjrBXA
          source_id: s_phcw18a_9CjXRa9SgUnV6j
          stance: supports
          locator: CBDB：兄弟 王肇林（205462）之父／母 王都
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒林 与 王肇林 为同胞（CBDB 记「弟」），王肇林 之父／母即 王儒林 之父／母。
          source:
            id: s_phcw18a_9CjXRa9SgUnV6j
            source_type: api_record
            title: 中国历代人物传记资料库：王儒林（CBDB 333540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333540&o=json
            external_identifier: CBDB:333540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DZDgMAJW6oNAC7MVuAcThi
        status: active
        display_name: 王都
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OWxBxztNMM7uzIo8BY-Dkn
        subject_person_id: p_BZjpMTM6bqEHaPLLDNWSEG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kUQU8pbCLOlVp_qDwlBGAn
          claim_id: c_OWxBxztNMM7uzIo8BY-Dkn
          source_id: s_phcw18a_9CjXRa9SgUnV6j
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205462 王肇林）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_phcw18a_9CjXRa9SgUnV6j
            source_type: api_record
            title: 中国历代人物传记资料库：王儒林（CBDB 333540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333540&o=json
            external_identifier: CBDB:333540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U6AM1nUKLfQ5njnQVtaNYH
        status: active
        display_name: 王肇林
        merged_into_person_id: null
---

# 王儒林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王儒林，明人物。嘉靖四十四年進士，籍贯掖縣，曾任訓導。（中国历代人物传记资料库 CBDB 333540） | accepted |
| name.primary | 王儒林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DZDgMAJW6oNAC7MVuAcThi | 王都 | accepted |
| other | p_U6AM1nUKLfQ5njnQVtaNYH | 王肇林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒林（CBDB 333540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333540&o=json)

---
schema: wang-person/v1
id: p_SVsQjRLETKYSzG3kbAYK87
status: active
merged_into: null
display_name: 王惟志
cbdb_id: 17253
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oTkNAxRRV2Nhb2dsQQtZVf
        subject_person_id: p_SVsQjRLETKYSzG3kbAYK87
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟志，宋人物。中国历代人物传记资料库（CBDB）以人物编号 17253 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_YGEgoWZxffK0bPuKzNgaiw
          claim_id: c_oTkNAxRRV2Nhb2dsQQtZVf
          source_id: s_fW3ucsQG2tw9wUjCY11jrN
          stance: supports
          locator: CBDB:17253
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_fW3ucsQG2tw9wUjCY11jrN
            source_type: api_record
            title: 中国历代人物传记资料库：王惟志（CBDB 17253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17253&o=json
            external_identifier: CBDB:17253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DbFw2TJw6PgnQZHyDttqN6
        subject_person_id: p_SVsQjRLETKYSzG3kbAYK87
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5hyb8VPUpeu61nbdvXx6aC
          claim_id: c_DbFw2TJw6PgnQZHyDttqN6
          source_id: s_fW3ucsQG2tw9wUjCY11jrN
          stance: supports
          locator: CBDB:17253
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_fW3ucsQG2tw9wUjCY11jrN
            source_type: api_record
            title: 中国历代人物传记资料库：王惟志（CBDB 17253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17253&o=json
            external_identifier: CBDB:17253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rPNl2Rk0F0IpEIogIhLRSk
        subject_person_id: p_5iuF56QtzML5N9vH86cANF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SVsQjRLETKYSzG3kbAYK87
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AlqEGhyoIA7M3x2TRpKfr0
          claim_id: c_rPNl2Rk0F0IpEIogIhLRSk
          source_id: s_mnsNCAqWT4Jp2VqSVLB4Mp
          stance: supports
          locator: CBDB 双向互证（子 王惟志 ⇄ 父 王審鈞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_mnsNCAqWT4Jp2VqSVLB4Mp
            source_type: api_record
            title: 中国历代人物传记资料库：王審鈞（CBDB 17252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17252&o=json
            external_identifier: CBDB:17252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5iuF56QtzML5N9vH86cANF
        status: active
        display_name: 王審鈞
        merged_into_person_id: null
  children:
    - claim:
        id: c_EyTd7E1Lxe_HsrM90UDLh0
        subject_person_id: p_SVsQjRLETKYSzG3kbAYK87
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QoJPmnH2p3TN2WeA18wP8z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vi2yxwd0Vf2s23GaD9oUNj
          claim_id: c_EyTd7E1Lxe_HsrM90UDLh0
          source_id: s_1Zsci6iF4Arcot2TKBLMBo
          stance: supports
          locator: CBDB 双向互证（父 王惟志 ⇄ 子 王凱）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_1Zsci6iF4Arcot2TKBLMBo
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 7379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7379&o=json
            external_identifier: CBDB:7379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QoJPmnH2p3TN2WeA18wP8z
        status: active
        display_name: 王凱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟志，宋人物。中国历代人物传记资料库（CBDB）以人物编号 17253 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王惟志 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5iuF56QtzML5N9vH86cANF | 王審鈞 | accepted |
| children | p_QoJPmnH2p3TN2WeA18wP8z | 王凱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王凱（CBDB 7379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7379&o=json)
- [中国历代人物传记资料库：王審鈞（CBDB 17252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17252&o=json)
- [中国历代人物传记资料库：王惟志（CBDB 17253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17253&o=json)

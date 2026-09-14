---
schema: wang-person/v1
id: p_FvNGBpFmFGjg8XdjJiMSuX
status: active
merged_into: null
display_name: 王以道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wZ9bqxeULcDqUSCzW1UGC1
        subject_person_id: p_FvNGBpFmFGjg8XdjJiMSuX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VA7n5quB4wCo7Zu2F9N7xr
          claim_id: c_wZ9bqxeULcDqUSCzW1UGC1
          source_id: s_NPTLzjM37JtyRnFG23KkDF
          stance: supports
          locator: CBDB:221824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221824）
          source: &a1
            id: s_NPTLzjM37JtyRnFG23KkDF
            source_type: api_record
            title: 中国历代人物传记资料库：王以道（CBDB 221824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221824&o=json
            external_identifier: CBDB:221824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wQbwByiA3mn9SNtjRwWz8M
        subject_person_id: p_FvNGBpFmFGjg8XdjJiMSuX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以道，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221824）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZNHxXfxLIGk6x2EkQbKaFj
          claim_id: c_wQbwByiA3mn9SNtjRwWz8M
          source_id: s_NPTLzjM37JtyRnFG23KkDF
          stance: supports
          locator: CBDB:221824
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dowZvPZw7yaPXYTcrr3jEM
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FvNGBpFmFGjg8XdjJiMSuX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p7MGKWJAMLKtu4-Ae5i6_4
          claim_id: c_dowZvPZw7yaPXYTcrr3jEM
          source_id: s_Q1_-X_1NHkbIfvpv_vgK8x
          stance: supports
          locator: CBDB：兄弟 王以通（206705）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王以道 与 王以通 为同胞（CBDB 记「弟」），王以通 之父／母即 王以道 之父／母。
          source:
            id: s_Q1_-X_1NHkbIfvpv_vgK8x
            source_type: api_record
            title: 中国历代人物传记资料库：王以道（CBDB 221824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221824&o=json
            external_identifier: CBDB:221824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BtPUy8Ayd7XFTp2c4HBHNK
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rt-TacK-UdvC42TLSTMwki
        subject_person_id: p_FvNGBpFmFGjg8XdjJiMSuX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9sopCrq_11nFDR0WQUabXX
          claim_id: c_rt-TacK-UdvC42TLSTMwki
          source_id: s_Q1_-X_1NHkbIfvpv_vgK8x
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206705 王以通）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Q1_-X_1NHkbIfvpv_vgK8x
            source_type: api_record
            title: 中国历代人物传记资料库：王以道（CBDB 221824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221824&o=json
            external_identifier: CBDB:221824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qMg6Q8CEPodQMPp2EgjAAi
        status: active
        display_name: 王以通
        merged_into_person_id: null
---

# 王以道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以道 | accepted |
| bio.summary | 王以道，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BtPUy8Ayd7XFTp2c4HBHNK | 王榮 | accepted |
| other | p_qMg6Q8CEPodQMPp2EgjAAi | 王以通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以道（CBDB 221824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221824&o=json)

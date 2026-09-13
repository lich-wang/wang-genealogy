---
schema: wang-person/v1
id: p_JBQ1MoN8cQLy7m1GWiPbMt
status: active
merged_into: null
display_name: 王孝輔
cbdb_id: 526732
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ieiDfcjJJXkewpdCnop6Wc
        subject_person_id: p_JBQ1MoN8cQLy7m1GWiPbMt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝輔，史料所见人物。本项目依据《中国历代人物传记资料库：王孝輔（CBDB 526732）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_S2hiqT_ErkMsRYnjGVlfE7
          claim_id: c_ieiDfcjJJXkewpdCnop6Wc
          source_id: s_AYtYYviE1T8yx3ejjQDk8Y
          stance: supports
          locator: CBDB:526732
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AYtYYviE1T8yx3ejjQDk8Y
            source_type: api_record
            title: 中国历代人物传记资料库：王孝輔（CBDB 526732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526732&o=json
            external_identifier: CBDB:526732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jUxnALnYNwXJjKK2pCrHNL
        subject_person_id: p_JBQ1MoN8cQLy7m1GWiPbMt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aiHhVfG5eZTmzMkqHKD4fB
          claim_id: c_jUxnALnYNwXJjKK2pCrHNL
          source_id: s_AYtYYviE1T8yx3ejjQDk8Y
          stance: supports
          locator: CBDB:526732
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_WGymFJ-nAJ7W0adENCiSKp
        subject_person_id: p_Y3Y6HkmzixiBERDAuwhHZ6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JBQ1MoN8cQLy7m1GWiPbMt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ydYRtcrqnxP8SKQ_HBeJ2r
          claim_id: c_WGymFJ-nAJ7W0adENCiSKp
          source_id: s_ozqQVWwuJxzAFq8sSYvE1j
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12857：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ozqQVWwuJxzAFq8sSYvE1j
            source_type: api_record
            title: 中国历代人物传记资料库：王用汝（CBDB 69159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69159&o=json
            external_identifier: CBDB:69159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Y3Y6HkmzixiBERDAuwhHZ6
        status: active
        display_name: 王用汝
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王孝輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孝輔，史料所见人物。本项目依据《中国历代人物传记资料库：王孝輔（CBDB 526732）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王孝輔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Y3Y6HkmzixiBERDAuwhHZ6 | 王用汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孝輔（CBDB 526732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526732&o=json)
- [中国历代人物传记资料库：王用汝（CBDB 69159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69159&o=json)

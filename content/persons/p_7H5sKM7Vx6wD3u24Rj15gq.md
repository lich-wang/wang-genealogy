---
schema: wang-person/v1
id: p_7H5sKM7Vx6wD3u24Rj15gq
status: active
merged_into: null
display_name: 王成存
cbdb_id: 265220
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nq8wQY5X4CPy7ibQPJ2Nu6
        subject_person_id: p_7H5sKM7Vx6wD3u24Rj15gq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成存，史料所见人物。本项目依据《中国历代人物传记资料库：王成存（CBDB 265220）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_XhpQcSoNvZzSRyyNjcethZ
          claim_id: c_nq8wQY5X4CPy7ibQPJ2Nu6
          source_id: s_SNW62HtuzvSsi35BQa7dWC
          stance: supports
          locator: CBDB:265220
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_SNW62HtuzvSsi35BQa7dWC
            source_type: api_record
            title: 中国历代人物传记资料库：王成存（CBDB 265220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265220&o=json
            external_identifier: CBDB:265220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vu5PNsAMWeTS3F3pkicqoh
        subject_person_id: p_7H5sKM7Vx6wD3u24Rj15gq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成存
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RAWuxKPQHF4oRJTwn11uWy
          claim_id: c_vu5PNsAMWeTS3F3pkicqoh
          source_id: s_SNW62HtuzvSsi35BQa7dWC
          stance: supports
          locator: CBDB:265220
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_yVfLQE0vxe5WemzeD2jN4Y
        subject_person_id: p_7H5sKM7Vx6wD3u24Rj15gq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5vDjPyewsQNr1vDc9fypfb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XMYXwvSRnqbPKuIX6Phfhq
          claim_id: c_yVfLQE0vxe5WemzeD2jN4Y
          source_id: s_SG9XzYnQAGNaRPC96Wixq5
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第五十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SG9XzYnQAGNaRPC96Wixq5
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 200965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200965&o=json
            external_identifier: CBDB:200965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5vDjPyewsQNr1vDc9fypfb
        status: active
        display_name: 王時
        merged_into_person_id: null
  other: []
---

# 王成存

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王成存，史料所见人物。本项目依据《中国历代人物传记资料库：王成存（CBDB 265220）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王成存 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5vDjPyewsQNr1vDc9fypfb | 王時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成存（CBDB 265220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265220&o=json)
- [中国历代人物传记资料库：王時（CBDB 200965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200965&o=json)

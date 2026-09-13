---
schema: wang-person/v1
id: p_dhLw5ZYZGp3S49Qpkah6r2
status: active
merged_into: null
display_name: 王來麟
cbdb_id: 513593
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j5QaUDELD6Jj6d1KF7amuc
        subject_person_id: p_dhLw5ZYZGp3S49Qpkah6r2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來麟，史料所见人物。本项目依据《中国历代人物传记资料库：王來麟（CBDB 513593）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_nV71iwUssAd1nRw6mYR1pi
          claim_id: c_j5QaUDELD6Jj6d1KF7amuc
          source_id: s_xNu7YKBDJYww2FVY69EQAr
          stance: supports
          locator: CBDB:513593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xNu7YKBDJYww2FVY69EQAr
            source_type: api_record
            title: 中国历代人物传记资料库：王來麟（CBDB 513593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513593&o=json
            external_identifier: CBDB:513593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Shstgvczn2pBJiMxmvHxV
        subject_person_id: p_dhLw5ZYZGp3S49Qpkah6r2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jCy8tp5Ggc44mw8MJvj5pP
          claim_id: c_6Shstgvczn2pBJiMxmvHxV
          source_id: s_xNu7YKBDJYww2FVY69EQAr
          stance: supports
          locator: CBDB:513593
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
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
        id: c_e0EsrcRUfcTN7QIEWqI7OB
        subject_person_id: p_dhLw5ZYZGp3S49Qpkah6r2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vECvu4PrbhTNUTMJRckP9C
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RcUPQaGGLhw97Q6rYCatR3
          claim_id: c_e0EsrcRUfcTN7QIEWqI7OB
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QZBkD39gw9xGNCPK1D1WBq
            source_type: api_record
            title: 中国历代人物传记资料库：王輔運（CBDB 56877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json
            external_identifier: CBDB:56877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vECvu4PrbhTNUTMJRckP9C
        status: active
        display_name: 王輔運
        merged_into_person_id: null
  other: []
---

# 王來麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王來麟，史料所见人物。本项目依据《中国历代人物传记资料库：王來麟（CBDB 513593）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王來麟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vECvu4PrbhTNUTMJRckP9C | 王輔運 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔運（CBDB 56877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json)
- [中国历代人物传记资料库：王來麟（CBDB 513593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513593&o=json)

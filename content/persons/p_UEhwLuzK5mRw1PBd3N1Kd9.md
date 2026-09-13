---
schema: wang-person/v1
id: p_UEhwLuzK5mRw1PBd3N1Kd9
status: active
merged_into: null
display_name: 王文盛
cbdb_id: 326520
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RvkmQUW74pxoNDfq4ucJm5
        subject_person_id: p_UEhwLuzK5mRw1PBd3N1Kd9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文盛，史料所见人物。本项目依据《中国历代人物传记资料库：王文盛（CBDB 326520）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_RTkfUNHp6foDC00uL-ta59
          claim_id: c_RvkmQUW74pxoNDfq4ucJm5
          source_id: s_D3DqkscBBzHHP2A6nEt1zK
          stance: supports
          locator: CBDB:326520
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_D3DqkscBBzHHP2A6nEt1zK
            source_type: api_record
            title: 中国历代人物传记资料库：王文盛（CBDB 326520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326520&o=json
            external_identifier: CBDB:326520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WgMax9B9k3izSp49JfrUDC
        subject_person_id: p_UEhwLuzK5mRw1PBd3N1Kd9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文盛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7QA83jM3C7anfeGp5LAnyH
          claim_id: c_WgMax9B9k3izSp49JfrUDC
          source_id: s_D3DqkscBBzHHP2A6nEt1zK
          stance: supports
          locator: CBDB:326520
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_raLXSXSDBzDzUgJl3MdIxj
        subject_person_id: p_UEhwLuzK5mRw1PBd3N1Kd9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k5sMag1ncVE3mWDtXQJpWP
          claim_id: c_raLXSXSDBzDzUgJl3MdIxj
          source_id: s_3p6BBfq8bjfMZEGQHAGUKU
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第二十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3p6BBfq8bjfMZEGQHAGUKU
            source_type: api_record
            title: 中国历代人物传记资料库：王廷輔（CBDB 204965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204965&o=json
            external_identifier: CBDB:204965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7x8JYYpfNVCNz7epCoiZPm
        status: active
        display_name: 王廷輔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文盛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文盛，史料所见人物。本项目依据《中国历代人物传记资料库：王文盛（CBDB 326520）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王文盛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7x8JYYpfNVCNz7epCoiZPm | 王廷輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷輔（CBDB 204965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204965&o=json)
- [中国历代人物传记资料库：王文盛（CBDB 326520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326520&o=json)

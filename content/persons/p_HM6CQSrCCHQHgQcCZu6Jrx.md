---
schema: wang-person/v1
id: p_HM6CQSrCCHQHgQcCZu6Jrx
status: active
merged_into: null
display_name: 王道昇
cbdb_id: 231053
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jcVLNSWdSW8JVSsTqXu2Pa
        subject_person_id: p_HM6CQSrCCHQHgQcCZu6Jrx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道昇，史料所见人物。本项目依据《中国历代人物传记资料库：王道昇（CBDB 231053）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_g1mxczL928q1oga3cc5oBc
          claim_id: c_jcVLNSWdSW8JVSsTqXu2Pa
          source_id: s_XG8nM3AXwfV9rbQRDNvJ8u
          stance: supports
          locator: CBDB:231053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_XG8nM3AXwfV9rbQRDNvJ8u
            source_type: api_record
            title: 中国历代人物传记资料库：王道昇（CBDB 231053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231053&o=json
            external_identifier: CBDB:231053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2MVDroSY1YP3Gup824yGb1
        subject_person_id: p_HM6CQSrCCHQHgQcCZu6Jrx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3YiMKNqLAgdTvpLRKuHDKA
          claim_id: c_2MVDroSY1YP3Gup824yGb1
          source_id: s_XG8nM3AXwfV9rbQRDNvJ8u
          stance: supports
          locator: CBDB:231053
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CJ0oS-oJ0NrS-iNCL9s2TG
        subject_person_id: p_HM6CQSrCCHQHgQcCZu6Jrx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7j83XKHhJr8JnHARH8PeYg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_noqwuhOPSig3l84wBvOy6Z
          claim_id: c_CJ0oS-oJ0NrS-iNCL9s2TG
          source_id: s_uzW9Ddf4Rc2dppD7goBC2K
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uzW9Ddf4Rc2dppD7goBC2K
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 207304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207304&o=json
            external_identifier: CBDB:207304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7j83XKHhJr8JnHARH8PeYg
        status: active
        display_name: 王弼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道昇，史料所见人物。本项目依据《中国历代人物传记资料库：王道昇（CBDB 231053）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王道昇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7j83XKHhJr8JnHARH8PeYg | 王弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 207304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207304&o=json)
- [中国历代人物传记资料库：王道昇（CBDB 231053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231053&o=json)

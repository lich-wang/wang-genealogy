---
schema: wang-person/v1
id: p_xaFW5n3rj8bBX5K7DicMLs
status: active
merged_into: null
display_name: 王三成
cbdb_id: 336834
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NgCTXTiYqnByYHpXWyJBMi
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三成，史料所见人物。本项目依据《中国历代人物传记资料库：王三成（CBDB 336834）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_C8-5CWY7E-t3il0X_3nI3U
          claim_id: c_NgCTXTiYqnByYHpXWyJBMi
          source_id: s_yXiGeD28dK5Gye8tmF3U4w
          stance: supports
          locator: CBDB:336834
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_yXiGeD28dK5Gye8tmF3U4w
            source_type: api_record
            title: 中国历代人物传记资料库：王三成（CBDB 336834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336834&o=json
            external_identifier: CBDB:336834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DRwSDH4LePeqdZrMGkHfnc
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2n68UTd56jKBLdKPBA8jAJ
          claim_id: c_DRwSDH4LePeqdZrMGkHfnc
          source_id: s_yXiGeD28dK5Gye8tmF3U4w
          stance: supports
          locator: CBDB:336834
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OCDjAB-aidEk6RHxlWc8yd
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5eqa2npzGNMyLY9apLyg93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6m28Zbg3SGKoaGU2ybAsIu
          claim_id: c_OCDjAB-aidEk6RHxlWc8yd
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xSNFJ3uVoBPhNYenKBXfEa
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 126890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126890&o=json
            external_identifier: CBDB:126890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5eqa2npzGNMyLY9apLyg93
        status: active
        display_name: 王儼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王三成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三成，史料所见人物。本项目依据《中国历代人物传记资料库：王三成（CBDB 336834）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王三成 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5eqa2npzGNMyLY9apLyg93 | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三成（CBDB 336834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336834&o=json)
- [中国历代人物传记资料库：王儼（CBDB 126890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126890&o=json)

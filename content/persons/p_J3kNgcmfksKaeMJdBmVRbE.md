---
schema: wang-person/v1
id: p_J3kNgcmfksKaeMJdBmVRbE
status: active
merged_into: null
display_name: 王格
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D8pq1sPa5s5P43QKX39VmW
        subject_person_id: p_J3kNgcmfksKaeMJdBmVRbE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RLCu8x7136zZpKnrDyBQD7
          claim_id: c_D8pq1sPa5s5P43QKX39VmW
          source_id: s_Qm3UQQ6PtS8pEZfJaP5BDE
          stance: supports
          locator: CBDB:18819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18819）
          source: &a1
            id: s_Qm3UQQ6PtS8pEZfJaP5BDE
            source_type: api_record
            title: 中国历代人物传记资料库：王格（CBDB 18819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18819&o=json
            external_identifier: CBDB:18819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xJ1W6F2FoXeXsbeFHCbX4A
        subject_person_id: p_J3kNgcmfksKaeMJdBmVRbE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格，宋人物。籍贯樂清，身份为地方士人/鄉紳，入仕封贈。（中国历代人物传记资料库 CBDB 18819）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oBfB9F-_fmoHU0ng0TbRN-
          claim_id: c_xJ1W6F2FoXeXsbeFHCbX4A
          source_id: s_Qm3UQQ6PtS8pEZfJaP5BDE
          stance: supports
          locator: CBDB:18819
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5pdQ9qGe4mghgIwzj5jzlZ
        subject_person_id: p_zQAgRmnoLVP35vRq3hVkca
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J3kNgcmfksKaeMJdBmVRbE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oVeLxG2erVFZBh_4M2BRGF
          claim_id: c_5pdQ9qGe4mghgIwzj5jzlZ
          source_id: s_Qm3UQQ6PtS8pEZfJaP5BDE
          stance: supports
          locator: CBDB 双向互证（父 王信 ⇄ 子 王格）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_zQAgRmnoLVP35vRq3hVkca
        status: active
        display_name: 王信
        merged_into_person_id: null
  children:
    - claim:
        id: c_X0T7wJWtZpVIkDVQ41nKD_
        subject_person_id: p_J3kNgcmfksKaeMJdBmVRbE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k7FueQ7UqubgKGSwoNs5mw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rquI9FLL51WPKJytrNJVxw
          claim_id: c_X0T7wJWtZpVIkDVQ41nKD_
          source_id: s_Qm3UQQ6PtS8pEZfJaP5BDE
          stance: supports
          locator: CBDB 双向互证（子 王輔 ⇄ 父 王格）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_k7FueQ7UqubgKGSwoNs5mw
        status: active
        display_name: 王輔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王格

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王格 | accepted |
| bio.summary | 王格，宋人物。籍贯樂清，身份为地方士人/鄉紳，入仕封贈。（中国历代人物传记资料库 CBDB 18819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zQAgRmnoLVP35vRq3hVkca | 王信 | accepted |
| children | p_k7FueQ7UqubgKGSwoNs5mw | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王格（CBDB 18819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18819&o=json)

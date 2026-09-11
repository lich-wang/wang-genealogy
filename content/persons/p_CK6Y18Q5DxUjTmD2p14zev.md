---
schema: wang-person/v1
id: p_CK6Y18Q5DxUjTmD2p14zev
status: active
merged_into: null
display_name: 王億
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zTvXvUbPw251FgTpbLArFK
        subject_person_id: p_CK6Y18Q5DxUjTmD2p14zev
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ocmL1BF54Hv8BSBXFPLNgy
          claim_id: c_zTvXvUbPw251FgTpbLArFK
          source_id: s_zBQKrWZxZroHPiVGevWHNK
          stance: supports
          locator: CBDB:18663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18663）
          source: &a1
            id: s_zBQKrWZxZroHPiVGevWHNK
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 18663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18663&o=json
            external_identifier: CBDB:18663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VE3SZCyBtM5F8jJ6y81Nir
        subject_person_id: p_CK6Y18Q5DxUjTmD2p14zev
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億，宋人物。籍贯崑山，身份为鄉里長者。（中国历代人物传记资料库 CBDB 18663）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LZmpjnJ8I9rmrQevmEjHtM
          claim_id: c_VE3SZCyBtM5F8jJ6y81Nir
          source_id: s_zBQKrWZxZroHPiVGevWHNK
          stance: supports
          locator: CBDB:18663
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Qma8x4ZbtLL9NItuqTXPZZ
        subject_person_id: p_kEX7BaCTJnDcpamj7bx62V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CK6Y18Q5DxUjTmD2p14zev
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zoxwQl8Z7EXZI3XQ8vA8KT
          claim_id: c_Qma8x4ZbtLL9NItuqTXPZZ
          source_id: s_zBQKrWZxZroHPiVGevWHNK
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1185：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kEX7BaCTJnDcpamj7bx62V
        status: active
        display_name: 王申
        merged_into_person_id: null
  children:
    - claim:
        id: c_4crV9CHaqqKGD3BO4UwTRO
        subject_person_id: p_CK6Y18Q5DxUjTmD2p14zev
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_miziP4o1dvPJFQh5oBz2tf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oQUyu-TMt_TQNOjYv94X7-
          claim_id: c_4crV9CHaqqKGD3BO4UwTRO
          source_id: s_zBQKrWZxZroHPiVGevWHNK
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1072：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_miziP4o1dvPJFQh5oBz2tf
        status: active
        display_name: 王葆
        merged_into_person_id: null
    - claim:
        id: c_UJZdKAYK1Fn5dkahVj023B
        subject_person_id: p_CK6Y18Q5DxUjTmD2p14zev
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JqkaSKXxNG5TGDMApEwJ8u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__T6dZY26-rgVydUUtIE-jC
          claim_id: c_UJZdKAYK1Fn5dkahVj023B
          source_id: s_zBQKrWZxZroHPiVGevWHNK
          stance: supports
          locator: CBDB 双向互证（子 王萬 ⇄ 父 王億）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_JqkaSKXxNG5TGDMApEwJ8u
        status: active
        display_name: 王萬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王億

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王億 | accepted |
| bio.summary | 王億，宋人物。籍贯崑山，身份为鄉里長者。（中国历代人物传记资料库 CBDB 18663） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kEX7BaCTJnDcpamj7bx62V | 王申 | accepted |
| children | p_miziP4o1dvPJFQh5oBz2tf | 王葆 | accepted |
| children | p_JqkaSKXxNG5TGDMApEwJ8u | 王萬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王億（CBDB 18663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18663&o=json)

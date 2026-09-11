---
schema: wang-person/v1
id: p_6xTGUhQoDH9mJp5EBN5233
status: active
merged_into: null
display_name: 王渙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mkrk5F5yW5XMFVKJ74Ez1Q
        subject_person_id: p_6xTGUhQoDH9mJp5EBN5233
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F2ANdmS1Pzkm5gKC9vhCZv
          claim_id: c_mkrk5F5yW5XMFVKJ74Ez1Q
          source_id: s_5Jn8vwPYm2XkAkFW5MW3P2
          stance: supports
          locator: CBDB:10691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10691）
          source: &a1
            id: s_5Jn8vwPYm2XkAkFW5MW3P2
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 10691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10691&o=json
            external_identifier: CBDB:10691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vGpPCfLfGnuGT6Mc9NQWaL
        subject_person_id: p_6xTGUhQoDH9mJp5EBN5233
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙，宋人物。籍贯金華，曾任右通直郎。（中国历代人物传记资料库 CBDB 10691）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r2BWBkvI8Ygg3ZaM6lU_L4
          claim_id: c_vGpPCfLfGnuGT6Mc9NQWaL
          source_id: s_5Jn8vwPYm2XkAkFW5MW3P2
          stance: supports
          locator: CBDB:10691
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PYt-SivHjk1ekHHxusipd7
        subject_person_id: p_6xTGUhQoDH9mJp5EBN5233
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y2T6JoxNT8QKokD985uNxg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LOqh8MvFGhmmbUi54LPG9e
          claim_id: c_PYt-SivHjk1ekHHxusipd7
          source_id: s_5Jn8vwPYm2XkAkFW5MW3P2
          stance: supports
          locator: CBDB 双向互证（子 王楷 ⇄ 父 王渙）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Y2T6JoxNT8QKokD985uNxg
        status: active
        display_name: 王楷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王渙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渙 | accepted |
| bio.summary | 王渙，宋人物。籍贯金華，曾任右通直郎。（中国历代人物传记资料库 CBDB 10691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Y2T6JoxNT8QKokD985uNxg | 王楷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渙（CBDB 10691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10691&o=json)

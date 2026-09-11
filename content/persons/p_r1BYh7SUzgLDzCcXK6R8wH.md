---
schema: wang-person/v1
id: p_r1BYh7SUzgLDzCcXK6R8wH
status: active
merged_into: null
display_name: 王兆麟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s4HxXZq7aH1NDG5Nu9RoD3
        subject_person_id: p_r1BYh7SUzgLDzCcXK6R8wH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4JR1Vk7po3mw7D7EcjEicF
          claim_id: c_s4HxXZq7aH1NDG5Nu9RoD3
          source_id: s_9gWPE5ciJevrk5kxjSjrj8
          stance: supports
          locator: CBDB:29998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29998）
          source: &a1
            id: s_9gWPE5ciJevrk5kxjSjrj8
            source_type: api_record
            title: 中国历代人物传记资料库：王兆麟（CBDB 29998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29998&o=json
            external_identifier: CBDB:29998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.014Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7s83tur2dZfpJX8hfFWFQ3
        subject_person_id: p_r1BYh7SUzgLDzCcXK6R8wH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆麟，清人物。籍贯寶坻，身份为地方士人/鄉紳，入仕封贈。（中国历代人物传记资料库 CBDB 29998）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vKkIR3OOEJemr1uaBa-n3w
          claim_id: c_7s83tur2dZfpJX8hfFWFQ3
          source_id: s_9gWPE5ciJevrk5kxjSjrj8
          stance: supports
          locator: CBDB:29998
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LuGBQC0Ibnw0GOxB4GdCLA
        subject_person_id: p_r1BYh7SUzgLDzCcXK6R8wH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_igCtmJ34q9gbxGMJ3KYXqz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xbgC0KO4RQRATD29tH6Eqb
          claim_id: c_LuGBQC0Ibnw0GOxB4GdCLA
          source_id: s_9gWPE5ciJevrk5kxjSjrj8
          stance: supports
          locator: CBDB 双向互证（子 王殿颺 ⇄ 父 王兆麟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_igCtmJ34q9gbxGMJ3KYXqz
        status: active
        display_name: 王殿颺
        merged_into_person_id: null
    - claim:
        id: c_YkN79Njd6K-GtOQ026frfk
        subject_person_id: p_r1BYh7SUzgLDzCcXK6R8wH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6SUebLd95jVousCGt8Mk53
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aTNclWcQ88vg8cRRunA62a
          claim_id: c_YkN79Njd6K-GtOQ026frfk
          source_id: s_9gWPE5ciJevrk5kxjSjrj8
          stance: supports
          locator: CBDB 双向互证（子 王殿衡 ⇄ 父 王兆麟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_6SUebLd95jVousCGt8Mk53
        status: active
        display_name: 王殿衡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兆麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆麟 | accepted |
| bio.summary | 王兆麟，清人物。籍贯寶坻，身份为地方士人/鄉紳，入仕封贈。（中国历代人物传记资料库 CBDB 29998） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_igCtmJ34q9gbxGMJ3KYXqz | 王殿颺 | accepted |
| children | p_6SUebLd95jVousCGt8Mk53 | 王殿衡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王兆麟（CBDB 29998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29998&o=json)

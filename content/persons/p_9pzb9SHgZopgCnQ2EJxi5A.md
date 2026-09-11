---
schema: wang-person/v1
id: p_9pzb9SHgZopgCnQ2EJxi5A
status: active
merged_into: null
display_name: 王景純
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tDij3X3j9SBzMfu29EmjJW
        subject_person_id: p_9pzb9SHgZopgCnQ2EJxi5A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RFrqkNx1KGtZC7TxBr9tup
          claim_id: c_tDij3X3j9SBzMfu29EmjJW
          source_id: s_tLa4DF2oxLmZKUC7HfnULK
          stance: supports
          locator: CBDB:22060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22060）
          source: &a1
            id: s_tLa4DF2oxLmZKUC7HfnULK
            source_type: api_record
            title: 中国历代人物传记资料库：王景純（CBDB 22060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22060&o=json
            external_identifier: CBDB:22060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AMPC21pdTshZyTLvSjgvFD
        subject_person_id: p_9pzb9SHgZopgCnQ2EJxi5A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景純，宋人物。籍贯潞州，身份为儒學。（中国历代人物传记资料库 CBDB 22060）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vVUNj8vNgnne5sy6xwXzkF
          claim_id: c_AMPC21pdTshZyTLvSjgvFD
          source_id: s_tLa4DF2oxLmZKUC7HfnULK
          stance: supports
          locator: CBDB:22060
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KlJqRykDgD3txoF8ZgJKR2
        subject_person_id: p_MCffvNzFcTndAKD8EJ6Z8Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9pzb9SHgZopgCnQ2EJxi5A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JIU8qShPKno73UD1CkdeW6
          claim_id: c_KlJqRykDgD3txoF8ZgJKR2
          source_id: s_tLa4DF2oxLmZKUC7HfnULK
          stance: supports
          locator: CBDB 双向互证（父 王崇 ⇄ 子 王景純）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_MCffvNzFcTndAKD8EJ6Z8Y
        status: active
        display_name: 王崇
        merged_into_person_id: null
  children:
    - claim:
        id: c_dmjm9k-OwdLYRvD01mXJ42
        subject_person_id: p_9pzb9SHgZopgCnQ2EJxi5A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oXazvgZDCU1eQZ2UVAEZ4j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ReeALyReMVRaxsVy6VqJ-8
          claim_id: c_dmjm9k-OwdLYRvD01mXJ42
          source_id: s_tLa4DF2oxLmZKUC7HfnULK
          stance: supports
          locator: CBDB 双向互证（子 王曙 ⇄ 父 王景純）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_oXazvgZDCU1eQZ2UVAEZ4j
        status: active
        display_name: 王曙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景純 | accepted |
| bio.summary | 王景純，宋人物。籍贯潞州，身份为儒學。（中国历代人物传记资料库 CBDB 22060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MCffvNzFcTndAKD8EJ6Z8Y | 王崇 | accepted |
| children | p_oXazvgZDCU1eQZ2UVAEZ4j | 王曙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景純（CBDB 22060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22060&o=json)

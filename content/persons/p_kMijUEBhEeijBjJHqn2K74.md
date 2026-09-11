---
schema: wang-person/v1
id: p_kMijUEBhEeijBjJHqn2K74
status: active
merged_into: null
display_name: 王誼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PAU1LZPE1UjZKwLcus2Ej7
        subject_person_id: p_kMijUEBhEeijBjJHqn2K74
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TUsP8rq5EDLL3CKtGyE3gb
          claim_id: c_PAU1LZPE1UjZKwLcus2Ej7
          source_id: s_3XfNMFaviM7EEtFB5bjg99
          stance: supports
          locator: CBDB:23566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23566）
          source: &a1
            id: s_3XfNMFaviM7EEtFB5bjg99
            source_type: api_record
            title: 中国历代人物传记资料库：王誼（CBDB 23566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23566&o=json
            external_identifier: CBDB:23566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UwvYM3MTfUBjnNV5TXfRfN
        subject_person_id: p_kMijUEBhEeijBjJHqn2K74
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誼，宋人物。籍贯江陰，入仕進士。（中国历代人物传记资料库 CBDB 23566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h9_-SgmWXlmPtGxBX_ZBwE
          claim_id: c_UwvYM3MTfUBjnNV5TXfRfN
          source_id: s_3XfNMFaviM7EEtFB5bjg99
          stance: supports
          locator: CBDB:23566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r3HLjEKOuXysVlQ_jKfQsp
        subject_person_id: p_tk84vCkyVEDHdqb4M5upn4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kMijUEBhEeijBjJHqn2K74
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qh-NFYr__fD7an3Zn63xks
          claim_id: c_r3HLjEKOuXysVlQ_jKfQsp
          source_id: s_3XfNMFaviM7EEtFB5bjg99
          stance: supports
          locator: CBDB 双向互证（父 王庶 ⇄ 子 王誼）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_tk84vCkyVEDHdqb4M5upn4
        status: active
        display_name: 王庶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王誼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誼 | accepted |
| bio.summary | 王誼，宋人物。籍贯江陰，入仕進士。（中国历代人物传记资料库 CBDB 23566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tk84vCkyVEDHdqb4M5upn4 | 王庶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誼（CBDB 23566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23566&o=json)

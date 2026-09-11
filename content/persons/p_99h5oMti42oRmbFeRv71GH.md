---
schema: wang-person/v1
id: p_99h5oMti42oRmbFeRv71GH
status: active
merged_into: null
display_name: 王固
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5rEu3q2q4ciAdY3u71Qziz
        subject_person_id: p_99h5oMti42oRmbFeRv71GH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王固
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m9ZbXqjhJX2wpqY4kDDmhV
          claim_id: c_5rEu3q2q4ciAdY3u71Qziz
          source_id: s_ZHycc1ZTRscsA76wBW1Kcd
          stance: supports
          locator: CBDB:24208
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（24208）
          source: &a1
            id: s_ZHycc1ZTRscsA76wBW1Kcd
            source_type: api_record
            title: 中国历代人物传记资料库：王固（CBDB 24208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24208&o=json
            external_identifier: CBDB:24208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xNnM1Ys1hEuQzpfofRvexj
        subject_person_id: p_99h5oMti42oRmbFeRv71GH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X9hcAeR9tqzx2C2QijwYFg
          claim_id: c_xNnM1Ys1hEuQzpfofRvexj
          source_id: s_ZHycc1ZTRscsA76wBW1Kcd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_qBN13wIXop_-FKnYOcIYZE
        subject_person_id: p_99h5oMti42oRmbFeRv71GH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U6U7iBU9o2X1cgCkLr7_Yd
          claim_id: c_qBN13wIXop_-FKnYOcIYZE
          source_id: s_ZHycc1ZTRscsA76wBW1Kcd
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王永年 ⇄ 高祖;四世祖 王固）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TXTXwSryWLUp2Edx6YAYPe
        status: active
        display_name: 王永年
        merged_into_person_id: null
  other: []
---

# 王固

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王固 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TXTXwSryWLUp2Edx6YAYPe | 王永年 | accepted |

## 外部来源

- [中国历代人物传记资料库：王固（CBDB 24208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24208&o=json)

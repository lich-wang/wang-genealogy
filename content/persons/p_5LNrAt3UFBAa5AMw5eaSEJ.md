---
schema: wang-person/v1
id: p_5LNrAt3UFBAa5AMw5eaSEJ
status: active
merged_into: null
display_name: 王蘧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yYGU3XzXZNNYTv3HpBn8i1
        subject_person_id: p_5LNrAt3UFBAa5AMw5eaSEJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G5Uawqs5TzBy5VTR9yGzWD
          claim_id: c_yYGU3XzXZNNYTv3HpBn8i1
          source_id: s_ueB9ZHJQCPPPwYRoVNUksZ
          stance: supports
          locator: CBDB:23564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23564）
          source: &a1
            id: s_ueB9ZHJQCPPPwYRoVNUksZ
            source_type: api_record
            title: 中国历代人物传记资料库：王蘧（CBDB 23564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23564&o=json
            external_identifier: CBDB:23564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N4P4yGfwVgwkiN2P2sabZX
        subject_person_id: p_5LNrAt3UFBAa5AMw5eaSEJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘧，宋人物。籍贯江陰，曾任正奉大夫、中奉大夫。（中国历代人物传记资料库 CBDB 23564）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1H7OBF4NPQ7Y8YMnQhU6z4
          claim_id: c_N4P4yGfwVgwkiN2P2sabZX
          source_id: s_ueB9ZHJQCPPPwYRoVNUksZ
          stance: supports
          locator: CBDB:23564
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uqHRr1587NZijSsJ4DuQU1
        subject_person_id: p_iLUdeieVQDb1mxk8x28Vj3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5LNrAt3UFBAa5AMw5eaSEJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oi3psiXaGJ99rcn6u81QLi
          claim_id: c_uqHRr1587NZijSsJ4DuQU1
          source_id: s_ueB9ZHJQCPPPwYRoVNUksZ
          stance: supports
          locator: CBDB 双向互证（父 王正路 ⇄ 子 王蘧）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_iLUdeieVQDb1mxk8x28Vj3
        status: active
        display_name: 王正路
        merged_into_person_id: null
  children:
    - claim:
        id: c_vz3c1JzKmbv2Un0cBsMfcw
        subject_person_id: p_5LNrAt3UFBAa5AMw5eaSEJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tk84vCkyVEDHdqb4M5upn4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmrugRbrTO9-sKCFr6ihP8
          claim_id: c_vz3c1JzKmbv2Un0cBsMfcw
          source_id: s_ueB9ZHJQCPPPwYRoVNUksZ
          stance: supports
          locator: CBDB 双向互证（子 王庶 ⇄ 父 王蘧）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_tk84vCkyVEDHdqb4M5upn4
        status: active
        display_name: 王庶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蘧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘧 | accepted |
| bio.summary | 王蘧，宋人物。籍贯江陰，曾任正奉大夫、中奉大夫。（中国历代人物传记资料库 CBDB 23564） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iLUdeieVQDb1mxk8x28Vj3 | 王正路 | accepted |
| children | p_tk84vCkyVEDHdqb4M5upn4 | 王庶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘧（CBDB 23564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23564&o=json)

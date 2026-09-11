---
schema: wang-person/v1
id: p_9XtatSzbUAUbGKWh823XDp
status: active
merged_into: null
display_name: 王瑤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m95nmR35wjLTJDsyYRASVh
        subject_person_id: p_9XtatSzbUAUbGKWh823XDp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FEGZL8tghQozRUmKyBcdi8
          claim_id: c_m95nmR35wjLTJDsyYRASVh
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: CBDB:69422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69422）
          source: &a1
            id: s_AR6R7vvgs7N84GQDgobf6U
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 69422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69422&o=json
            external_identifier: CBDB:69422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r1xvFHb4c5rwAKu3rRPBFG
        subject_person_id: p_9XtatSzbUAUbGKWh823XDp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1733年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_37z3t3NMzS8tREEg1JbKCr
          claim_id: c_r1xvFHb4c5rwAKu3rRPBFG
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_H5Vkfn2SrN8g9BrPooFc1t
        subject_person_id: p_9XtatSzbUAUbGKWh823XDp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1795年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FKCrJftKhCTPwnSt3m4fRX
          claim_id: c_H5Vkfn2SrN8g9BrPooFc1t
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9vb2tTeqSC448CmJUnjTEH
        subject_person_id: p_9XtatSzbUAUbGKWh823XDp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤（1733年—1795年），清人物。明清進士進士，籍贯渭南，入仕進士，曾任縣知縣。（中国历代人物传记资料库 CBDB 69422）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q53_646UwPpZ_Ne3jiHUb9
          claim_id: c_9vb2tTeqSC448CmJUnjTEH
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: CBDB:69422
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__bca2nQINf0ay0EH8QdKGm
        subject_person_id: p_oDJrgyjrEYvhubApKjGFeM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9XtatSzbUAUbGKWh823XDp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jol9YUAWRFG_D9fyx6nIL-
          claim_id: c__bca2nQINf0ay0EH8QdKGm
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13128：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oDJrgyjrEYvhubApKjGFeM
        status: active
        display_name: 王元績
        merged_into_person_id: null
  children:
    - claim:
        id: c_afBY4Lf0znjsEfnZsH-1l8
        subject_person_id: p_9XtatSzbUAUbGKWh823XDp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RDkkPEePKGnQq2PT6dhmD7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2B31X488RkzMci1gI4D7zT
          claim_id: c_afBY4Lf0znjsEfnZsH-1l8
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13128：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RDkkPEePKGnQq2PT6dhmD7
        status: active
        display_name: 王代鈞
        merged_into_person_id: null
    - claim:
        id: c_A9pF8pjQ4jPppoqXOzkuYN
        subject_person_id: p_9XtatSzbUAUbGKWh823XDp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ls8KQaTxkN7Y5me48iPD47
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CDxCxcDu7M6N1IkIqJIyPS
          claim_id: c_A9pF8pjQ4jPppoqXOzkuYN
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13128：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ls8KQaTxkN7Y5me48iPD47
        status: active
        display_name: 王華年
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7YrsFaykO63YelsSDj4VRi
        subject_person_id: p_MGGtyijdx1XVGPnCi9QkhM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9XtatSzbUAUbGKWh823XDp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FfOF6uzmz-N9g3JvBzkq4Y
          claim_id: c_7YrsFaykO63YelsSDj4VRi
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13128：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MGGtyijdx1XVGPnCi9QkhM
        status: active
        display_name: 王有言
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑤 | accepted |
| birth.date | 1733年 | accepted |
| death.date | 1795年 | accepted |
| bio.summary | 王瑤（1733年—1795年），清人物。明清進士進士，籍贯渭南，入仕進士，曾任縣知縣。（中国历代人物传记资料库 CBDB 69422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oDJrgyjrEYvhubApKjGFeM | 王元績 | accepted |
| children | p_RDkkPEePKGnQq2PT6dhmD7 | 王代鈞 | accepted |
| children | p_Ls8KQaTxkN7Y5me48iPD47 | 王華年 | accepted |
| ancestors | p_MGGtyijdx1XVGPnCi9QkhM | 王有言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑤（CBDB 69422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69422&o=json)

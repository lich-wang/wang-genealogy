---
schema: wang-person/v1
id: p_aHeAmqcGVyBmd5DEnHtvrt
status: active
merged_into: null
display_name: 王纘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ZCbCo1GnVhbtSS2Dxi53w
        subject_person_id: p_aHeAmqcGVyBmd5DEnHtvrt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qwGrsQqshEoEaELoHYpvEC
          claim_id: c_1ZCbCo1GnVhbtSS2Dxi53w
          source_id: s_Y1pDBFA71gVGdvYfjt74T1
          stance: supports
          locator: CBDB:23404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23404）
          source: &a1
            id: s_Y1pDBFA71gVGdvYfjt74T1
            source_type: api_record
            title: 中国历代人物传记资料库：王纘（CBDB 23404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23404&o=json
            external_identifier: CBDB:23404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qnYEtSPgwwGcDvCeAbTfEq
        subject_person_id: p_aHeAmqcGVyBmd5DEnHtvrt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纘，宋人物。籍贯南安。（中国历代人物传记资料库 CBDB 23404）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__hkTgA-Sxy197oc-4cG3aU
          claim_id: c_qnYEtSPgwwGcDvCeAbTfEq
          source_id: s_Y1pDBFA71gVGdvYfjt74T1
          stance: supports
          locator: CBDB:23404
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Or0LZ1iplnfS2XJAE2bnwJ
        subject_person_id: p_jcy22bxAQUFAfeVxtaPc8j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aHeAmqcGVyBmd5DEnHtvrt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gO6RsrOHT9oenkiz8LanOi
          claim_id: c_Or0LZ1iplnfS2XJAE2bnwJ
          source_id: s_Y1pDBFA71gVGdvYfjt74T1
          stance: supports
          locator: CBDB 双向互证（父 王安稚 ⇄ 子 王纘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_jcy22bxAQUFAfeVxtaPc8j
        status: active
        display_name: 王安稚
        merged_into_person_id: null
  children:
    - claim:
        id: c_tegcUZQYVV229Nk-Q40rWT
        subject_person_id: p_aHeAmqcGVyBmd5DEnHtvrt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wh324NyeqK1obvTfApNoR8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bfV7jB9ptff0hO9v1rG1GX
          claim_id: c_tegcUZQYVV229Nk-Q40rWT
          source_id: s_Y1pDBFA71gVGdvYfjt74T1
          stance: supports
          locator: CBDB 双向互证（子 王肇 ⇄ 父 王纘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Wh324NyeqK1obvTfApNoR8
        status: active
        display_name: 王肇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纘 | accepted |
| bio.summary | 王纘，宋人物。籍贯南安。（中国历代人物传记资料库 CBDB 23404） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jcy22bxAQUFAfeVxtaPc8j | 王安稚 | accepted |
| children | p_Wh324NyeqK1obvTfApNoR8 | 王肇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王纘（CBDB 23404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23404&o=json)

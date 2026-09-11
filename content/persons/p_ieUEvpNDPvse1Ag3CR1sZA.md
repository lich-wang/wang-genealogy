---
schema: wang-person/v1
id: p_ieUEvpNDPvse1Ag3CR1sZA
status: active
merged_into: null
display_name: 王會
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_723xq6qxMJpJQe5wwgk8QY
        subject_person_id: p_ieUEvpNDPvse1Ag3CR1sZA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_979hjCpiNUCQwiZVcfPWoZ
          claim_id: c_723xq6qxMJpJQe5wwgk8QY
          source_id: s_Xro2zW4vVVcM82Tv4vADYn
          stance: supports
          locator: CBDB:1822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1822）
          source: &a1
            id: s_Xro2zW4vVVcM82Tv4vADYn
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 1822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1822&o=json
            external_identifier: CBDB:1822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cTEGP6uX6VQwLf36QpoTHf
        subject_person_id: p_ieUEvpNDPvse1Ag3CR1sZA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會，宋人物。籍贯上饒，曾任司農寺丞、軍器監監。（中国历代人物传记资料库 CBDB 1822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3X6Y7hgMULA5L5CUioDOgt
          claim_id: c_cTEGP6uX6VQwLf36QpoTHf
          source_id: s_Xro2zW4vVVcM82Tv4vADYn
          stance: supports
          locator: CBDB:1822
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JKY-AbLa-LVuivslWHQ3FK
        subject_person_id: p_V7ycLeFaKcwDLu6Nqpp4GD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ieUEvpNDPvse1Ag3CR1sZA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_evftiFRtgJy-K_kA3ILbE5
          claim_id: c_JKY-AbLa-LVuivslWHQ3FK
          source_id: s_Xro2zW4vVVcM82Tv4vADYn
          stance: supports
          locator: CBDB 双向互证（父 王仲山 ⇄ 子 王會）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_V7ycLeFaKcwDLu6Nqpp4GD
        status: active
        display_name: 王仲山
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會 | accepted |
| bio.summary | 王會，宋人物。籍贯上饒，曾任司農寺丞、軍器監監。（中国历代人物传记资料库 CBDB 1822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V7ycLeFaKcwDLu6Nqpp4GD | 王仲山 | accepted |

## 外部来源

- [中国历代人物传记资料库：王會（CBDB 1822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1822&o=json)

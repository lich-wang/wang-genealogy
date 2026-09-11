---
schema: wang-person/v1
id: p_ASPW873g2imRFDHsyu1eA9
status: active
merged_into: null
display_name: 王郁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZJReJnR4jmn3fpHQanfP3H
        subject_person_id: p_ASPW873g2imRFDHsyu1eA9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vqm22AqS2SSMMQV5SDtVAz
          claim_id: c_ZJReJnR4jmn3fpHQanfP3H
          source_id: s_f6q5tvg1JCt8JgDCNRLgQK
          stance: supports
          locator: CBDB:21956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21956）
          source: &a1
            id: s_f6q5tvg1JCt8JgDCNRLgQK
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 21956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21956&o=json
            external_identifier: CBDB:21956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f7n2z2QBVKGV2EEbW4gCjt
        subject_person_id: p_ASPW873g2imRFDHsyu1eA9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王郁，吳(楊)人物。籍贯新喻，入仕科舉制舉: 童子舉。（中国历代人物传记资料库 CBDB 21956）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rKy38sHlqAUzMBSGXXNqSs
          claim_id: c_f7n2z2QBVKGV2EEbW4gCjt
          source_id: s_f6q5tvg1JCt8JgDCNRLgQK
          stance: supports
          locator: CBDB:21956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_inQ6Od9msQ8vRMOWRbQc8_
        subject_person_id: p_ALQtWPmNViN2cvYQD8LPdg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ASPW873g2imRFDHsyu1eA9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z2l5VKVoEK9sqXrAkDJxXh
          claim_id: c_inQ6Od9msQ8vRMOWRbQc8_
          source_id: s_HusSu3FxocJzkJ9JMvQw3t
          stance: supports
          locator: CBDB 双向互证（子 王郁 ⇄ 父 王遐）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_HusSu3FxocJzkJ9JMvQw3t
            source_type: api_record
            title: 中国历代人物传记资料库：王遐（CBDB 3952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3952&o=json
            external_identifier: CBDB:3952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.430Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ALQtWPmNViN2cvYQD8LPdg
        status: active
        display_name: 王遐
        merged_into_person_id: null
  children:
    - claim:
        id: c_uSYicbX_UBKKllsmUxd3Fb
        subject_person_id: p_ASPW873g2imRFDHsyu1eA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YwfxemcgE9CwVznhKaQ8JF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kgLus3HpiDYFRY1ZDMNfeb
          claim_id: c_uSYicbX_UBKKllsmUxd3Fb
          source_id: s_f6q5tvg1JCt8JgDCNRLgQK
          stance: supports
          locator: CBDB 双向互证（子 王仲華 ⇄ 父 王郁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_YwfxemcgE9CwVznhKaQ8JF
        status: active
        display_name: 王仲華
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王郁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郁 | accepted |
| bio.summary | 王郁，吳(楊)人物。籍贯新喻，入仕科舉制舉: 童子舉。（中国历代人物传记资料库 CBDB 21956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ALQtWPmNViN2cvYQD8LPdg | 王遐 | accepted |
| children | p_YwfxemcgE9CwVznhKaQ8JF | 王仲華 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遐（CBDB 3952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3952&o=json)
- [中国历代人物传记资料库：王郁（CBDB 21956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21956&o=json)

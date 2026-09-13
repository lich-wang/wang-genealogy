---
schema: wang-person/v1
id: p_bvh8zRoDoVHCR7W6APybWW
status: active
merged_into: null
display_name: 王必中
cbdb_id: 22092
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q9kd4yLZaVaU7gfGosXLGt
        subject_person_id: p_bvh8zRoDoVHCR7W6APybWW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王必中，史料所见人物。本项目依据《中国历代人物传记资料库：王必中（CBDB 22092）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_yISaLL9Ttf1o0GSt5x9nj0
          claim_id: c_q9kd4yLZaVaU7gfGosXLGt
          source_id: s_Nwm2RwKwarQccZD4YLKZxq
          stance: supports
          locator: CBDB:22092
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Nwm2RwKwarQccZD4YLKZxq
            source_type: api_record
            title: 中国历代人物传记资料库：王必中（CBDB 22092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22092&o=json
            external_identifier: CBDB:22092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vmuncgx22TUAbSCGeARfdq
        subject_person_id: p_bvh8zRoDoVHCR7W6APybWW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王必中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6C5e4jJkXDanUoswdS1jox
          claim_id: c_vmuncgx22TUAbSCGeARfdq
          source_id: s_Nwm2RwKwarQccZD4YLKZxq
          stance: supports
          locator: CBDB:22092
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1rIQXttdudMgq5NRcoPf3E
        subject_person_id: p_3S1gvg5vQ6RL1wu23AJHJk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bvh8zRoDoVHCR7W6APybWW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KUPlvwqsaWfeb0ZbxKaRPE
          claim_id: c_1rIQXttdudMgq5NRcoPf3E
          source_id: s_aKuiPaAct5MkYs4dfRfBVJ
          stance: supports
          locator: CBDB 双向互证（子 王必中 ⇄ 父 王憲）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_aKuiPaAct5MkYs4dfRfBVJ
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 22091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22091&o=json
            external_identifier: CBDB:22091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3S1gvg5vQ6RL1wu23AJHJk
        status: active
        display_name: 王憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王必中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王必中，史料所见人物。本项目依据《中国历代人物传记资料库：王必中（CBDB 22092）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王必中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3S1gvg5vQ6RL1wu23AJHJk | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王必中（CBDB 22092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22092&o=json)
- [中国历代人物传记资料库：王憲（CBDB 22091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22091&o=json)

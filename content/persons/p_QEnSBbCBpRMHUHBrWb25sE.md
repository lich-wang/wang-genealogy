---
schema: wang-person/v1
id: p_QEnSBbCBpRMHUHBrWb25sE
status: active
merged_into: null
display_name: 王元某
cbdb_id: 164378
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z2WZLTKyqk8zUpxjgh6ViN
        subject_person_id: p_QEnSBbCBpRMHUHBrWb25sE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元某，史料所见人物。本项目依据《中国历代人物传记资料库：王元某（CBDB 164378）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_iZKgsiEGi-WcOyFK8EJAkF
          claim_id: c_Z2WZLTKyqk8zUpxjgh6ViN
          source_id: s_5NZ8AQLPNEp817i7oiXkQN
          stance: supports
          locator: CBDB:164378
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5NZ8AQLPNEp817i7oiXkQN
            source_type: api_record
            title: 中国历代人物传记资料库：王元某（CBDB 164378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164378&o=json
            external_identifier: CBDB:164378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G5VK5AShvi3fCbBpJAXNxg
        subject_person_id: p_QEnSBbCBpRMHUHBrWb25sE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H5pkjqdJoCF2P3Sr6RPyMK
          claim_id: c_G5VK5AShvi3fCbBpJAXNxg
          source_id: s_5NZ8AQLPNEp817i7oiXkQN
          stance: supports
          locator: CBDB:164378
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M07ZswUZuHE-hU95BRqROs
        subject_person_id: p_pi3jrpykNB14U478pgSEhq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QEnSBbCBpRMHUHBrWb25sE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2IGW88cob89Hmhrz14ckvU
          claim_id: c_M07ZswUZuHE-hU95BRqROs
          source_id: s_DZX4Y33F85LUjj7GuoCn67
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan160：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DZX4Y33F85LUjj7GuoCn67
            source_type: api_record
            title: 中国历代人物传记资料库：王方（CBDB 143744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143744&o=json
            external_identifier: CBDB:143744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pi3jrpykNB14U478pgSEhq
        status: active
        display_name: 王方
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元某，史料所见人物。本项目依据《中国历代人物传记资料库：王元某（CBDB 164378）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王元某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pi3jrpykNB14U478pgSEhq | 王方 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方（CBDB 143744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143744&o=json)
- [中国历代人物传记资料库：王元某（CBDB 164378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164378&o=json)

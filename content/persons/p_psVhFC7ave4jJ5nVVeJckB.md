---
schema: wang-person/v1
id: p_psVhFC7ave4jJ5nVVeJckB
status: active
merged_into: null
display_name: 王永良
cbdb_id: 293680
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tfsd8xK7S5LJtChm2CtJBS
        subject_person_id: p_psVhFC7ave4jJ5nVVeJckB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永良，史料所见人物。本项目依据《中国历代人物传记资料库：王永良（CBDB 293680）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_bfIBVQr4NIy8_EuQBKCbu4
          claim_id: c_tfsd8xK7S5LJtChm2CtJBS
          source_id: s_YRvu3VXHAVd5QDvM8fqxbx
          stance: supports
          locator: CBDB:293680
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_YRvu3VXHAVd5QDvM8fqxbx
            source_type: api_record
            title: 中国历代人物传记资料库：王永良（CBDB 293680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293680&o=json
            external_identifier: CBDB:293680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_r9VRFEY6WkDab4KabBGj4Y
        subject_person_id: p_psVhFC7ave4jJ5nVVeJckB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5kcm6TPf4L8p2b79RLNWRH
          claim_id: c_r9VRFEY6WkDab4KabBGj4Y
          source_id: s_YRvu3VXHAVd5QDvM8fqxbx
          stance: supports
          locator: CBDB:293680
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_XiUWPlye7Icwhw9r8NpbLA
        subject_person_id: p_psVhFC7ave4jJ5nVVeJckB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TBBj4gCo8ENonMptcoHt4r
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eMLPr_w7-DvqaXrblJsSof
          claim_id: c_XiUWPlye7Icwhw9r8NpbLA
          source_id: s_YRvu3VXHAVd5QDvM8fqxbx
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YRvu3VXHAVd5QDvM8fqxbx
            source_type: api_record
            title: 中国历代人物传记资料库：王永良（CBDB 293680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293680&o=json
            external_identifier: CBDB:293680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_TBBj4gCo8ENonMptcoHt4r
        status: active
        display_name: 王獻芝
        merged_into_person_id: null
  other: []
---

# 王永良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永良，史料所见人物。本项目依据《中国历代人物传记资料库：王永良（CBDB 293680）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王永良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TBBj4gCo8ENonMptcoHt4r | 王獻芝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永良（CBDB 293680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293680&o=json)

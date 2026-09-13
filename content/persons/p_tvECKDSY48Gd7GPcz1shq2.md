---
schema: wang-person/v1
id: p_tvECKDSY48Gd7GPcz1shq2
status: active
merged_into: null
display_name: 王克宏
cbdb_id: 342971
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SUhWyNU5Q9uVHy3TAkHVND
        subject_person_id: p_tvECKDSY48Gd7GPcz1shq2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克宏，史料所见人物。本项目依据《中国历代人物传记资料库：王克宏（CBDB 342971）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_oWX55iS8UXbd_6XaCAiL_4
          claim_id: c_SUhWyNU5Q9uVHy3TAkHVND
          source_id: s_TySZR9JwwAbREhAPx8oRZA
          stance: supports
          locator: CBDB:342971
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TySZR9JwwAbREhAPx8oRZA
            source_type: api_record
            title: 中国历代人物传记资料库：王克宏（CBDB 342971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342971&o=json
            external_identifier: CBDB:342971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:14.084Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oBVMJP9JPXSp2FWU27wBDz
        subject_person_id: p_tvECKDSY48Gd7GPcz1shq2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MLuC2G6bgj3F4jfFzHcuP3
          claim_id: c_oBVMJP9JPXSp2FWU27wBDz
          source_id: s_TySZR9JwwAbREhAPx8oRZA
          stance: supports
          locator: CBDB:342971
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4401-4500）｜历史性依据：CBDB 朝代 = 清
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
  descendants: []
  other: []
---

# 王克宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王克宏，史料所见人物。本项目依据《中国历代人物传记资料库：王克宏（CBDB 342971）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王克宏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克宏（CBDB 342971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342971&o=json)

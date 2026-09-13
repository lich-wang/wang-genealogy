---
schema: wang-person/v1
id: p_Mg6JZui6rTZsVJKew7MsRK
status: active
merged_into: null
display_name: 王連元
cbdb_id: 495189
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e9Qi9MSdHEZRkwM7geY5Mb
        subject_person_id: p_Mg6JZui6rTZsVJKew7MsRK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王連元，史料所见人物。本项目依据《中国历代人物传记资料库：王連元（CBDB 495189）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_VBap_kvHXoJ9iNQaQYr9BJ
          claim_id: c_e9Qi9MSdHEZRkwM7geY5Mb
          source_id: s_eHmoUkdVWyKMD81UdniZXH
          stance: supports
          locator: CBDB:495189
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_eHmoUkdVWyKMD81UdniZXH
            source_type: api_record
            title: 中国历代人物传记资料库：王連元（CBDB 495189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495189&o=json
            external_identifier: CBDB:495189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:14.754Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bwk6jj5VYPMc5b5BEsY9TU
        subject_person_id: p_Mg6JZui6rTZsVJKew7MsRK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王連元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3ruDdgPxqqJt11rSjDbCJV
          claim_id: c_bwk6jj5VYPMc5b5BEsY9TU
          source_id: s_eHmoUkdVWyKMD81UdniZXH
          stance: supports
          locator: CBDB:495189
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6701-6800）｜历史性依据：CBDB 朝代 = 清
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

# 王連元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王連元，史料所见人物。本项目依据《中国历代人物传记资料库：王連元（CBDB 495189）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王連元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王連元（CBDB 495189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495189&o=json)

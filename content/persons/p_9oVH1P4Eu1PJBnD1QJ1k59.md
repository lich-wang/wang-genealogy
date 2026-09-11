---
schema: wang-person/v1
id: p_9oVH1P4Eu1PJBnD1QJ1k59
status: active
merged_into: null
display_name: 王聯壁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r9ZLRoxiK1cqm3AnoAMH9r
        subject_person_id: p_9oVH1P4Eu1PJBnD1QJ1k59
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聯壁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5mrtjzbQ47e2MCLiFaagnw
          claim_id: c_r9ZLRoxiK1cqm3AnoAMH9r
          source_id: s_UdWVP44rioQJjWx71h3BCo
          stance: supports
          locator: CBDB:639951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639951）
          source: &a1
            id: s_UdWVP44rioQJjWx71h3BCo
            source_type: api_record
            title: 中国历代人物传记资料库：王聯壁（CBDB 639951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639951&o=json
            external_identifier: CBDB:639951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hSb7Yd7K2qLU6CrGNBGpiK
        subject_person_id: p_9oVH1P4Eu1PJBnD1QJ1k59
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聯壁，清人物。籍贯高密，曾任主事。（中国历代人物传记资料库 CBDB 639951）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4yGrtpU-I97UrkYvxajRDL
          claim_id: c_hSb7Yd7K2qLU6CrGNBGpiK
          source_id: s_UdWVP44rioQJjWx71h3BCo
          stance: supports
          locator: CBDB:639951
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王聯壁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聯壁 | accepted |
| bio.summary | 王聯壁，清人物。籍贯高密，曾任主事。（中国历代人物传记资料库 CBDB 639951） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聯壁（CBDB 639951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639951&o=json)

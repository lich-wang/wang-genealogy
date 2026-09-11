---
schema: wang-person/v1
id: p_kPFN2c86H4KDrGkjrdGLYe
status: active
merged_into: null
display_name: 王懷玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d7gFMUGKbH3SEQJcLSJJf9
        subject_person_id: p_kPFN2c86H4KDrGkjrdGLYe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C6EPhrDER5RNw9kDuLy7EY
          claim_id: c_d7gFMUGKbH3SEQJcLSJJf9
          source_id: s_YVqu6W6ZkZESJeDBrxbHEc
          stance: supports
          locator: CBDB:38719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38719）
          source: &a1
            id: s_YVqu6W6ZkZESJeDBrxbHEc
            source_type: api_record
            title: 中国历代人物传记资料库：王懷玉（CBDB 38719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38719&o=json
            external_identifier: CBDB:38719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rNXJxfEjya1hqfdk1siuwL
        subject_person_id: p_kPFN2c86H4KDrGkjrdGLYe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷玉，史料所见人物。本项目依据《中国历代人物传记资料库：王懷玉（CBDB 38719）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XMKbKFAGCInLUv2RQErk-G
          claim_id: c_rNXJxfEjya1hqfdk1siuwL
          source_id: s_YVqu6W6ZkZESJeDBrxbHEc
          stance: supports
          locator: CBDB:38719
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王懷玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷玉 | accepted |
| bio.summary | 王懷玉，史料所见人物。本项目依据《中国历代人物传记资料库：王懷玉（CBDB 38719）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懷玉（CBDB 38719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38719&o=json)

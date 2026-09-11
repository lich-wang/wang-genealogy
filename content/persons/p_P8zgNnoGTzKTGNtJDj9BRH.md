---
schema: wang-person/v1
id: p_P8zgNnoGTzKTGNtJDj9BRH
status: active
merged_into: null
display_name: 王佩香
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D5DFhSHf6NKzz9Wk8s7ee7
        subject_person_id: p_P8zgNnoGTzKTGNtJDj9BRH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩香
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JhGa4Qfrf1ELqtExjUJ9Cg
          claim_id: c_D5DFhSHf6NKzz9Wk8s7ee7
          source_id: s_mxdJzGzr6Jg6GeymN3NEm4
          stance: supports
          locator: CBDB:568734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568734）
          source: &a1
            id: s_mxdJzGzr6Jg6GeymN3NEm4
            source_type: api_record
            title: 中国历代人物传记资料库：王佩香（CBDB 568734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568734&o=json
            external_identifier: CBDB:568734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QdSXUR66BMgztH1i9yCyCV
        subject_person_id: p_P8zgNnoGTzKTGNtJDj9BRH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩香，清人物。籍贯浙江省。（中国历代人物传记资料库 CBDB 568734）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eWHtDESsDdRW6ru6M8bWdw
          claim_id: c_QdSXUR66BMgztH1i9yCyCV
          source_id: s_mxdJzGzr6Jg6GeymN3NEm4
          stance: supports
          locator: CBDB:568734
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

# 王佩香

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩香 | accepted |
| bio.summary | 王佩香，清人物。籍贯浙江省。（中国历代人物传记资料库 CBDB 568734） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佩香（CBDB 568734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568734&o=json)

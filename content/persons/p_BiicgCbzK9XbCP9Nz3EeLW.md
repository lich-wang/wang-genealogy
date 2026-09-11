---
schema: wang-person/v1
id: p_BiicgCbzK9XbCP9Nz3EeLW
status: active
merged_into: null
display_name: 王懷棠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SorsrsN7PknzcD51kpBATa
        subject_person_id: p_BiicgCbzK9XbCP9Nz3EeLW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷棠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W1Aj8sQDHZdJDSxmbSirJQ
          claim_id: c_SorsrsN7PknzcD51kpBATa
          source_id: s_VUzEgMG4CX8UoJfX34twm3
          stance: supports
          locator: CBDB:638030
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638030）
          source: &a1
            id: s_VUzEgMG4CX8UoJfX34twm3
            source_type: api_record
            title: 中国历代人物传记资料库：王懷棠（CBDB 638030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638030&o=json
            external_identifier: CBDB:638030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ad9o7yCiXBuD2DA2k34Qkg
        subject_person_id: p_BiicgCbzK9XbCP9Nz3EeLW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王懷棠，清人物。籍贯介休，入仕學校: 生員(庠生)，曾任典史。（中国历代人物传记资料库 CBDB 638030）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mRA2sVqJxTu3KPksKiBxhW
          claim_id: c_ad9o7yCiXBuD2DA2k34Qkg
          source_id: s_VUzEgMG4CX8UoJfX34twm3
          stance: supports
          locator: CBDB:638030
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

# 王懷棠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷棠 | accepted |
| bio.summary | 王懷棠，清人物。籍贯介休，入仕學校: 生員(庠生)，曾任典史。（中国历代人物传记资料库 CBDB 638030） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懷棠（CBDB 638030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638030&o=json)

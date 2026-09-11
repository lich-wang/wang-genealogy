---
schema: wang-person/v1
id: p_yLZ9iXmeN7jpXowSftpuYh
status: active
merged_into: null
display_name: 王應龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fwREafraLLe4pBdWDQi6mG
        subject_person_id: p_yLZ9iXmeN7jpXowSftpuYh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZchrKPkSmDD5Ag78jMMF69
          claim_id: c_fwREafraLLe4pBdWDQi6mG
          source_id: s_oQxuuDDqr3DfL5LJDHc8u9
          stance: supports
          locator: CBDB:19882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19882）
          source: &a1
            id: s_oQxuuDDqr3DfL5LJDHc8u9
            source_type: api_record
            title: 中国历代人物传记资料库：王應龍（CBDB 19882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19882&o=json
            external_identifier: CBDB:19882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fnk6y9tDAmX9Wu3QvJfHGh
        subject_person_id: p_yLZ9iXmeN7jpXowSftpuYh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應龍，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 19882）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-vOuC9MCAqt2Rhd391hjRM
          claim_id: c_Fnk6y9tDAmX9Wu3QvJfHGh
          source_id: s_oQxuuDDqr3DfL5LJDHc8u9
          stance: supports
          locator: CBDB:19882
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

# 王應龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應龍 | accepted |
| bio.summary | 王應龍，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 19882） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應龍（CBDB 19882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19882&o=json)

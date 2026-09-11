---
schema: wang-person/v1
id: p_F3sjE858MZrQDjKTj1gMZ7
status: active
merged_into: null
display_name: 王開元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vox6sa1M7YwbiPzXjW5Fqz
        subject_person_id: p_F3sjE858MZrQDjKTj1gMZ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NjT2F4UmkgBkMr2X1B6gTV
          claim_id: c_Vox6sa1M7YwbiPzXjW5Fqz
          source_id: s_oBD4Jj5ZyXEVkM3JeunCYk
          stance: supports
          locator: CBDB:640745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640745）
          source: &a1
            id: s_oBD4Jj5ZyXEVkM3JeunCYk
            source_type: api_record
            title: 中国历代人物传记资料库：王開元（CBDB 640745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640745&o=json
            external_identifier: CBDB:640745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NDFbboByQUWStZKxNcNQrf
        subject_person_id: p_F3sjE858MZrQDjKTj1gMZ7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開元，清人物。籍贯合江，入仕監生，曾任經歷、知縣。（中国历代人物传记资料库 CBDB 640745）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xl5Lt-aUx0QU4hZB3UGIEU
          claim_id: c_NDFbboByQUWStZKxNcNQrf
          source_id: s_oBD4Jj5ZyXEVkM3JeunCYk
          stance: supports
          locator: CBDB:640745
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

# 王開元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開元 | accepted |
| bio.summary | 王開元，清人物。籍贯合江，入仕監生，曾任經歷、知縣。（中国历代人物传记资料库 CBDB 640745） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開元（CBDB 640745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640745&o=json)

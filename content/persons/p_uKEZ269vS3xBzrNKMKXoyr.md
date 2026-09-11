---
schema: wang-person/v1
id: p_uKEZ269vS3xBzrNKMKXoyr
status: active
merged_into: null
display_name: 王得仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pwXFTrP5244jonQ4BdBrtU
        subject_person_id: p_uKEZ269vS3xBzrNKMKXoyr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XkinCfB4QYa5E3PeJwvi1Y
          claim_id: c_pwXFTrP5244jonQ4BdBrtU
          source_id: s_o3GEFMK6uKJ3fmWHwsAk2Z
          stance: supports
          locator: CBDB:67291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67291）
          source: &a1
            id: s_o3GEFMK6uKJ3fmWHwsAk2Z
            source_type: api_record
            title: 中国历代人物传记资料库：王得仁（CBDB 67291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67291&o=json
            external_identifier: CBDB:67291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hN8A5WT5sAUHEwoLDDXUbL
        subject_person_id: p_uKEZ269vS3xBzrNKMKXoyr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得仁，清人物。籍贯綏德州，曾任國公。（中国历代人物传记资料库 CBDB 67291）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V25ZLwIAMy1pWJPAtFuXGA
          claim_id: c_hN8A5WT5sAUHEwoLDDXUbL
          source_id: s_o3GEFMK6uKJ3fmWHwsAk2Z
          stance: supports
          locator: CBDB:67291
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

# 王得仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得仁 | accepted |
| bio.summary | 王得仁，清人物。籍贯綏德州，曾任國公。（中国历代人物传记资料库 CBDB 67291） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得仁（CBDB 67291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67291&o=json)

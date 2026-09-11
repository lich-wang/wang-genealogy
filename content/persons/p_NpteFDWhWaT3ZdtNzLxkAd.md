---
schema: wang-person/v1
id: p_NpteFDWhWaT3ZdtNzLxkAd
status: active
merged_into: null
display_name: 王維榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g6QRv2zvTireYEzxMgVHoc
        subject_person_id: p_NpteFDWhWaT3ZdtNzLxkAd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cagBAm5MN4AjJvGxE2xFa3
          claim_id: c_g6QRv2zvTireYEzxMgVHoc
          source_id: s_i8Tp9yUUk1VzGR3XZT4ayC
          stance: supports
          locator: CBDB:639827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639827）
          source: &a1
            id: s_i8Tp9yUUk1VzGR3XZT4ayC
            source_type: api_record
            title: 中国历代人物传记资料库：王維榮（CBDB 639827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639827&o=json
            external_identifier: CBDB:639827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hw9QeorzfsT4MhioGz62Cw
        subject_person_id: p_NpteFDWhWaT3ZdtNzLxkAd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維榮，清人物。籍贯濟南府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639827）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zAejg5FgqcRhdyy9i1r0H7
          claim_id: c_hw9QeorzfsT4MhioGz62Cw
          source_id: s_i8Tp9yUUk1VzGR3XZT4ayC
          stance: supports
          locator: CBDB:639827
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

# 王維榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維榮 | accepted |
| bio.summary | 王維榮，清人物。籍贯濟南府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維榮（CBDB 639827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639827&o=json)

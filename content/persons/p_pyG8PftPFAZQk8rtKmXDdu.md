---
schema: wang-person/v1
id: p_pyG8PftPFAZQk8rtKmXDdu
status: active
merged_into: null
display_name: 王班
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z1VfBwYD1gygta3z4a6fYr
        subject_person_id: p_pyG8PftPFAZQk8rtKmXDdu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王班
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_etEg8xLBPdQWK5gsoVZFF7
          claim_id: c_Z1VfBwYD1gygta3z4a6fYr
          source_id: s_dQhFeLxLxwxNnNet2iMfLv
          stance: supports
          locator: CBDB:639401
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639401）
          source: &a1
            id: s_dQhFeLxLxwxNnNet2iMfLv
            source_type: api_record
            title: 中国历代人物传记资料库：王班（CBDB 639401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639401&o=json
            external_identifier: CBDB:639401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sx8XiC8jUVLFCt9aNEQJVL
        subject_person_id: p_pyG8PftPFAZQk8rtKmXDdu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王班，清人物。籍贯襄陽，曾任訓導。（中国历代人物传记资料库 CBDB 639401）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8Dh4WlxtCfn52vLApHn2qb
          claim_id: c_Sx8XiC8jUVLFCt9aNEQJVL
          source_id: s_dQhFeLxLxwxNnNet2iMfLv
          stance: supports
          locator: CBDB:639401
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

# 王班

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王班 | accepted |
| bio.summary | 王班，清人物。籍贯襄陽，曾任訓導。（中国历代人物传记资料库 CBDB 639401） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王班（CBDB 639401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639401&o=json)

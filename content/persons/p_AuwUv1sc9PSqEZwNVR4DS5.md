---
schema: wang-person/v1
id: p_AuwUv1sc9PSqEZwNVR4DS5
status: active
merged_into: null
display_name: 王英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NhASmQzreirFhnZ1b9eoxr
        subject_person_id: p_AuwUv1sc9PSqEZwNVR4DS5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hZd5aAe3brZ1EW2UnQ8rqH
          claim_id: c_NhASmQzreirFhnZ1b9eoxr
          source_id: s_Z6UDAQWguiQpjFPU9uA9K7
          stance: supports
          locator: CBDB:478565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478565）
          source: &a1
            id: s_Z6UDAQWguiQpjFPU9uA9K7
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 478565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478565&o=json
            external_identifier: CBDB:478565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z8hg8258oKotgqceuKMDBH
        subject_person_id: p_AuwUv1sc9PSqEZwNVR4DS5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 478565）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v71whMzVCjl-doXcbGAT5N
          claim_id: c_z8hg8258oKotgqceuKMDBH
          source_id: s_Z6UDAQWguiQpjFPU9uA9K7
          stance: supports
          locator: CBDB:478565
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

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | 王英，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 478565） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 478565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478565&o=json)

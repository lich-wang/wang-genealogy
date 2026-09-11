---
schema: wang-person/v1
id: p_ZzvdAEz74wZowuPJe6ztBS
status: active
merged_into: null
display_name: 王世鎮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n4yibRyJELiNcWKb5xTkSH
        subject_person_id: p_ZzvdAEz74wZowuPJe6ztBS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qd2EopSftSWGEh6p1MRvsT
          claim_id: c_n4yibRyJELiNcWKb5xTkSH
          source_id: s_aCmbEDHECCD3hZfEuF89DC
          stance: supports
          locator: CBDB:635723
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635723）
          source: &a1
            id: s_aCmbEDHECCD3hZfEuF89DC
            source_type: api_record
            title: 中国历代人物传记资料库：王世鎮（CBDB 635723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635723&o=json
            external_identifier: CBDB:635723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pv6bKKSxczwhFFDhDW98oL
        subject_person_id: p_ZzvdAEz74wZowuPJe6ztBS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世鎮，清人物。籍贯寧波府，入仕廩貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 635723）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SXaTQUoX7-2sNDH-jvszEV
          claim_id: c_Pv6bKKSxczwhFFDhDW98oL
          source_id: s_aCmbEDHECCD3hZfEuF89DC
          stance: supports
          locator: CBDB:635723
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

# 王世鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世鎮 | accepted |
| bio.summary | 王世鎮，清人物。籍贯寧波府，入仕廩貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 635723） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世鎮（CBDB 635723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635723&o=json)

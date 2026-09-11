---
schema: wang-person/v1
id: p_RNcV9Hsw7ApDj2Tos4ZkDD
status: active
merged_into: null
display_name: 王本立
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tnVEdgL6sYXhnC5Yt7KGpi
        subject_person_id: p_RNcV9Hsw7ApDj2Tos4ZkDD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CAGCYwgud572DeJfUmha78
          claim_id: c_tnVEdgL6sYXhnC5Yt7KGpi
          source_id: s_VGYAC1bn1a8G64JPLS38Hk
          stance: supports
          locator: CBDB:377098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377098）
          source: &a1
            id: s_VGYAC1bn1a8G64JPLS38Hk
            source_type: api_record
            title: 中国历代人物传记资料库：王本立（CBDB 377098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377098&o=json
            external_identifier: CBDB:377098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_83RLkQ6uXRmUt3jZ9tgFz2
        subject_person_id: p_RNcV9Hsw7ApDj2Tos4ZkDD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本立，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377098）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UNa1_G9lJPoVt0oHUt_R-Y
          claim_id: c_83RLkQ6uXRmUt3jZ9tgFz2
          source_id: s_VGYAC1bn1a8G64JPLS38Hk
          stance: supports
          locator: CBDB:377098
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

# 王本立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本立 | accepted |
| bio.summary | 王本立，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377098） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本立（CBDB 377098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377098&o=json)

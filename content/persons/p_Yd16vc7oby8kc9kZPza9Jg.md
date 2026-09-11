---
schema: wang-person/v1
id: p_Yd16vc7oby8kc9kZPza9Jg
status: active
merged_into: null
display_name: 王肅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mRt6JAUKEyhXUP6DJTafVR
        subject_person_id: p_Yd16vc7oby8kc9kZPza9Jg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GadLZhAc4yLN2D3J75paQE
          claim_id: c_mRt6JAUKEyhXUP6DJTafVR
          source_id: s_mEoeRZmytZ8BuNrfgucQLg
          stance: supports
          locator: CBDB:563233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563233）
          source: &a1
            id: s_mEoeRZmytZ8BuNrfgucQLg
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 563233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563233&o=json
            external_identifier: CBDB:563233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_266zCdzUJJff3u9VKBjrin
        subject_person_id: p_Yd16vc7oby8kc9kZPza9Jg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅，宋人物。籍贯開封，曾任內殿承制、左班殿直。（中国历代人物传记资料库 CBDB 563233）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ceoaKrB3snC9gqvXxxfFcn
          claim_id: c_266zCdzUJJff3u9VKBjrin
          source_id: s_mEoeRZmytZ8BuNrfgucQLg
          stance: supports
          locator: CBDB:563233
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

# 王肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肅 | accepted |
| bio.summary | 王肅，宋人物。籍贯開封，曾任內殿承制、左班殿直。（中国历代人物传记资料库 CBDB 563233） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肅（CBDB 563233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563233&o=json)

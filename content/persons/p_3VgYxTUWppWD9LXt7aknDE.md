---
schema: wang-person/v1
id: p_3VgYxTUWppWD9LXt7aknDE
status: active
merged_into: null
display_name: 王槐生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RxdZZ9s8btoBk4zMGhT3jt
        subject_person_id: p_3VgYxTUWppWD9LXt7aknDE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xMwpDZ5mJH41EXPf8wyCPB
          claim_id: c_RxdZZ9s8btoBk4zMGhT3jt
          source_id: s_r8546kXr66S1SkKsYDEtFr
          stance: supports
          locator: CBDB:638813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638813）
          source: &a1
            id: s_r8546kXr66S1SkKsYDEtFr
            source_type: api_record
            title: 中国历代人物传记资料库：王槐生（CBDB 638813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638813&o=json
            external_identifier: CBDB:638813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KVELyK2mMj3JoGtnmhrN3o
        subject_person_id: p_3VgYxTUWppWD9LXt7aknDE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐生，清人物。籍贯元和，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638813）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fb_AjMFdWLRFmwxV5Sjekq
          claim_id: c_KVELyK2mMj3JoGtnmhrN3o
          source_id: s_r8546kXr66S1SkKsYDEtFr
          stance: supports
          locator: CBDB:638813
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

# 王槐生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐生 | accepted |
| bio.summary | 王槐生，清人物。籍贯元和，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638813） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槐生（CBDB 638813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638813&o=json)

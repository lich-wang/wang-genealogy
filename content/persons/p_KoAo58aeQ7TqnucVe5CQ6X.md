---
schema: wang-person/v1
id: p_KoAo58aeQ7TqnucVe5CQ6X
status: active
merged_into: null
display_name: 王夢彲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UZs8Ki5zfbqhbNGQcQGnZJ
        subject_person_id: p_KoAo58aeQ7TqnucVe5CQ6X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢彲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gGzjj7Z56KFHKVo9KxVDds
          claim_id: c_UZs8Ki5zfbqhbNGQcQGnZJ
          source_id: s_dyQxAbQ5Br3nJ56vfznvCH
          stance: supports
          locator: CBDB:636865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636865）
          source: &a1
            id: s_dyQxAbQ5Br3nJ56vfznvCH
            source_type: api_record
            title: 中国历代人物传记资料库：王夢彲（CBDB 636865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636865&o=json
            external_identifier: CBDB:636865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n81oYj9jNHriS6cCnUSNpM
        subject_person_id: p_KoAo58aeQ7TqnucVe5CQ6X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TMpgrZFTyVx3kJD7xLiKua
          claim_id: c_n81oYj9jNHriS6cCnUSNpM
          source_id: s_dyQxAbQ5Br3nJ56vfznvCH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王夢彲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢彲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢彲（CBDB 636865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636865&o=json)

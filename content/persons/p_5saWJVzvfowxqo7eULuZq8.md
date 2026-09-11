---
schema: wang-person/v1
id: p_5saWJVzvfowxqo7eULuZq8
status: active
merged_into: null
display_name: 王錫麒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gQ1nb4v2VhcP75bHV5Lkvm
        subject_person_id: p_5saWJVzvfowxqo7eULuZq8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JCHb6B7on72APYutwHEpXK
          claim_id: c_gQ1nb4v2VhcP75bHV5Lkvm
          source_id: s_GKxXfvji9C3cHgWbiQqYBb
          stance: supports
          locator: CBDB:640660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640660）
          source: &a1
            id: s_GKxXfvji9C3cHgWbiQqYBb
            source_type: api_record
            title: 中国历代人物传记资料库：王錫麒（CBDB 640660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640660&o=json
            external_identifier: CBDB:640660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3jAgz2MSNLv3wEfAB2mSrn
        subject_person_id: p_5saWJVzvfowxqo7eULuZq8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫麒，清人物。籍贯楚雄，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640660）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vDW4aShpL_Rp1Oam5A7aEu
          claim_id: c_3jAgz2MSNLv3wEfAB2mSrn
          source_id: s_GKxXfvji9C3cHgWbiQqYBb
          stance: supports
          locator: CBDB:640660
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

# 王錫麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫麒 | accepted |
| bio.summary | 王錫麒，清人物。籍贯楚雄，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫麒（CBDB 640660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640660&o=json)

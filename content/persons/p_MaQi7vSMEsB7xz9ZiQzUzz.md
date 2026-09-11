---
schema: wang-person/v1
id: p_MaQi7vSMEsB7xz9ZiQzUzz
status: active
merged_into: null
display_name: 王從懋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RjxUrEiYQNSWUZcxJnyg5q
        subject_person_id: p_MaQi7vSMEsB7xz9ZiQzUzz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8YKhmGZeX2md4LwYsTtF9P
          claim_id: c_RjxUrEiYQNSWUZcxJnyg5q
          source_id: s_H1eJWvdCg1ojxDQCuvFBLZ
          stance: supports
          locator: CBDB:637656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637656）
          source: &a1
            id: s_H1eJWvdCg1ojxDQCuvFBLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王從懋（CBDB 637656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637656&o=json
            external_identifier: CBDB:637656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DF75Qi3chLsg9SEXSx8tE4
        subject_person_id: p_MaQi7vSMEsB7xz9ZiQzUzz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從懋，清人物。籍贯句容，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 637656）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HK6Z5pXzLVOUQ06z8VoOR4
          claim_id: c_DF75Qi3chLsg9SEXSx8tE4
          source_id: s_H1eJWvdCg1ojxDQCuvFBLZ
          stance: supports
          locator: CBDB:637656
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

# 王從懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從懋 | accepted |
| bio.summary | 王從懋，清人物。籍贯句容，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 637656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從懋（CBDB 637656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637656&o=json)

---
schema: wang-person/v1
id: p_zFPZPNF7vXc9GAgGhzHR84
status: active
merged_into: null
display_name: 王延年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eUVugZdgwFEJ6YFMt6JR15
        subject_person_id: p_zFPZPNF7vXc9GAgGhzHR84
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z98fcrsBJibHA4TP8yPZhk
          claim_id: c_eUVugZdgwFEJ6YFMt6JR15
          source_id: s_8VN79yhYKcphgkhWomqh4e
          stance: supports
          locator: CBDB:57138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57138）
          source: &a1
            id: s_8VN79yhYKcphgkhWomqh4e
            source_type: api_record
            title: 中国历代人物传记资料库：王延年（CBDB 57138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57138&o=json
            external_identifier: CBDB:57138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qZC2i3KLyZivA3AokJvsnf
        subject_person_id: p_zFPZPNF7vXc9GAgGhzHR84
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延年，清人物。籍贯河州，曾任汛把總、鎮總兵、鎮總兵官。（中国历代人物传记资料库 CBDB 57138）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sAVK-fkrK6ZGDz1YZ9kftp
          claim_id: c_qZC2i3KLyZivA3AokJvsnf
          source_id: s_8VN79yhYKcphgkhWomqh4e
          stance: supports
          locator: CBDB:57138
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

# 王延年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延年 | accepted |
| bio.summary | 王延年，清人物。籍贯河州，曾任汛把總、鎮總兵、鎮總兵官。（中国历代人物传记资料库 CBDB 57138） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延年（CBDB 57138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57138&o=json)

---
schema: wang-person/v1
id: p_4tgTW1wdo6DzKxEC7Ekw2Z
status: active
merged_into: null
display_name: 王炎中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fqXz5RCnJuoyJ4bTv636Nw
        subject_person_id: p_4tgTW1wdo6DzKxEC7Ekw2Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LdFS2ds6Cm4A8XwxCf3uer
          claim_id: c_fqXz5RCnJuoyJ4bTv636Nw
          source_id: s_iaePYbUoVd6ZdZF7s2x9NE
          stance: supports
          locator: CBDB:536282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（536282）
          source: &a1
            id: s_iaePYbUoVd6ZdZF7s2x9NE
            source_type: api_record
            title: 中国历代人物传记资料库：王炎中（CBDB 536282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536282&o=json
            external_identifier: CBDB:536282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LL8YPw7PBssht3HZCjxvDG
        subject_person_id: p_4tgTW1wdo6DzKxEC7Ekw2Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎中，宋人物。籍贯合州，入仕進士。（中国历代人物传记资料库 CBDB 536282）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pKEVOPOShkXnxdelQdV3ER
          claim_id: c_LL8YPw7PBssht3HZCjxvDG
          source_id: s_iaePYbUoVd6ZdZF7s2x9NE
          stance: supports
          locator: CBDB:536282
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

# 王炎中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炎中 | accepted |
| bio.summary | 王炎中，宋人物。籍贯合州，入仕進士。（中国历代人物传记资料库 CBDB 536282） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炎中（CBDB 536282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536282&o=json)

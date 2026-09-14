---
schema: wang-person/v1
id: p_ik9pGv7P842bSxtzmP1qBg
status: active
merged_into: null
display_name: 王誦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UNUB2o77HE8H45Drn8qGSo
        subject_person_id: p_ik9pGv7P842bSxtzmP1qBg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4c6eGKHL9r7J1KnXCch2SK
          claim_id: c_UNUB2o77HE8H45Drn8qGSo
          source_id: s_1LGjMvkQ6iYj7HeNiPFAUQ
          stance: supports
          locator: CBDB:38795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38795）
          source: &a1
            id: s_1LGjMvkQ6iYj7HeNiPFAUQ
            source_type: api_record
            title: 中国历代人物传记资料库：王誦（CBDB 38795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38795&o=json
            external_identifier: CBDB:38795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C6nDhLa9Wyoz2DkBapG6GG
        subject_person_id: p_ik9pGv7P842bSxtzmP1qBg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誦，高麗人物。身份为統治者，曾任國王。（中国历代人物传记资料库 CBDB 38795）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O___4sn9-dFjzMXiXf-x8c
          claim_id: c_C6nDhLa9Wyoz2DkBapG6GG
          source_id: s_1LGjMvkQ6iYj7HeNiPFAUQ
          stance: supports
          locator: CBDB:38795
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
  other:
    - claim:
        id: c_er4_2SCY8ZKwsSOp33tHWG
        subject_person_id: p_LxBGWiTN9FN9EPfvaFKbj4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ik9pGv7P842bSxtzmP1qBg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-6IMvMX9o11hHFn4oRrZM1
          claim_id: c_er4_2SCY8ZKwsSOp33tHWG
          source_id: s_Ys-bATKLO0fNub2USNfAbb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 38450 王詢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ys-bATKLO0fNub2USNfAbb
            source_type: api_record
            title: 中国历代人物传记资料库：王誦（CBDB 38795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38795&o=json
            external_identifier: CBDB:38795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LxBGWiTN9FN9EPfvaFKbj4
        status: active
        display_name: 王詢
        merged_into_person_id: null
---

# 王誦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誦 | accepted |
| bio.summary | 王誦，高麗人物。身份为統治者，曾任國王。（中国历代人物传记资料库 CBDB 38795） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_LxBGWiTN9FN9EPfvaFKbj4 | 王詢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誦（CBDB 38795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38795&o=json)

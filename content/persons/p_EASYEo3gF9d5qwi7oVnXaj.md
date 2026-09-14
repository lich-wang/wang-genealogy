---
schema: wang-person/v1
id: p_EASYEo3gF9d5qwi7oVnXaj
status: active
merged_into: null
display_name: 王剛中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8HYPm4a6Yhkxu81EvU2FcA
        subject_person_id: p_EASYEo3gF9d5qwi7oVnXaj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H1MXmfKQb7kK4J2BbczKPq
          claim_id: c_8HYPm4a6Yhkxu81EvU2FcA
          source_id: s_3Z2vKL34j4TvBrGrdKLX2w
          stance: supports
          locator: CBDB:101298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101298）
          source: &a1
            id: s_3Z2vKL34j4TvBrGrdKLX2w
            source_type: api_record
            title: 中国历代人物传记资料库：王剛中（CBDB 101298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101298&o=json
            external_identifier: CBDB:101298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3pmK9YwchGH9D6sVhEsDyM
        subject_person_id: p_EASYEo3gF9d5qwi7oVnXaj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛中，元人物。籍贯福寧州，曾任宣慰使、諸路總管府總管、總管。（中国历代人物传记资料库 CBDB 101298）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3jkKa9zBf-AaHDMp1sPAgH
          claim_id: c_3pmK9YwchGH9D6sVhEsDyM
          source_id: s_3Z2vKL34j4TvBrGrdKLX2w
          stance: supports
          locator: CBDB:101298
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
        id: c_sFPZvak2bYCYE-aFw6YzWF
        subject_person_id: p_EASYEo3gF9d5qwi7oVnXaj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cAK86y7GGgtEAfMtkGogPL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VaLaXETrWQKqL8KXDVfzWV
          claim_id: c_sFPZvak2bYCYE-aFw6YzWF
          source_id: s_XRKQ5ZYX4VuY8taQY8PlqD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 101438 王積翁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XRKQ5ZYX4VuY8taQY8PlqD
            source_type: api_record
            title: 中国历代人物传记资料库：王剛中（CBDB 101298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101298&o=json
            external_identifier: CBDB:101298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cAK86y7GGgtEAfMtkGogPL
        status: active
        display_name: 王積翁
        merged_into_person_id: null
---

# 王剛中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王剛中 | accepted |
| bio.summary | 王剛中，元人物。籍贯福寧州，曾任宣慰使、諸路總管府總管、總管。（中国历代人物传记资料库 CBDB 101298） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_cAK86y7GGgtEAfMtkGogPL | 王積翁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剛中（CBDB 101298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101298&o=json)

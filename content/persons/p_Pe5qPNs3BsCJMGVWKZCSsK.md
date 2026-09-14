---
schema: wang-person/v1
id: p_Pe5qPNs3BsCJMGVWKZCSsK
status: active
merged_into: null
display_name: 王明哲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aNja9m5YoN8Kbx9aa7nYhs
        subject_person_id: p_Pe5qPNs3BsCJMGVWKZCSsK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MNrCy38DJinxRoHDuJMhc2
          claim_id: c_aNja9m5YoN8Kbx9aa7nYhs
          source_id: s_21kcfeCHp8uXn9NPqWJG35
          stance: supports
          locator: CBDB:37652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37652）
          source: &a1
            id: s_21kcfeCHp8uXn9NPqWJG35
            source_type: api_record
            title: 中国历代人物传记资料库：王明哲（CBDB 37652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37652&o=json
            external_identifier: CBDB:37652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YX1UzVqVu1PCS4kKAb4tSN
        subject_person_id: p_Pe5qPNs3BsCJMGVWKZCSsK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1091年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iD38g43QJD8vXjzUqYyMQ4
          claim_id: c_YX1UzVqVu1PCS4kKAb4tSN
          source_id: s_21kcfeCHp8uXn9NPqWJG35
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CiJNXF5KdKCwM6ZYB3w5TL
        subject_person_id: p_Pe5qPNs3BsCJMGVWKZCSsK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明哲（生于1091年），宋人物。籍贯長汀，入仕進士，曾任司法參軍、縣丞、法曹參軍。（中国历代人物传记资料库 CBDB 37652）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rTTR4BmWUdJWGr0aDNUVTc
          claim_id: c_CiJNXF5KdKCwM6ZYB3w5TL
          source_id: s_21kcfeCHp8uXn9NPqWJG35
          stance: supports
          locator: CBDB:37652
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
        id: c_hQsF_AnYScKqjpI_DupKzD
        subject_person_id: p_57bmMkPNTLujinASpm1vfU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Pe5qPNs3BsCJMGVWKZCSsK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jPtvyYMcgOp9qD2ZvZA51I
          claim_id: c_hQsF_AnYScKqjpI_DupKzD
          source_id: s__AO4PTV3n46m7z4nfxTLdy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 37652 王明哲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__AO4PTV3n46m7z4nfxTLdy
            source_type: api_record
            title: 中国历代人物传记资料库：王宗哲（CBDB 37653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37653&o=json
            external_identifier: CBDB:37653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_57bmMkPNTLujinASpm1vfU
        status: active
        display_name: 王宗哲
        merged_into_person_id: null
---

# 王明哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明哲 | accepted |
| birth.date | 1091年 | accepted |
| bio.summary | 王明哲（生于1091年），宋人物。籍贯長汀，入仕進士，曾任司法參軍、縣丞、法曹參軍。（中国历代人物传记资料库 CBDB 37652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_57bmMkPNTLujinASpm1vfU | 王宗哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明哲（CBDB 37652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37652&o=json)
- [中国历代人物传记资料库：王宗哲（CBDB 37653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37653&o=json)

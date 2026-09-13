---
schema: wang-person/v1
id: p_44Kmse4y3QwxuZ24pwLEpe
status: active
merged_into: null
display_name: 王弘鈞
cbdb_id: 101128
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mzZwA5jrdxDkG8arjX4FDj
        subject_person_id: p_44Kmse4y3QwxuZ24pwLEpe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘鈞，元人物。籍贯蔚州，身份为天文學家（星象家），曾任司天監提點。（中国历代人物传记资料库 CBDB 101128）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_u-Sj6g5MCwW2KmtoSgp0qA
          claim_id: c_mzZwA5jrdxDkG8arjX4FDj
          source_id: s_EDoYddbMLUZT5QWLXy2WNb
          stance: supports
          locator: CBDB:101128
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EDoYddbMLUZT5QWLXy2WNb
            source_type: api_record
            title: 中国历代人物传记资料库：王弘鈞（CBDB 101128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101128&o=json
            external_identifier: CBDB:101128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BByN3d7zG3pBN2xQNFUXy1
        subject_person_id: p_44Kmse4y3QwxuZ24pwLEpe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QzTW7xP4wJEUy1GQyEZ4aw
          claim_id: c_BByN3d7zG3pBN2xQNFUXy1
          source_id: s_EDoYddbMLUZT5QWLXy2WNb
          stance: supports
          locator: CBDB:101128
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HP3gs_AIp7qVBeYFJ_Af8A
        subject_person_id: p_ZMq1MwuQH5W5qBuGHPLspm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_44Kmse4y3QwxuZ24pwLEpe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fjyAjv7Jg_ZNMKGb6skjQr
          claim_id: c_HP3gs_AIp7qVBeYFJ_Af8A
          source_id: s_EAz8QJy4CZ5R2eaD66CsUT
          stance: supports
          locator: 元人傳記資料索引，713：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EAz8QJy4CZ5R2eaD66CsUT
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 100891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100891&o=json
            external_identifier: CBDB:100891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZMq1MwuQH5W5qBuGHPLspm
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘鈞，元人物。籍贯蔚州，身份为天文學家（星象家），曾任司天監提點。（中国历代人物传记资料库 CBDB 101128） | accepted |
| name.primary | 王弘鈞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZMq1MwuQH5W5qBuGHPLspm | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 100891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100891&o=json)
- [中国历代人物传记资料库：王弘鈞（CBDB 101128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101128&o=json)

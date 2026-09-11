---
schema: wang-person/v1
id: p_tK8MZ6JQNdfqFgybNcLcuk
status: active
merged_into: null
display_name: 王誨說
cbdb_id: 45908
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3ALSN4ALEsfoQ24AnVe8bU
        subject_person_id: p_tK8MZ6JQNdfqFgybNcLcuk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誨說，宋人物。中国历代人物传记资料库（CBDB）以人物编号 45908 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_BXJ3HF7b24VIcHnb7seaQ8
          claim_id: c_3ALSN4ALEsfoQ24AnVe8bU
          source_id: s_wsTGqK1M36DVFNmC4ND6kQ
          stance: supports
          locator: CBDB:45908
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_wsTGqK1M36DVFNmC4ND6kQ
            source_type: api_record
            title: 中国历代人物传记资料库：王誨說（CBDB 45908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45908&o=json
            external_identifier: CBDB:45908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FPrH5M9qnE7tTKQKrz4oU6
        subject_person_id: p_tK8MZ6JQNdfqFgybNcLcuk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誨說
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WLUQtCbceBF344DiutJDub
          claim_id: c_FPrH5M9qnE7tTKQKrz4oU6
          source_id: s_wsTGqK1M36DVFNmC4ND6kQ
          stance: supports
          locator: CBDB:45908
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_wsTGqK1M36DVFNmC4ND6kQ
            source_type: api_record
            title: 中国历代人物传记资料库：王誨說（CBDB 45908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45908&o=json
            external_identifier: CBDB:45908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wckfM50vaIQjbvskX881Tw
        subject_person_id: p_6qFqzHC21Z9f8VhXAcZ1P4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tK8MZ6JQNdfqFgybNcLcuk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RThJSY4sD9K2aV70-Xv-yh
          claim_id: c_wckfM50vaIQjbvskX881Tw
          source_id: s_2epzYKD53i1MPLgj9PNNF1
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1998：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2epzYKD53i1MPLgj9PNNF1
            source_type: api_record
            title: 中国历代人物传记资料库：王舉正（CBDB 8145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8145&o=json
            external_identifier: CBDB:8145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6qFqzHC21Z9f8VhXAcZ1P4
        status: active
        display_name: 王舉正
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王誨說

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王誨說，宋人物。中国历代人物传记资料库（CBDB）以人物编号 45908 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王誨說 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6qFqzHC21Z9f8VhXAcZ1P4 | 王舉正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誨說（CBDB 45908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45908&o=json)
- [中国历代人物传记资料库：王舉正（CBDB 8145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8145&o=json)

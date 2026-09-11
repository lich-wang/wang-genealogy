---
schema: wang-person/v1
id: p_RVRNrX9rKNd1gaaY5iE462
status: active
merged_into: null
display_name: 王庭訓
cbdb_id: 149843
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ydP6BDBGUZf371JJQJf9g4
        subject_person_id: p_RVRNrX9rKNd1gaaY5iE462
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭訓，唐人物。中国历代人物传记资料库（CBDB）以人物编号 149843 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_2DWIBs_nUT_YudSxAhfPvI
          claim_id: c_ydP6BDBGUZf371JJQJf9g4
          source_id: s_67TwrkFEWKCLYNtNJJ2tka
          stance: supports
          locator: CBDB:149843
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_67TwrkFEWKCLYNtNJJ2tka
            source_type: api_record
            title: 中国历代人物传记资料库：王庭訓（CBDB 149843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149843&o=json
            external_identifier: CBDB:149843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1P8Kxb1KBAfxfAM92y1zg3
        subject_person_id: p_RVRNrX9rKNd1gaaY5iE462
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1Samym6yd8ZjUuoALoQN4S
          claim_id: c_1P8Kxb1KBAfxfAM92y1zg3
          source_id: s_67TwrkFEWKCLYNtNJJ2tka
          stance: supports
          locator: CBDB:149843
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_67TwrkFEWKCLYNtNJJ2tka
            source_type: api_record
            title: 中国历代人物传记资料库：王庭訓（CBDB 149843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149843&o=json
            external_identifier: CBDB:149843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ywE0IdC3u0I7j7bWQfCaDf
        subject_person_id: p_96KQuq1ZTf34yAWUr3nQms
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RVRNrX9rKNd1gaaY5iE462
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pIavnUzMS9krLm5xcTftjD
          claim_id: c_ywE0IdC3u0I7j7bWQfCaDf
          source_id: s_qyXWu18LpCH4nNUUHkbWpk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiancewansui 6：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qyXWu18LpCH4nNUUHkbWpk
            source_type: api_record
            title: 中国历代人物传记资料库：王思訥（CBDB 139983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139983&o=json
            external_identifier: CBDB:139983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_96KQuq1ZTf34yAWUr3nQms
        status: active
        display_name: 王思訥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庭訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庭訓，唐人物。中国历代人物传记资料库（CBDB）以人物编号 149843 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王庭訓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_96KQuq1ZTf34yAWUr3nQms | 王思訥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思訥（CBDB 139983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139983&o=json)
- [中国历代人物传记资料库：王庭訓（CBDB 149843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149843&o=json)

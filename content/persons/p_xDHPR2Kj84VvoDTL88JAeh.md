---
schema: wang-person/v1
id: p_xDHPR2Kj84VvoDTL88JAeh
status: active
merged_into: null
display_name: 王懷仁
cbdb_id: 158362
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Put44ehtiKgsgzKP8Kdsw1
        subject_person_id: p_xDHPR2Kj84VvoDTL88JAeh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷仁，唐人物。中国历代人物传记资料库（CBDB）以人物编号 158362 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_CjxDaZWoHxFBWOhTkoxMI1
          claim_id: c_Put44ehtiKgsgzKP8Kdsw1
          source_id: s_X1pF689vMyy3J6Ww9tJowP
          stance: supports
          locator: CBDB:158362
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_X1pF689vMyy3J6Ww9tJowP
            source_type: api_record
            title: 中国历代人物传记资料库：王懷仁（CBDB 158362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158362&o=json
            external_identifier: CBDB:158362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6crBMFqQwXaHzVwYxwcuBh
        subject_person_id: p_xDHPR2Kj84VvoDTL88JAeh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_d5P5vJJQehmQVbnDJu8ggh
          claim_id: c_6crBMFqQwXaHzVwYxwcuBh
          source_id: s_X1pF689vMyy3J6Ww9tJowP
          stance: supports
          locator: CBDB:158362
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_X1pF689vMyy3J6Ww9tJowP
            source_type: api_record
            title: 中国历代人物传记资料库：王懷仁（CBDB 158362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158362&o=json
            external_identifier: CBDB:158362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_hPbODIyZywCtKcHNBbZkLK
        subject_person_id: p_xDHPR2Kj84VvoDTL88JAeh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_brAX6iJgSLXNAWYFVTrNj2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9te_W-D-ZmVdX8aR6JB71S
          claim_id: c_hPbODIyZywCtKcHNBbZkLK
          source_id: s_gqnqFQKHQg8RhCHv8E9AuX
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gqnqFQKHQg8RhCHv8E9AuX
            source_type: api_record
            title: 中国历代人物传记资料库：王思敬（CBDB 158363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158363&o=json
            external_identifier: CBDB:158363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_brAX6iJgSLXNAWYFVTrNj2
        status: active
        display_name: 王思敬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_phep0d-mmQtkS14nkmCgTc
        subject_person_id: p_xDHPR2Kj84VvoDTL88JAeh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rUMuK7CzfJfHKJ88kFi4jQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-tGll-mrBXxApaX2TNuSMH
          claim_id: c_phep0d-mmQtkS14nkmCgTc
          source_id: s_X1pF689vMyy3J6Ww9tJowP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 37：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rUMuK7CzfJfHKJ88kFi4jQ
        status: active
        display_name: 王如琬
        merged_into_person_id: null
  other: []
---

# 王懷仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懷仁，唐人物。中国历代人物传记资料库（CBDB）以人物编号 158362 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王懷仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_brAX6iJgSLXNAWYFVTrNj2 | 王思敬 | accepted |
| descendants | p_rUMuK7CzfJfHKJ88kFi4jQ | 王如琬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷仁（CBDB 158362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158362&o=json)
- [中国历代人物传记资料库：王思敬（CBDB 158363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158363&o=json)

---
schema: wang-person/v1
id: p_SGSZfK86tjhyv89SBZKj21
status: active
merged_into: null
display_name: 王仁緒
cbdb_id: 155090
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8pbKCi7e1LdrMb1272qMhR
        subject_person_id: p_SGSZfK86tjhyv89SBZKj21
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁緒，南北朝人物。中国历代人物传记资料库（CBDB）以人物编号 155090 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_nJidD4CxYl9oKHtMLb5xnT
          claim_id: c_8pbKCi7e1LdrMb1272qMhR
          source_id: s_xa4ze9H6HWnMzdzJyoQko7
          stance: supports
          locator: CBDB:155090
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_xa4ze9H6HWnMzdzJyoQko7
            source_type: api_record
            title: 中国历代人物传记资料库：王仁緒（CBDB 155090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155090&o=json
            external_identifier: CBDB:155090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dHYQD35Xse18YsJHgKmims
        subject_person_id: p_SGSZfK86tjhyv89SBZKj21
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LP62ETEqQSouE5z6ebyWrn
          claim_id: c_dHYQD35Xse18YsJHgKmims
          source_id: s_xa4ze9H6HWnMzdzJyoQko7
          stance: supports
          locator: CBDB:155090
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 南北朝
          source:
            id: s_xa4ze9H6HWnMzdzJyoQko7
            source_type: api_record
            title: 中国历代人物传记资料库：王仁緒（CBDB 155090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155090&o=json
            external_identifier: CBDB:155090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0MY1BvGQQAn_9WonEUT08N
        subject_person_id: p_nDFRLDKcAPbJ1Ka9TQ5CiC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SGSZfK86tjhyv89SBZKj21
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yHL89dFRUzJFlCo0ajBSYw
          claim_id: c_0MY1BvGQQAn_9WonEUT08N
          source_id: s_SDikk8ZYdetXoH7gtZ7Nee
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SDikk8ZYdetXoH7gtZ7Nee
            source_type: api_record
            title: 中国历代人物传记资料库：王寶倫（CBDB 155121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155121&o=json
            external_identifier: CBDB:155121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nDFRLDKcAPbJ1Ka9TQ5CiC
        status: active
        display_name: 王寶倫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_AFZaZVdTOTmsNmNB4MuaNC
        subject_person_id: p_SGSZfK86tjhyv89SBZKj21
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fWhHLZZ5pFkeikFbBAN6W2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IybKXGV18oyVQkAMVjz48f
          claim_id: c_AFZaZVdTOTmsNmNB4MuaNC
          source_id: s_KdUz2oZj67akVZ6vP7HnZr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 63：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KdUz2oZj67akVZ6vP7HnZr
            source_type: api_record
            title: 中国历代人物传记资料库：王媛（CBDB 141214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141214&o=json
            external_identifier: CBDB:141214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fWhHLZZ5pFkeikFbBAN6W2
        status: active
        display_name: 王媛
        merged_into_person_id: null
  other: []
---

# 王仁緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁緒，南北朝人物。中国历代人物传记资料库（CBDB）以人物编号 155090 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王仁緒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nDFRLDKcAPbJ1Ka9TQ5CiC | 王寶倫 | accepted |
| descendants | p_fWhHLZZ5pFkeikFbBAN6W2 | 王媛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶倫（CBDB 155121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155121&o=json)
- [中国历代人物传记资料库：王仁緒（CBDB 155090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155090&o=json)
- [中国历代人物传记资料库：王媛（CBDB 141214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141214&o=json)

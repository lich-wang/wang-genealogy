---
schema: wang-person/v1
id: p_1uAG6a8dvWnZ4NjPRnGsn6
status: active
merged_into: null
display_name: 王實一
cbdb_id: 271030
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PKawD9YYkiBKCxj2DchVqG
        subject_person_id: p_1uAG6a8dvWnZ4NjPRnGsn6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實一，明人物。中国历代人物传记资料库（CBDB）以人物编号 271030 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__D1t3I4a_kZLQpPmJqA2LZ
          claim_id: c_PKawD9YYkiBKCxj2DchVqG
          source_id: s_BptbQFppKoLc4dgUisqpG9
          stance: supports
          locator: CBDB:271030
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_BptbQFppKoLc4dgUisqpG9
            source_type: api_record
            title: 中国历代人物传记资料库：王實一（CBDB 271030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271030&o=json
            external_identifier: CBDB:271030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ed43gknveYGU3LBAXW3gAN
        subject_person_id: p_1uAG6a8dvWnZ4NjPRnGsn6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fHg7PPMBVX1FskJ2GMFN2L
          claim_id: c_ed43gknveYGU3LBAXW3gAN
          source_id: s_BptbQFppKoLc4dgUisqpG9
          stance: supports
          locator: CBDB:271030
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_BptbQFppKoLc4dgUisqpG9
            source_type: api_record
            title: 中国历代人物传记资料库：王實一（CBDB 271030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271030&o=json
            external_identifier: CBDB:271030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_CCqRI20U6onOCHFfwURUO7
        subject_person_id: p_1uAG6a8dvWnZ4NjPRnGsn6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__vVTVtQEXO0ukjUToU4r1T
          claim_id: c_CCqRI20U6onOCHFfwURUO7
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rMiKQdLixLiHHyQLAuXGgm
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 68246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json
            external_identifier: CBDB:68246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4PsCtJUsnu3eY9rXNjF4Fo
        status: active
        display_name: 王廷相
        merged_into_person_id: null
  other: []
---

# 王實一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王實一，明人物。中国历代人物传记资料库（CBDB）以人物编号 271030 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王實一 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4PsCtJUsnu3eY9rXNjF4Fo | 王廷相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王實一（CBDB 271030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271030&o=json)
- [中国历代人物传记资料库：王廷相（CBDB 68246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json)

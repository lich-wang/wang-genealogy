---
schema: wang-person/v1
id: p_cVFtE4wvJdhGmmQjDEJqE7
status: active
merged_into: null
display_name: 王孝政
cbdb_id: 163062
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cFFm6BfeFaQhr6e2fpHtTL
        subject_person_id: p_cVFtE4wvJdhGmmQjDEJqE7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝政，唐人物。中国历代人物传记资料库（CBDB）以人物编号 163062 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_zeE5Ib1Jn-wPOzHg5BPXxh
          claim_id: c_cFFm6BfeFaQhr6e2fpHtTL
          source_id: s_UKbdsZ7uiXoQSNjQF57awj
          stance: supports
          locator: CBDB:163062
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_UKbdsZ7uiXoQSNjQF57awj
            source_type: api_record
            title: 中国历代人物传记资料库：王孝政（CBDB 163062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163062&o=json
            external_identifier: CBDB:163062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zQRr5kQ5NFPzQW52jaL2GF
        subject_person_id: p_cVFtE4wvJdhGmmQjDEJqE7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nhj7RnhNJDRmwJSWsDeK9j
          claim_id: c_zQRr5kQ5NFPzQW52jaL2GF
          source_id: s_UKbdsZ7uiXoQSNjQF57awj
          stance: supports
          locator: CBDB:163062
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_UKbdsZ7uiXoQSNjQF57awj
            source_type: api_record
            title: 中国历代人物传记资料库：王孝政（CBDB 163062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163062&o=json
            external_identifier: CBDB:163062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PkBy6LsAmLh3F8NUNLFrTw
        subject_person_id: p_cVFtE4wvJdhGmmQjDEJqE7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rzhasUxx6H8R47msKHyXUP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IBY-4dxIfrYMzeTa8Ac-rL
          claim_id: c_PkBy6LsAmLh3F8NUNLFrTw
          source_id: s_DZ8YLmQ9G91FHb2uKgY56E
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Changshou5：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DZ8YLmQ9G91FHb2uKgY56E
            source_type: api_record
            title: 中国历代人物传记资料库：王基（CBDB 142772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142772&o=json
            external_identifier: CBDB:142772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.597Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rzhasUxx6H8R47msKHyXUP
        status: active
        display_name: 王基
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孝政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孝政，唐人物。中国历代人物传记资料库（CBDB）以人物编号 163062 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王孝政 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rzhasUxx6H8R47msKHyXUP | 王基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王基（CBDB 142772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142772&o=json)
- [中国历代人物传记资料库：王孝政（CBDB 163062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163062&o=json)

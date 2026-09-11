---
schema: wang-person/v1
id: p_2t2Hsz99a7Ud4ncfCN2zBF
status: active
merged_into: null
display_name: 王奉珍
cbdb_id: 165211
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_euf6rvHKhDmsXpeZpmFzBv
        subject_person_id: p_2t2Hsz99a7Ud4ncfCN2zBF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉珍，唐人物。中国历代人物传记资料库（CBDB）以人物编号 165211 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_GOvHlvArAxe5zLpzi_YRR9
          claim_id: c_euf6rvHKhDmsXpeZpmFzBv
          source_id: s_TESwx4jXjHgooPk6jkBwLi
          stance: supports
          locator: CBDB:165211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_TESwx4jXjHgooPk6jkBwLi
            source_type: api_record
            title: 中国历代人物传记资料库：王奉珍（CBDB 165211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165211&o=json
            external_identifier: CBDB:165211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZyBFuc2hJHCZxyncRRHjER
        subject_person_id: p_2t2Hsz99a7Ud4ncfCN2zBF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fA2KpZoiN1o52F3ZDRKyfV
          claim_id: c_ZyBFuc2hJHCZxyncRRHjER
          source_id: s_TESwx4jXjHgooPk6jkBwLi
          stance: supports
          locator: CBDB:165211
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_TESwx4jXjHgooPk6jkBwLi
            source_type: api_record
            title: 中国历代人物传记资料库：王奉珍（CBDB 165211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165211&o=json
            external_identifier: CBDB:165211
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
        id: c_AuC3KqX7RFBHf1-2_YBAxO
        subject_person_id: p_2t2Hsz99a7Ud4ncfCN2zBF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YMs6JZkbstNyaB91cBTq8e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K_pJ-I0CXNdRDwE5c-UGZm
          claim_id: c_AuC3KqX7RFBHf1-2_YBAxO
          source_id: s_DDxcxQL1ev4xkH9RkHws9x
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali18：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DDxcxQL1ev4xkH9RkHws9x
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 143099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143099&o=json
            external_identifier: CBDB:143099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YMs6JZkbstNyaB91cBTq8e
        status: active
        display_name: 王珍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王奉珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王奉珍，唐人物。中国历代人物传记资料库（CBDB）以人物编号 165211 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王奉珍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YMs6JZkbstNyaB91cBTq8e | 王珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奉珍（CBDB 165211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165211&o=json)
- [中国历代人物传记资料库：王珍（CBDB 143099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143099&o=json)

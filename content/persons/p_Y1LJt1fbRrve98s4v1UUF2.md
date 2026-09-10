---
schema: wang-person/v1
id: p_Y1LJt1fbRrve98s4v1UUF2
status: active
merged_into: null
display_name: 王志積
cbdb_id: 255122
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t344PrqVdtDZ4j9TSP9Kdt
        subject_person_id: p_Y1LJt1fbRrve98s4v1UUF2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志積，明人物。中国历代人物传记资料库（CBDB）以人物编号 255122 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_r3DjM_UQ1BbRuC_FGTTtJD
          claim_id: c_t344PrqVdtDZ4j9TSP9Kdt
          source_id: s_jT4UK6pxMq4A7knckN5Qa3
          stance: supports
          locator: CBDB:255122
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_jT4UK6pxMq4A7knckN5Qa3
            source_type: api_record
            title: 中国历代人物传记资料库：王志積（CBDB 255122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255122&o=json
            external_identifier: CBDB:255122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qmeo5YvYmvGBhkpd15hh8q
        subject_person_id: p_Y1LJt1fbRrve98s4v1UUF2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志積
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_D4sxDeiwCF6uYsqKTt5KTy
          claim_id: c_qmeo5YvYmvGBhkpd15hh8q
          source_id: s_jT4UK6pxMq4A7knckN5Qa3
          stance: supports
          locator: CBDB:255122
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_jT4UK6pxMq4A7knckN5Qa3
            source_type: api_record
            title: 中国历代人物传记资料库：王志積（CBDB 255122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255122&o=json
            external_identifier: CBDB:255122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7up1DxN3Q7Oefucpy0mNon
        subject_person_id: p_fYwp6rZCTtFvp8J8toSZti
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y1LJt1fbRrve98s4v1UUF2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kKkqR0NhBNV5xzQFvATRxO
          claim_id: c_7up1DxN3Q7Oefucpy0mNon
          source_id: s_qEvCQcQFP2htwCq8xnWiJs
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十二名：祖父、父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a1
            id: s_qEvCQcQFP2htwCq8xnWiJs
            source_type: api_record
            title: 中国历代人物传记资料库：王宥（CBDB 200225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200225&o=json
            external_identifier: CBDB:200225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fYwp6rZCTtFvp8J8toSZti
        status: active
        display_name: 王本宗
        merged_into_person_id: null
  children:
    - claim:
        id: c_UwekIoBvZwrBowb64NstAp
        subject_person_id: p_Y1LJt1fbRrve98s4v1UUF2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eIldKuAqE41s5UE3I6d1fu
          claim_id: c_UwekIoBvZwrBowb64NstAp
          source_id: s_qEvCQcQFP2htwCq8xnWiJs
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_15Nh8Xnsw6Q2WxxXdtixbY
        status: active
        display_name: 王宥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志積

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志積，明人物。中国历代人物传记资料库（CBDB）以人物编号 255122 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王志積 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fYwp6rZCTtFvp8J8toSZti | 王本宗 | accepted |
| children | p_15Nh8Xnsw6Q2WxxXdtixbY | 王宥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宥（CBDB 200225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200225&o=json)
- [中国历代人物传记资料库：王志積（CBDB 255122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255122&o=json)

---
schema: wang-person/v1
id: p_PSq4gNnj9hSipZUMSKmYGy
status: active
merged_into: null
display_name: 王宜勵
cbdb_id: 517384
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pz9AWvDNrF549pGGhrk1Hs
        subject_person_id: p_PSq4gNnj9hSipZUMSKmYGy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜勵，清人物。中国历代人物传记资料库（CBDB）以人物编号 517384 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_E0Ham7IP21SS2dWkkTQ_Zj
          claim_id: c_pz9AWvDNrF549pGGhrk1Hs
          source_id: s_qRhGcpPSQ5t1x2QGYA31zh
          stance: supports
          locator: CBDB:517384
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_qRhGcpPSQ5t1x2QGYA31zh
            source_type: api_record
            title: 中国历代人物传记资料库：王宜勵（CBDB 517384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517384&o=json
            external_identifier: CBDB:517384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1kRqW8e1BWGebGBCh9nwB4
        subject_person_id: p_PSq4gNnj9hSipZUMSKmYGy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜勵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vLMRqzvPTGfamyzZpdEAvd
          claim_id: c_1kRqW8e1BWGebGBCh9nwB4
          source_id: s_qRhGcpPSQ5t1x2QGYA31zh
          stance: supports
          locator: CBDB:517384
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_qRhGcpPSQ5t1x2QGYA31zh
            source_type: api_record
            title: 中国历代人物传记资料库：王宜勵（CBDB 517384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517384&o=json
            external_identifier: CBDB:517384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CXHOzZm7iDKVyvY7VfxCrb
        subject_person_id: p_z4xE7QSSGQJhxdiqsEyRc2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PSq4gNnj9hSipZUMSKmYGy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMJgNChBqNuWKd_VxtEe-W
          claim_id: c_CXHOzZm7iDKVyvY7VfxCrb
          source_id: s_9xxamMv6phJtfyKgRZs3xv
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1852：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9xxamMv6phJtfyKgRZs3xv
            source_type: api_record
            title: 中国历代人物传记资料库：王東槐（CBDB 58593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58593&o=json
            external_identifier: CBDB:58593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_z4xE7QSSGQJhxdiqsEyRc2
        status: active
        display_name: 王東槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宜勵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宜勵，清人物。中国历代人物传记资料库（CBDB）以人物编号 517384 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王宜勵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z4xE7QSSGQJhxdiqsEyRc2 | 王東槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王東槐（CBDB 58593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58593&o=json)
- [中国历代人物传记资料库：王宜勵（CBDB 517384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517384&o=json)

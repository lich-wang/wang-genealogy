---
schema: wang-person/v1
id: p_EswMvP7VGuydnr4Xe2zHpk
status: active
merged_into: null
display_name: 王肅時
cbdb_id: 210675
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_imNC5m8WPrJF1QVBcgCMRQ
        subject_person_id: p_EswMvP7VGuydnr4Xe2zHpk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅時，明人物。中国历代人物传记资料库（CBDB）以人物编号 210675 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_aOOhlfiGFe1vurLC7YYsrR
          claim_id: c_imNC5m8WPrJF1QVBcgCMRQ
          source_id: s_jnqByBsv38qDMZ9SPHrGU9
          stance: supports
          locator: CBDB:210675
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jnqByBsv38qDMZ9SPHrGU9
            source_type: api_record
            title: 中国历代人物传记资料库：王肅時（CBDB 210675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210675&o=json
            external_identifier: CBDB:210675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fTmYrgFkoPPMesvX91J7jV
        subject_person_id: p_EswMvP7VGuydnr4Xe2zHpk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rweeJiTeCqZKwuWTivwHNy
          claim_id: c_fTmYrgFkoPPMesvX91J7jV
          source_id: s_jnqByBsv38qDMZ9SPHrGU9
          stance: supports
          locator: CBDB:210675
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_jnqByBsv38qDMZ9SPHrGU9
            source_type: api_record
            title: 中国历代人物传记资料库：王肅時（CBDB 210675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210675&o=json
            external_identifier: CBDB:210675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
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
        id: c_TiwhVz0tXdGxS5j14VOKPz
        subject_person_id: p_EswMvP7VGuydnr4Xe2zHpk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4pWLussrfFK81AcIIh7rDb
          claim_id: c_TiwhVz0tXdGxS5j14VOKPz
          source_id: s_jnqByBsv38qDMZ9SPHrGU9
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百六十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JTc1E7LgQAh6Uz9airZSVG
        status: active
        display_name: 王雲鷺
        merged_into_person_id: null
  other: []
---

# 王肅時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王肅時，明人物。中国历代人物传记资料库（CBDB）以人物编号 210675 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王肅時 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JTc1E7LgQAh6Uz9airZSVG | 王雲鷺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王肅時（CBDB 210675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210675&o=json)

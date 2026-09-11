---
schema: wang-person/v1
id: p_THF2LeRLB4NBKZ9TDPgftt
status: active
merged_into: null
display_name: 王叔紀
cbdb_id: 262605
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vGtJthCF7FpGMdLuHnvTtE
        subject_person_id: p_THF2LeRLB4NBKZ9TDPgftt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔紀，明人物。中国历代人物传记资料库（CBDB）以人物编号 262605 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_r-lXZXiyQjn9RCm8wTHyJC
          claim_id: c_vGtJthCF7FpGMdLuHnvTtE
          source_id: s_DahRfD1tAPHvDmEV7rsEYt
          stance: supports
          locator: CBDB:262605
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_DahRfD1tAPHvDmEV7rsEYt
            source_type: api_record
            title: 中国历代人物传记资料库：王叔紀（CBDB 262605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262605&o=json
            external_identifier: CBDB:262605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_39AZWy3Y3Ku68MUwo1Dpep
        subject_person_id: p_THF2LeRLB4NBKZ9TDPgftt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MLvxUy1jDsNA78AEMsPMF6
          claim_id: c_39AZWy3Y3Ku68MUwo1Dpep
          source_id: s_DahRfD1tAPHvDmEV7rsEYt
          stance: supports
          locator: CBDB:262605
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_DahRfD1tAPHvDmEV7rsEYt
            source_type: api_record
            title: 中国历代人物传记资料库：王叔紀（CBDB 262605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262605&o=json
            external_identifier: CBDB:262605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_lylmn-8XHYosC0fNsB0pSO
        subject_person_id: p_THF2LeRLB4NBKZ9TDPgftt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2ivdyuT2PUd95aURm25j3Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ermx12HtELyloBXunklop3
          claim_id: c_lylmn-8XHYosC0fNsB0pSO
          source_id: s_yBSfQfimThTBXufFM9ub6Q
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第八十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yBSfQfimThTBXufFM9ub6Q
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 200767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200767&o=json
            external_identifier: CBDB:200767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2ivdyuT2PUd95aURm25j3Y
        status: active
        display_name: 王俸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王叔紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔紀，明人物。中国历代人物传记资料库（CBDB）以人物编号 262605 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王叔紀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2ivdyuT2PUd95aURm25j3Y | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俸（CBDB 200767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200767&o=json)
- [中国历代人物传记资料库：王叔紀（CBDB 262605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262605&o=json)

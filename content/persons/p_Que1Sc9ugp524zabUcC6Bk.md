---
schema: wang-person/v1
id: p_Que1Sc9ugp524zabUcC6Bk
status: active
merged_into: null
display_name: 王體復
cbdb_id: 205493
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zxNoLtxPme6yCuYwPFRZdF
        subject_person_id: p_Que1Sc9ugp524zabUcC6Bk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體復（生于1548年），明人物。中国历代人物传记资料库（CBDB）以人物编号 205493 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_DU1objz7kFiRK1fyzbqaa6
          claim_id: c_zxNoLtxPme6yCuYwPFRZdF
          source_id: s_triW4Nj3uDuVLxR1h8Ghf9
          stance: supports
          locator: CBDB:205493
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_triW4Nj3uDuVLxR1h8Ghf9
            source_type: api_record
            title: 中国历代人物传记资料库：王體復（CBDB 205493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205493&o=json
            external_identifier: CBDB:205493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5TiT2eDgE97S4aCYtmtRAn
        subject_person_id: p_Que1Sc9ugp524zabUcC6Bk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1548年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1548-01-01
            latest: 1548-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GwEZs8frZFb7rFbEXNJ769
          claim_id: c_5TiT2eDgE97S4aCYtmtRAn
          source_id: s_triW4Nj3uDuVLxR1h8Ghf9
          stance: supports
          locator: CBDB:205493
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1548
          source:
            id: s_triW4Nj3uDuVLxR1h8Ghf9
            source_type: api_record
            title: 中国历代人物传记资料库：王體復（CBDB 205493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205493&o=json
            external_identifier: CBDB:205493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dKVrFGM78eNgBd6DtvUgWF
        subject_person_id: p_Que1Sc9ugp524zabUcC6Bk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Sd57SzuuHsNy8eRcCm7QXx
          claim_id: c_dKVrFGM78eNgBd6DtvUgWF
          source_id: s_triW4Nj3uDuVLxR1h8Ghf9
          stance: supports
          locator: CBDB:205493
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1548
          source:
            id: s_triW4Nj3uDuVLxR1h8Ghf9
            source_type: api_record
            title: 中国历代人物传记资料库：王體復（CBDB 205493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205493&o=json
            external_identifier: CBDB:205493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r6-lCLt6ab0q6hEnvdos9t
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Que1Sc9ugp524zabUcC6Bk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lqk90QISX27lbqdrJaIvo2
          claim_id: c_r6-lCLt6ab0q6hEnvdos9t
          source_id: s_ELwwMtVZvNEXahCJxGjJDF
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ELwwMtVZvNEXahCJxGjJDF
            source_type: api_record
            title: 中国历代人物传记资料库：王應時（CBDB 334172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334172&o=json
            external_identifier: CBDB:334172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9KuNRr8o75Vr36yjwDeyAm
        status: active
        display_name: 王應時
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7gtsHnmzqbjgm9bB-LRelx
        subject_person_id: p_Jngyxop9ncGYJHbuLicTeo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Que1Sc9ugp524zabUcC6Bk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IhLzT6mxeBeGnPViemSGNW
          claim_id: c_7gtsHnmzqbjgm9bB-LRelx
          source_id: s_8WuZf9XXDk1hZjgaUhAxc5
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8WuZf9XXDk1hZjgaUhAxc5
            source_type: api_record
            title: 中国历代人物传记资料库：王寍（CBDB 334170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334170&o=json
            external_identifier: CBDB:334170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Jngyxop9ncGYJHbuLicTeo
        status: active
        display_name: 王寍
        merged_into_person_id: null
    - claim:
        id: c_3xGbxVQj5rWn76GhmAw4Wk
        subject_person_id: p_YFMrq2R5L2Pue78fHaBR1v
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Que1Sc9ugp524zabUcC6Bk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5UZg_pECGX6FMLBRs6l3PA
          claim_id: c_3xGbxVQj5rWn76GhmAw4Wk
          source_id: s_Ah4tGFJXLEq2JDz2HMKwFf
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ah4tGFJXLEq2JDz2HMKwFf
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 334171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334171&o=json
            external_identifier: CBDB:334171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YFMrq2R5L2Pue78fHaBR1v
        status: active
        display_name: 王儉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王體復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王體復（生于1548年），明人物。中国历代人物传记资料库（CBDB）以人物编号 205493 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1548年 | accepted |
| name.primary | 王體復 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9KuNRr8o75Vr36yjwDeyAm | 王應時 | accepted |
| ancestors | p_Jngyxop9ncGYJHbuLicTeo | 王寍 | accepted |
| ancestors | p_YFMrq2R5L2Pue78fHaBR1v | 王儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儉（CBDB 334171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334171&o=json)
- [中国历代人物传记资料库：王寍（CBDB 334170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334170&o=json)
- [中国历代人物传记资料库：王體復（CBDB 205493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205493&o=json)
- [中国历代人物传记资料库：王應時（CBDB 334172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334172&o=json)

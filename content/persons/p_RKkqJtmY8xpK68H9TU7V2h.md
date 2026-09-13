---
schema: wang-person/v1
id: p_RKkqJtmY8xpK68H9TU7V2h
status: active
merged_into: null
display_name: 王岳錫
cbdb_id: 206741
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UPe8yExMtaVuAPJ4V56GVA
        subject_person_id: p_RKkqJtmY8xpK68H9TU7V2h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岳錫（生于1559年），明人物。明清進士進士，籍贯錦衣衛，入仕進士。（中国历代人物传记资料库 CBDB 206741）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gb2aOz_kuTap87lGbOZ5-0
          claim_id: c_UPe8yExMtaVuAPJ4V56GVA
          source_id: s_eKNNPnx3PxgtpqS5BHaHM6
          stance: supports
          locator: CBDB:206741
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eKNNPnx3PxgtpqS5BHaHM6
            source_type: api_record
            title: 中国历代人物传记资料库：王岳錫（CBDB 206741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206741&o=json
            external_identifier: CBDB:206741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_okL5vo58Ew6dxB9VGHG2Ga
        subject_person_id: p_RKkqJtmY8xpK68H9TU7V2h
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1559年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1559-01-01
            latest: 1559-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qef6U7f9rhFcg6QTYZdwKA
          claim_id: c_okL5vo58Ew6dxB9VGHG2Ga
          source_id: s_eKNNPnx3PxgtpqS5BHaHM6
          stance: supports
          locator: CBDB:206741
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1559
          source:
            id: s_eKNNPnx3PxgtpqS5BHaHM6
            source_type: api_record
            title: 中国历代人物传记资料库：王岳錫（CBDB 206741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206741&o=json
            external_identifier: CBDB:206741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jF2JcFmSjFEA4zCt2XcqD3
        subject_person_id: p_RKkqJtmY8xpK68H9TU7V2h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岳錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2xvJs5u5rrMVx4zRHcXX7N
          claim_id: c_jF2JcFmSjFEA4zCt2XcqD3
          source_id: s_eKNNPnx3PxgtpqS5BHaHM6
          stance: supports
          locator: CBDB:206741
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1559
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UBO4bXn0hj--TaAT0Ftccl
        subject_person_id: p_VoTEz62YCbTPVvreKQ83nM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RKkqJtmY8xpK68H9TU7V2h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FVoI0yTUd7c9NwKgO8jsMN
          claim_id: c_UBO4bXn0hj--TaAT0Ftccl
          source_id: s_uSjEH62JT2VHw1xKmMVo3i
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uSjEH62JT2VHw1xKmMVo3i
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 222533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222533&o=json
            external_identifier: CBDB:222533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VoTEz62YCbTPVvreKQ83nM
        status: active
        display_name: 王价
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Jxhv-KXfMXdnVCYJS0GK9X
        subject_person_id: p_2SQ76ktBHXkxeeRXd8mxUn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RKkqJtmY8xpK68H9TU7V2h
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GwqvGdAMjwbUXHE11pEIdS
          claim_id: c_Jxhv-KXfMXdnVCYJS0GK9X
          source_id: s_tbFJS7da43jMq17gKvUMTm
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tbFJS7da43jMq17gKvUMTm
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 222532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222532&o=json
            external_identifier: CBDB:222532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2SQ76ktBHXkxeeRXd8mxUn
        status: active
        display_name: 王簡
        merged_into_person_id: null
    - claim:
        id: c_N6V9fqXAf72TJCzLu2K5MO
        subject_person_id: p_JeB3hwSR896jhFPxZ6KM4b
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RKkqJtmY8xpK68H9TU7V2h
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TXtu2ERiTujYksrAniDEOU
          claim_id: c_N6V9fqXAf72TJCzLu2K5MO
          source_id: s_GjQhHr3p86m75jYhNXM4yw
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第三十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GjQhHr3p86m75jYhNXM4yw
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 222531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222531&o=json
            external_identifier: CBDB:222531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JeB3hwSR896jhFPxZ6KM4b
        status: active
        display_name: 王縉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王岳錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王岳錫（生于1559年），明人物。明清進士進士，籍贯錦衣衛，入仕進士。（中国历代人物传记资料库 CBDB 206741） | accepted |
| birth.date | 1559年 | accepted |
| name.primary | 王岳錫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VoTEz62YCbTPVvreKQ83nM | 王价 | accepted |
| ancestors | p_2SQ76ktBHXkxeeRXd8mxUn | 王簡 | accepted |
| ancestors | p_JeB3hwSR896jhFPxZ6KM4b | 王縉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王价（CBDB 222533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222533&o=json)
- [中国历代人物传记资料库：王簡（CBDB 222532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222532&o=json)
- [中国历代人物传记资料库：王縉（CBDB 222531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222531&o=json)
- [中国历代人物传记资料库：王岳錫（CBDB 206741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206741&o=json)

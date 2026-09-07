---
schema: wang-person/v1
id: p_iTqKF6d5DFftKyBtDG4KDL
status: active
merged_into: null
display_name: 王胡子
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5N4uWNJ2DQPu82QVgHQ239
        subject_person_id: p_iTqKF6d5DFftKyBtDG4KDL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胡子，史料所见人物。中国历代人物传记资料库（CBDB）以人物编号 154142 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Yck5FxGfKPPaupZJPqDJs1
          claim_id: c_5N4uWNJ2DQPu82QVgHQ239
          source_id: s_vP3LdB2TLEy2cC2qZBNUPD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vP3LdB2TLEy2cC2qZBNUPD
            source_type: api_record
            title: 维基数据：王胡子（Q45623519）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623519
            external_identifier: Q45623519
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:42.560Z
            metadata_json: null
        - id: cs_8KPQVCdS1lHKrFLvtgSQzR
          claim_id: c_5N4uWNJ2DQPu82QVgHQ239
          source_id: s_SvGE27R8W3kVzdAREBsA61
          stance: supports
          locator: CBDB:154142
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SvGE27R8W3kVzdAREBsA61
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鬍子（154142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154142&o=json
            external_identifier: CBDB:154142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:42.714Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NDCpEp5LmLTrmWbM9ymQr7
        subject_person_id: p_iTqKF6d5DFftKyBtDG4KDL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胡子
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CAFxf7SLsWuhm4RjQJHHky
          claim_id: c_NDCpEp5LmLTrmWbM9ymQr7
          source_id: s_vP3LdB2TLEy2cC2qZBNUPD
          stance: supports
          locator: Q45623519
          quotation: null
          interpretation_note: null
          source:
            id: s_vP3LdB2TLEy2cC2qZBNUPD
            source_type: api_record
            title: 维基数据：王胡子（Q45623519）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623519
            external_identifier: Q45623519
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:42.560Z
            metadata_json: null
        - id: cs_EAVqwgFWekCtrTKF7osgSg
          claim_id: c_NDCpEp5LmLTrmWbM9ymQr7
          source_id: s_SvGE27R8W3kVzdAREBsA61
          stance: supports
          locator: Q45623519
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uEtZg6grsFVD2uEyBrnXag
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iTqKF6d5DFftKyBtDG4KDL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_W7fyqqLPeKjmny53519S82
          claim_id: c_uEtZg6grsFVD2uEyBrnXag
          source_id: s_fA4yFEVkP128orqD5bJWNZ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fA4yFEVkP128orqD5bJWNZ
            source_type: api_record
            title: 维基数据：王志悌（Q45507893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507893
            external_identifier: Q45507893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_dJVZ6BD85k7VK1H29vw86E
          claim_id: c_uEtZg6grsFVD2uEyBrnXag
          source_id: s_vP3LdB2TLEy2cC2qZBNUPD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vP3LdB2TLEy2cC2qZBNUPD
            source_type: api_record
            title: 维基数据：王胡子（Q45623519）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623519
            external_identifier: Q45623519
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:42.560Z
            metadata_json: null
        - id: cs_ujZKDSnB821gsuwqPE6sd3
          claim_id: c_uEtZg6grsFVD2uEyBrnXag
          source_id: s_SvGE27R8W3kVzdAREBsA61
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_SvGE27R8W3kVzdAREBsA61
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鬍子（154142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154142&o=json
            external_identifier: CBDB:154142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:42.714Z
            metadata_json: null
      object_person:
        id: p_KXD6a4zaL9E1N69hTNkTMP
        status: active
        display_name: 王志悌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王胡子

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王胡子，史料所见人物。中国历代人物传记资料库（CBDB）以人物编号 154142 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王胡子 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KXD6a4zaL9E1N69hTNkTMP | 王志悌 | accepted |

## 外部来源

- [维基数据：王胡子（Q45623519）](https://www.wikidata.org/wiki/Q45623519)
- [维基数据：王志悌（Q45507893）](https://www.wikidata.org/wiki/Q45507893)
- [CBDB 中国历代人物传记资料库：王鬍子（154142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154142&o=json)

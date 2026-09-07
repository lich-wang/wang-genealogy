---
schema: wang-person/v1
id: p_4x7eJgoh5LankFk1Sq6um4
status: active
merged_into: null
display_name: 王侗
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U5oziUGRAXHiRVmyDhYQfC
        subject_person_id: p_4x7eJgoh5LankFk1Sq6um4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侗（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任主簿。中国历代人物传记资料库（CBDB）以人物编号 175599 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BpRyZW2JwHPAh2VZhqMBFM
          claim_id: c_U5oziUGRAXHiRVmyDhYQfC
          source_id: s_8cK6Us3cWJD533GfAR4DYP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8cK6Us3cWJD533GfAR4DYP
            source_type: api_record
            title: 维基数据：王侗（Q45668522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668522
            external_identifier: Q45668522
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.183Z
            metadata_json: null
        - id: cs_fUCMWstrwjZq-onb0TJudr
          claim_id: c_U5oziUGRAXHiRVmyDhYQfC
          source_id: s_wn4qsWnKRcEe1cwo1fM5fB
          stance: supports
          locator: CBDB:175599
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wn4qsWnKRcEe1cwo1fM5fB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侗（175599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175599&o=json
            external_identifier: CBDB:175599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.328Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_pB7kGaV3A8cvY86NU5CDnE
        subject_person_id: p_4x7eJgoh5LankFk1Sq6um4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SyDNRdCf8S9oDFBZmP8G1W
          claim_id: c_pB7kGaV3A8cvY86NU5CDnE
          source_id: s_8cK6Us3cWJD533GfAR4DYP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8cK6Us3cWJD533GfAR4DYP
            source_type: api_record
            title: 维基数据：王侗（Q45668522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668522
            external_identifier: Q45668522
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.183Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g7usD8noofos2WJDVnpgno
        subject_person_id: p_4x7eJgoh5LankFk1Sq6um4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MtZJh8v5AVCmj3ghU3GP1K
          claim_id: c_g7usD8noofos2WJDVnpgno
          source_id: s_wn4qsWnKRcEe1cwo1fM5fB
          stance: supports
          locator: Q45668522
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_uSsKtdiQeLUQrbDVSRbwNK
          claim_id: c_g7usD8noofos2WJDVnpgno
          source_id: s_8cK6Us3cWJD533GfAR4DYP
          stance: supports
          locator: Q45668522
          quotation: null
          interpretation_note: null
          source:
            id: s_8cK6Us3cWJD533GfAR4DYP
            source_type: api_record
            title: 维基数据：王侗（Q45668522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668522
            external_identifier: Q45668522
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.183Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qNGTAjEyFFgKziTDWSRQRY
        subject_person_id: p_PyPYdgPJF9TEybjfkDt91f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4x7eJgoh5LankFk1Sq6um4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CFEnqjdW55ejpm7d3YwovP
          claim_id: c_qNGTAjEyFFgKziTDWSRQRY
          source_id: s_ncsTj4zGGPHFgrCZYwyE47
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ncsTj4zGGPHFgrCZYwyE47
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晙（91993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91993&o=json
            external_identifier: CBDB:91993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.346Z
            metadata_json: null
        - id: cs_QvH99ENJt87aJQyqJco42F
          claim_id: c_qNGTAjEyFFgKziTDWSRQRY
          source_id: s_EXcmMaeYVJwk593LFj6s41
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_EXcmMaeYVJwk593LFj6s41
            source_type: api_record
            title: 维基数据：王晙（Q45439660）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45439660
            external_identifier: Q45439660
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
        - id: cs_H8YtBKa7eveq3wzK6dwqA3
          claim_id: c_qNGTAjEyFFgKziTDWSRQRY
          source_id: s_8cK6Us3cWJD533GfAR4DYP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8cK6Us3cWJD533GfAR4DYP
            source_type: api_record
            title: 维基数据：王侗（Q45668522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668522
            external_identifier: Q45668522
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.183Z
            metadata_json: null
        - id: cs_nYzPYLVGShmnEEt5wokgd3
          claim_id: c_qNGTAjEyFFgKziTDWSRQRY
          source_id: s_wn4qsWnKRcEe1cwo1fM5fB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wn4qsWnKRcEe1cwo1fM5fB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侗（175599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175599&o=json
            external_identifier: CBDB:175599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.328Z
            metadata_json: null
      object_person:
        id: p_PyPYdgPJF9TEybjfkDt91f
        status: active
        display_name: 王晙
        merged_into_person_id: null
  children:
    - claim:
        id: c_smwCTgr9R2mkqWY11Fh8ph
        subject_person_id: p_4x7eJgoh5LankFk1Sq6um4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3c3tQqXdmv6oNaCqp7pULH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LUGheQsRHiVtSS6LQaqQxH
          claim_id: c_smwCTgr9R2mkqWY11Fh8ph
          source_id: s_wn4qsWnKRcEe1cwo1fM5fB
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wn4qsWnKRcEe1cwo1fM5fB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侗（175599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175599&o=json
            external_identifier: CBDB:175599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.328Z
            metadata_json: null
        - id: cs_sQRu1M3MuqQAHYUtSEyBqS
          claim_id: c_smwCTgr9R2mkqWY11Fh8ph
          source_id: s_8cK6Us3cWJD533GfAR4DYP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8cK6Us3cWJD533GfAR4DYP
            source_type: api_record
            title: 维基数据：王侗（Q45668522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668522
            external_identifier: Q45668522
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.183Z
            metadata_json: null
        - id: cs_KuwjZYBq9G5BWr7hT2iAnH
          claim_id: c_smwCTgr9R2mkqWY11Fh8ph
          source_id: s_eKcGM4UeZaLQRALPeZtRb6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eKcGM4UeZaLQRALPeZtRb6
            source_type: api_record
            title: 维基数据：王佛奴（Q45668573）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668573
            external_identifier: Q45668573
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.482Z
            metadata_json: null
        - id: cs_dJTpSVd8gCwXNpJpYKzft3
          claim_id: c_smwCTgr9R2mkqWY11Fh8ph
          source_id: s_DxDGH6VB79cS4H7NYRV8oB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_DxDGH6VB79cS4H7NYRV8oB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佛奴（175600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175600&o=json
            external_identifier: CBDB:175600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.674Z
            metadata_json: null
      object_person:
        id: p_3c3tQqXdmv6oNaCqp7pULH
        status: active
        display_name: 王佛奴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王侗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王侗（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任主簿。中国历代人物传记资料库（CBDB）以人物编号 175599 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王侗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PyPYdgPJF9TEybjfkDt91f | 王晙 | accepted |
| children | p_3c3tQqXdmv6oNaCqp7pULH | 王佛奴 | accepted |

## 外部来源

- [维基数据：王侗（Q45668522）](https://www.wikidata.org/wiki/Q45668522)
- [维基数据：王佛奴（Q45668573）](https://www.wikidata.org/wiki/Q45668573)
- [维基数据：王晙（Q45439660）](https://www.wikidata.org/wiki/Q45439660)
- [CBDB 中国历代人物传记资料库：王侗（175599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175599&o=json)
- [CBDB 中国历代人物传记资料库：王佛奴（175600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175600&o=json)
- [CBDB 中国历代人物传记资料库：王晙（91993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91993&o=json)

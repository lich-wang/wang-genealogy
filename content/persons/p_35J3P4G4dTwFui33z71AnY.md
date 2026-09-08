---
schema: wang-person/v1
id: p_35J3P4G4dTwFui33z71AnY
status: active
merged_into: null
display_name: 王柷
cbdb_id: 175520
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CQEMcoVguxqBP2M8Eef1Uq
        subject_person_id: p_35J3P4G4dTwFui33z71AnY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柷（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽，身份包括詩人，曾任給事中。中国历代人物传记资料库（CBDB）以人物编号 175520 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_h8mUbUNzKG1ExqpbLtkUAZ
          claim_id: c_CQEMcoVguxqBP2M8Eef1Uq
          source_id: s_MsT71Bu72R2cVxfvC8uNan
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_MsT71Bu72R2cVxfvC8uNan
            source_type: api_record
            title: 维基数据：王柷（Q45664433）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664433
            external_identifier: Q45664433
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
        - id: cs_p7ld0i0XlktbIGyZx3sEg3
          claim_id: c_CQEMcoVguxqBP2M8Eef1Uq
          source_id: s_CXMrHP1FWDq12wj7YWoyBz
          stance: supports
          locator: CBDB:175520
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CXMrHP1FWDq12wj7YWoyBz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王柷（175520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175520&o=json
            external_identifier: CBDB:175520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:53.737Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9SK61LV62wvo7jMPWbjM1J
        subject_person_id: p_35J3P4G4dTwFui33z71AnY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FBamHMN455rJHRuK33yJq4
          claim_id: c_9SK61LV62wvo7jMPWbjM1J
          source_id: s_MsT71Bu72R2cVxfvC8uNan
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_MsT71Bu72R2cVxfvC8uNan
            source_type: api_record
            title: 维基数据：王柷（Q45664433）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664433
            external_identifier: Q45664433
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KZGEzLtJSQtEhy8wbbBmRi
        subject_person_id: p_35J3P4G4dTwFui33z71AnY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柷
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Bk2FEmy6MLCDxmzQMPHiwV
          claim_id: c_KZGEzLtJSQtEhy8wbbBmRi
          source_id: s_CXMrHP1FWDq12wj7YWoyBz
          stance: supports
          locator: Q45664433
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_eKz2JHA5uiA88V3WTZEhQG
          claim_id: c_KZGEzLtJSQtEhy8wbbBmRi
          source_id: s_MsT71Bu72R2cVxfvC8uNan
          stance: supports
          locator: Q45664433
          quotation: null
          interpretation_note: null
          source:
            id: s_MsT71Bu72R2cVxfvC8uNan
            source_type: api_record
            title: 维基数据：王柷（Q45664433）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664433
            external_identifier: Q45664433
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8gGskow9TpDEsopK94BQeZ
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_35J3P4G4dTwFui33z71AnY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_89Kqc2pP7gfwmdsuwH7GwQ
          claim_id: c_8gGskow9TpDEsopK94BQeZ
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_MD9VBio3pKVrDJBkKeNd8s
          claim_id: c_8gGskow9TpDEsopK94BQeZ
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_5V4NPB9y4b4FXytU41sLoC
          claim_id: c_8gGskow9TpDEsopK94BQeZ
          source_id: s_MsT71Bu72R2cVxfvC8uNan
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MsT71Bu72R2cVxfvC8uNan
            source_type: api_record
            title: 维基数据：王柷（Q45664433）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664433
            external_identifier: Q45664433
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
        - id: cs_iEBvRC13TtAPV2BYwSR1FX
          claim_id: c_8gGskow9TpDEsopK94BQeZ
          source_id: s_CXMrHP1FWDq12wj7YWoyBz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CXMrHP1FWDq12wj7YWoyBz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王柷（175520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175520&o=json
            external_identifier: CBDB:175520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:53.737Z
            metadata_json: null
      object_person:
        id: p_Ang9eiGuniGWoebR7bHwTe
        status: active
        display_name: 王源植
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王柷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王柷（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽，身份包括詩人，曾任給事中。中国历代人物传记资料库（CBDB）以人物编号 175520 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王柷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ang9eiGuniGWoebR7bHwTe | 王源植 | accepted |

## 外部来源

- [维基数据：王源植（Q45664050）](https://www.wikidata.org/wiki/Q45664050)
- [维基数据：王柷（Q45664433）](https://www.wikidata.org/wiki/Q45664433)
- [CBDB 中国历代人物传记资料库：王源植（175513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json)
- [CBDB 中国历代人物传记资料库：王柷（175520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175520&o=json)

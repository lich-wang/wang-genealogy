---
schema: wang-person/v1
id: p_XV6a2hg1TuFRVjTmdEuUxN
status: active
merged_into: null
display_name: 王绲
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j8dRrm1ZdVTkBUqiQdPLf5
        subject_person_id: p_XV6a2hg1TuFRVjTmdEuUxN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绲（卒于672年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175638 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_B1eCSet4HZzyC3W1nhNJVE
          claim_id: c_j8dRrm1ZdVTkBUqiQdPLf5
          source_id: s_Ybw1LY6QHMDhc1st8K7zBH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Ybw1LY6QHMDhc1st8K7zBH
            source_type: api_record
            title: 维基数据：王绲（Q45670390）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670390
            external_identifier: Q45670390
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.431Z
            metadata_json: null
        - id: cs_Yhf30Bz8blNowFLHeBDpe1
          claim_id: c_j8dRrm1ZdVTkBUqiQdPLf5
          source_id: s_H2XFc3X8pxfVKZRAnj8c8H
          stance: supports
          locator: CBDB:175638
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_H2XFc3X8pxfVKZRAnj8c8H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緄（175638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175638&o=json
            external_identifier: CBDB:175638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.596Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EJMQNMqriRD8xunDNy65Tp
        subject_person_id: p_XV6a2hg1TuFRVjTmdEuUxN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 672年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0672-01-01
            latest: 0672-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C7BsyPBqQxZu7gMNcCMaQH
          claim_id: c_EJMQNMqriRD8xunDNy65Tp
          source_id: s_Ybw1LY6QHMDhc1st8K7zBH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Ybw1LY6QHMDhc1st8K7zBH
            source_type: api_record
            title: 维基数据：王绲（Q45670390）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670390
            external_identifier: Q45670390
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.431Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SHmXBkTpq76m3pYa78c9ed
        subject_person_id: p_XV6a2hg1TuFRVjTmdEuUxN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绲
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mEGqEmJ1zEpoKDw8dbyjoT
          claim_id: c_SHmXBkTpq76m3pYa78c9ed
          source_id: s_Ybw1LY6QHMDhc1st8K7zBH
          stance: supports
          locator: Q45670390
          quotation: null
          interpretation_note: null
          source:
            id: s_Ybw1LY6QHMDhc1st8K7zBH
            source_type: api_record
            title: 维基数据：王绲（Q45670390）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670390
            external_identifier: Q45670390
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.431Z
            metadata_json: null
        - id: cs_vrgLMtrpn9LdyD3x5iHEKU
          claim_id: c_SHmXBkTpq76m3pYa78c9ed
          source_id: s_H2XFc3X8pxfVKZRAnj8c8H
          stance: supports
          locator: Q45670390
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eXSDrVLtAdp2oZgH8SLRtV
        subject_person_id: p_ujGjqexGpFHSeeL644vaA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XV6a2hg1TuFRVjTmdEuUxN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QBM1mKKfZCjrPTkNVfJfbZ
          claim_id: c_eXSDrVLtAdp2oZgH8SLRtV
          source_id: s_Nwn5LEBCq2tAp9BpBtAtnK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Nwn5LEBCq2tAp9BpBtAtnK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王弘直（175393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175393&o=json
            external_identifier: CBDB:175393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.728Z
            metadata_json: null
        - id: cs_jHBUbpFZMW5RJBGUuZKvAL
          claim_id: c_eXSDrVLtAdp2oZgH8SLRtV
          source_id: s_MuAKHk7C2oEADSy4mxkVHM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MuAKHk7C2oEADSy4mxkVHM
            source_type: api_record
            title: 维基数据：王弘直（Q45656974）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656974
            external_identifier: Q45656974
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.576Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%98%E7%9B%B4
        - id: cs_oEemkKzg15E3zLufFdNw7C
          claim_id: c_eXSDrVLtAdp2oZgH8SLRtV
          source_id: s_Ybw1LY6QHMDhc1st8K7zBH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Ybw1LY6QHMDhc1st8K7zBH
            source_type: api_record
            title: 维基数据：王绲（Q45670390）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670390
            external_identifier: Q45670390
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.431Z
            metadata_json: null
        - id: cs_kWbuK4QmPXKN6SUceR4y2o
          claim_id: c_eXSDrVLtAdp2oZgH8SLRtV
          source_id: s_H2XFc3X8pxfVKZRAnj8c8H
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_H2XFc3X8pxfVKZRAnj8c8H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緄（175638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175638&o=json
            external_identifier: CBDB:175638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.596Z
            metadata_json: null
      object_person:
        id: p_ujGjqexGpFHSeeL644vaA9
        status: active
        display_name: 王弘直
        merged_into_person_id: null
  children:
    - claim:
        id: c_sHxrUSEA5ZibD67yVVJ2Pc
        subject_person_id: p_XV6a2hg1TuFRVjTmdEuUxN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Ucey9AFprdM8DH4AJXT22
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1mtzyKAErC57uMuPHtCaY1
          claim_id: c_sHxrUSEA5ZibD67yVVJ2Pc
          source_id: s_Ybw1LY6QHMDhc1st8K7zBH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Ybw1LY6QHMDhc1st8K7zBH
            source_type: api_record
            title: 维基数据：王绲（Q45670390）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670390
            external_identifier: Q45670390
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.431Z
            metadata_json: null
        - id: cs_K12hzzD4BALQAxGgAMnCr3
          claim_id: c_sHxrUSEA5ZibD67yVVJ2Pc
          source_id: s_H2XFc3X8pxfVKZRAnj8c8H
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_H2XFc3X8pxfVKZRAnj8c8H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緄（175638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175638&o=json
            external_identifier: CBDB:175638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.596Z
            metadata_json: null
        - id: cs_gmFw4NqPcaUfpS8qnhy1s4
          claim_id: c_sHxrUSEA5ZibD67yVVJ2Pc
          source_id: s_AxqLJZbyRWc2MXSs3uAtLG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AxqLJZbyRWc2MXSs3uAtLG
            source_type: api_record
            title: 维基数据：王令宾（Q45670436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670436
            external_identifier: Q45670436
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_tpCCvQVz2EwFWKzuZMhrqM
          claim_id: c_sHxrUSEA5ZibD67yVVJ2Pc
          source_id: s_7qryBfD6QrrsEFAhN1oahb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7qryBfD6QrrsEFAhN1oahb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王令賓（175639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175639&o=json
            external_identifier: CBDB:175639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.851Z
            metadata_json: null
      object_person:
        id: p_7Ucey9AFprdM8DH4AJXT22
        status: active
        display_name: 王令宾
        merged_into_person_id: null
    - claim:
        id: c_b3c2Kewn6UZPfPwvu18Jf9
        subject_person_id: p_XV6a2hg1TuFRVjTmdEuUxN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PYN4CyiPosgbkemxzp3xsX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4fwzY56Q7Q88pV3BDevL7i
          claim_id: c_b3c2Kewn6UZPfPwvu18Jf9
          source_id: s_H2XFc3X8pxfVKZRAnj8c8H
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_H2XFc3X8pxfVKZRAnj8c8H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緄（175638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175638&o=json
            external_identifier: CBDB:175638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.596Z
            metadata_json: null
        - id: cs_9WwFeCqF8PoPucDUqJ1PoJ
          claim_id: c_b3c2Kewn6UZPfPwvu18Jf9
          source_id: s_Ybw1LY6QHMDhc1st8K7zBH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Ybw1LY6QHMDhc1st8K7zBH
            source_type: api_record
            title: 维基数据：王绲（Q45670390）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670390
            external_identifier: Q45670390
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.431Z
            metadata_json: null
        - id: cs_cEyEtKMRNZxQyRZPk1dXdz
          claim_id: c_b3c2Kewn6UZPfPwvu18Jf9
          source_id: s_HggTTkpQgEWPEDS159SmmN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HggTTkpQgEWPEDS159SmmN
            source_type: api_record
            title: 维基数据：王辉远（Q45670482）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670482
            external_identifier: Q45670482
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_8Wv6pgitPFu4owasSj52uh
          claim_id: c_b3c2Kewn6UZPfPwvu18Jf9
          source_id: s_eGQxGWHDVi7c8FMpkmo3RE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_eGQxGWHDVi7c8FMpkmo3RE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王輝遠（175640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175640&o=json
            external_identifier: CBDB:175640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.866Z
            metadata_json: null
      object_person:
        id: p_PYN4CyiPosgbkemxzp3xsX
        status: active
        display_name: 王辉远
        merged_into_person_id: null
    - claim:
        id: c_GAgSkM26tMNMb7zgbaB4mc
        subject_person_id: p_XV6a2hg1TuFRVjTmdEuUxN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LCMCDJjDb9a6qJCoVFhKDj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1NaLL8pcny1Zo4JfPzj3ZH
          claim_id: c_GAgSkM26tMNMb7zgbaB4mc
          source_id: s_Ybw1LY6QHMDhc1st8K7zBH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Ybw1LY6QHMDhc1st8K7zBH
            source_type: api_record
            title: 维基数据：王绲（Q45670390）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670390
            external_identifier: Q45670390
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.431Z
            metadata_json: null
        - id: cs_c1vrNQNWFvfPwg328vVeJy
          claim_id: c_GAgSkM26tMNMb7zgbaB4mc
          source_id: s_H2XFc3X8pxfVKZRAnj8c8H
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_H2XFc3X8pxfVKZRAnj8c8H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緄（175638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175638&o=json
            external_identifier: CBDB:175638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.596Z
            metadata_json: null
        - id: cs_7Db9DDg5Aq4LxzBPEDsyCH
          claim_id: c_GAgSkM26tMNMb7zgbaB4mc
          source_id: s_iUAeZXEmwcLPDzTwhVDNaR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iUAeZXEmwcLPDzTwhVDNaR
            source_type: api_record
            title: 维基数据：王延客（Q45670529）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670529
            external_identifier: Q45670529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.402Z
            metadata_json: null
        - id: cs_CzAxaGNrqDmBJZtcAsbcc5
          claim_id: c_GAgSkM26tMNMb7zgbaB4mc
          source_id: s_rzMHLpw8x7DtywuyoVNk94
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_rzMHLpw8x7DtywuyoVNk94
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延客（175641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175641&o=json
            external_identifier: CBDB:175641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:41.561Z
            metadata_json: null
      object_person:
        id: p_LCMCDJjDb9a6qJCoVFhKDj
        status: active
        display_name: 王延客
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绲（卒于672年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175638 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 672年 | accepted |
| name.primary | 王绲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ujGjqexGpFHSeeL644vaA9 | 王弘直 | accepted |
| children | p_7Ucey9AFprdM8DH4AJXT22 | 王令宾 | accepted |
| children | p_PYN4CyiPosgbkemxzp3xsX | 王辉远 | accepted |
| children | p_LCMCDJjDb9a6qJCoVFhKDj | 王延客 | accepted |

## 外部来源

- [维基数据：王绲（Q45670390）](https://www.wikidata.org/wiki/Q45670390)
- [维基数据：王弘直（Q45656974）](https://www.wikidata.org/wiki/Q45656974)
- [维基数据：王辉远（Q45670482）](https://www.wikidata.org/wiki/Q45670482)
- [维基数据：王令宾（Q45670436）](https://www.wikidata.org/wiki/Q45670436)
- [维基数据：王延客（Q45670529）](https://www.wikidata.org/wiki/Q45670529)
- [CBDB 中国历代人物传记资料库：王緄（175638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175638&o=json)
- [CBDB 中国历代人物传记资料库：王弘直（175393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175393&o=json)
- [CBDB 中国历代人物传记资料库：王輝遠（175640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175640&o=json)
- [CBDB 中国历代人物传记资料库：王令賓（175639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175639&o=json)
- [CBDB 中国历代人物传记资料库：王延客（175641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175641&o=json)

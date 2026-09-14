---
schema: wang-person/v1
id: p_CvEsXMQ6J7PST7ecUX2ULA
status: active
merged_into: null
display_name: 王繼忠
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_21UFoULz5jNPM8UKH525hH
        subject_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fsjsXP9xsKoKWhZMyQ3BqB
          claim_id: c_21UFoULz5jNPM8UKH525hH
          source_id: s_KKBWBBUMc19iWURcA5NgkB
          stance: supports
          locator: CBDB:1779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1779）
          source: &a1
            id: s_KKBWBBUMc19iWURcA5NgkB
            source_type: api_record
            title: 中国历代人物传记资料库：王繼忠（CBDB 1779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1779&o=json
            external_identifier: CBDB:1779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GsgG5sVkg1R3cYBGpcFT3U
        subject_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼忠，遼人物。籍贯開封，入仕恩蔭、蔭補，曾任樞密使、秘書省監、轉運使。（中国历代人物传记资料库 CBDB 1779）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LmUSsC1G0d47hmUPFiEgAb
          claim_id: c_GsgG5sVkg1R3cYBGpcFT3U
          source_id: s_KKBWBBUMc19iWURcA5NgkB
          stance: supports
          locator: CBDB:1779
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aIm4ilxnWKeG_wEsku6Pwy
        subject_person_id: p_y2aTZYTA48iDPk6QoQ1ajM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ecrATZpWFxvU65S5XwqIig
          claim_id: c_aIm4ilxnWKeG_wEsku6Pwy
          source_id: s_KKBWBBUMc19iWURcA5NgkB
          stance: supports
          locator: CBDB 双向互证（父 王珫 ⇄ 子 王繼忠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_y2aTZYTA48iDPk6QoQ1ajM
        status: active
        display_name: 王珫
        merged_into_person_id: null
  children:
    - claim:
        id: c_DmdGBsxYULx0tQGu3YP32d
        subject_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HeMsxKqYWGTgetcTN6Vxrv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EF6gnWuth_WyRp1PQE20JV
          claim_id: c_DmdGBsxYULx0tQGu3YP32d
          source_id: s_kshhQpAHc1VB8I3ipV_Mih
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1779）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kshhQpAHc1VB8I3ipV_Mih
            source_type: api_record
            title: 中国历代人物传记资料库：王懷節（CBDB 21977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21977&o=json
            external_identifier: CBDB:21977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HeMsxKqYWGTgetcTN6Vxrv
        status: active
        display_name: 王懷節
        merged_into_person_id: null
    - claim:
        id: c_cIQNxXdoy0vhfCfAdu3wBD
        subject_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JwF9yag4FFRDtK6wDm3RwU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r_Op-QlADTOkuEq8PUIs8Q
          claim_id: c_cIQNxXdoy0vhfCfAdu3wBD
          source_id: s_zx_GtObcR8SgP9CkeVwk8r
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1779）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_zx_GtObcR8SgP9CkeVwk8r
            source_type: api_record
            title: 中国历代人物传记资料库：王懷德（CBDB 21979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21979&o=json
            external_identifier: CBDB:21979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JwF9yag4FFRDtK6wDm3RwU
        status: active
        display_name: 王懷德
        merged_into_person_id: null
    - claim:
        id: c_a5ejqgSjZ5JZAU9z2F3_Cg
        subject_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gEt885orLmp2Pf4PamP2mX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iqQDOxUxI7ctMJtnvFICMN
          claim_id: c_a5ejqgSjZ5JZAU9z2F3_Cg
          source_id: s_JlqqTAt6I1UzzOULcyFPRg
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1779）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_JlqqTAt6I1UzzOULcyFPRg
            source_type: api_record
            title: 中国历代人物传记资料库：王懷政（CBDB 21980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21980&o=json
            external_identifier: CBDB:21980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gEt885orLmp2Pf4PamP2mX
        status: active
        display_name: 王懷政
        merged_into_person_id: null
    - claim:
        id: c_zG0V004TL41pVDIx0JdT-R
        subject_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mgL569hmDTkz44QU95GEhJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4fI6yxqSDdJVSLlNYMDA0i
          claim_id: c_zG0V004TL41pVDIx0JdT-R
          source_id: s_p2J1E_lP668W33dMr6Ktsp
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1779）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_p2J1E_lP668W33dMr6Ktsp
            source_type: api_record
            title: 中国历代人物传记资料库：王懷敏（CBDB 21978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21978&o=json
            external_identifier: CBDB:21978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mgL569hmDTkz44QU95GEhJ
        status: active
        display_name: 王懷敏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼忠 | accepted |
| bio.summary | 王繼忠，遼人物。籍贯開封，入仕恩蔭、蔭補，曾任樞密使、秘書省監、轉運使。（中国历代人物传记资料库 CBDB 1779） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y2aTZYTA48iDPk6QoQ1ajM | 王珫 | accepted |
| children | p_HeMsxKqYWGTgetcTN6Vxrv | 王懷節 | accepted |
| children | p_JwF9yag4FFRDtK6wDm3RwU | 王懷德 | accepted |
| children | p_gEt885orLmp2Pf4PamP2mX | 王懷政 | accepted |
| children | p_mgL569hmDTkz44QU95GEhJ | 王懷敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷德（CBDB 21979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21979&o=json)
- [中国历代人物传记资料库：王懷節（CBDB 21977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21977&o=json)
- [中国历代人物传记资料库：王懷敏（CBDB 21978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21978&o=json)
- [中国历代人物传记资料库：王懷政（CBDB 21980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21980&o=json)
- [中国历代人物传记资料库：王繼忠（CBDB 1779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1779&o=json)

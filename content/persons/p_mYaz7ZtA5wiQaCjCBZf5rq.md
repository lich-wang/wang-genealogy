---
schema: wang-person/v1
id: p_mYaz7ZtA5wiQaCjCBZf5rq
status: active
merged_into: null
display_name: 王子蕙
cbdb_id: 205224
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4xdUGF3E2EZ79Fv4fsX2E8
        subject_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子蕙（生于1529年），史料所见人物。本项目依据《中国历代人物传记资料库：王子蕙（CBDB 205224）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_hxhWTks_-Y0UMItgdPTspy
          claim_id: c_4xdUGF3E2EZ79Fv4fsX2E8
          source_id: s_MZUvWCmLuFz6txFxYZ5Zzr
          stance: supports
          locator: CBDB:205224
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MZUvWCmLuFz6txFxYZ5Zzr
            source_type: api_record
            title: 中国历代人物传记资料库：王子蕙（CBDB 205224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205224&o=json
            external_identifier: CBDB:205224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VaYhd6FZtxeJqQmMPrKeb6
        subject_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1529年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1529-01-01
            latest: 1529-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y2Mtt9ZZHerijRdr7VxaGg
          claim_id: c_VaYhd6FZtxeJqQmMPrKeb6
          source_id: s_MZUvWCmLuFz6txFxYZ5Zzr
          stance: supports
          locator: CBDB:205224
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1529
          source:
            id: s_MZUvWCmLuFz6txFxYZ5Zzr
            source_type: api_record
            title: 中国历代人物传记资料库：王子蕙（CBDB 205224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205224&o=json
            external_identifier: CBDB:205224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VjQoReEMWkf7aJshkBsJKX
        subject_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子蕙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_So6r4mH2fAvBcgDAtPNe4P
          claim_id: c_VjQoReEMWkf7aJshkBsJKX
          source_id: s_MZUvWCmLuFz6txFxYZ5Zzr
          stance: supports
          locator: CBDB:205224
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1529
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pdZjE97jWFVXAK2j4Viu9r
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fS_N_O-lKr0eOKVF2kKHSt
          claim_id: c_pdZjE97jWFVXAK2j4Viu9r
          source_id: s_ugDRhybgZS9LAqKbX3tkbr
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ugDRhybgZS9LAqKbX3tkbr
            source_type: api_record
            title: 中国历代人物传记资料库：王紹先（CBDB 329980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329980&o=json
            external_identifier: CBDB:329980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ngRno3M6aBRj8xR4YNhnTD
        status: active
        display_name: 王紹先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_AOAbE-pqCUBYOgaKVURRhO
        subject_person_id: p_GyncCM4qXswHtDVRt1psRp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9l7oOCmNbDtpR9uti0LgS6
          claim_id: c_AOAbE-pqCUBYOgaKVURRhO
          source_id: s_zMJK9Hgo2VW5NwdTj55oMG
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zMJK9Hgo2VW5NwdTj55oMG
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 329978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329978&o=json
            external_identifier: CBDB:329978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GyncCM4qXswHtDVRt1psRp
        status: active
        display_name: 王侃
        merged_into_person_id: null
    - claim:
        id: c_ngWzpQPPpdbHJX-OGhpqRx
        subject_person_id: p_wjdnY8BzSPyC3Wya3QDsTC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WMG79KkS82YYve97tT50cr
          claim_id: c_ngWzpQPPpdbHJX-OGhpqRx
          source_id: s_mbbtQt8Kgwk5RNMCpEfR12
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mbbtQt8Kgwk5RNMCpEfR12
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 329979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329979&o=json
            external_identifier: CBDB:329979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wjdnY8BzSPyC3Wya3QDsTC
        status: active
        display_name: 王鏞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王子蕙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子蕙（生于1529年），史料所见人物。本项目依据《中国历代人物传记资料库：王子蕙（CBDB 205224）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1529年 | accepted |
| name.primary | 王子蕙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ngRno3M6aBRj8xR4YNhnTD | 王紹先 | accepted |
| ancestors | p_GyncCM4qXswHtDVRt1psRp | 王侃 | accepted |
| ancestors | p_wjdnY8BzSPyC3Wya3QDsTC | 王鏞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王侃（CBDB 329978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329978&o=json)
- [中国历代人物传记资料库：王紹先（CBDB 329980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329980&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 329979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329979&o=json)
- [中国历代人物传记资料库：王子蕙（CBDB 205224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205224&o=json)

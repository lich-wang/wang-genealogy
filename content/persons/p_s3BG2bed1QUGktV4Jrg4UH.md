---
schema: wang-person/v1
id: p_s3BG2bed1QUGktV4Jrg4UH
status: active
merged_into: null
display_name: 王學書
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2kk8jaoQxPqHBUNiYytRUN
        subject_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h7UiS1HiofsTSDkmqom1ec
          claim_id: c_2kk8jaoQxPqHBUNiYytRUN
          source_id: s_WKDr1dswcQSmJcHF8n6G5x
          stance: supports
          locator: CBDB:206005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206005）
          source: &a1
            id: s_WKDr1dswcQSmJcHF8n6G5x
            source_type: api_record
            title: 中国历代人物传记资料库：王學書（CBDB 206005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206005&o=json
            external_identifier: CBDB:206005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Wnj9yyKRDL9AKs44qgD1u4
        subject_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_94cDky2e2mfhAG85mcD6UV
          claim_id: c_Wnj9yyKRDL9AKs44qgD1u4
          source_id: s_WKDr1dswcQSmJcHF8n6G5x
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Hy97eRtQNsnjNEfNrqBUy
        subject_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPv5P2rRa9gMJ7gErg1oF5
          claim_id: c_3Hy97eRtQNsnjNEfNrqBUy
          source_id: s_WKDr1dswcQSmJcHF8n6G5x
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eWQ6QTLLyN7hWGinxgz0Nt
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f1nWjSKHOYGEbeeXaC_yYy
          claim_id: c_eWQ6QTLLyN7hWGinxgz0Nt
          source_id: s_BEDXWmZabRVmSBSSb2PEQu
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BEDXWmZabRVmSBSSb2PEQu
            source_type: api_record
            title: 中国历代人物传记资料库：王兌（CBDB 211980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211980&o=json
            external_identifier: CBDB:211980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aEy4RxmjmGXnETHRGP3pm2
        status: active
        display_name: 王兌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DnZpOfR9b4Yv4v-Co_02vR
        subject_person_id: p_HQAnGUmDhovTFseQeXia8R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cu_NiBUdvxUTk-KumTMcHB
          claim_id: c_DnZpOfR9b4Yv4v-Co_02vR
          source_id: s_rrMLuAh4LqaZbyaArhstuy
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rrMLuAh4LqaZbyaArhstuy
            source_type: api_record
            title: 中国历代人物传记资料库：王勝（CBDB 211978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211978&o=json
            external_identifier: CBDB:211978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HQAnGUmDhovTFseQeXia8R
        status: active
        display_name: 王勝
        merged_into_person_id: null
    - claim:
        id: c_RksMyzDz9Ely0Tb-nd9ofU
        subject_person_id: p_MrxHLGeDi5tr5p7y2EPuCv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-njGGN1gDpn2cwesg3CpK7
          claim_id: c_RksMyzDz9Ely0Tb-nd9ofU
          source_id: s_5h9Gdhhiw7L33Ujo7HV58k
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5h9Gdhhiw7L33Ujo7HV58k
            source_type: api_record
            title: 中国历代人物传记资料库：王山（CBDB 211979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211979&o=json
            external_identifier: CBDB:211979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MrxHLGeDi5tr5p7y2EPuCv
        status: active
        display_name: 王山
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王學書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學書 | accepted |
| birth.date | 1534年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aEy4RxmjmGXnETHRGP3pm2 | 王兌 | accepted |
| ancestors | p_HQAnGUmDhovTFseQeXia8R | 王勝 | accepted |
| ancestors | p_MrxHLGeDi5tr5p7y2EPuCv | 王山 | accepted |

## 外部来源

- [中国历代人物传记资料库：王兌（CBDB 211980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211980&o=json)
- [中国历代人物传记资料库：王山（CBDB 211979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211979&o=json)
- [中国历代人物传记资料库：王勝（CBDB 211978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211978&o=json)
- [中国历代人物传记资料库：王學書（CBDB 206005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206005&o=json)

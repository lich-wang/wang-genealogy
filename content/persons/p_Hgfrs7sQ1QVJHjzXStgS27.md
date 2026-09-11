---
schema: wang-person/v1
id: p_Hgfrs7sQ1QVJHjzXStgS27
status: active
merged_into: null
display_name: 王嬌鸞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eeNDwQSzfMk61UNFVvW5UA
        subject_person_id: p_Hgfrs7sQ1QVJHjzXStgS27
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嬌鸞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hE276FjFJkcSL7oDRDEiB5
          claim_id: c_eeNDwQSzfMk61UNFVvW5UA
          source_id: s_VtRb71HrM1BZPcRh9sD7Dc
          stance: supports
          locator: CBDB:122285
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122285）
          source: &a1
            id: s_VtRb71HrM1BZPcRh9sD7Dc
            source_type: api_record
            title: 中国历代人物传记资料库：王嬌鸞（CBDB 122285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122285&o=json
            external_identifier: CBDB:122285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C2KEPLknGsmG2soUkKBhA2
        subject_person_id: p_Hgfrs7sQ1QVJHjzXStgS27
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嬌鸞，史料所见人物。本项目依据《中国历代人物传记资料库：王嬌鸞（CBDB 122285）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cw3rziF4LzCnP8mVCcXjQs
          claim_id: c_C2KEPLknGsmG2soUkKBhA2
          source_id: s_VtRb71HrM1BZPcRh9sD7Dc
          stance: supports
          locator: CBDB:122285
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M-cflAnnXOD75mXRRIyFV3
        subject_person_id: p_K9CV69LndWNdhX8Sejx4tC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hgfrs7sQ1QVJHjzXStgS27
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AZNHqroPkbf9n0oFmYlMxa
          claim_id: c_M-cflAnnXOD75mXRRIyFV3
          source_id: s_VtRb71HrM1BZPcRh9sD7Dc
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4689：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_K9CV69LndWNdhX8Sejx4tC
        status: active
        display_name: 王士龍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CfobG3omT7ES71p_fDU12E
        subject_person_id: p_Hgfrs7sQ1QVJHjzXStgS27
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_89VYVn1qSaPdbuP2RwCZ4C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qufqH3Xl3GQg12_p1k3myR
          claim_id: c_CfobG3omT7ES71p_fDU12E
          source_id: s_e2Ysi-zQdT2Hhtns6XpNWP
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4689：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e2Ysi-zQdT2Hhtns6XpNWP
            source_type: api_record
            title: 中国历代人物传记资料库：周庭璋（CBDB 122297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122297&o=json
            external_identifier: CBDB:122297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_89VYVn1qSaPdbuP2RwCZ4C
        status: active
        display_name: 周庭璋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王嬌鸞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嬌鸞 | accepted |
| bio.summary | 王嬌鸞，史料所见人物。本项目依据《中国历代人物传记资料库：王嬌鸞（CBDB 122285）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_K9CV69LndWNdhX8Sejx4tC | 王士龍 | accepted |
| spouses | p_89VYVn1qSaPdbuP2RwCZ4C | 周庭璋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嬌鸞（CBDB 122285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122285&o=json)
- [中国历代人物传记资料库：周庭璋（CBDB 122297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122297&o=json)

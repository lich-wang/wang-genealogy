---
schema: wang-person/v1
id: p_Q29adPUD8QELC98tWHj9Az
status: active
merged_into: null
display_name: 王懋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y9dGGiBE3vBDAZXSV87xus
        subject_person_id: p_Q29adPUD8QELC98tWHj9Az
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TcHr57GBSKyNZT2tAHPkqF
          claim_id: c_y9dGGiBE3vBDAZXSV87xus
          source_id: s_c2bVhiMYoigyzehndkgzZC
          stance: supports
          locator: CBDB:37772
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37772）
          source: &a1
            id: s_c2bVhiMYoigyzehndkgzZC
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 37772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37772&o=json
            external_identifier: CBDB:37772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.249Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vn7cjyZEj56rspR4vQcmyT
        subject_person_id: p_Q29adPUD8QELC98tWHj9Az
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9S12gjGvkncL2xQK2FNmcF
          claim_id: c_Vn7cjyZEj56rspR4vQcmyT
          source_id: s_c2bVhiMYoigyzehndkgzZC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yBJfr2wp05oGMCbiDhE0l7
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q29adPUD8QELC98tWHj9Az
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qt0W3Q50ZEVO6Z5QXr2LmY
          claim_id: c_yBJfr2wp05oGMCbiDhE0l7
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: 宋人傳記資料索引(電子版)：玄孫;四世孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZbRR2qinMrmQKSJZ5nhy4i
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：周氏（37792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37792&o=json
            external_identifier: CBDB:37792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_tJA4SGo5rnDTPZB6FnPcWP
        status: active
        display_name: 周氏
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_tJA4SGo5rnDTPZB6FnPcWP | 周氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 37772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37772&o=json)
- [CBDB 中国历代人物传记资料库：周氏（37792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37792&o=json)

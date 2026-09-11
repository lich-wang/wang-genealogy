---
schema: wang-person/v1
id: p_Yh3spPNj3kzMyfpBR3Y2rm
status: active
merged_into: null
display_name: 王守素
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y16LJ1hFSHFL6uoQynsKMx
        subject_person_id: p_Yh3spPNj3kzMyfpBR3Y2rm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T3XRMoyS9WAFyA5CW5TyA2
          claim_id: c_y16LJ1hFSHFL6uoQynsKMx
          source_id: s_pt7DmP3CMLL3dX7J4J94SN
          stance: supports
          locator: CBDB:101164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101164）
          source: &a1
            id: s_pt7DmP3CMLL3dX7J4J94SN
            source_type: api_record
            title: 中国历代人物传记资料库：王守素（CBDB 101164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101164&o=json
            external_identifier: CBDB:101164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kpURtzg6Fnvji6SZrrGbcp
        subject_person_id: p_Yh3spPNj3kzMyfpBR3Y2rm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cBj8Ysh2m8Puu3ZiKgNFyb
          claim_id: c_kpURtzg6Fnvji6SZrrGbcp
          source_id: s_pt7DmP3CMLL3dX7J4J94SN
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
  spouses:
    - claim:
        id: c_KT9kpJSmek5IaKHxD2Zb51
        subject_person_id: p_Yh3spPNj3kzMyfpBR3Y2rm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r161R8dg7K9UdJxPsa1hLG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IwbC14QARSHhbD0s60ddOn
          claim_id: c_KT9kpJSmek5IaKHxD2Zb51
          source_id: s_3W3_vwckLgn65iki8amHpx
          stance: supports
          locator: 元人傳記資料索引，1000：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3W3_vwckLgn65iki8amHpx
            source_type: api_record
            title: 中国历代人物传记资料库：丁野鶴（CBDB 100278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100278&o=json
            external_identifier: CBDB:100278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r161R8dg7K9UdJxPsa1hLG
        status: active
        display_name: 丁野鶴
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王守素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守素 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_r161R8dg7K9UdJxPsa1hLG | 丁野鶴 | accepted |

## 外部来源

- [中国历代人物传记资料库：丁野鶴（CBDB 100278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100278&o=json)
- [中国历代人物传记资料库：王守素（CBDB 101164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101164&o=json)

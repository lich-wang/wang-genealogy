---
schema: wang-person/v1
id: p_DmyBf1m5JW2uyd4nk8bPcS
status: active
merged_into: null
display_name: 王揆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_duY8n4yaGGCqCdXJZRkDRP
        subject_person_id: p_DmyBf1m5JW2uyd4nk8bPcS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gzhnwkQrYM9yFNMgY4JEgN
          claim_id: c_duY8n4yaGGCqCdXJZRkDRP
          source_id: s_Yix4nmDZF3zkBhhHyEJmpw
          stance: supports
          locator: CBDB:35317
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35317）
          source: &a1
            id: s_Yix4nmDZF3zkBhhHyEJmpw
            source_type: api_record
            title: 中国历代人物传记资料库：王揆（CBDB 35317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35317&o=json
            external_identifier: CBDB:35317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.127Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uZjKSK4rZyZM3i6fLCPRwG
        subject_person_id: p_DmyBf1m5JW2uyd4nk8bPcS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揆，元人物。籍贯富州。（中国历代人物传记资料库 CBDB 35317）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k0jAGyG2mjIF_fs4-ZFa1l
          claim_id: c_uZjKSK4rZyZM3i6fLCPRwG
          source_id: s_Yix4nmDZF3zkBhhHyEJmpw
          stance: supports
          locator: CBDB:35317
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0mSAUMBi2Zmz94HMPoNBte
        subject_person_id: p_sBhQEJ3nTkHUbcPY7uuMe4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DmyBf1m5JW2uyd4nk8bPcS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LpmL3rUcc5uDzbNOcfd4oW
          claim_id: c_0mSAUMBi2Zmz94HMPoNBte
          source_id: s_odTLzngxUL3D4UTBZ0kH8n
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35303）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_odTLzngxUL3D4UTBZ0kH8n
            source_type: api_record
            title: 中国历代人物传记资料库：王揆（CBDB 35317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35317&o=json
            external_identifier: CBDB:35317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sBhQEJ3nTkHUbcPY7uuMe4
        status: active
        display_name: 王義端
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王揆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王揆 | accepted |
| bio.summary | 王揆，元人物。籍贯富州。（中国历代人物传记资料库 CBDB 35317） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sBhQEJ3nTkHUbcPY7uuMe4 | 王義端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王揆（CBDB 35317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35317&o=json)

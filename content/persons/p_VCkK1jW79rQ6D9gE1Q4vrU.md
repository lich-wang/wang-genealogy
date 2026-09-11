---
schema: wang-person/v1
id: p_VCkK1jW79rQ6D9gE1Q4vrU
status: active
merged_into: null
display_name: 王羲之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vZz9jXdoz16BnsVyp9NijF
        subject_person_id: p_VCkK1jW79rQ6D9gE1Q4vrU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羲之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NGhiNL1NEEC8C7iWcb8qFH
          claim_id: c_vZz9jXdoz16BnsVyp9NijF
          source_id: s_xKJPExyqFwXM92Vnbternm
          stance: supports
          locator: CBDB:25793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25793）
          source: &a1
            id: s_xKJPExyqFwXM92Vnbternm
            source_type: api_record
            title: 中国历代人物传记资料库：王羲之（CBDB 25793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25793&o=json
            external_identifier: CBDB:25793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Lqdhy6MEQePKHYw8SgJdtd
        subject_person_id: p_VCkK1jW79rQ6D9gE1Q4vrU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 321年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wBfA2osyEb44sp9ykFTKrw
          claim_id: c_Lqdhy6MEQePKHYw8SgJdtd
          source_id: s_xKJPExyqFwXM92Vnbternm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_G48vJsKEf5iYE735EcF36v
        subject_person_id: p_VCkK1jW79rQ6D9gE1Q4vrU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 379年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ATV1BgsbFB7ayFJfJZBKd
          claim_id: c_G48vJsKEf5iYE735EcF36v
          source_id: s_xKJPExyqFwXM92Vnbternm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PH2o9Bxrv28t4SsB3U14ku
        subject_person_id: p_VCkK1jW79rQ6D9gE1Q4vrU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羲之（321年—379年），東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25793）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sl4D0EkqD1DM8dnbfdJnez
          claim_id: c_PH2o9Bxrv28t4SsB3U14ku
          source_id: s_xKJPExyqFwXM92Vnbternm
          stance: supports
          locator: CBDB:25793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BADVkloT39Rgdb9SrsE1sb
        subject_person_id: p_VCkK1jW79rQ6D9gE1Q4vrU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gE3CnwapCniUCHrAKzxaDg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_30Xq2bbaPLccoF8PFfqhxB
          claim_id: c_BADVkloT39Rgdb9SrsE1sb
          source_id: s_DMWKppxrZCxAwAhDa6vJx2
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2002：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DMWKppxrZCxAwAhDa6vJx2
            source_type: api_record
            title: 中国历代人物传记资料库：王獻之（CBDB 135441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135441&o=json
            external_identifier: CBDB:135441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gE3CnwapCniUCHrAKzxaDg
        status: active
        display_name: 王獻之
        merged_into_person_id: null
    - claim:
        id: c_vIOQvS8shFR9yoLvFugEuo
        subject_person_id: p_VCkK1jW79rQ6D9gE1Q4vrU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sP9ryPn6dBbmpQnxPNMPhv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pw-yBFB-_U5ysZULQrMeMx
          claim_id: c_vIOQvS8shFR9yoLvFugEuo
          source_id: s_fJntZw9Gt6yhZohKxv3V4N
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2001, HuWenKai #10：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fJntZw9Gt6yhZohKxv3V4N
            source_type: api_record
            title: 中国历代人物传记资料库：王凝之（CBDB 134837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134837&o=json
            external_identifier: CBDB:134837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sP9ryPn6dBbmpQnxPNMPhv
        status: active
        display_name: 王凝之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王羲之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羲之 | accepted |
| birth.date | 321年 | accepted |
| death.date | 379年 | accepted |
| bio.summary | 王羲之（321年—379年），東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25793） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gE3CnwapCniUCHrAKzxaDg | 王獻之 | accepted |
| children | p_sP9ryPn6dBbmpQnxPNMPhv | 王凝之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王凝之（CBDB 134837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134837&o=json)
- [中国历代人物传记资料库：王羲之（CBDB 25793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25793&o=json)
- [中国历代人物传记资料库：王獻之（CBDB 135441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135441&o=json)

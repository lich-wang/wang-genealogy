---
schema: wang-person/v1
id: p_9tgg4HqDod1Cfiq1MGzU47
status: active
merged_into: null
display_name: 王穉登
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hZPD8qWu4SA3q5VLHeAtmQ
        subject_person_id: p_9tgg4HqDod1Cfiq1MGzU47
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穉登
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dCEn7g8aHT7dDKiRqa11mX
          claim_id: c_hZPD8qWu4SA3q5VLHeAtmQ
          source_id: s_PVTyHKsx3NiF8Yzx6xWA1X
          stance: supports
          locator: CBDB:35040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35040）
          source: &a1
            id: s_PVTyHKsx3NiF8Yzx6xWA1X
            source_type: api_record
            title: 中国历代人物传记资料库：王穉登（CBDB 35040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35040&o=json
            external_identifier: CBDB:35040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Pt1ux5B4YcP9dt2mJs23kU
        subject_person_id: p_9tgg4HqDod1Cfiq1MGzU47
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1535年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dZN2zmsw6FEg7CBzG49rJH
          claim_id: c_Pt1ux5B4YcP9dt2mJs23kU
          source_id: s_PVTyHKsx3NiF8Yzx6xWA1X
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
        id: c_chZEs2tXr1NT9ppddBojaF
        subject_person_id: p_9tgg4HqDod1Cfiq1MGzU47
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1612年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6znqFzDHug3QRz6KY8tyHa
          claim_id: c_chZEs2tXr1NT9ppddBojaF
          source_id: s_PVTyHKsx3NiF8Yzx6xWA1X
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
        id: c_cKwFc6Nqac2wpXHhjLmagJ
        subject_person_id: p_9tgg4HqDod1Cfiq1MGzU47
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穉登（1535年—1612年），明人物。籍贯蘇州府，身份为布衣、士人。（中国历代人物传记资料库 CBDB 35040）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sMI3_GFDJMIhkh_p06DS7V
          claim_id: c_cKwFc6Nqac2wpXHhjLmagJ
          source_id: s_PVTyHKsx3NiF8Yzx6xWA1X
          stance: supports
          locator: CBDB:35040
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YEeS7kJq7MzA6rm3EJAZ2T
        subject_person_id: p_9tgg4HqDod1Cfiq1MGzU47
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T5kBzAsTPzyEtNKUHatBfn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4qd2i_GAkmFgJTHqllWgx4
          claim_id: c_YEeS7kJq7MzA6rm3EJAZ2T
          source_id: s_PVTyHKsx3NiF8Yzx6xWA1X
          stance: supports
          locator: CBDB 双向互证（子 王留 ⇄ 父 王穉登）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_T5kBzAsTPzyEtNKUHatBfn
        status: active
        display_name: 王留
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王穉登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穉登 | accepted |
| birth.date | 1535年 | accepted |
| death.date | 1612年 | accepted |
| bio.summary | 王穉登（1535年—1612年），明人物。籍贯蘇州府，身份为布衣、士人。（中国历代人物传记资料库 CBDB 35040） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_T5kBzAsTPzyEtNKUHatBfn | 王留 | accepted |

## 外部来源

- [中国历代人物传记资料库：王穉登（CBDB 35040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35040&o=json)

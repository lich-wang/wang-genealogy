---
schema: wang-person/v1
id: p_wKvGTskPwF5yoaMhpXH6fM
status: active
merged_into: null
display_name: 王伯大
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZXxDCU6B5XM8wfcptpiLU8
        subject_person_id: p_wKvGTskPwF5yoaMhpXH6fM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vV33ASJPoJzr2VGHizWqJ7
          claim_id: c_ZXxDCU6B5XM8wfcptpiLU8
          source_id: s_jCBCztVqG8m6WoMv1J6xwk
          stance: supports
          locator: CBDB:20099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（20099）
          source: &a1
            id: s_jCBCztVqG8m6WoMv1J6xwk
            source_type: api_record
            title: 中国历代人物传记资料库：王伯大（CBDB 20099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20099&o=json
            external_identifier: CBDB:20099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mh549an3cXq8QYkhsqBCCw
        subject_person_id: p_wKvGTskPwF5yoaMhpXH6fM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1253年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YSY525WgGMmNRffo1o6yeG
          claim_id: c_mh549an3cXq8QYkhsqBCCw
          source_id: s_jCBCztVqG8m6WoMv1J6xwk
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
        id: c_hYKxHSkV1GyqTEBW6dgDaX
        subject_person_id: p_wKvGTskPwF5yoaMhpXH6fM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯大（卒于1253年），宋人物。籍贯長溪，身份为良吏;循吏，入仕進士，曾任參知政事、輕車都尉、提舉常平茶鹽公事。（中国历代人物传记资料库 CBDB 20099）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QqhQUjovIES5VTeVRMpYs-
          claim_id: c_hYKxHSkV1GyqTEBW6dgDaX
          source_id: s_jCBCztVqG8m6WoMv1J6xwk
          stance: supports
          locator: CBDB:20099
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AtZIoNbOaA8fAd4Oc14Bwm
        subject_person_id: p_g3jC5v38CshwF6ULsWugu8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wKvGTskPwF5yoaMhpXH6fM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QYa1hVlyaSA3l5Frgl3dEK
          claim_id: c_AtZIoNbOaA8fAd4Oc14Bwm
          source_id: s_1FyAe3rC6ErjuS6LgiXmy4
          stance: supports
          locator: CBDB 双向互证（子 王伯大 ⇄ 父 王萬全）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_1FyAe3rC6ErjuS6LgiXmy4
            source_type: api_record
            title: 中国历代人物传记资料库：王萬全（CBDB 20097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20097&o=json
            external_identifier: CBDB:20097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_g3jC5v38CshwF6ULsWugu8
        status: active
        display_name: 王萬全
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯大 | accepted |
| death.date | 1253年 | accepted |
| bio.summary | 王伯大（卒于1253年），宋人物。籍贯長溪，身份为良吏;循吏，入仕進士，曾任參知政事、輕車都尉、提舉常平茶鹽公事。（中国历代人物传记资料库 CBDB 20099） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g3jC5v38CshwF6ULsWugu8 | 王萬全 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯大（CBDB 20099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20099&o=json)
- [中国历代人物传记资料库：王萬全（CBDB 20097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20097&o=json)

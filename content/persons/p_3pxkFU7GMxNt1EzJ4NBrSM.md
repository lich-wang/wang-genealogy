---
schema: wang-person/v1
id: p_3pxkFU7GMxNt1EzJ4NBrSM
status: active
merged_into: null
display_name: 朱能
revision: 1
cbdb_id: 66686
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_0nO09ciNycYBDNQCkcHke-
        subject_person_id: p_3pxkFU7GMxNt1EzJ4NBrSM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱能（1370—1406），明人物。籍贯懷遠，身份为熟諳兵法韜略、軍事家，曾任都指揮僉事、都指揮同知、督府左都督。（中国历代人物传记资料库 CBDB 66686）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FsPc9G5MmXUkV3A0oy8P7r
          claim_id: c_0nO09ciNycYBDNQCkcHke-
          source_id: s_yKNMguFAqOU4u2zu2IhMH-
          stance: supports
          locator: CBDB:66686
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yKNMguFAqOU4u2zu2IhMH-
            source_type: api_record
            title: 中国历代人物传记资料库：朱能（CBDB 66686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66686&o=json
            external_identifier: CBDB:66686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LZAaQSadTR6GMdpMi0Ps9v
        subject_person_id: p_3pxkFU7GMxNt1EzJ4NBrSM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱能
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wLnwNDrx8Ob9HnBcnFrD01
          claim_id: c_LZAaQSadTR6GMdpMi0Ps9v
          source_id: s_yKNMguFAqOU4u2zu2IhMH-
          stance: supports
          locator: CBDB:66686
          quotation: null
          interpretation_note: CBDB 明确记录的王妙善配偶
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
        id: c_SODbpAhAhoRYK8jX1wZ02j
        subject_person_id: p_4dcEpHoVA8KYoDzrfSwC9t
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3pxkFU7GMxNt1EzJ4NBrSM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p0Pu1LFlKRKBdwo5E5DPgu
          claim_id: c_SODbpAhAhoRYK8jX1wZ02j
          source_id: s_yKNMguFAqOU4u2zu2IhMH-
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），10268：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4dcEpHoVA8KYoDzrfSwC9t
        status: active
        display_name: 王妙善
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 朱能（1370—1406），明人物。籍贯懷遠，身份为熟諳兵法韜略、軍事家，曾任都指揮僉事、都指揮同知、督府左都督。（中国历代人物传记资料库 CBDB 66686） | accepted |
| name.primary | 朱能 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4dcEpHoVA8KYoDzrfSwC9t | 王妙善 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱能（CBDB 66686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66686&o=json)

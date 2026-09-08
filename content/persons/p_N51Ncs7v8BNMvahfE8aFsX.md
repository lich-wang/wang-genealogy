---
schema: wang-person/v1
id: p_N51Ncs7v8BNMvahfE8aFsX
status: active
merged_into: null
display_name: 张府君
cbdb_id: 162327
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TYtdPykgR7Otw0n-vEiLYH
        subject_person_id: p_N51Ncs7v8BNMvahfE8aFsX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张府君，王氏夫。维基数据以独立条目 Q65806936 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ostlfuqvtTmUm6Q1sCqlKd
          claim_id: c_TYtdPykgR7Otw0n-vEiLYH
          source_id: s_CywtWsgnJRXc3Xx5ARtbmz
          stance: supports
          locator: Q65806936
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_CywtWsgnJRXc3Xx5ARtbmz
            source_type: api_record
            title: 维基数据：张府君（Q65806936）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65806936
            external_identifier: Q65806936
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.431Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LfNqy6Xnnt96L1vRBV1iwi
        subject_person_id: p_N51Ncs7v8BNMvahfE8aFsX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张府君
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CFhyJ9buhdtkL73ibpG5xG
          claim_id: c_LfNqy6Xnnt96L1vRBV1iwi
          source_id: s_8jbB7Q5nRGu4GvVRNSzANh
          stance: supports
          locator: Q65806936
          quotation: null
          interpretation_note: null
          source:
            id: s_8jbB7Q5nRGu4GvVRNSzANh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張府君（162327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162327&o=json
            external_identifier: CBDB:162327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.594Z
            metadata_json: null
        - id: cs_HL71nFvsKkaV8LA4726HRQ
          claim_id: c_LfNqy6Xnnt96L1vRBV1iwi
          source_id: s_CywtWsgnJRXc3Xx5ARtbmz
          stance: supports
          locator: Q65806936
          quotation: null
          interpretation_note: null
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
        id: c_FWvKR53yPrGCrwCnTG9CMF
        subject_person_id: p_N51Ncs7v8BNMvahfE8aFsX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pRjGYWdJbBfU6XeVQFfhre
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_41K642DUenViBRWyaJbQ28
          claim_id: c_FWvKR53yPrGCrwCnTG9CMF
          source_id: s_r7H32GbHUPLBw16hbysxBV
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_r7H32GbHUPLBw16hbysxBV
            source_type: api_record
            title: 维基数据：王氏（Q65803421）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803421
            external_identifier: Q65803421
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:06.357Z
            metadata_json: null
        - id: cs_i8yK9bTJpHiaLSGNMNfFTC
          claim_id: c_FWvKR53yPrGCrwCnTG9CMF
          source_id: s_ZeMytsihpgExDAqJChsrfe
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌彙編續集
          source:
            id: s_ZeMytsihpgExDAqJChsrfe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（142553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142553&o=json
            external_identifier: CBDB:142553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:06.514Z
            metadata_json: null
        - id: cs_a6amtERQc3rBVPVgkay3ua
          claim_id: c_FWvKR53yPrGCrwCnTG9CMF
          source_id: s_CywtWsgnJRXc3Xx5ARtbmz
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_CywtWsgnJRXc3Xx5ARtbmz
            source_type: api_record
            title: 维基数据：张府君（Q65806936）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65806936
            external_identifier: Q65806936
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.431Z
            metadata_json: null
      object_person:
        id: p_pRjGYWdJbBfU6XeVQFfhre
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 张府君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 张府君，王氏夫。维基数据以独立条目 Q65806936 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 张府君 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_pRjGYWdJbBfU6XeVQFfhre | 王氏 | accepted |

## 外部来源

- [维基数据：王氏（Q65803421）](https://www.wikidata.org/wiki/Q65803421)
- [维基数据：张府君（Q65806936）](https://www.wikidata.org/wiki/Q65806936)
- [CBDB 中国历代人物传记资料库：王氏（142553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142553&o=json)
- [CBDB 中国历代人物传记资料库：張府君（162327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162327&o=json)

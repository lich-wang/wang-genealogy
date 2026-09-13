---
schema: wang-person/v1
id: p_LmvwBv9Vm8BVkEPgL1A7GT
status: active
merged_into: null
display_name: 王寀
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z7rRA4kEt5L8vPyG91hfyW
        subject_person_id: p_LmvwBv9Vm8BVkEPgL1A7GT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VDBGe57Cacpihn8S3L1yL4
          claim_id: c_Z7rRA4kEt5L8vPyG91hfyW
          source_id: s_SuP77rXdnxgEoJn67ps2ms
          stance: supports
          locator: CBDB:12047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12047）
          source: &a1
            id: s_SuP77rXdnxgEoJn67ps2ms
            source_type: api_record
            title: 中国历代人物传记资料库：王寀（CBDB 12047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12047&o=json
            external_identifier: CBDB:12047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fVPEPPye1HJihoEk3PeABa
        subject_person_id: p_LmvwBv9Vm8BVkEPgL1A7GT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1078年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9P5e4JSfufYVWHC7wZoiY2
          claim_id: c_fVPEPPye1HJihoEk3PeABa
          source_id: s_SuP77rXdnxgEoJn67ps2ms
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
        id: c_APZ1zgJUgrWZhRBjvbzhHC
        subject_person_id: p_LmvwBv9Vm8BVkEPgL1A7GT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1118年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gmwfJ4Ec49dE5PBEVPNMNs
          claim_id: c_APZ1zgJUgrWZhRBjvbzhHC
          source_id: s_SuP77rXdnxgEoJn67ps2ms
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
        id: c_88LeKLCyNwzGhtqTJMahDP
        subject_person_id: p_LmvwBv9Vm8BVkEPgL1A7GT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寀（1078年—1118年），宋人物。籍贯德安，身份为煉丹家、詞人，入仕進士，曾任上輕車都尉。（中国历代人物传记资料库 CBDB 12047）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ATxlEyIGJsPGn9sta3n6pG
          claim_id: c_88LeKLCyNwzGhtqTJMahDP
          source_id: s_SuP77rXdnxgEoJn67ps2ms
          stance: supports
          locator: CBDB:12047
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CvIJ8nLv90dO8104do0P8y
        subject_person_id: p_5QEFg5NX8fdCTZoicRnKAT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LmvwBv9Vm8BVkEPgL1A7GT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Qk3xsC2LI6Y37OcO9TJtb
          claim_id: c_CvIJ8nLv90dO8104do0P8y
          source_id: s_SuP77rXdnxgEoJn67ps2ms
          stance: supports
          locator: CBDB 双向互证（父 王韶 ⇄ 子 王寀）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_5QEFg5NX8fdCTZoicRnKAT
        status: active
        display_name: 王韶
        merged_into_person_id: null
  children:
    - claim:
        id: c_h3x0P6uTXjc8YDCvnPwqtH
        subject_person_id: p_LmvwBv9Vm8BVkEPgL1A7GT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dyP3M6jKAWf84mA6g7crLs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_apFg0F4yRKhEeyfYzQp0WI
          claim_id: c_h3x0P6uTXjc8YDCvnPwqtH
          source_id: s_T2Wc2EYYQNBLKSamaLsReD
          stance: supports
          locator: CBDB 双向互证（父 王寀 ⇄ 子 王彥融）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_T2Wc2EYYQNBLKSamaLsReD
            source_type: api_record
            title: 中国历代人物传记资料库：王彥融（CBDB 1927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1927&o=json
            external_identifier: CBDB:1927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dyP3M6jKAWf84mA6g7crLs
        status: active
        display_name: 王彥融
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ch4WSZwoeM4ioMVup6I8-X
        subject_person_id: p_LmvwBv9Vm8BVkEPgL1A7GT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_of-NyooUxO8xkavIccgT6r
          claim_id: c_ch4WSZwoeM4ioMVup6I8-X
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JiBcFyQDVHFNQoKUexCzy3
            source_type: api_record
            title: 中国历代人物传记资料库：王萬樞（CBDB 12051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12051&o=json
            external_identifier: CBDB:12051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i5579JHLY2cRuS7YHKZJ5T
        status: active
        display_name: 王萬樞
        merged_into_person_id: null
  other: []
---

# 王寀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寀 | accepted |
| birth.date | 1078年 | accepted |
| death.date | 1118年 | accepted |
| bio.summary | 王寀（1078年—1118年），宋人物。籍贯德安，身份为煉丹家、詞人，入仕進士，曾任上輕車都尉。（中国历代人物传记资料库 CBDB 12047） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5QEFg5NX8fdCTZoicRnKAT | 王韶 | accepted |
| children | p_dyP3M6jKAWf84mA6g7crLs | 王彥融 | accepted |
| descendants | p_i5579JHLY2cRuS7YHKZJ5T | 王萬樞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寀（CBDB 12047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12047&o=json)
- [中国历代人物传记资料库：王萬樞（CBDB 12051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12051&o=json)
- [中国历代人物传记资料库：王彥融（CBDB 1927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1927&o=json)

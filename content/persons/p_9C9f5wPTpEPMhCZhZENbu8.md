---
schema: wang-person/v1
id: p_9C9f5wPTpEPMhCZhZENbu8
status: active
merged_into: null
display_name: 王尚喆
cbdb_id: 26512
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JPxTtjsQA5Pj374D2FHCBc
        subject_person_id: p_9C9f5wPTpEPMhCZhZENbu8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚喆（生于1007年），宋人物。籍贯洛陽，入仕進士，曾任著作佐郎。（中国历代人物传记资料库 CBDB 26512）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_p5qQbIrmp9osPUdvhTFWPD
          claim_id: c_JPxTtjsQA5Pj374D2FHCBc
          source_id: s_tVM2SnPyGczAnwR3vj3WaY
          stance: supports
          locator: CBDB:26512
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tVM2SnPyGczAnwR3vj3WaY
            source_type: api_record
            title: 中国历代人物传记资料库：王尚喆（CBDB 26512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26512&o=json
            external_identifier: CBDB:26512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5QD5B3FLXtgsxyveJd5er2
        subject_person_id: p_9C9f5wPTpEPMhCZhZENbu8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1007年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1007-01-01
            latest: 1007-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uYXtPVCZGeUBQKjcFTjKC9
          claim_id: c_5QD5B3FLXtgsxyveJd5er2
          source_id: s_tVM2SnPyGczAnwR3vj3WaY
          stance: supports
          locator: CBDB:26512
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1007
          source:
            id: s_tVM2SnPyGczAnwR3vj3WaY
            source_type: api_record
            title: 中国历代人物传记资料库：王尚喆（CBDB 26512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26512&o=json
            external_identifier: CBDB:26512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QP1rvH5eB7zKkQr91VaFuo
        subject_person_id: p_9C9f5wPTpEPMhCZhZENbu8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚喆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ce6e2Jf96gcERen7HPqGgG
          claim_id: c_QP1rvH5eB7zKkQr91VaFuo
          source_id: s_tVM2SnPyGczAnwR3vj3WaY
          stance: supports
          locator: CBDB:26512
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1007
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NjRY12cDRWmXXnucvvfpfH
        subject_person_id: p_3JKfW8zU9aAN6L1FmP3X5i
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9C9f5wPTpEPMhCZhZENbu8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O-lpFNMCcikyB47VV6hkYz
          claim_id: c_NjRY12cDRWmXXnucvvfpfH
          source_id: s_TuoT1Xx4PWRSkynDL00V2x
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 26512 王尚喆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TuoT1Xx4PWRSkynDL00V2x
            source_type: api_record
            title: 中国历代人物传记资料库：王尚恭（CBDB 26511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26511&o=json
            external_identifier: CBDB:26511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3JKfW8zU9aAN6L1FmP3X5i
        status: active
        display_name: 王尚恭
        merged_into_person_id: null
---

# 王尚喆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王尚喆（生于1007年），宋人物。籍贯洛陽，入仕進士，曾任著作佐郎。（中国历代人物传记资料库 CBDB 26512） | accepted |
| birth.date | 1007年 | accepted |
| name.primary | 王尚喆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_3JKfW8zU9aAN6L1FmP3X5i | 王尚恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚恭（CBDB 26511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26511&o=json)
- [中国历代人物传记资料库：王尚喆（CBDB 26512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26512&o=json)

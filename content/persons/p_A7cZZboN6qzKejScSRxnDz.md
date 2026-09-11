---
schema: wang-person/v1
id: p_A7cZZboN6qzKejScSRxnDz
status: active
merged_into: null
display_name: 王進寶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mr5kk1CBMx2cabhWU3yim9
        subject_person_id: p_A7cZZboN6qzKejScSRxnDz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qY2LrtoSbziHLWJRtJguEq
          claim_id: c_Mr5kk1CBMx2cabhWU3yim9
          source_id: s_YFUqUDzjxaZ35dfCSQ7F2k
          stance: supports
          locator: CBDB:57194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57194）
          source: &a1
            id: s_YFUqUDzjxaZ35dfCSQ7F2k
            source_type: api_record
            title: 中国历代人物传记资料库：王進寶（CBDB 57194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57194&o=json
            external_identifier: CBDB:57194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TQNkztKDtPhGJwKyKYanig
        subject_person_id: p_A7cZZboN6qzKejScSRxnDz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1626年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_612XKquBLt19dKq3e4qEMY
          claim_id: c_TQNkztKDtPhGJwKyKYanig
          source_id: s_YFUqUDzjxaZ35dfCSQ7F2k
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
        id: c_8rdGL2BJyxC99HP9DKDmQj
        subject_person_id: p_A7cZZboN6qzKejScSRxnDz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1685年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BCKoEpb3o9tqDTi1bGSNmF
          claim_id: c_8rdGL2BJyxC99HP9DKDmQj
          source_id: s_YFUqUDzjxaZ35dfCSQ7F2k
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
        id: c_PyYWaJyCdMX71LXPgbQbWN
        subject_person_id: p_A7cZZboN6qzKejScSRxnDz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進寶（1626年—1685年），清人物。籍贯靖虜衛，曾任標中營遊擊、奮威將軍、提標左營遊擊。（中国历代人物传记资料库 CBDB 57194）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EuPzR0e17a3kh486gYtVwQ
          claim_id: c_PyYWaJyCdMX71LXPgbQbWN
          source_id: s_YFUqUDzjxaZ35dfCSQ7F2k
          stance: supports
          locator: CBDB:57194
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  other: []
---

# 王進寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進寶 | accepted |
| birth.date | 1626年 | accepted |
| death.date | 1685年 | accepted |
| bio.summary | 王進寶（1626年—1685年），清人物。籍贯靖虜衛，曾任標中營遊擊、奮威將軍、提標左營遊擊。（中国历代人物传记资料库 CBDB 57194） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進寶（CBDB 57194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57194&o=json)

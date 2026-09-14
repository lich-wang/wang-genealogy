---
schema: wang-person/v1
id: p_uJ8EyK9tK2GQ4mFQmLF235
status: active
merged_into: null
display_name: 王棟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ujx5knF9FNfUGabHrWAMEq
        subject_person_id: p_uJ8EyK9tK2GQ4mFQmLF235
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q1kWsGM64gt9SGaZZcNv5y
          claim_id: c_ujx5knF9FNfUGabHrWAMEq
          source_id: s_vBNX7rBREfwDbqyF8Chjpn
          stance: supports
          locator: CBDB:283936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283936）
          source: &a1
            id: s_vBNX7rBREfwDbqyF8Chjpn
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283936&o=json
            external_identifier: CBDB:283936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.168Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cJ8MF8A1XxoqmQ4yG5DtcN
        subject_person_id: p_uJ8EyK9tK2GQ4mFQmLF235
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟，明人物。正德十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 283936）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RIhQORvrDNM675LErqcNGL
          claim_id: c_cJ8MF8A1XxoqmQ4yG5DtcN
          source_id: s_vBNX7rBREfwDbqyF8Chjpn
          stance: supports
          locator: CBDB:283936
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DsTCwuARR3dY_-5-QeFBO8
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uJ8EyK9tK2GQ4mFQmLF235
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CC6iffpg4npqZgu_lVRCxA
          claim_id: c_DsTCwuARR3dY_-5-QeFBO8
          source_id: s_Zi2V_5YbqusMEYMFCB6mfn
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王棟 与 王同祖 为同胞（CBDB 记「弟」），王同祖 之父／母即 王棟 之父／母。
          source:
            id: s_Zi2V_5YbqusMEYMFCB6mfn
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283936&o=json
            external_identifier: CBDB:283936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XDFGKptw1EWAKBbTEUcvCN
        status: active
        display_name: 王銀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iaimx3_10n-tHN3IL7MCnT
        subject_person_id: p_uJ8EyK9tK2GQ4mFQmLF235
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aq-mrE-stIf7_HR7etzP2o
          claim_id: c_iaimx3_10n-tHN3IL7MCnT
          source_id: s_Zi2V_5YbqusMEYMFCB6mfn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Zi2V_5YbqusMEYMFCB6mfn
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283936&o=json
            external_identifier: CBDB:283936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uQx6CsD653L6hRpaz3mPf9
        status: active
        display_name: 王同祖
        merged_into_person_id: null
---

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | 王棟，明人物。正德十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 283936） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XDFGKptw1EWAKBbTEUcvCN | 王銀 | accepted |
| other | p_uQx6CsD653L6hRpaz3mPf9 | 王同祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 283936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283936&o=json)

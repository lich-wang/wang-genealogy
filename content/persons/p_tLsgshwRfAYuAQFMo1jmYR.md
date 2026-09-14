---
schema: wang-person/v1
id: p_tLsgshwRfAYuAQFMo1jmYR
status: active
merged_into: null
display_name: 王福兆
cbdb_id: 225801
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AnA3a4QV4f1KmMTWKxTSba
        subject_person_id: p_tLsgshwRfAYuAQFMo1jmYR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王福兆，明人物。萬曆丙戌科進士進士，籍贯即墨，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 225801）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-bFCM19h3McWJTIAyHf_mh
          claim_id: c_AnA3a4QV4f1KmMTWKxTSba
          source_id: s_6uaKogSwCE7CdJCBqdfP4M
          stance: supports
          locator: CBDB:225801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6uaKogSwCE7CdJCBqdfP4M
            source_type: api_record
            title: 中国历代人物传记资料库：王福兆（CBDB 225801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225801&o=json
            external_identifier: CBDB:225801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mF5d4PzVHHghREyJ1fXajE
        subject_person_id: p_tLsgshwRfAYuAQFMo1jmYR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福兆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_v1K1gBrqf23riQ7tBkMXPJ
          claim_id: c_mF5d4PzVHHghREyJ1fXajE
          source_id: s_6uaKogSwCE7CdJCBqdfP4M
          stance: supports
          locator: CBDB:225801
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_49pRYsYW0CUN4XsyyLnHC5
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tLsgshwRfAYuAQFMo1jmYR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3U4yH8ATm-QnZMJDYDbIzU
          claim_id: c_49pRYsYW0CUN4XsyyLnHC5
          source_id: s_bCl72twcPwm2x5ljGizuh5
          stance: supports
          locator: CBDB：兄弟 王祿兆（206985）之父／母 王光遠
          quotation: null
          interpretation_note: 由兄弟关系推断：王福兆 与 王祿兆 为同胞（CBDB 记「弟」），王祿兆 之父／母即 王福兆 之父／母。
          source:
            id: s_bCl72twcPwm2x5ljGizuh5
            source_type: api_record
            title: 中国历代人物传记资料库：王福兆（CBDB 225801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225801&o=json
            external_identifier: CBDB:225801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aZXBatcc6mdp3QRC5AaJD4
        status: active
        display_name: 王光遠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ACiAXk6nJVBE6K2QJYMMKh
        subject_person_id: p_hWNF7HbB9E5if6kNK731ro
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tLsgshwRfAYuAQFMo1jmYR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jutl0h80tVjIhoLUgtUArd
          claim_id: c_ACiAXk6nJVBE6K2QJYMMKh
          source_id: s_bCl72twcPwm2x5ljGizuh5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206985 王祿兆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bCl72twcPwm2x5ljGizuh5
            source_type: api_record
            title: 中国历代人物传记资料库：王福兆（CBDB 225801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225801&o=json
            external_identifier: CBDB:225801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hWNF7HbB9E5if6kNK731ro
        status: active
        display_name: 王祿兆
        merged_into_person_id: null
---

# 王福兆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王福兆，明人物。萬曆丙戌科進士進士，籍贯即墨，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 225801） | accepted |
| name.primary | 王福兆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aZXBatcc6mdp3QRC5AaJD4 | 王光遠 | accepted |
| other | p_hWNF7HbB9E5if6kNK731ro | 王祿兆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福兆（CBDB 225801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225801&o=json)

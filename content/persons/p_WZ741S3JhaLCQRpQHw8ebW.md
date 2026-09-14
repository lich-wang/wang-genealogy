---
schema: wang-person/v1
id: p_WZ741S3JhaLCQRpQHw8ebW
status: active
merged_into: null
display_name: 王裳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zC1bH93RVDBrs6tT5PoSCu
        subject_person_id: p_WZ741S3JhaLCQRpQHw8ebW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h85tkDSeJbQnJubUH39g1A
          claim_id: c_zC1bH93RVDBrs6tT5PoSCu
          source_id: s_NtFfYXzinR1SK3j1WkWNKC
          stance: supports
          locator: CBDB:221973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221973）
          source: &a1
            id: s_NtFfYXzinR1SK3j1WkWNKC
            source_type: api_record
            title: 中国历代人物传记资料库：王裳（CBDB 221973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221973&o=json
            external_identifier: CBDB:221973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RY48TihsiE8vgdxL9PDeH8
        subject_person_id: p_WZ741S3JhaLCQRpQHw8ebW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裳，明人物。萬曆八年進士，籍贯文安。（中国历代人物传记资料库 CBDB 221973）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FDlYMqWud1KA2AHYnrKnoP
          claim_id: c_RY48TihsiE8vgdxL9PDeH8
          source_id: s_NtFfYXzinR1SK3j1WkWNKC
          stance: supports
          locator: CBDB:221973
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Uz2kV7ZkokqAjcBMsZFCxo
        subject_person_id: p_staV7NpqmWaPNLuzEjvKNG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WZ741S3JhaLCQRpQHw8ebW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V9NVdr9kVdE1T5K3QcuJ-p
          claim_id: c_Uz2kV7ZkokqAjcBMsZFCxo
          source_id: s_BBtMMNKvKdQH2_7-3zN3qP
          stance: supports
          locator: CBDB：兄弟 王應霖（206714）之父／母 王宗寶
          quotation: null
          interpretation_note: 由兄弟关系推断：王裳 与 王應霖 为同胞（CBDB 记「弟」），王應霖 之父／母即 王裳 之父／母。
          source:
            id: s_BBtMMNKvKdQH2_7-3zN3qP
            source_type: api_record
            title: 中国历代人物传记资料库：王裳（CBDB 221973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221973&o=json
            external_identifier: CBDB:221973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_staV7NpqmWaPNLuzEjvKNG
        status: active
        display_name: 王宗寶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_l8-hS6y1TeIHIcV9lsbxCi
        subject_person_id: p_WZ741S3JhaLCQRpQHw8ebW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nF3Cd5KS3rMLe16oeKeJ6Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gz309olrqm3-4ILTNE72yU
          claim_id: c_l8-hS6y1TeIHIcV9lsbxCi
          source_id: s_BBtMMNKvKdQH2_7-3zN3qP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206714 王應霖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BBtMMNKvKdQH2_7-3zN3qP
            source_type: api_record
            title: 中国历代人物传记资料库：王裳（CBDB 221973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221973&o=json
            external_identifier: CBDB:221973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nF3Cd5KS3rMLe16oeKeJ6Q
        status: active
        display_name: 王應霖
        merged_into_person_id: null
---

# 王裳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裳 | accepted |
| bio.summary | 王裳，明人物。萬曆八年進士，籍贯文安。（中国历代人物传记资料库 CBDB 221973） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_staV7NpqmWaPNLuzEjvKNG | 王宗寶 | accepted |
| other | p_nF3Cd5KS3rMLe16oeKeJ6Q | 王應霖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王裳（CBDB 221973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221973&o=json)

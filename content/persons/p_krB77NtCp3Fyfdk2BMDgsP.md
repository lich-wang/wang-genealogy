---
schema: wang-person/v1
id: p_krB77NtCp3Fyfdk2BMDgsP
status: active
merged_into: null
display_name: 王用賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HLAkfFP4r9pxU1CAc8CQZJ
        subject_person_id: p_krB77NtCp3Fyfdk2BMDgsP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DLwjHLpfuiZHahFJuJtS1E
          claim_id: c_HLAkfFP4r9pxU1CAc8CQZJ
          source_id: s_3JFzsXd7EGvEA78ZtdSv39
          stance: supports
          locator: CBDB:320675
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320675）
          source: &a1
            id: s_3JFzsXd7EGvEA78ZtdSv39
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 320675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320675&o=json
            external_identifier: CBDB:320675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c7BV5XA9EqdDR5Loab8gkk
        subject_person_id: p_krB77NtCp3Fyfdk2BMDgsP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賓，明人物。嘉靖三十五年進士，籍贯大同，曾任知縣。（中国历代人物传记资料库 CBDB 320675）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O2u5mlxQZX2__W1RroyZFO
          claim_id: c_c7BV5XA9EqdDR5Loab8gkk
          source_id: s_3JFzsXd7EGvEA78ZtdSv39
          stance: supports
          locator: CBDB:320675
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HMHbzQrpEGsz-5pcv6__vk
        subject_person_id: p_7vykPE7zRJ5ERMERNaXtrP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_krB77NtCp3Fyfdk2BMDgsP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jOvJgwYs3P8ZHl6rUqCKJI
          claim_id: c_HMHbzQrpEGsz-5pcv6__vk
          source_id: s_kWCFQMNm7ArrUCX4U9uP5b
          stance: supports
          locator: CBDB：兄弟 王用中（204549）之父／母 王尚德
          quotation: null
          interpretation_note: 由兄弟关系推断：王用賓 与 王用中 为同胞（CBDB 记「弟」），王用中 之父／母即 王用賓 之父／母。
          source:
            id: s_kWCFQMNm7ArrUCX4U9uP5b
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 320675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320675&o=json
            external_identifier: CBDB:320675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7vykPE7zRJ5ERMERNaXtrP
        status: active
        display_name: 王尚德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_c-hR10Oy6N3rgCSiC6iait
        subject_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_krB77NtCp3Fyfdk2BMDgsP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gZgqWKdgHd9MVccyxALRaU
          claim_id: c_c-hR10Oy6N3rgCSiC6iait
          source_id: s_kWCFQMNm7ArrUCX4U9uP5b
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204549 王用中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kWCFQMNm7ArrUCX4U9uP5b
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 320675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320675&o=json
            external_identifier: CBDB:320675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kJMVeQvjhmn2GKoEDEQfZk
        status: active
        display_name: 王用中
        merged_into_person_id: null
---

# 王用賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賓 | accepted |
| bio.summary | 王用賓，明人物。嘉靖三十五年進士，籍贯大同，曾任知縣。（中国历代人物传记资料库 CBDB 320675） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7vykPE7zRJ5ERMERNaXtrP | 王尚德 | accepted |
| other | p_kJMVeQvjhmn2GKoEDEQfZk | 王用中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用賓（CBDB 320675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320675&o=json)

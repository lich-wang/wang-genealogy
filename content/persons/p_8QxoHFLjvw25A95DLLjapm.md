---
schema: wang-person/v1
id: p_8QxoHFLjvw25A95DLLjapm
status: active
merged_into: null
display_name: 王修
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UE2tU3qB3cyDCdHCCKc2NQ
        subject_person_id: p_8QxoHFLjvw25A95DLLjapm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lk18d6LJBpnWshJfELkLPp
          claim_id: c_UE2tU3qB3cyDCdHCCKc2NQ
          source_id: s_HR2hiubQaAw1ggdbrRw4kq
          stance: supports
          locator: CBDB:249476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249476）
          source: &a1
            id: s_HR2hiubQaAw1ggdbrRw4kq
            source_type: api_record
            title: 中国历代人物传记资料库：王修（CBDB 249476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249476&o=json
            external_identifier: CBDB:249476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RG2ZH38diX9ohpu9g8NF2s
        subject_person_id: p_8QxoHFLjvw25A95DLLjapm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修，明人物。成化十一年進士，籍贯寶坻。（中国历代人物传记资料库 CBDB 249476）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eAj-HiaAy0VXsKRtzFCydE
          claim_id: c_RG2ZH38diX9ohpu9g8NF2s
          source_id: s_HR2hiubQaAw1ggdbrRw4kq
          stance: supports
          locator: CBDB:249476
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4a91UQHjp41o5aG_p7RNqG
        subject_person_id: p_GikpBfnZtBzAmt6mvRBQ1h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8QxoHFLjvw25A95DLLjapm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPNPdxy2ZUuUtdQmH_AS-A
          claim_id: c_4a91UQHjp41o5aG_p7RNqG
          source_id: s_yKHijnZaIeyBObJXEFkK9l
          stance: supports
          locator: CBDB：兄弟 王傅（199770）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王修 与 王傅 为同胞（CBDB 记「兄」），王傅 之父／母即 王修 之父／母。
          source:
            id: s_yKHijnZaIeyBObJXEFkK9l
            source_type: api_record
            title: 中国历代人物传记资料库：王修（CBDB 249476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249476&o=json
            external_identifier: CBDB:249476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GikpBfnZtBzAmt6mvRBQ1h
        status: active
        display_name: 王縉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_mmiuh6x8DoeS94KE0cEDOO
        subject_person_id: p_8QxoHFLjvw25A95DLLjapm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fCdwQrvNQJRLgVMdijjiRw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nkdCK6hRvJyJ_fmWoy_d6h
          claim_id: c_mmiuh6x8DoeS94KE0cEDOO
          source_id: s_yKHijnZaIeyBObJXEFkK9l
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199770 王傅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yKHijnZaIeyBObJXEFkK9l
            source_type: api_record
            title: 中国历代人物传记资料库：王修（CBDB 249476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249476&o=json
            external_identifier: CBDB:249476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fCdwQrvNQJRLgVMdijjiRw
        status: active
        display_name: 王傅
        merged_into_person_id: null
---

# 王修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修 | accepted |
| bio.summary | 王修，明人物。成化十一年進士，籍贯寶坻。（中国历代人物传记资料库 CBDB 249476） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GikpBfnZtBzAmt6mvRBQ1h | 王縉 | accepted |
| other | p_fCdwQrvNQJRLgVMdijjiRw | 王傅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王修（CBDB 249476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249476&o=json)

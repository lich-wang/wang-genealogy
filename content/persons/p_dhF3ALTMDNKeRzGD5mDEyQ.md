---
schema: wang-person/v1
id: p_dhF3ALTMDNKeRzGD5mDEyQ
status: active
merged_into: null
display_name: 王昌
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6BrWdsuY4sdobn8N26mwDJ
        subject_person_id: p_dhF3ALTMDNKeRzGD5mDEyQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A9sRwrcxZ1YjXmQ5iNp9H8
          claim_id: c_6BrWdsuY4sdobn8N26mwDJ
          source_id: s_UBJWtu7HwNsRpUNh1JgDDG
          stance: supports
          locator: CBDB:260607
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260607）
          source: &a1
            id: s_UBJWtu7HwNsRpUNh1JgDDG
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 260607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260607&o=json
            external_identifier: CBDB:260607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uYKwLjrKkxkTDD2aaUVXVo
        subject_person_id: p_dhF3ALTMDNKeRzGD5mDEyQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌，明人物。成化二十三年進士，籍贯京山。（中国历代人物传记资料库 CBDB 260607）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VOX53klQ1O10QZReFmGh8D
          claim_id: c_uYKwLjrKkxkTDD2aaUVXVo
          source_id: s_UBJWtu7HwNsRpUNh1JgDDG
          stance: supports
          locator: CBDB:260607
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_37A1s7it6YkcVfyC2oCJyW
        subject_person_id: p_BXVMCk3TEgxQzDvmdzMdk1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dhF3ALTMDNKeRzGD5mDEyQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FR4lmu7mrNkeiKYdjUFnSK
          claim_id: c_37A1s7it6YkcVfyC2oCJyW
          source_id: s_WWJXkfPznoUxCeRLO1Mn89
          stance: supports
          locator: CBDB：兄弟 王希旦（200627）之父／母 王伯珍
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌 与 王希旦 为同胞（CBDB 记「弟」），王希旦 之父／母即 王昌 之父／母。
          source:
            id: s_WWJXkfPznoUxCeRLO1Mn89
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 260607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260607&o=json
            external_identifier: CBDB:260607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BXVMCk3TEgxQzDvmdzMdk1
        status: active
        display_name: 王伯珍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5w_UA0_uq1ll87uAaqI7Tw
        subject_person_id: p_FQCEz5vy6uJ3wtmEBbiQFJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dhF3ALTMDNKeRzGD5mDEyQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t6vQ1f-A1UeVAy2m7jn0zF
          claim_id: c_5w_UA0_uq1ll87uAaqI7Tw
          source_id: s_WWJXkfPznoUxCeRLO1Mn89
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200627 王希旦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WWJXkfPznoUxCeRLO1Mn89
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 260607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260607&o=json
            external_identifier: CBDB:260607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FQCEz5vy6uJ3wtmEBbiQFJ
        status: active
        display_name: 王希旦
        merged_into_person_id: null
---

# 王昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌 | accepted |
| bio.summary | 王昌，明人物。成化二十三年進士，籍贯京山。（中国历代人物传记资料库 CBDB 260607） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BXVMCk3TEgxQzDvmdzMdk1 | 王伯珍 | accepted |
| other | p_FQCEz5vy6uJ3wtmEBbiQFJ | 王希旦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 260607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260607&o=json)

---
schema: wang-person/v1
id: p_kJMVeQvjhmn2GKoEDEQfZk
status: active
merged_into: null
display_name: 王用中
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_stMaYCnr3chcgKexLAK7eB
        subject_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pUfmHk8xQBDkemY8iCpHHZ
          claim_id: c_stMaYCnr3chcgKexLAK7eB
          source_id: s_JQziQdaNgMNySxpXT4kVHF
          stance: supports
          locator: CBDB:204549
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204549）
          source: &a1
            id: s_JQziQdaNgMNySxpXT4kVHF
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 204549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204549&o=json
            external_identifier: CBDB:204549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NMbN63iNK9uGEj6HDAZENW
        subject_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1523年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_niivRtRgDU3343if2SE2nx
          claim_id: c_NMbN63iNK9uGEj6HDAZENW
          source_id: s_JQziQdaNgMNySxpXT4kVHF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y37jA3hAG1ACN8PczgTGwf
        subject_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中（生于1523年），明人物。明清進士進士，籍贯大同，入仕進士。（中国历代人物传记资料库 CBDB 204549）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X6G9ihbFGHqMkhkiouW66S
          claim_id: c_y37jA3hAG1ACN8PczgTGwf
          source_id: s_JQziQdaNgMNySxpXT4kVHF
          stance: supports
          locator: CBDB:204549
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_j3LzfcWsQwTBhlj2eVP1X1
        subject_person_id: p_7vykPE7zRJ5ERMERNaXtrP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TK6B_MaSMuo9sBAi3z5Ah2
          claim_id: c_j3LzfcWsQwTBhlj2eVP1X1
          source_id: s_HwRSD98Kw4aETwQbmTyg9w
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HwRSD98Kw4aETwQbmTyg9w
            source_type: api_record
            title: 中国历代人物传记资料库：王尚德（CBDB 320671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320671&o=json
            external_identifier: CBDB:320671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7vykPE7zRJ5ERMERNaXtrP
        status: active
        display_name: 王尚德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__KGDYGACTzrWXAh_5lwdv3
        subject_person_id: p_sKaKetRJJBRDoiu3diCVGh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N2botUvUVnaD0NJ92ZzIDr
          claim_id: c__KGDYGACTzrWXAh_5lwdv3
          source_id: s_D62Bebv3MuLzYezq4xjfWN
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D62Bebv3MuLzYezq4xjfWN
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 320670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320670&o=json
            external_identifier: CBDB:320670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sKaKetRJJBRDoiu3diCVGh
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_Tk-c-kBfLoj3TOclFvNRZ0
        subject_person_id: p_ynLQA17DH2FfsbqP1uFf63
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J_EmOADTTlU0_Q7pDg3Jq5
          claim_id: c_Tk-c-kBfLoj3TOclFvNRZ0
          source_id: s_Ke26C4R11YUHQfNSiKZ5Co
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第六十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ke26C4R11YUHQfNSiKZ5Co
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 320669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320669&o=json
            external_identifier: CBDB:320669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ynLQA17DH2FfsbqP1uFf63
        status: active
        display_name: 王祥
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_LzTSqfjVlJvnsE84roqbzi
        subject_person_id: p_7AzaTDzKMvxdsLpAeeHh4N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dCkfa0-cUhb1pB8DnhXrkh
          claim_id: c_LzTSqfjVlJvnsE84roqbzi
          source_id: s_O1gpWt-7o5zqmfcWDTnJns
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204549 王用中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_O1gpWt-7o5zqmfcWDTnJns
            source_type: api_record
            title: 中国历代人物传记资料库：王用子（CBDB 320676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320676&o=json
            external_identifier: CBDB:320676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7AzaTDzKMvxdsLpAeeHh4N
        status: active
        display_name: 王用子
        merged_into_person_id: null
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
        id: p_krB77NtCp3Fyfdk2BMDgsP
        status: active
        display_name: 王用賓
        merged_into_person_id: null
---

# 王用中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用中 | accepted |
| birth.date | 1523年 | accepted |
| bio.summary | 王用中（生于1523年），明人物。明清進士進士，籍贯大同，入仕進士。（中国历代人物传记资料库 CBDB 204549） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7vykPE7zRJ5ERMERNaXtrP | 王尚德 | accepted |
| ancestors | p_sKaKetRJJBRDoiu3diCVGh | 王達 | accepted |
| ancestors | p_ynLQA17DH2FfsbqP1uFf63 | 王祥 | accepted |
| other | p_7AzaTDzKMvxdsLpAeeHh4N | 王用子 | accepted |
| other | p_krB77NtCp3Fyfdk2BMDgsP | 王用賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 320670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320670&o=json)
- [中国历代人物传记资料库：王尚德（CBDB 320671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320671&o=json)
- [中国历代人物传记资料库：王祥（CBDB 320669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320669&o=json)
- [中国历代人物传记资料库：王用賓（CBDB 320675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320675&o=json)
- [中国历代人物传记资料库：王用中（CBDB 204549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204549&o=json)
- [中国历代人物传记资料库：王用子（CBDB 320676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320676&o=json)

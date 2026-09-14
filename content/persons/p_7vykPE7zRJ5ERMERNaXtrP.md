---
schema: wang-person/v1
id: p_7vykPE7zRJ5ERMERNaXtrP
status: active
merged_into: null
display_name: 王尚德
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zL7bUVLmdPzDh8atBnVgss
        subject_person_id: p_7vykPE7zRJ5ERMERNaXtrP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e35ij49jhz8D74iCFGu6e8
          claim_id: c_zL7bUVLmdPzDh8atBnVgss
          source_id: s_HwRSD98Kw4aETwQbmTyg9w
          stance: supports
          locator: CBDB:320671
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320671）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3KdX1N4p2soMiNEroxzKQV
        subject_person_id: p_7vykPE7zRJ5ERMERNaXtrP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王尚德，明人物。嘉靖三十五年進士，籍贯大同，入仕貢生: 歲貢、常貢、挨貢，曾任典史。（中国历代人物传记资料库 CBDB 320671）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nooev2nM4EKF34QtpTgTDg
          claim_id: c_3KdX1N4p2soMiNEroxzKQV
          source_id: s_HwRSD98Kw4aETwQbmTyg9w
          stance: supports
          locator: CBDB:320671
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_kJMVeQvjhmn2GKoEDEQfZk
        status: active
        display_name: 王用中
        merged_into_person_id: null
    - claim:
        id: c_rUmlxWiYRr-eElCk-GE894
        subject_person_id: p_7vykPE7zRJ5ERMERNaXtrP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7AzaTDzKMvxdsLpAeeHh4N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_21bMjim-Hvy73XaufTHv2N
          claim_id: c_rUmlxWiYRr-eElCk-GE894
          source_id: s_O1gpWt-7o5zqmfcWDTnJns
          stance: supports
          locator: CBDB：兄弟 王用中（204549）之父／母 王尚德
          quotation: null
          interpretation_note: 由兄弟关系推断：王用子 与 王用中 为同胞（CBDB 记「兄」），王用中 之父／母即 王用子 之父／母。
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
        id: p_krB77NtCp3Fyfdk2BMDgsP
        status: active
        display_name: 王用賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尚德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚德 | accepted |
| bio.summary | 王尚德，明人物。嘉靖三十五年進士，籍贯大同，入仕貢生: 歲貢、常貢、挨貢，曾任典史。（中国历代人物传记资料库 CBDB 320671） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kJMVeQvjhmn2GKoEDEQfZk | 王用中 | accepted |
| children | p_7AzaTDzKMvxdsLpAeeHh4N | 王用子 | accepted |
| children | p_krB77NtCp3Fyfdk2BMDgsP | 王用賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚德（CBDB 320671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320671&o=json)
- [中国历代人物传记资料库：王用賓（CBDB 320675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320675&o=json)
- [中国历代人物传记资料库：王用子（CBDB 320676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320676&o=json)

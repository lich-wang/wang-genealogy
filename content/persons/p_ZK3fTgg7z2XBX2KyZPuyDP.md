---
schema: wang-person/v1
id: p_ZK3fTgg7z2XBX2KyZPuyDP
status: active
merged_into: null
display_name: 王澤
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2u6b2YWvWm2x9CGKRTnAqK
        subject_person_id: p_ZK3fTgg7z2XBX2KyZPuyDP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8aS7Gs9evDbTieLQ2yhKwz
          claim_id: c_2u6b2YWvWm2x9CGKRTnAqK
          source_id: s_KqmMbmKrBN1ZNAmqPvpv7B
          stance: supports
          locator: CBDB:205074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205074）
          source: &a1
            id: s_KqmMbmKrBN1ZNAmqPvpv7B
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 205074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205074&o=json
            external_identifier: CBDB:205074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sZj6f8rLiUchhaL9t883MJ
        subject_person_id: p_ZK3fTgg7z2XBX2KyZPuyDP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jncTotGL65p5XMDgHQpAtv
          claim_id: c_sZj6f8rLiUchhaL9t883MJ
          source_id: s_KqmMbmKrBN1ZNAmqPvpv7B
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
        id: c_xnE28sPQJY9HuxMgthnzb5
        subject_person_id: p_ZK3fTgg7z2XBX2KyZPuyDP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤（生于1527年），明人物。明清進士進士，籍贯臨汾，入仕進士。（中国历代人物传记资料库 CBDB 205074）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fM0IbwcjHXfdOZV277LLLQ
          claim_id: c_xnE28sPQJY9HuxMgthnzb5
          source_id: s_KqmMbmKrBN1ZNAmqPvpv7B
          stance: supports
          locator: CBDB:205074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rNaf2W364700iGk_OwLsqv
        subject_person_id: p_5GVxKWPxJYFcrW9t5dcAK7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZK3fTgg7z2XBX2KyZPuyDP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RP52r9EsujM3SDYqHNHwki
          claim_id: c_rNaf2W364700iGk_OwLsqv
          source_id: s_wPTPuxHqGjShLAWEGM1LMk
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wPTPuxHqGjShLAWEGM1LMk
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 327937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327937&o=json
            external_identifier: CBDB:327937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5GVxKWPxJYFcrW9t5dcAK7
        status: active
        display_name: 王鏞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_on1r_yV9rYH51gWW5qYuvS
        subject_person_id: p_nex7VLB7oCWkGk7bP71nNb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZK3fTgg7z2XBX2KyZPuyDP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j7E8-IbX4iPACaW2thG0kh
          claim_id: c_on1r_yV9rYH51gWW5qYuvS
          source_id: s_2yLxF8gP3XQpkAcB2GPYx3
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2yLxF8gP3XQpkAcB2GPYx3
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 327935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327935&o=json
            external_identifier: CBDB:327935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nex7VLB7oCWkGk7bP71nNb
        status: active
        display_name: 王玉
        merged_into_person_id: null
    - claim:
        id: c_47hGDV6CGD6tadQJz4yy6e
        subject_person_id: p_pBMtQFJmxesr41XkPJ41bw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZK3fTgg7z2XBX2KyZPuyDP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iVy492W2JMgAD_ZNPSz069
          claim_id: c_47hGDV6CGD6tadQJz4yy6e
          source_id: s_sd3NsYUb6y4dLF6dLsL12f
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sd3NsYUb6y4dLF6dLsL12f
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 327936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327936&o=json
            external_identifier: CBDB:327936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pBMtQFJmxesr41XkPJ41bw
        status: active
        display_name: 王縉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| birth.date | 1527年 | accepted |
| bio.summary | 王澤（生于1527年），明人物。明清進士進士，籍贯臨汾，入仕進士。（中国历代人物传记资料库 CBDB 205074） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5GVxKWPxJYFcrW9t5dcAK7 | 王鏞 | accepted |
| ancestors | p_nex7VLB7oCWkGk7bP71nNb | 王玉 | accepted |
| ancestors | p_pBMtQFJmxesr41XkPJ41bw | 王縉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 327936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327936&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 327937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327937&o=json)
- [中国历代人物传记资料库：王玉（CBDB 327935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327935&o=json)
- [中国历代人物传记资料库：王澤（CBDB 205074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205074&o=json)

---
schema: wang-person/v1
id: p_UvehpGMJTzc9aejBRt9mWN
status: active
merged_into: null
display_name: 王淮
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f5WUVMyeeUNcL876uRBbKd
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FaBSkSrvPuzFuu95KBN9dQ
          claim_id: c_f5WUVMyeeUNcL876uRBbKd
          source_id: s_jH1N5zKcYCmDMDNPzpwQ7F
          stance: supports
          locator: CBDB:10697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10697）
          source: &a1
            id: s_jH1N5zKcYCmDMDNPzpwQ7F
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 10697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10697&o=json
            external_identifier: CBDB:10697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9kpgs1aJUhHfdHJ23SXm3x
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpkdP3je3iotTwaqCMCUfb
          claim_id: c_9kpgs1aJUhHfdHJ23SXm3x
          source_id: s_jH1N5zKcYCmDMDNPzpwQ7F
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
        id: c_DKUm7GZHtYLs8725sCzqCK
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1189年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qwqLSGTFJkCmdzZcd1Mw2h
          claim_id: c_DKUm7GZHtYLs8725sCzqCK
          source_id: s_jH1N5zKcYCmDMDNPzpwQ7F
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
        id: c_qLCxz4F5zZshuwC9XGJX2P
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮（1126年—1189年），宋人物。籍贯金華，身份为理學家，入仕進士，曾任樞密使、同知樞密院事、參知政事。（中国历代人物传记资料库 CBDB 10697）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E4nnOWYKjFzXY04Lpijrii
          claim_id: c_qLCxz4F5zZshuwC9XGJX2P
          source_id: s_jH1N5zKcYCmDMDNPzpwQ7F
          stance: supports
          locator: CBDB:10697
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zL8FDfZ2BNzGgfzJbQUcLU
        subject_person_id: p_VYtFzPbziddvD9zkw88Psz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UvehpGMJTzc9aejBRt9mWN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8qOqrMzrdpkjUwZzXyTq2y
          claim_id: c_zL8FDfZ2BNzGgfzJbQUcLU
          source_id: s_jH1N5zKcYCmDMDNPzpwQ7F
          stance: supports
          locator: CBDB 双向互证（父 王師德 ⇄ 子 王淮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_VYtFzPbziddvD9zkw88Psz
        status: active
        display_name: 王師德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_CezFvGD2Zo-UkqnduFPy4Q
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6ezuFcCP9M43QTPSk7tw3L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fgsVp5MTv3_j8hQSLicMGU
          claim_id: c_CezFvGD2Zo-UkqnduFPy4Q
          source_id: s_834xm7BW95z2Bo1xiJaqAB
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_834xm7BW95z2Bo1xiJaqAB
            source_type: api_record
            title: 中国历代人物传记资料库：王侑（CBDB 39530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39530&o=json
            external_identifier: CBDB:39530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6ezuFcCP9M43QTPSk7tw3L
        status: active
        display_name: 王侑
        merged_into_person_id: null
    - claim:
        id: c_p0Z4yQx-VmYg-cKS3fpqcQ
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hJs7Qvo7BVHkNfA4qF2GpU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5v1UdgRF4McMMRCMCQ6vU4
          claim_id: c_p0Z4yQx-VmYg-cKS3fpqcQ
          source_id: s_jH1N5zKcYCmDMDNPzpwQ7F
          stance: supports
          locator: 宋人傳記資料索引(電子版)，668：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hJs7Qvo7BVHkNfA4qF2GpU
        status: active
        display_name: 王佖
        merged_into_person_id: null
    - claim:
        id: c_-UetgMb-hdwGEimMMIBb2E
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YykcDPhoFo7o8Jvq13sdKA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8VL9rQ1GcpPGXqYUTLgkw_
          claim_id: c_-UetgMb-hdwGEimMMIBb2E
          source_id: s_jH1N5zKcYCmDMDNPzpwQ7F
          stance: supports
          locator: 宋人傳記資料索引(電子版)，720：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YykcDPhoFo7o8Jvq13sdKA
        status: active
        display_name: 王侃
        merged_into_person_id: null
    - claim:
        id: c_JgjFiOHOZFdCdG0pJa8Qv9
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jCAZd95vtUshZxHPbwJb25
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bh9RwPbfjhKwmlnVZER02a
          claim_id: c_JgjFiOHOZFdCdG0pJa8Qv9
          source_id: s_wXFzjAuVdZjStZZzgNb6nz
          stance: supports
          locator: CBDB 双向互证（曾祖 王淮 ⇄ 曾孫; 重孫 王奇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_wXFzjAuVdZjStZZzgNb6nz
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 386675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386675&o=json
            external_identifier: CBDB:386675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jCAZd95vtUshZxHPbwJb25
        status: active
        display_name: 王奇
        merged_into_person_id: null
    - claim:
        id: c_EF_yzh8jshcIK0N7eQ2Lnt
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nTVozGACxLLaWGNjhMQxnM
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nvidO7ZjYrD0-6M43Jv6Pt
          claim_id: c_EF_yzh8jshcIK0N7eQ2Lnt
          source_id: s_n75KUKbyAiDG91EHz3DJYN
          stance: supports
          locator: CBDB 双向互证（高祖;四世祖 王淮 ⇄ 玄孫;四世孫 王肖翁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_n75KUKbyAiDG91EHz3DJYN
            source_type: api_record
            title: 中国历代人物传记资料库：王肖翁（CBDB 10722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10722&o=json
            external_identifier: CBDB:10722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nTVozGACxLLaWGNjhMQxnM
        status: active
        display_name: 王肖翁
        merged_into_person_id: null
  other: []
---

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| birth.date | 1126年 | accepted |
| death.date | 1189年 | accepted |
| bio.summary | 王淮（1126年—1189年），宋人物。籍贯金華，身份为理學家，入仕進士，曾任樞密使、同知樞密院事、參知政事。（中国历代人物传记资料库 CBDB 10697） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VYtFzPbziddvD9zkw88Psz | 王師德 | accepted |
| descendants | p_6ezuFcCP9M43QTPSk7tw3L | 王侑 | accepted |
| descendants | p_hJs7Qvo7BVHkNfA4qF2GpU | 王佖 | accepted |
| descendants | p_YykcDPhoFo7o8Jvq13sdKA | 王侃 | accepted |
| descendants | p_jCAZd95vtUshZxHPbwJb25 | 王奇 | accepted |
| descendants | p_nTVozGACxLLaWGNjhMQxnM | 王肖翁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 10697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10697&o=json)
- [中国历代人物传记资料库：王奇（CBDB 386675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386675&o=json)
- [中国历代人物传记资料库：王肖翁（CBDB 10722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10722&o=json)
- [中国历代人物传记资料库：王侑（CBDB 39530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39530&o=json)

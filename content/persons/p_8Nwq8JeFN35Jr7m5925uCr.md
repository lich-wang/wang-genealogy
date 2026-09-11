---
schema: wang-person/v1
id: p_8Nwq8JeFN35Jr7m5925uCr
status: active
merged_into: null
display_name: 王璠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4j7ycboSuW939jTZ7m5Trt
        subject_person_id: p_8Nwq8JeFN35Jr7m5925uCr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xXvnJm8rcX1ht29DYGggaa
          claim_id: c_4j7ycboSuW939jTZ7m5Trt
          source_id: s_AT15fSTDCcJQGSbMEmENk2
          stance: supports
          locator: CBDB:157953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157953）
          source: &a1
            id: s_AT15fSTDCcJQGSbMEmENk2
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 157953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157953&o=json
            external_identifier: CBDB:157953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yLYwYUKRFbxfKT3w1dVNcm
        subject_person_id: p_8Nwq8JeFN35Jr7m5925uCr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠，唐人物。籍贯太原，曾任戶部尚書、太常卿、州刺史。（中国历代人物传记资料库 CBDB 157953）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gBgII4PYRRpcJsZ-r69T7N
          claim_id: c_yLYwYUKRFbxfKT3w1dVNcm
          source_id: s_AT15fSTDCcJQGSbMEmENk2
          stance: supports
          locator: CBDB:157953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rL-kY6gk5aKQfPQYpxLpI0
        subject_person_id: p_1oiuSieCMVbXj1XDqjNuA2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Nwq8JeFN35Jr7m5925uCr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z7F0rzqAzg7vbcuogPiV-7
          claim_id: c_rL-kY6gk5aKQfPQYpxLpI0
          source_id: s_1QLvDYfeuEAHRWXRHjyZEU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 26669：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1QLvDYfeuEAHRWXRHjyZEU
            source_type: api_record
            title: 中国历代人物传记资料库：王礎（CBDB 157947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157947&o=json
            external_identifier: CBDB:157947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1oiuSieCMVbXj1XDqjNuA2
        status: active
        display_name: 王礎
        merged_into_person_id: null
  children:
    - claim:
        id: c_zIWd-Gpj_nmEtP6jEcJCIU
        subject_person_id: p_8Nwq8JeFN35Jr7m5925uCr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wA3j8iXDLCLhyg8PiA7Ch7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eIS_i7WPKZ102C-b1vSbRp
          claim_id: c_zIWd-Gpj_nmEtP6jEcJCIU
          source_id: s_9txz3g8o7yD8kndUyqGH4H
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9txz3g8o7yD8kndUyqGH4H
            source_type: api_record
            title: 中国历代人物传记资料库：王遐休（CBDB 189321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189321&o=json
            external_identifier: CBDB:189321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wA3j8iXDLCLhyg8PiA7Ch7
        status: active
        display_name: 王遐休
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| bio.summary | 王璠，唐人物。籍贯太原，曾任戶部尚書、太常卿、州刺史。（中国历代人物传记资料库 CBDB 157953） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1oiuSieCMVbXj1XDqjNuA2 | 王礎 | accepted |
| children | p_wA3j8iXDLCLhyg8PiA7Ch7 | 王遐休 | accepted |

## 外部来源

- [中国历代人物传记资料库：王礎（CBDB 157947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157947&o=json)
- [中国历代人物传记资料库：王璠（CBDB 157953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157953&o=json)
- [中国历代人物传记资料库：王遐休（CBDB 189321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189321&o=json)

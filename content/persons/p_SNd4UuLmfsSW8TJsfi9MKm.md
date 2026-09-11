---
schema: wang-person/v1
id: p_SNd4UuLmfsSW8TJsfi9MKm
status: active
merged_into: null
display_name: 王三錫
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WmD8D8dpEs5oNDZYGN1itp
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mHqvcCxEycRdRE33sjqNBH
          claim_id: c_WmD8D8dpEs5oNDZYGN1itp
          source_id: s_usjxYjSZdxiZpk6hCgAEMK
          stance: supports
          locator: CBDB:205255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205255）
          source: &a1
            id: s_usjxYjSZdxiZpk6hCgAEMK
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 205255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205255&o=json
            external_identifier: CBDB:205255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1K1ynS13JLLWm1aM3UMMCu
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_La22sXbHJ7jJWkGNUAdAdM
          claim_id: c_1K1ynS13JLLWm1aM3UMMCu
          source_id: s_usjxYjSZdxiZpk6hCgAEMK
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
        id: c_2BdLh29278SAcMgSLDbn4x
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6FB4Wv2B1KLE25fU3AVrP4
          claim_id: c_2BdLh29278SAcMgSLDbn4x
          source_id: s_usjxYjSZdxiZpk6hCgAEMK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xzYxbceRBu9EfnyWeKsUrU
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8itfIgg4tM4GT1bnExx4g0
          claim_id: c_xzYxbceRBu9EfnyWeKsUrU
          source_id: s_LKRshe6MuohdxBxu7BSr7A
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LKRshe6MuohdxBxu7BSr7A
            source_type: api_record
            title: 中国历代人物传记资料库：王訪（CBDB 330479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330479&o=json
            external_identifier: CBDB:330479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FwWAP4cMFqggRtz76GL45y
        status: active
        display_name: 王訪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_3oiJYesqaTeTXPDC4vRfWz
        subject_person_id: p_D19FBC5CbaMQ2qiQY4jwrT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5mdl3BtVTAoDLp7_Nfafsn
          claim_id: c_3oiJYesqaTeTXPDC4vRfWz
          source_id: s_KAjSggn4ovByd24UNXyr6P
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KAjSggn4ovByd24UNXyr6P
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 330478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330478&o=json
            external_identifier: CBDB:330478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D19FBC5CbaMQ2qiQY4jwrT
        status: active
        display_name: 王重
        merged_into_person_id: null
    - claim:
        id: c__nV224K4LJy7pcG7rXOQ5v
        subject_person_id: p_EB8FNC6sL5PEvA6g1Au4VJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lYi7UQhD78B4g6BYne-Cw6
          claim_id: c__nV224K4LJy7pcG7rXOQ5v
          source_id: s_GYQ27bHRjBsYZYmYdLJoUR
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GYQ27bHRjBsYZYmYdLJoUR
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 330477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330477&o=json
            external_identifier: CBDB:330477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EB8FNC6sL5PEvA6g1Au4VJ
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| birth.date | 1537年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FwWAP4cMFqggRtz76GL45y | 王訪 | accepted |
| ancestors | p_D19FBC5CbaMQ2qiQY4jwrT | 王重 | accepted |
| ancestors | p_EB8FNC6sL5PEvA6g1Au4VJ | 王瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訪（CBDB 330479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330479&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 330477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330477&o=json)
- [中国历代人物传记资料库：王三錫（CBDB 205255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205255&o=json)
- [中国历代人物传记资料库：王重（CBDB 330478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330478&o=json)

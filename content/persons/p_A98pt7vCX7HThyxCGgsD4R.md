---
schema: wang-person/v1
id: p_A98pt7vCX7HThyxCGgsD4R
status: active
merged_into: null
display_name: 王賓
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s8PYXy9yR1tGupvTSGh3vN
        subject_person_id: p_A98pt7vCX7HThyxCGgsD4R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FksXXQ7aV4dWjJEsDk5KG4
          claim_id: c_s8PYXy9yR1tGupvTSGh3vN
          source_id: s_usxES2Tn7DL6q325Xrcu2n
          stance: supports
          locator: CBDB:200080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200080）
          source: &a1
            id: s_usxES2Tn7DL6q325Xrcu2n
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 200080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200080&o=json
            external_identifier: CBDB:200080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xNsb6jCYKe3hbwZS1XqYWu
        subject_person_id: p_A98pt7vCX7HThyxCGgsD4R
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1454年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GhhN4ypDg4iGZQXWgMZM1X
          claim_id: c_xNsb6jCYKe3hbwZS1XqYWu
          source_id: s_usxES2Tn7DL6q325Xrcu2n
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
        id: c_zD5Um4xJ7Y5YQe2nBwMu3T
        subject_person_id: p_A98pt7vCX7HThyxCGgsD4R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓（生于1454年），明人物。明清進士進士，籍贯銅梁，入仕進士。（中国历代人物传记资料库 CBDB 200080）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oRMccF9b_Lw8LccjbDTAVU
          claim_id: c_zD5Um4xJ7Y5YQe2nBwMu3T
          source_id: s_usxES2Tn7DL6q325Xrcu2n
          stance: supports
          locator: CBDB:200080
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HO5DqT9J2E1w2zwifiDpJz
        subject_person_id: p_a8cvaHnoJBj7ek4wvWBpvS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A98pt7vCX7HThyxCGgsD4R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iTJS7p67RSA3AUrb8Hiagu
          claim_id: c_HO5DqT9J2E1w2zwifiDpJz
          source_id: s_oLUAK2KEU63uGiuqM7jYR4
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oLUAK2KEU63uGiuqM7jYR4
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 253490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253490&o=json
            external_identifier: CBDB:253490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a8cvaHnoJBj7ek4wvWBpvS
        status: active
        display_name: 王億
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_D6HdwMGmFJ6NjoEbZ0_TTK
        subject_person_id: p_hLC7KGkfmVQ6FH9R6Ly45j
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A98pt7vCX7HThyxCGgsD4R
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_742vGZKYQgatXENWCVrvgr
          claim_id: c_D6HdwMGmFJ6NjoEbZ0_TTK
          source_id: s_WVaT3PGcf433PQDR58B4hW
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WVaT3PGcf433PQDR58B4hW
            source_type: api_record
            title: 中国历代人物传记资料库：王勝宗（CBDB 253488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253488&o=json
            external_identifier: CBDB:253488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hLC7KGkfmVQ6FH9R6Ly45j
        status: active
        display_name: 王勝宗
        merged_into_person_id: null
    - claim:
        id: c_Qzwr02lV6JE7nhufkMwgmp
        subject_person_id: p_zBTGHzPsTQYxtWwyQCYagL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A98pt7vCX7HThyxCGgsD4R
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sw0p7o9YjTOrsvL6Qz7Tz6
          claim_id: c_Qzwr02lV6JE7nhufkMwgmp
          source_id: s_NqKKUuek3wV79FuXBkFhHK
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NqKKUuek3wV79FuXBkFhHK
            source_type: api_record
            title: 中国历代人物传记资料库：王仲亨（CBDB 253489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253489&o=json
            external_identifier: CBDB:253489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zBTGHzPsTQYxtWwyQCYagL
        status: active
        display_name: 王仲亨
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| birth.date | 1454年 | accepted |
| bio.summary | 王賓（生于1454年），明人物。明清進士進士，籍贯銅梁，入仕進士。（中国历代人物传记资料库 CBDB 200080） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_a8cvaHnoJBj7ek4wvWBpvS | 王億 | accepted |
| ancestors | p_hLC7KGkfmVQ6FH9R6Ly45j | 王勝宗 | accepted |
| ancestors | p_zBTGHzPsTQYxtWwyQCYagL | 王仲亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 200080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200080&o=json)
- [中国历代人物传记资料库：王勝宗（CBDB 253488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253488&o=json)
- [中国历代人物传记资料库：王億（CBDB 253490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253490&o=json)
- [中国历代人物传记资料库：王仲亨（CBDB 253489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253489&o=json)

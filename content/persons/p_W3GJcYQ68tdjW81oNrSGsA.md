---
schema: wang-person/v1
id: p_W3GJcYQ68tdjW81oNrSGsA
status: active
merged_into: null
display_name: 王恩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V3cGQSJ7EcSD3aq7i9j4NS
        subject_person_id: p_W3GJcYQ68tdjW81oNrSGsA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pTi46xWDfD5ZTZXQMC1tby
          claim_id: c_V3cGQSJ7EcSD3aq7i9j4NS
          source_id: s_cc9tfU6iPBngBJUC5ryzU8
          stance: supports
          locator: CBDB:200281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200281）
          source: &a1
            id: s_cc9tfU6iPBngBJUC5ryzU8
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 200281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200281&o=json
            external_identifier: CBDB:200281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XQyMdZ7mX6hus3vXQcDcK2
        subject_person_id: p_W3GJcYQ68tdjW81oNrSGsA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eR7xo4eJDZhFoeuRqZ3cZw
          claim_id: c_XQyMdZ7mX6hus3vXQcDcK2
          source_id: s_cc9tfU6iPBngBJUC5ryzU8
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
        id: c_7Ffw5bpH1nvPaQ4kVQ8ECR
        subject_person_id: p_W3GJcYQ68tdjW81oNrSGsA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩（生于1450年），明人物。明清進士進士，籍贯華亭，入仕進士。（中国历代人物传记资料库 CBDB 200281）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iVuGKVSe2d6RmTbNuB1EMC
          claim_id: c_7Ffw5bpH1nvPaQ4kVQ8ECR
          source_id: s_cc9tfU6iPBngBJUC5ryzU8
          stance: supports
          locator: CBDB:200281
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Yp2u1rsx3UKRhNA-S30fJq
        subject_person_id: p_cVHn1JNLVh2RSajB1FHgGr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W3GJcYQ68tdjW81oNrSGsA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IBSFhLJ-LJpDk72wAdA_Uk
          claim_id: c_Yp2u1rsx3UKRhNA-S30fJq
          source_id: s_UEFh77FAXd6oz73Lp3pTXt
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第二十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UEFh77FAXd6oz73Lp3pTXt
            source_type: api_record
            title: 中国历代人物传记资料库：王詢（CBDB 255805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255805&o=json
            external_identifier: CBDB:255805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cVHn1JNLVh2RSajB1FHgGr
        status: active
        display_name: 王詢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-oLFM9IzSfVz5eZBbZI6H3
        subject_person_id: p_V3qTUFMYcxnYJJ33cVNHT6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W3GJcYQ68tdjW81oNrSGsA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wnZG8lK2QmGkY2MsNuW6Jn
          claim_id: c_-oLFM9IzSfVz5eZBbZI6H3
          source_id: s_su6S5A5FD9xrEqvEt7jXvu
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第二十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_su6S5A5FD9xrEqvEt7jXvu
            source_type: api_record
            title: 中国历代人物传记资料库：王仲威（CBDB 255803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255803&o=json
            external_identifier: CBDB:255803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_V3qTUFMYcxnYJJ33cVNHT6
        status: active
        display_name: 王仲威
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩 | accepted |
| birth.date | 1450年 | accepted |
| bio.summary | 王恩（生于1450年），明人物。明清進士進士，籍贯華亭，入仕進士。（中国历代人物传记资料库 CBDB 200281） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cVHn1JNLVh2RSajB1FHgGr | 王詢 | accepted |
| ancestors | p_V3qTUFMYcxnYJJ33cVNHT6 | 王仲威 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 200281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200281&o=json)
- [中国历代人物传记资料库：王詢（CBDB 255805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255805&o=json)
- [中国历代人物传记资料库：王仲威（CBDB 255803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255803&o=json)

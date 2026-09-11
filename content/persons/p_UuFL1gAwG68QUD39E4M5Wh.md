---
schema: wang-person/v1
id: p_UuFL1gAwG68QUD39E4M5Wh
status: active
merged_into: null
display_name: 王職
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zSSmBtLmQd5ngedM2nyMKh
        subject_person_id: p_UuFL1gAwG68QUD39E4M5Wh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王職
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o7VQ1GGUdJe4umGw3GsmgZ
          claim_id: c_zSSmBtLmQd5ngedM2nyMKh
          source_id: s_BoQwULT9dG6ucQ1MCKLhfB
          stance: supports
          locator: CBDB:206108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206108）
          source: &a1
            id: s_BoQwULT9dG6ucQ1MCKLhfB
            source_type: api_record
            title: 中国历代人物传记资料库：王職（CBDB 206108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206108&o=json
            external_identifier: CBDB:206108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9F8E12V5Z2nxwhmZ1bFhEy
        subject_person_id: p_UuFL1gAwG68QUD39E4M5Wh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FDWJMrYg9P6xeAfqut7yAr
          claim_id: c_9F8E12V5Z2nxwhmZ1bFhEy
          source_id: s_BoQwULT9dG6ucQ1MCKLhfB
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
        id: c_VXQq9wxYopnzfqkyW9Rk65
        subject_person_id: p_UuFL1gAwG68QUD39E4M5Wh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王職（生于1540年），明人物。明清進士進士，籍贯洛陽，入仕進士。（中国历代人物传记资料库 CBDB 206108）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UkvlLq7vcXw_tsyTsu_Qq6
          claim_id: c_VXQq9wxYopnzfqkyW9Rk65
          source_id: s_BoQwULT9dG6ucQ1MCKLhfB
          stance: supports
          locator: CBDB:206108
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LJHkXuQG63_PkDCDGAVZGz
        subject_person_id: p_5J7f6wYMRMxs7athYCFm1K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UuFL1gAwG68QUD39E4M5Wh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RdSW0RafR7ao0P7xaquv1R
          claim_id: c_LJHkXuQG63_PkDCDGAVZGz
          source_id: s_q3DAjceohaS2PMGBemxMMs
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第二十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_q3DAjceohaS2PMGBemxMMs
            source_type: api_record
            title: 中国历代人物传记资料库：王永臣（CBDB 213407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213407&o=json
            external_identifier: CBDB:213407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5J7f6wYMRMxs7athYCFm1K
        status: active
        display_name: 王永臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wL0CpHQ0fre43IOhvBvnFf
        subject_person_id: p_FtC1XQCji1YiVwcStMfdYg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UuFL1gAwG68QUD39E4M5Wh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q9oeCA81fzddrUrT8m0wD6
          claim_id: c_wL0CpHQ0fre43IOhvBvnFf
          source_id: s_8ERgNm49x4TyzSy7uMwWst
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第二十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8ERgNm49x4TyzSy7uMwWst
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 213405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213405&o=json
            external_identifier: CBDB:213405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FtC1XQCji1YiVwcStMfdYg
        status: active
        display_name: 王林
        merged_into_person_id: null
    - claim:
        id: c_8y3euAT15aa77lL3oubMcD
        subject_person_id: p_GzENjSejHuJfatAtYxzCDL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UuFL1gAwG68QUD39E4M5Wh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7AyOxYxIiUvx-F1XfINUyI
          claim_id: c_8y3euAT15aa77lL3oubMcD
          source_id: s_v6DFKc6YiGktP9NgEjhPVx
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第二十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v6DFKc6YiGktP9NgEjhPVx
            source_type: api_record
            title: 中国历代人物传记资料库：王子良（CBDB 213406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213406&o=json
            external_identifier: CBDB:213406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GzENjSejHuJfatAtYxzCDL
        status: active
        display_name: 王子良
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王職

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王職 | accepted |
| birth.date | 1540年 | accepted |
| bio.summary | 王職（生于1540年），明人物。明清進士進士，籍贯洛陽，入仕進士。（中国历代人物传记资料库 CBDB 206108） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5J7f6wYMRMxs7athYCFm1K | 王永臣 | accepted |
| ancestors | p_FtC1XQCji1YiVwcStMfdYg | 王林 | accepted |
| ancestors | p_GzENjSejHuJfatAtYxzCDL | 王子良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王林（CBDB 213405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213405&o=json)
- [中国历代人物传记资料库：王永臣（CBDB 213407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213407&o=json)
- [中国历代人物传记资料库：王職（CBDB 206108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206108&o=json)
- [中国历代人物传记资料库：王子良（CBDB 213406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213406&o=json)

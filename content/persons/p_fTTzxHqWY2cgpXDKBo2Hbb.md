---
schema: wang-person/v1
id: p_fTTzxHqWY2cgpXDKBo2Hbb
status: active
merged_into: null
display_name: 王思賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AB7cq5xP6T4iWVYLSK35qp
        subject_person_id: p_fTTzxHqWY2cgpXDKBo2Hbb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MFeJNmQPTzA2Q4hcFda1CH
          claim_id: c_AB7cq5xP6T4iWVYLSK35qp
          source_id: s_dgXWZfBMsBXDffz4PmgRUp
          stance: supports
          locator: CBDB:226930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226930）
          source: &a1
            id: s_dgXWZfBMsBXDffz4PmgRUp
            source_type: api_record
            title: 中国历代人物传记资料库：王思賢（CBDB 226930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226930&o=json
            external_identifier: CBDB:226930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_midkkTRvapHQYVqWZprNV1
        subject_person_id: p_fTTzxHqWY2cgpXDKBo2Hbb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226930）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J4hMZ3F1oiFzNUS2BtoY6f
          claim_id: c_midkkTRvapHQYVqWZprNV1
          source_id: s_dgXWZfBMsBXDffz4PmgRUp
          stance: supports
          locator: CBDB:226930
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-TKvb92tDuVQjXbA4ALjGr
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fTTzxHqWY2cgpXDKBo2Hbb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YZ2EWPcp-zhmN_siPYup2d
          claim_id: c_-TKvb92tDuVQjXbA4ALjGr
          source_id: s_eY9tZDgYIobF8UsN-Tf2UR
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王思賢 与 王立賢 为同胞（CBDB 记「兄」），王立賢 之父／母即 王思賢 之父／母。
          source:
            id: s_eY9tZDgYIobF8UsN-Tf2UR
            source_type: api_record
            title: 中国历代人物传记资料库：王思賢（CBDB 226930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226930&o=json
            external_identifier: CBDB:226930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MZb3xwrJh2KS7jR6a3sirM
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FhN_oDl5neOScrZErnx7nP
        subject_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fTTzxHqWY2cgpXDKBo2Hbb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_erJDkC6VaigJbaRteQsZzC
          claim_id: c_FhN_oDl5neOScrZErnx7nP
          source_id: s_eY9tZDgYIobF8UsN-Tf2UR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207055 王立賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eY9tZDgYIobF8UsN-Tf2UR
            source_type: api_record
            title: 中国历代人物传记资料库：王思賢（CBDB 226930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226930&o=json
            external_identifier: CBDB:226930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NGHFT8W3h8WaBq7fkVhjck
        status: active
        display_name: 王立賢
        merged_into_person_id: null
---

# 王思賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思賢 | accepted |
| bio.summary | 王思賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226930） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MZb3xwrJh2KS7jR6a3sirM | 王佐 | accepted |
| other | p_NGHFT8W3h8WaBq7fkVhjck | 王立賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思賢（CBDB 226930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226930&o=json)

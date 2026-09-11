---
schema: wang-person/v1
id: p_zsVFNTYzGiADoYvqX8wVfc
status: active
merged_into: null
display_name: 王嵱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8JT2Qqwx5AZGkN1xCrpWZM
        subject_person_id: p_zsVFNTYzGiADoYvqX8wVfc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TpBmsTPQSWBnvqUKJj5FwL
          claim_id: c_8JT2Qqwx5AZGkN1xCrpWZM
          source_id: s_3oCMFM8xzEZWrGJPPKcTt3
          stance: supports
          locator: CBDB:304531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304531）
          source: &a1
            id: s_3oCMFM8xzEZWrGJPPKcTt3
            source_type: api_record
            title: 中国历代人物传记资料库：王嵱（CBDB 304531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304531&o=json
            external_identifier: CBDB:304531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k7MopFq9tYMHTVMz9H1F8q
        subject_person_id: p_zsVFNTYzGiADoYvqX8wVfc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵱，明人物。嘉靖二十年進士，籍贯慈溪，曾任知縣。（中国历代人物传记资料库 CBDB 304531）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CcZM1wGTZ67wMjj730mFpU
          claim_id: c_k7MopFq9tYMHTVMz9H1F8q
          source_id: s_3oCMFM8xzEZWrGJPPKcTt3
          stance: supports
          locator: CBDB:304531
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5uUpbunvudwqA8F8L-ZSWC
        subject_person_id: p_zsVFNTYzGiADoYvqX8wVfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JML3zLgbrajmhN4fDU1Pka
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ar0og17444_1cCZRTBPqjw
          claim_id: c_5uUpbunvudwqA8F8L-ZSWC
          source_id: s_sJ3iEzhs44udb87E8NcpTD
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sJ3iEzhs44udb87E8NcpTD
            source_type: api_record
            title: 中国历代人物传记资料库：王交（CBDB 126505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126505&o=json
            external_identifier: CBDB:126505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JML3zLgbrajmhN4fDU1Pka
        status: active
        display_name: 王交
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嵱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵱 | accepted |
| bio.summary | 王嵱，明人物。嘉靖二十年進士，籍贯慈溪，曾任知縣。（中国历代人物传记资料库 CBDB 304531） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JML3zLgbrajmhN4fDU1Pka | 王交 | accepted |

## 外部来源

- [中国历代人物传记资料库：王交（CBDB 126505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126505&o=json)
- [中国历代人物传记资料库：王嵱（CBDB 304531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304531&o=json)

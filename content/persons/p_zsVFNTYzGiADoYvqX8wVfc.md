---
schema: wang-person/v1
id: p_zsVFNTYzGiADoYvqX8wVfc
status: active
merged_into: null
display_name: 王嵱
revision: 6
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
    - claim:
        id: c_mOpjrnofNymyOAgpaZzRrL
        subject_person_id: p_zsVFNTYzGiADoYvqX8wVfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6zQfSk9K4dgdWZrTsWJ5Fh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RxMGYmcC0F2YUhr84n95gC
          claim_id: c_mOpjrnofNymyOAgpaZzRrL
          source_id: s_IyYsBhlZMA3uKvLlTLZIYJ
          stance: supports
          locator: CBDB：兄弟 王交（126505）之父／母 王嵱
          quotation: null
          interpretation_note: 由兄弟关系推断：王齊 与 王交 为同胞（CBDB 记「兄」），王交 之父／母即 王齊 之父／母。
          source:
            id: s_IyYsBhlZMA3uKvLlTLZIYJ
            source_type: api_record
            title: 中国历代人物传记资料库：王齊（CBDB 304537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304537&o=json
            external_identifier: CBDB:304537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6zQfSk9K4dgdWZrTsWJ5Fh
        status: active
        display_name: 王齊
        merged_into_person_id: null
    - claim:
        id: c_x84E4rnITFR0QRcG1vIEfC
        subject_person_id: p_zsVFNTYzGiADoYvqX8wVfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6zT1sia2P7t8yDmtCBoxUW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F51MRLBrxArvGNVubKEQML
          claim_id: c_x84E4rnITFR0QRcG1vIEfC
          source_id: s_B6JFJ-nuQuste-niwlwZdF
          stance: supports
          locator: CBDB：兄弟 王交（126505）之父／母 王嵱
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥 与 王交 为同胞（CBDB 记「兄」），王交 之父／母即 王彥 之父／母。
          source:
            id: s_B6JFJ-nuQuste-niwlwZdF
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 304538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304538&o=json
            external_identifier: CBDB:304538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6zT1sia2P7t8yDmtCBoxUW
        status: active
        display_name: 王彥
        merged_into_person_id: null
    - claim:
        id: c_N2xqfa6LV1_v6Dtcji5Vl-
        subject_person_id: p_zsVFNTYzGiADoYvqX8wVfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kzBxUQ6xDWVXrnCj5Py711
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZRGTZJOgH3rGcWONkOw-Mr
          claim_id: c_N2xqfa6LV1_v6Dtcji5Vl-
          source_id: s__SUTwW_D9MSz6kgtu7OtH1
          stance: supports
          locator: CBDB：兄弟 王交（126505）之父／母 王嵱
          quotation: null
          interpretation_note: 由兄弟关系推断：王方 与 王交 为同胞（CBDB 记「弟」），王交 之父／母即 王方 之父／母。
          source:
            id: s__SUTwW_D9MSz6kgtu7OtH1
            source_type: api_record
            title: 中国历代人物传记资料库：王方（CBDB 304535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304535&o=json
            external_identifier: CBDB:304535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kzBxUQ6xDWVXrnCj5Py711
        status: active
        display_name: 王方
        merged_into_person_id: null
    - claim:
        id: c_dQs-qhKsKiXjamVvP_20Zt
        subject_person_id: p_zsVFNTYzGiADoYvqX8wVfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yYG8BCxUmutRb9dNUyCBda
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rt-CdVBHJtVui1atrDgSrU
          claim_id: c_dQs-qhKsKiXjamVvP_20Zt
          source_id: s_FYV9njAYO394HqKMFpMKt7
          stance: supports
          locator: CBDB：兄弟 王交（126505）之父／母 王嵱
          quotation: null
          interpretation_note: 由兄弟关系推断：王亶 与 王交 为同胞（CBDB 记「兄」），王交 之父／母即 王亶 之父／母。
          source:
            id: s_FYV9njAYO394HqKMFpMKt7
            source_type: api_record
            title: 中国历代人物传记资料库：王亶（CBDB 304539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304539&o=json
            external_identifier: CBDB:304539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yYG8BCxUmutRb9dNUyCBda
        status: active
        display_name: 王亶
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
| children | p_6zQfSk9K4dgdWZrTsWJ5Fh | 王齊 | accepted |
| children | p_6zT1sia2P7t8yDmtCBoxUW | 王彥 | accepted |
| children | p_kzBxUQ6xDWVXrnCj5Py711 | 王方 | accepted |
| children | p_yYG8BCxUmutRb9dNUyCBda | 王亶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亶（CBDB 304539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304539&o=json)
- [中国历代人物传记资料库：王方（CBDB 304535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304535&o=json)
- [中国历代人物传记资料库：王交（CBDB 126505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126505&o=json)
- [中国历代人物传记资料库：王齊（CBDB 304537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304537&o=json)
- [中国历代人物传记资料库：王彥（CBDB 304538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304538&o=json)
- [中国历代人物传记资料库：王嵱（CBDB 304531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304531&o=json)

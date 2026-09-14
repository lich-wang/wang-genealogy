---
schema: wang-person/v1
id: p_6zQfSk9K4dgdWZrTsWJ5Fh
status: active
merged_into: null
display_name: 王齊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WCCxwKYWM8ii7koGnvd6ZM
        subject_person_id: p_6zQfSk9K4dgdWZrTsWJ5Fh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eZiCvRNGK6X4L91XBMrfbQ
          claim_id: c_WCCxwKYWM8ii7koGnvd6ZM
          source_id: s_xcgRysz1BuZ17iQxZuSbcJ
          stance: supports
          locator: CBDB:304537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304537）
          source: &a1
            id: s_xcgRysz1BuZ17iQxZuSbcJ
            source_type: api_record
            title: 中国历代人物传记资料库：王齊（CBDB 304537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304537&o=json
            external_identifier: CBDB:304537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mpTC8EBjP3n4Kb8zzLCNmw
        subject_person_id: p_6zQfSk9K4dgdWZrTsWJ5Fh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊，明人物。嘉靖二十年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 304537）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_08Z8HuTsUxyz_jQ-Upx1pX
          claim_id: c_mpTC8EBjP3n4Kb8zzLCNmw
          source_id: s_xcgRysz1BuZ17iQxZuSbcJ
          stance: supports
          locator: CBDB:304537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_zsVFNTYzGiADoYvqX8wVfc
        status: active
        display_name: 王嵱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cCbHNGmCA-fH40Bb3w9WLd
        subject_person_id: p_6zQfSk9K4dgdWZrTsWJ5Fh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JML3zLgbrajmhN4fDU1Pka
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JT1ODmyYJYkVBxnQp9NgO8
          claim_id: c_cCbHNGmCA-fH40Bb3w9WLd
          source_id: s_IyYsBhlZMA3uKvLlTLZIYJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126505 王交）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_JML3zLgbrajmhN4fDU1Pka
        status: active
        display_name: 王交
        merged_into_person_id: null
---

# 王齊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王齊 | accepted |
| bio.summary | 王齊，明人物。嘉靖二十年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 304537） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zsVFNTYzGiADoYvqX8wVfc | 王嵱 | accepted |
| other | p_JML3zLgbrajmhN4fDU1Pka | 王交 | accepted |

## 外部来源

- [中国历代人物传记资料库：王齊（CBDB 304537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304537&o=json)

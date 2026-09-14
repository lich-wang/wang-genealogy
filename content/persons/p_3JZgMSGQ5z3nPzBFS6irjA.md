---
schema: wang-person/v1
id: p_3JZgMSGQ5z3nPzBFS6irjA
status: active
merged_into: null
display_name: 王琬
cbdb_id: 34581
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GJn6fA115w3o3KBvwfrYyJ
        subject_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琬，明人物。籍贯吳縣，入仕薦舉 (保任,保舉)，曾任知縣。（中国历代人物传记资料库 CBDB 34581）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_5xzJzDZM78f7HCyBDRRRRS
          claim_id: c_GJn6fA115w3o3KBvwfrYyJ
          source_id: s_Pep3yEWZ9xNkK9JDhN8XfH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_Pep3yEWZ9xNkK9JDhN8XfH
            source_type: api_record
            title: 维基数据：王琬（Q45426296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426296
            external_identifier: Q45426296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_NaVK4g3uMjPpOR4aaU2Evv
          claim_id: c_GJn6fA115w3o3KBvwfrYyJ
          source_id: s_RKoAncChYFnPjTFkDWbWQL
          stance: supports
          locator: CBDB:34581
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RKoAncChYFnPjTFkDWbWQL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王琬（34581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34581&o=json
            external_identifier: CBDB:34581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:32.290Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GKGKX1RuKjHeBGDZQQpEJN
        subject_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ky8FT8twUZfD6u2Us54UEm
          claim_id: c_GKGKX1RuKjHeBGDZQQpEJN
          source_id: s_RKoAncChYFnPjTFkDWbWQL
          stance: supports
          locator: Q45426296
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WxuKQfS1kzLbhkFS5V99Wi
          claim_id: c_GKGKX1RuKjHeBGDZQQpEJN
          source_id: s_Pep3yEWZ9xNkK9JDhN8XfH
          stance: supports
          locator: Q45426296
          quotation: null
          interpretation_note: null
          source:
            id: s_Pep3yEWZ9xNkK9JDhN8XfH
            source_type: api_record
            title: 维基数据：王琬（Q45426296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426296
            external_identifier: Q45426296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cpS9ZtSMvjtM99NkY4ZJFp
        subject_person_id: p_P2y97jJhXVBL5SrVuPH2Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kJgaNXehK77QzYePfsAxuC
          claim_id: c_cpS9ZtSMvjtM99NkY4ZJFp
          source_id: s_Pep3yEWZ9xNkK9JDhN8XfH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_Gpu6V2tvQNXsfzoyRqN6s8
          claim_id: c_cpS9ZtSMvjtM99NkY4ZJFp
          source_id: s_R7Q4MJBKETsoKXUfCBEiDk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_R7Q4MJBKETsoKXUfCBEiDk
            source_type: api_record
            title: 维基数据：王逵（Q45426376）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426376
            external_identifier: Q45426376
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:33.804Z
            metadata_json: null
        - id: cs_YSDXFw5Trs9bLfYjwUohc3
          claim_id: c_cpS9ZtSMvjtM99NkY4ZJFp
          source_id: s_WZsWGK6n29iNd2y92gVpEL
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_WZsWGK6n29iNd2y92gVpEL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逵（34583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34583&o=json
            external_identifier: CBDB:34583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:33.993Z
            metadata_json: null
      object_person:
        id: p_P2y97jJhXVBL5SrVuPH2Jb
        status: active
        display_name: 王逵
        merged_into_person_id: null
  children:
    - claim:
        id: c_814SJ6xfoJ5AhYWP8gFw3j
        subject_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Wp6B6oFJWureDLbUWC4XTo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BKq4kAPkHSumaayoGnw5Pi
          claim_id: c_814SJ6xfoJ5AhYWP8gFw3j
          source_id: s_Pep3yEWZ9xNkK9JDhN8XfH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Pep3yEWZ9xNkK9JDhN8XfH
            source_type: api_record
            title: 维基数据：王琬（Q45426296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426296
            external_identifier: Q45426296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_HxhaCQ2rWWjL6TuubEs9z9
          claim_id: c_814SJ6xfoJ5AhYWP8gFw3j
          source_id: s_dWRCcR6daat23BeqA6jHUm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_dWRCcR6daat23BeqA6jHUm
            source_type: api_record
            title: 维基数据：王鏊（Q15904946）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904946
            external_identifier: Q15904946
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:35.973Z
            metadata_json: null
      object_person:
        id: p_Wp6B6oFJWureDLbUWC4XTo
        status: active
        display_name: 王鏊
        merged_into_person_id: null
    - claim:
        id: c_gd9wPhSEsS8d8ce3DEFnnZ
        subject_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AKaTYUWNKCzouUxFhiCAGD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8g475ebKJePx6A68ugbRPg
          claim_id: c_gd9wPhSEsS8d8ce3DEFnnZ
          source_id: s_Pep3yEWZ9xNkK9JDhN8XfH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_Bz9v656RoZSN4xFMmTU3qi
          claim_id: c_gd9wPhSEsS8d8ce3DEFnnZ
          source_id: s_tvgt6REcBJS37AUDJweQn6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tvgt6REcBJS37AUDJweQn6
            source_type: api_record
            title: 维基数据：王铨（Q45426337）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426337
            external_identifier: Q45426337
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:33.804Z
            metadata_json: null
        - id: cs_yGZxdU9d63oUy2G2A6c88A
          claim_id: c_gd9wPhSEsS8d8ce3DEFnnZ
          source_id: s_RKoAncChYFnPjTFkDWbWQL
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_AKaTYUWNKCzouUxFhiCAGD
        status: active
        display_name: 王铨
        merged_into_person_id: null
    - claim:
        id: c_QgYIhE8RY60-In-SfgS45f
        subject_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2Bks677cJ3Ax96uNPF3D7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGtKWsT7G5UJ5kE3d8q8LI
          claim_id: c_QgYIhE8RY60-In-SfgS45f
          source_id: s_QZDRIMXjdOPP2mqtJByWuy
          stance: supports
          locator: CBDB：兄弟 王鏊（34579）之父／母 王琬
          quotation: null
          interpretation_note: 由兄弟关系推断：王銘 与 王鏊 为同胞（CBDB 记「弟」），王鏊 之父／母即 王銘 之父／母。
          source:
            id: s_QZDRIMXjdOPP2mqtJByWuy
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 247604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247604&o=json
            external_identifier: CBDB:247604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Bks677cJ3Ax96uNPF3D7T
        status: active
        display_name: 王銘
        merged_into_person_id: null
    - claim:
        id: c_e_cJxAbMUU5Gtlmnbghwa-
        subject_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_nbz4y3vGc61fE26Ty4aDry
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OdiezYql8gwF4GghLllSmg
          claim_id: c_e_cJxAbMUU5Gtlmnbghwa-
          source_id: s_-pFGbiQRozvJlsTBEIPgjG
          stance: supports
          locator: CBDB：兄弟 王鏊（34579）之父／母 王琬
          quotation: null
          interpretation_note: 由兄弟关系推断：王銶 与 王鏊 为同胞（CBDB 记「兄」），王鏊 之父／母即 王銶 之父／母。
          source:
            id: s_-pFGbiQRozvJlsTBEIPgjG
            source_type: api_record
            title: 中国历代人物传记资料库：王銶（CBDB 247605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247605&o=json
            external_identifier: CBDB:247605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nbz4y3vGc61fE26Ty4aDry
        status: active
        display_name: 王銶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琬，明人物。籍贯吳縣，入仕薦舉 (保任,保舉)，曾任知縣。（中国历代人物传记资料库 CBDB 34581） | accepted |
| name.primary | 王琬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P2y97jJhXVBL5SrVuPH2Jb | 王逵 | accepted |
| children | p_Wp6B6oFJWureDLbUWC4XTo | 王鏊 | accepted |
| children | p_AKaTYUWNKCzouUxFhiCAGD | 王铨 | accepted |
| children | p_2Bks677cJ3Ax96uNPF3D7T | 王銘 | accepted |
| children | p_nbz4y3vGc61fE26Ty4aDry | 王銶 | accepted |

## 外部来源

- [维基数据：王鏊（Q15904946）](https://www.wikidata.org/wiki/Q15904946)
- [维基数据：王逵（Q45426376）](https://www.wikidata.org/wiki/Q45426376)
- [维基数据：王铨（Q45426337）](https://www.wikidata.org/wiki/Q45426337)
- [维基数据：王琬（Q45426296）](https://www.wikidata.org/wiki/Q45426296)
- [中国历代人物传记资料库：王銘（CBDB 247604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247604&o=json)
- [中国历代人物传记资料库：王銶（CBDB 247605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247605&o=json)
- [CBDB 中国历代人物传记资料库：王逵（34583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34583&o=json)
- [CBDB 中国历代人物传记资料库：王琬（34581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34581&o=json)

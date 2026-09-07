---
schema: wang-person/v1
id: p_S3MwG2kKk5brnwtbib7BVJ
status: active
merged_into: null
display_name: 王同恩
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xg8JDnNJHXfqhAwBxngs5q
        subject_person_id: p_S3MwG2kKk5brnwtbib7BVJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同恩，史料所见人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 154138 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jJAHE6ys8SUxAJmY6Wor5e
          claim_id: c_Xg8JDnNJHXfqhAwBxngs5q
          source_id: s_LgKdubFApXZfva7Fvx63NH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_LgKdubFApXZfva7Fvx63NH
            source_type: api_record
            title: 维基数据：王同恩（Q45623269）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623269
            external_identifier: Q45623269
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_j92V1T2RCcgCSFpYgcy6Ne
          claim_id: c_Xg8JDnNJHXfqhAwBxngs5q
          source_id: s_kctzQzQt1tNU6aRF4MrNhE
          stance: supports
          locator: CBDB:154138
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kctzQzQt1tNU6aRF4MrNhE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王同恩（154138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154138&o=json
            external_identifier: CBDB:154138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.646Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nt8bqskfhbCfdYEhbJ1hr8
        subject_person_id: p_S3MwG2kKk5brnwtbib7BVJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同恩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LHB9sK9VhFtj6WnBXaCU6o
          claim_id: c_Nt8bqskfhbCfdYEhbJ1hr8
          source_id: s_kctzQzQt1tNU6aRF4MrNhE
          stance: supports
          locator: Q45623269
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qTcLqQysJZmxvLXbqdPxRa
          claim_id: c_Nt8bqskfhbCfdYEhbJ1hr8
          source_id: s_LgKdubFApXZfva7Fvx63NH
          stance: supports
          locator: Q45623269
          quotation: null
          interpretation_note: null
          source:
            id: s_LgKdubFApXZfva7Fvx63NH
            source_type: api_record
            title: 维基数据：王同恩（Q45623269）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623269
            external_identifier: Q45623269
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Kjwv3RqAzjL8AQcy8dd2DJ
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S3MwG2kKk5brnwtbib7BVJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TSbppQ7EMGk93dhLkHhJoS
          claim_id: c_Kjwv3RqAzjL8AQcy8dd2DJ
          source_id: s_kctzQzQt1tNU6aRF4MrNhE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_kctzQzQt1tNU6aRF4MrNhE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王同恩（154138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154138&o=json
            external_identifier: CBDB:154138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.646Z
            metadata_json: null
        - id: cs_UwXYDWQXQzY6fizdKD1Zea
          claim_id: c_Kjwv3RqAzjL8AQcy8dd2DJ
          source_id: s_fA4yFEVkP128orqD5bJWNZ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fA4yFEVkP128orqD5bJWNZ
            source_type: api_record
            title: 维基数据：王志悌（Q45507893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507893
            external_identifier: Q45507893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_Zr9PiNegxAqK3oGnidjMx6
          claim_id: c_Kjwv3RqAzjL8AQcy8dd2DJ
          source_id: s_LgKdubFApXZfva7Fvx63NH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LgKdubFApXZfva7Fvx63NH
            source_type: api_record
            title: 维基数据：王同恩（Q45623269）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623269
            external_identifier: Q45623269
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_gh1rv6fd6xaVvvYuQNNmeX
          claim_id: c_Kjwv3RqAzjL8AQcy8dd2DJ
          source_id: s_zZdP9fY2WNPS2b17HTjS2G
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_zZdP9fY2WNPS2b17HTjS2G
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志悌（140994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json
            external_identifier: CBDB:140994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.649Z
            metadata_json: null
      object_person:
        id: p_KXD6a4zaL9E1N69hTNkTMP
        status: active
        display_name: 王志悌
        merged_into_person_id: null
    - claim:
        id: c_rijfjpCgqrAoHDoEr175LF
        subject_person_id: p_Bj8bFyazic2NrpdNesGfKg
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_S3MwG2kKk5brnwtbib7BVJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bn3EmCfsJcmzEt4MqkBnUa
          claim_id: c_rijfjpCgqrAoHDoEr175LF
          source_id: s_842fPHTiuXebkgrsSQy6Wc
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_842fPHTiuXebkgrsSQy6Wc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鴻（140992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140992&o=json
            external_identifier: CBDB:140992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.350Z
            metadata_json: null
        - id: cs_Rna9x9HnXW24VvRGF2ckcS
          claim_id: c_rijfjpCgqrAoHDoEr175LF
          source_id: s_LgKdubFApXZfva7Fvx63NH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LgKdubFApXZfva7Fvx63NH
            source_type: api_record
            title: 维基数据：王同恩（Q45623269）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623269
            external_identifier: Q45623269
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_cjShkKtVR5cNEiPtm5i3k7
          claim_id: c_rijfjpCgqrAoHDoEr175LF
          source_id: s_oEZhBpmPhCMLgvgFWpzFVy
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oEZhBpmPhCMLgvgFWpzFVy
            source_type: api_record
            title: 维基数据：王鸿（Q45507766）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507766
            external_identifier: Q45507766
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
      object_person:
        id: p_Bj8bFyazic2NrpdNesGfKg
        status: active
        display_name: 王鸿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王同恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同恩，史料所见人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 154138 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王同恩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KXD6a4zaL9E1N69hTNkTMP | 王志悌 | accepted |
| parents | p_Bj8bFyazic2NrpdNesGfKg | 王鸿 | accepted |

## 外部来源

- [维基数据：王鸿（Q45507766）](https://www.wikidata.org/wiki/Q45507766)
- [维基数据：王同恩（Q45623269）](https://www.wikidata.org/wiki/Q45623269)
- [维基数据：王志悌（Q45507893）](https://www.wikidata.org/wiki/Q45507893)
- [CBDB 中国历代人物传记资料库：王鴻（140992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140992&o=json)
- [CBDB 中国历代人物传记资料库：王同恩（154138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154138&o=json)
- [CBDB 中国历代人物传记资料库：王志悌（140994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json)

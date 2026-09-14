---
schema: wang-person/v1
id: p_aJEhW411trgktB88mZRC8c
status: active
merged_into: null
display_name: 王應春
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UmAnkcuLuRwrBiwtGfqM3u
        subject_person_id: p_aJEhW411trgktB88mZRC8c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6GSLEULMzCjyTTZ1U1E191
          claim_id: c_UmAnkcuLuRwrBiwtGfqM3u
          source_id: s_fUwoZ6h81fS4Hhx2G6LHbe
          stance: supports
          locator: CBDB:320868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320868）
          source: &a1
            id: s_fUwoZ6h81fS4Hhx2G6LHbe
            source_type: api_record
            title: 中国历代人物传记资料库：王應春（CBDB 320868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320868&o=json
            external_identifier: CBDB:320868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RB78xE43rLzwLA7UJrTdbN
        subject_person_id: p_aJEhW411trgktB88mZRC8c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應春，明人物。嘉靖三十五年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 320868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X4wlHS5-X1zz7_sjyVOQ4V
          claim_id: c_RB78xE43rLzwLA7UJrTdbN
          source_id: s_fUwoZ6h81fS4Hhx2G6LHbe
          stance: supports
          locator: CBDB:320868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NOFl5rdciqT-oWL02HmeA_
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJEhW411trgktB88mZRC8c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_slg9yRmX44nLTpi2s1U5D1
          claim_id: c_NOFl5rdciqT-oWL02HmeA_
          source_id: s_kQYaiVPBbQRt5tjH8DKYvR
          stance: supports
          locator: CBDB：兄弟 王得春（204563）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王應春 与 王得春 为同胞（CBDB 记「弟」），王得春 之父／母即 王應春 之父／母。
          source:
            id: s_kQYaiVPBbQRt5tjH8DKYvR
            source_type: api_record
            title: 中国历代人物传记资料库：王應春（CBDB 320868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320868&o=json
            external_identifier: CBDB:320868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MU2tTmhiuXd4gZeWVvtKyQ
        status: active
        display_name: 王惟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SIr9cCGO3g5BxCszIEkEvj
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJEhW411trgktB88mZRC8c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7dyKJR1hH2YUsI4DQus55Q
          claim_id: c_SIr9cCGO3g5BxCszIEkEvj
          source_id: s_kQYaiVPBbQRt5tjH8DKYvR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204563 王得春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kQYaiVPBbQRt5tjH8DKYvR
            source_type: api_record
            title: 中国历代人物传记资料库：王應春（CBDB 320868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320868&o=json
            external_identifier: CBDB:320868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W2D9MwuPsN8G7PZXkTNBD2
        status: active
        display_name: 王得春
        merged_into_person_id: null
---

# 王應春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應春 | accepted |
| bio.summary | 王應春，明人物。嘉靖三十五年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 320868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MU2tTmhiuXd4gZeWVvtKyQ | 王惟 | accepted |
| other | p_W2D9MwuPsN8G7PZXkTNBD2 | 王得春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應春（CBDB 320868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320868&o=json)

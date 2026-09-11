---
schema: wang-person/v1
id: p_ABKTQQtBYcaiLNDKfsdoKa
status: active
merged_into: null
display_name: 王夢良
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cTdABRFG7jNRNoqtMDqSFJ
        subject_person_id: p_ABKTQQtBYcaiLNDKfsdoKa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qdFNG7w3nuJ3dM7Q6xQ7J4
          claim_id: c_cTdABRFG7jNRNoqtMDqSFJ
          source_id: s_hHzNpbawS9ANT2j5GtNkmm
          stance: supports
          locator: CBDB:578337
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578337）
          source: &a1
            id: s_hHzNpbawS9ANT2j5GtNkmm
            source_type: api_record
            title: 中国历代人物传记资料库：王夢良（CBDB 578337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578337&o=json
            external_identifier: CBDB:578337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DAF9HvkeHZzzgHUZimSmkE
        subject_person_id: p_ABKTQQtBYcaiLNDKfsdoKa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1212年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5BLphFRDFVwMoivp85MGxP
          claim_id: c_DAF9HvkeHZzzgHUZimSmkE
          source_id: s_hHzNpbawS9ANT2j5GtNkmm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FWNtGnbtTDUuVav3UNmiUX
        subject_person_id: p_ABKTQQtBYcaiLNDKfsdoKa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1265年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hQuWhrXYbSr61rnBxk9zZJ
          claim_id: c_FWNtGnbtTDUuVav3UNmiUX
          source_id: s_hHzNpbawS9ANT2j5GtNkmm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NbkJHNBBLiXeqYBMFbGjgD
        subject_person_id: p_ABKTQQtBYcaiLNDKfsdoKa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢良（1212年—1265年），宋人物。籍贯吉水。（中国历代人物传记资料库 CBDB 578337）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EsssdmxKJdQlmGXxwCZENM
          claim_id: c_NbkJHNBBLiXeqYBMFbGjgD
          source_id: s_hHzNpbawS9ANT2j5GtNkmm
          stance: supports
          locator: CBDB:578337
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xtb7YXZxRbTiDI3sedastV
        subject_person_id: p_zBPnKLJ7X5PK7k5VM18Wfg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ABKTQQtBYcaiLNDKfsdoKa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ybGXEHUTyi4Pa9UrWMKlTL
          claim_id: c_xtb7YXZxRbTiDI3sedastV
          source_id: s_bva8pTq6WuHGqZoABEgF2n
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，四九五  甘文望夫人吳氏壙記：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bva8pTq6WuHGqZoABEgF2n
            source_type: api_record
            title: 中国历代人物传记资料库：王元清（CBDB 578340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578340&o=json
            external_identifier: CBDB:578340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.728Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zBPnKLJ7X5PK7k5VM18Wfg
        status: active
        display_name: 王元清
        merged_into_person_id: null
  children:
    - claim:
        id: c_9mKVfNn9BiJZBzOo6Atn84
        subject_person_id: p_ABKTQQtBYcaiLNDKfsdoKa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_soVhDVJnhFWiHvkRfaanD5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EplaKAggcBPs0l6gXTxOVZ
          claim_id: c_9mKVfNn9BiJZBzOo6Atn84
          source_id: s_WuthVWRZoTwC5rUweG1gAb
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，四九六  王夢良墓記：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WuthVWRZoTwC5rUweG1gAb
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 578352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578352&o=json
            external_identifier: CBDB:578352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_soVhDVJnhFWiHvkRfaanD5
        status: active
        display_name: 王經
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Vr1RhJxTkiDXQQP8rcyo2o
        subject_person_id: p_3MMrFwPc3sNHUjFFNj9XNn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ABKTQQtBYcaiLNDKfsdoKa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0tWhRmhxBJzeNUEdX5xDe1
          claim_id: c_Vr1RhJxTkiDXQQP8rcyo2o
          source_id: s_eFQQHv5bnB1ATVA5uBm5vy
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，四九五  甘文望夫人吳氏壙記：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eFQQHv5bnB1ATVA5uBm5vy
            source_type: api_record
            title: 中国历代人物传记资料库：王國器（CBDB 578338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578338&o=json
            external_identifier: CBDB:578338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3MMrFwPc3sNHUjFFNj9XNn
        status: active
        display_name: 王國器
        merged_into_person_id: null
    - claim:
        id: c_mhPFGh8Tcn6OCQPwy45Ds_
        subject_person_id: p_rqM74DkLDiMSiVKLPpFCkD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ABKTQQtBYcaiLNDKfsdoKa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DfVV9gNaOQOQ7ovt0hRjJt
          claim_id: c_mhPFGh8Tcn6OCQPwy45Ds_
          source_id: s_Gmg6CxitXWzCLxo9Pojk44
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，四九五  甘文望夫人吳氏壙記：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Gmg6CxitXWzCLxo9Pojk44
            source_type: api_record
            title: 中国历代人物传记资料库：王惟一（CBDB 578339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578339&o=json
            external_identifier: CBDB:578339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rqM74DkLDiMSiVKLPpFCkD
        status: active
        display_name: 王惟一
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王夢良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢良 | accepted |
| birth.date | 1212年 | accepted |
| death.date | 1265年 | accepted |
| bio.summary | 王夢良（1212年—1265年），宋人物。籍贯吉水。（中国历代人物传记资料库 CBDB 578337） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zBPnKLJ7X5PK7k5VM18Wfg | 王元清 | accepted |
| children | p_soVhDVJnhFWiHvkRfaanD5 | 王經 | accepted |
| ancestors | p_3MMrFwPc3sNHUjFFNj9XNn | 王國器 | accepted |
| ancestors | p_rqM74DkLDiMSiVKLPpFCkD | 王惟一 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國器（CBDB 578338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578338&o=json)
- [中国历代人物传记资料库：王經（CBDB 578352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578352&o=json)
- [中国历代人物传记资料库：王夢良（CBDB 578337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578337&o=json)
- [中国历代人物传记资料库：王惟一（CBDB 578339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578339&o=json)
- [中国历代人物传记资料库：王元清（CBDB 578340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578340&o=json)

---
schema: wang-person/v1
id: p_K74VGiLxrBxwsYuvbZmkM3
status: active
merged_into: null
display_name: 王僴
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TQtcAMMbzApTrw7MLUGaR2
        subject_person_id: p_K74VGiLxrBxwsYuvbZmkM3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4qVLiE3xahj3ADTLPa6o7K
          claim_id: c_TQtcAMMbzApTrw7MLUGaR2
          source_id: s_5HNKueCTdVNsU3McHGRJts
          stance: supports
          locator: CBDB:249478
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249478）
          source: &a1
            id: s_5HNKueCTdVNsU3McHGRJts
            source_type: api_record
            title: 中国历代人物传记资料库：王僴（CBDB 249478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249478&o=json
            external_identifier: CBDB:249478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wJEFnJhyPEp1C4YjN9bm3j
        subject_person_id: p_K74VGiLxrBxwsYuvbZmkM3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僴，明人物。成化十一年進士，籍贯寶坻。（中国历代人物传记资料库 CBDB 249478）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B1qsyUlT1xJQ9taiF0qaep
          claim_id: c_wJEFnJhyPEp1C4YjN9bm3j
          source_id: s_5HNKueCTdVNsU3McHGRJts
          stance: supports
          locator: CBDB:249478
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B_mg7ixK_3yeaXu1y2hfR1
        subject_person_id: p_GikpBfnZtBzAmt6mvRBQ1h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K74VGiLxrBxwsYuvbZmkM3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UgSq1xs5mh_Ni9HZC9Rf1S
          claim_id: c_B_mg7ixK_3yeaXu1y2hfR1
          source_id: s_MrlR-zkY-4S9qvQBlAeIY8
          stance: supports
          locator: CBDB：兄弟 王傅（199770）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王僴 与 王傅 为同胞（CBDB 记「兄」），王傅 之父／母即 王僴 之父／母。
          source:
            id: s_MrlR-zkY-4S9qvQBlAeIY8
            source_type: api_record
            title: 中国历代人物传记资料库：王僴（CBDB 249478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249478&o=json
            external_identifier: CBDB:249478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GikpBfnZtBzAmt6mvRBQ1h
        status: active
        display_name: 王縉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PI5IZjH9jUqT_fqZ237jyj
        subject_person_id: p_K74VGiLxrBxwsYuvbZmkM3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fCdwQrvNQJRLgVMdijjiRw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gr_n5Ug7_ACfHFVlf5WEr1
          claim_id: c_PI5IZjH9jUqT_fqZ237jyj
          source_id: s_MrlR-zkY-4S9qvQBlAeIY8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199770 王傅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MrlR-zkY-4S9qvQBlAeIY8
            source_type: api_record
            title: 中国历代人物传记资料库：王僴（CBDB 249478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249478&o=json
            external_identifier: CBDB:249478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fCdwQrvNQJRLgVMdijjiRw
        status: active
        display_name: 王傅
        merged_into_person_id: null
---

# 王僴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僴 | accepted |
| bio.summary | 王僴，明人物。成化十一年進士，籍贯寶坻。（中国历代人物传记资料库 CBDB 249478） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GikpBfnZtBzAmt6mvRBQ1h | 王縉 | accepted |
| other | p_fCdwQrvNQJRLgVMdijjiRw | 王傅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僴（CBDB 249478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249478&o=json)

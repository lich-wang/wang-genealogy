---
schema: wang-person/v1
id: p_Hi2pMZGHcEwS8ZkC4zPUSd
status: active
merged_into: null
display_name: 王待價
cbdb_id: 22171
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ovT2ZX8Bkiy3AWazo4ReGh
        subject_person_id: p_Hi2pMZGHcEwS8ZkC4zPUSd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王待價，五代人物。籍贯汾州，曾任太子少保、防禦推官。（中国历代人物传记资料库 CBDB 22171）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_yEvHziEt6JsJNRaw1Sm_Do
          claim_id: c_ovT2ZX8Bkiy3AWazo4ReGh
          source_id: s_zYB7deVV2FbF2JDajwC7mK
          stance: supports
          locator: CBDB:22171
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zYB7deVV2FbF2JDajwC7mK
            source_type: api_record
            title: 中国历代人物传记资料库：王待價（CBDB 22171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22171&o=json
            external_identifier: CBDB:22171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PHEFUhX5WzyyoceAe4VyKz
        subject_person_id: p_Hi2pMZGHcEwS8ZkC4zPUSd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王待價
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hzgpWHh3GD7MoZX4Gh9cye
          claim_id: c_PHEFUhX5WzyyoceAe4VyKz
          source_id: s_zYB7deVV2FbF2JDajwC7mK
          stance: supports
          locator: CBDB:22171
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 五代
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Afuq8bLYjpRFJoRD3G7337
        subject_person_id: p_GsMLftW55iaStQ68Ab6yJ2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hi2pMZGHcEwS8ZkC4zPUSd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5IQ7xozqmIL_VcPRFPUHry
          claim_id: c_Afuq8bLYjpRFJoRD3G7337
          source_id: s_V5uRehD5yKrAiRQGbTE1aG
          stance: supports
          locator: CBDB 双向互证（子 王待價 ⇄ 父 王同節）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_V5uRehD5yKrAiRQGbTE1aG
            source_type: api_record
            title: 中国历代人物传记资料库：王同節（CBDB 22170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22170&o=json
            external_identifier: CBDB:22170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_GsMLftW55iaStQ68Ab6yJ2
        status: active
        display_name: 王同節
        merged_into_person_id: null
  children:
    - claim:
        id: c_GvKv6rUtyL90HEKhbrns2L
        subject_person_id: p_Hi2pMZGHcEwS8ZkC4zPUSd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FXHwcoHY4AFBFWRSSNw52j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7VBo18QaESA_PGIKp78P8A
          claim_id: c_GvKv6rUtyL90HEKhbrns2L
          source_id: s_v8Q2d8qzHzCpc4ytk1RoKn
          stance: supports
          locator: CBDB 双向互证（父 王待價 ⇄ 子 王夢證）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_v8Q2d8qzHzCpc4ytk1RoKn
            source_type: api_record
            title: 中国历代人物传记资料库：王夢證（CBDB 22172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22172&o=json
            external_identifier: CBDB:22172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FXHwcoHY4AFBFWRSSNw52j
        status: active
        display_name: 王夢證
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_usoTQE1xQWeRYIjeNpIty-
        subject_person_id: p_Hi2pMZGHcEwS8ZkC4zPUSd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JUIEDtmZvN1xmRou6_iNx3
          claim_id: c_usoTQE1xQWeRYIjeNpIty-
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
          stance: supports
          locator: 宋史：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_42M1RyqHPGFYMpZ9FeVqji
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣宗（CBDB 1880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1880&o=json
            external_identifier: CBDB:1880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DFWuMPWUstBm3Tr8KacmZf
        status: active
        display_name: 王嗣宗
        merged_into_person_id: null
    - claim:
        id: c_lpxDovCff7IA_RihhZoB7H
        subject_person_id: p_Hi2pMZGHcEwS8ZkC4zPUSd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DrIIst_e-d4Bll6cZlWiP2
          claim_id: c_lpxDovCff7IA_RihhZoB7H
          source_id: s_zYB7deVV2FbF2JDajwC7mK
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zYB7deVV2FbF2JDajwC7mK
            source_type: api_record
            title: 中国历代人物传记资料库：王待價（CBDB 22171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22171&o=json
            external_identifier: CBDB:22171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_LKzDYAPDmX1Dcm3kwWWk7w
        status: active
        display_name: 王九言
        merged_into_person_id: null
  other: []
---

# 王待價

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王待價，五代人物。籍贯汾州，曾任太子少保、防禦推官。（中国历代人物传记资料库 CBDB 22171） | accepted |
| name.primary | 王待價 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GsMLftW55iaStQ68Ab6yJ2 | 王同節 | accepted |
| children | p_FXHwcoHY4AFBFWRSSNw52j | 王夢證 | accepted |
| descendants | p_DFWuMPWUstBm3Tr8KacmZf | 王嗣宗 | accepted |
| descendants | p_LKzDYAPDmX1Dcm3kwWWk7w | 王九言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王待價（CBDB 22171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22171&o=json)
- [中国历代人物传记资料库：王夢證（CBDB 22172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22172&o=json)
- [中国历代人物传记资料库：王嗣宗（CBDB 1880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1880&o=json)
- [中国历代人物传记资料库：王同節（CBDB 22170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22170&o=json)

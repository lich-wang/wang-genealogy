---
schema: wang-person/v1
id: p_rd5qTvBTthC6ZnBxJzkeri
status: active
merged_into: null
display_name: 王用
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZQ5Wrg33J1LJWx765z1YND
        subject_person_id: p_rd5qTvBTthC6ZnBxJzkeri
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HwS52CJfxuTAGGDTvBc1Kk
          claim_id: c_ZQ5Wrg33J1LJWx765z1YND
          source_id: s_fLtDGZ29tjC81eLM3ViAMy
          stance: supports
          locator: CBDB:200554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200554）
          source: &a1
            id: s_fLtDGZ29tjC81eLM3ViAMy
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 200554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200554&o=json
            external_identifier: CBDB:200554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_f1uZLpsDrf7W7hBsd32RPC
        subject_person_id: p_rd5qTvBTthC6ZnBxJzkeri
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_npmtvepGEp9s1tDDyR9NB7
          claim_id: c_f1uZLpsDrf7W7hBsd32RPC
          source_id: s_fLtDGZ29tjC81eLM3ViAMy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j222fvkEGWzpNxVTCUSQdd
        subject_person_id: p_rd5qTvBTthC6ZnBxJzkeri
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vbGs1PaDSVvrEkjMswXrQu
          claim_id: c_j222fvkEGWzpNxVTCUSQdd
          source_id: s_fLtDGZ29tjC81eLM3ViAMy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wox-xWrvs8agldO416658L
        subject_person_id: p_z2KrppHPtLom67wwLrWXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rd5qTvBTthC6ZnBxJzkeri
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7s9bidGmmw8PmjqUgFm1s4
          claim_id: c_wox-xWrvs8agldO416658L
          source_id: s_RzLzCyuxNFxhA9CNho3jxN
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百零八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RzLzCyuxNFxhA9CNho3jxN
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 259644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259644&o=json
            external_identifier: CBDB:259644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_z2KrppHPtLom67wwLrWXDN
        status: active
        display_name: 王繹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oSzYMSljEQHTUm8uG-KVJW
        subject_person_id: p_4RbMZf3857ddZU7cBYAPJo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rd5qTvBTthC6ZnBxJzkeri
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zeuC0BgwKJRrM2_xBM2KQ2
          claim_id: c_oSzYMSljEQHTUm8uG-KVJW
          source_id: s_n76emErFGqQnxbrJMiMFbg
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百零八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n76emErFGqQnxbrJMiMFbg
            source_type: api_record
            title: 中国历代人物传记资料库：王德銘（CBDB 259642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259642&o=json
            external_identifier: CBDB:259642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4RbMZf3857ddZU7cBYAPJo
        status: active
        display_name: 王德銘
        merged_into_person_id: null
    - claim:
        id: c_8PgdLT2gJZHSobAG9wrflW
        subject_person_id: p_dP6BdKp6wdQ2FF6rmkzLcF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rd5qTvBTthC6ZnBxJzkeri
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q--xNbMTgLlV1BVoIN8VxD
          claim_id: c_8PgdLT2gJZHSobAG9wrflW
          source_id: s_FNa4Vksd7fBeKBzv8DeShy
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百零八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FNa4Vksd7fBeKBzv8DeShy
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 259643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259643&o=json
            external_identifier: CBDB:259643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dP6BdKp6wdQ2FF6rmkzLcF
        status: active
        display_name: 王謙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| birth.date | 1450年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z2KrppHPtLom67wwLrWXDN | 王繹 | accepted |
| ancestors | p_4RbMZf3857ddZU7cBYAPJo | 王德銘 | accepted |
| ancestors | p_dP6BdKp6wdQ2FF6rmkzLcF | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德銘（CBDB 259642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259642&o=json)
- [中国历代人物传记资料库：王謙（CBDB 259643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259643&o=json)
- [中国历代人物传记资料库：王繹（CBDB 259644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259644&o=json)
- [中国历代人物传记资料库：王用（CBDB 200554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200554&o=json)

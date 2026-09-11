---
schema: wang-person/v1
id: p_qdKuHnGeLC3mjy7awnv9F6
status: active
merged_into: null
display_name: 王玄裕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jAD1HfLyYZqEHQkYQv1J5t
        subject_person_id: p_qdKuHnGeLC3mjy7awnv9F6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_axXz1fum1MdA6hStqz1VV5
          claim_id: c_jAD1HfLyYZqEHQkYQv1J5t
          source_id: s_T9WhRSYNLkZVEMMK3L3dmt
          stance: supports
          locator: CBDB:139860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139860）
          source: &a1
            id: s_T9WhRSYNLkZVEMMK3L3dmt
            source_type: api_record
            title: 中国历代人物传记资料库：王玄裕（CBDB 139860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139860&o=json
            external_identifier: CBDB:139860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_a82aPHRUsCtz4HPNnLLWXY
        subject_person_id: p_qdKuHnGeLC3mjy7awnv9F6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 611年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JEsZ4UYt2Av3K2BiM5ZwDx
          claim_id: c_a82aPHRUsCtz4HPNnLLWXY
          source_id: s_T9WhRSYNLkZVEMMK3L3dmt
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
        id: c_xrbfokaVdDwvis4yeLpGi9
        subject_person_id: p_qdKuHnGeLC3mjy7awnv9F6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 671年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FNKHASkioz6eAGkE3SK8HK
          claim_id: c_xrbfokaVdDwvis4yeLpGi9
          source_id: s_T9WhRSYNLkZVEMMK3L3dmt
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
        id: c_YYx3Yp5fVxmncqwQEp1Dyt
        subject_person_id: p_qdKuHnGeLC3mjy7awnv9F6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3tZzqFRCCY2nedQxCf9qpV
          claim_id: c_YYx3Yp5fVxmncqwQEp1Dyt
          source_id: s_T9WhRSYNLkZVEMMK3L3dmt
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
        id: c_hSgzFTT8K1kjG6CFK3-TCe
        subject_person_id: p_4pADLC64xonvNYfqPd2QtM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qdKuHnGeLC3mjy7awnv9F6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y1Dcll42bHz9djwJm2YVQ3
          claim_id: c_hSgzFTT8K1kjG6CFK3-TCe
          source_id: s_7FTs7VWSSdpzi9zt8by8t7
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianshou 33：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7FTs7VWSSdpzi9zt8by8t7
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 149551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149551&o=json
            external_identifier: CBDB:149551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4pADLC64xonvNYfqPd2QtM
        status: active
        display_name: 王才
        merged_into_person_id: null
  children:
    - claim:
        id: c_ezkr6wGHNVKtIA7yb4ckgD
        subject_person_id: p_qdKuHnGeLC3mjy7awnv9F6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xetdkzgDuuFwzJRfKMrHpS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pnn9eBiWO4qOYxqkJzQOG_
          claim_id: c_ezkr6wGHNVKtIA7yb4ckgD
          source_id: s_er3SocJ69ZroaDJx3R1RpK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianshou 33：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_er3SocJ69ZroaDJx3R1RpK
            source_type: api_record
            title: 中国历代人物传记资料库：王思過（CBDB 149552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149552&o=json
            external_identifier: CBDB:149552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_xetdkzgDuuFwzJRfKMrHpS
        status: active
        display_name: 王思過
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玄裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄裕 | accepted |
| birth.date | 611年 | accepted |
| death.date | 671年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4pADLC64xonvNYfqPd2QtM | 王才 | accepted |
| children | p_xetdkzgDuuFwzJRfKMrHpS | 王思過 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 149551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149551&o=json)
- [中国历代人物传记资料库：王思過（CBDB 149552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149552&o=json)
- [中国历代人物传记资料库：王玄裕（CBDB 139860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139860&o=json)

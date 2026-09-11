---
schema: wang-person/v1
id: p_nr8RYEFav3WB5L5BxkUtUu
status: active
merged_into: null
display_name: 王欽
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4Bi5ZDz27Dd93w4v9A7iB
        subject_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Zs2vGdCqZSLQuQhHffaBJ
          claim_id: c_b4Bi5ZDz27Dd93w4v9A7iB
          source_id: s_M7d1968NKBe5CNziSSwnCd
          stance: supports
          locator: CBDB:198425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198425）
          source: &a1
            id: s_M7d1968NKBe5CNziSSwnCd
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 198425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198425&o=json
            external_identifier: CBDB:198425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Z8YzFC4brSCktWYFCECEWn
        subject_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1433年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uJfJWgsGZFWG5QQYdzmftb
          claim_id: c_Z8YzFC4brSCktWYFCECEWn
          source_id: s_M7d1968NKBe5CNziSSwnCd
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
        id: c_5YfHUsJyuCowvLRL7UayxQ
        subject_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽（生于1433年），明人物。明清進士進士，籍贯新城，入仕進士。（中国历代人物传记资料库 CBDB 198425）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rkeo2BsFhXsVOpWWp5HCtQ
          claim_id: c_5YfHUsJyuCowvLRL7UayxQ
          source_id: s_M7d1968NKBe5CNziSSwnCd
          stance: supports
          locator: CBDB:198425
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GO5WJcX2h0y0Q1o0n-sKQC
        subject_person_id: p_Hgxi33jEZJCNUrJvtuJpZh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvjohzOCYOshUFZroSNgT6
          claim_id: c_GO5WJcX2h0y0Q1o0n-sKQC
          source_id: s_r2ktbXVBUgDJMQQYnCvHgr
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百零一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r2ktbXVBUgDJMQQYnCvHgr
            source_type: api_record
            title: 中国历代人物传记资料库：王庭哲（CBDB 270483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270483&o=json
            external_identifier: CBDB:270483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Hgxi33jEZJCNUrJvtuJpZh
        status: active
        display_name: 王庭哲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_dgVcMNoNlLYnWghVzt7ZpQ
        subject_person_id: p_aDq9632nMGH4REBy5bFdqu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YkyefzYjLNMX2wfR7iOKIW
          claim_id: c_dgVcMNoNlLYnWghVzt7ZpQ
          source_id: s_QxFGGmViurCe7HZQkbSb9b
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百零一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QxFGGmViurCe7HZQkbSb9b
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 270461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270461&o=json
            external_identifier: CBDB:270461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aDq9632nMGH4REBy5bFdqu
        status: active
        display_name: 王永
        merged_into_person_id: null
    - claim:
        id: c_XVYpfuz3mHcoSfn8VShVJG
        subject_person_id: p_M2N9nSQ24UBYJUxGhQNtdt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d2-RwAjSfmS-wwBly1oJLH
          claim_id: c_XVYpfuz3mHcoSfn8VShVJG
          source_id: s_2rK7F8DPKK3ej4A8rE32d7
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百零一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2rK7F8DPKK3ej4A8rE32d7
            source_type: api_record
            title: 中国历代人物传记资料库：王道明（CBDB 270472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270472&o=json
            external_identifier: CBDB:270472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_M2N9nSQ24UBYJUxGhQNtdt
        status: active
        display_name: 王道明
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| birth.date | 1433年 | accepted |
| bio.summary | 王欽（生于1433年），明人物。明清進士進士，籍贯新城，入仕進士。（中国历代人物传记资料库 CBDB 198425） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hgxi33jEZJCNUrJvtuJpZh | 王庭哲 | accepted |
| ancestors | p_aDq9632nMGH4REBy5bFdqu | 王永 | accepted |
| ancestors | p_M2N9nSQ24UBYJUxGhQNtdt | 王道明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道明（CBDB 270472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270472&o=json)
- [中国历代人物传记资料库：王欽（CBDB 198425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198425&o=json)
- [中国历代人物传记资料库：王庭哲（CBDB 270483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270483&o=json)
- [中国历代人物传记资料库：王永（CBDB 270461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270461&o=json)

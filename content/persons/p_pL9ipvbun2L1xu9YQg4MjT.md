---
schema: wang-person/v1
id: p_pL9ipvbun2L1xu9YQg4MjT
status: active
merged_into: null
display_name: 王舉
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iQDFpur556q5uyPeJKd19t
        subject_person_id: p_pL9ipvbun2L1xu9YQg4MjT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9MbJBsEsmthLCt19ud44A6
          claim_id: c_iQDFpur556q5uyPeJKd19t
          source_id: s_Ngz5ao8sU423GD9dmVN8ci
          stance: supports
          locator: CBDB:138165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138165）
          source: &a1
            id: s_Ngz5ao8sU423GD9dmVN8ci
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 138165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138165&o=json
            external_identifier: CBDB:138165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h9JANsuH9UtGkWzpRZgwLL
        subject_person_id: p_pL9ipvbun2L1xu9YQg4MjT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ecsE66CgC4Luur4RqtxpUP
          claim_id: c_h9JANsuH9UtGkWzpRZgwLL
          source_id: s_Ngz5ao8sU423GD9dmVN8ci
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_66_B_vc1K9jC0IBnu1zjpO
        subject_person_id: p_pL9ipvbun2L1xu9YQg4MjT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DmvAtzDarKwpQrK8485z6q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DB9-ehokUfzsASE-DA3cUq
          claim_id: c_66_B_vc1K9jC0IBnu1zjpO
          source_id: s_butDVDs8KqYeXJdkcEYE7v
          stance: supports
          locator: 寶祐登科錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_butDVDs8KqYeXJdkcEYE7v
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 137624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137624&o=json
            external_identifier: CBDB:137624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DmvAtzDarKwpQrK8485z6q
        status: active
        display_name: 王維
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_0qappXeItunHvqbNT2qrVy
        subject_person_id: p_pL9ipvbun2L1xu9YQg4MjT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7xFeon8XjY4faqRLzNiUEf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hcjcz4XvRHq7eIgAgED6I6
          claim_id: c_0qappXeItunHvqbNT2qrVy
          source_id: s_8FdnMSTGJqAjC99c9f51nQ
          stance: supports
          locator: 寶祐登科錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8FdnMSTGJqAjC99c9f51nQ
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 97833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97833&o=json
            external_identifier: CBDB:97833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7xFeon8XjY4faqRLzNiUEf
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
    - claim:
        id: c_INb6PG7EDc7qHy-sCjZqfv
        subject_person_id: p_pL9ipvbun2L1xu9YQg4MjT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YNnM29jfUgNXMA2gCi8ghx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9TswyypxaXfuVgLDDg3Xo_
          claim_id: c_INb6PG7EDc7qHy-sCjZqfv
          source_id: s_Ngz5ao8sU423GD9dmVN8ci
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YNnM29jfUgNXMA2gCi8ghx
        status: active
        display_name: 王桂發
        merged_into_person_id: null
  other: []
---

# 王舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DmvAtzDarKwpQrK8485z6q | 王維 | accepted |
| descendants | p_7xFeon8XjY4faqRLzNiUEf | 王嘉言 | accepted |
| descendants | p_YNnM29jfUgNXMA2gCi8ghx | 王桂發 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉言（CBDB 97833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97833&o=json)
- [中国历代人物传记资料库：王舉（CBDB 138165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138165&o=json)
- [中国历代人物传记资料库：王維（CBDB 137624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137624&o=json)

---
schema: wang-person/v1
id: p_TBZtLKQdaJM24ctzM119k8
status: active
merged_into: null
display_name: 王瓉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ufo11KTFrhECjvcZFuoqGa
        subject_person_id: p_TBZtLKQdaJM24ctzM119k8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z5pHrNDwZF8afBFPzUw5Lz
          claim_id: c_Ufo11KTFrhECjvcZFuoqGa
          source_id: s_G2m4PiADdB39eryxPS9vZE
          stance: supports
          locator: CBDB:292612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292612）
          source: &a1
            id: s_G2m4PiADdB39eryxPS9vZE
            source_type: api_record
            title: 中国历代人物传记资料库：王瓉（CBDB 292612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292612&o=json
            external_identifier: CBDB:292612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.409Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VCUc7RxGxXstBsLjKuVC2U
        subject_person_id: p_TBZtLKQdaJM24ctzM119k8
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
        - id: cs_p5e3szU6RrXspK9nZEhGQ1
          claim_id: c_VCUc7RxGxXstBsLjKuVC2U
          source_id: s_G2m4PiADdB39eryxPS9vZE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_9Av50HmydSe3Hk4HAXV1sH
        subject_person_id: p_TBZtLKQdaJM24ctzM119k8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5PGL3HfhnkubibTnY8wvjU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZGOA-ItL9mQaUBuqf0LuPI
          claim_id: c_9Av50HmydSe3Hk4HAXV1sH
          source_id: s_5MV8WK4AC29qwKVdS7RJGr
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5MV8WK4AC29qwKVdS7RJGr
            source_type: api_record
            title: 中国历代人物传记资料库：王釴（CBDB 202700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202700&o=json
            external_identifier: CBDB:202700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5PGL3HfhnkubibTnY8wvjU
        status: active
        display_name: 王釴
        merged_into_person_id: null
  other: []
---

# 王瓉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5PGL3HfhnkubibTnY8wvjU | 王釴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王釴（CBDB 202700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202700&o=json)
- [中国历代人物传记资料库：王瓉（CBDB 292612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292612&o=json)

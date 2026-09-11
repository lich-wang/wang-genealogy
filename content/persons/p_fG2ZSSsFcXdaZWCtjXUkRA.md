---
schema: wang-person/v1
id: p_fG2ZSSsFcXdaZWCtjXUkRA
status: active
merged_into: null
display_name: 王朝卿
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G6vL43pmq5Ga85HJXjKpw2
        subject_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xVShXc3dcCn6WKfGEdxeCv
          claim_id: c_G6vL43pmq5Ga85HJXjKpw2
          source_id: s_prHAYHF5ZUqZLkryxyDc5L
          stance: supports
          locator: CBDB:201090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201090）
          source: &a1
            id: s_prHAYHF5ZUqZLkryxyDc5L
            source_type: api_record
            title: 中国历代人物传记资料库：王朝卿（CBDB 201090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201090&o=json
            external_identifier: CBDB:201090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_W23qVGSdkBPxzDkHFaafCL
        subject_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1478年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2wf7SC5qbSBajDzMjgQkas
          claim_id: c_W23qVGSdkBPxzDkHFaafCL
          source_id: s_prHAYHF5ZUqZLkryxyDc5L
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
        id: c_hx5Bb1P9pYc9WR9uw9JAh9
        subject_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝卿（生于1478年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 201090）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rhmg7S_CQ3wh38fuAlP-Dg
          claim_id: c_hx5Bb1P9pYc9WR9uw9JAh9
          source_id: s_prHAYHF5ZUqZLkryxyDc5L
          stance: supports
          locator: CBDB:201090
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ea0Na1NdvVvMraA0ZnWa2P
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_msZo5tFpgNTaJpxtvNXTse
          claim_id: c_ea0Na1NdvVvMraA0ZnWa2P
          source_id: s_7dQp2P8fLbfxicMWn9gZ66
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7dQp2P8fLbfxicMWn9gZ66
            source_type: api_record
            title: 中国历代人物传记资料库：王久壽（CBDB 266956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266956&o=json
            external_identifier: CBDB:266956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        status: active
        display_name: 王久壽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_t1xgSZ9vqhk5UxW1JcxNqP
        subject_person_id: p_BUfZ9JvByTmN3dTk3K7qux
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZ6FyirY0Q5lbpnwH6EyPd
          claim_id: c_t1xgSZ9vqhk5UxW1JcxNqP
          source_id: s_79xeNUZKjnBKVh6wiLnYun
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_79xeNUZKjnBKVh6wiLnYun
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 266954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266954&o=json
            external_identifier: CBDB:266954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BUfZ9JvByTmN3dTk3K7qux
        status: active
        display_name: 王日新
        merged_into_person_id: null
    - claim:
        id: c_HiceCJ_bAH381bVgzNO6-A
        subject_person_id: p_V45WbqCNMktzeMrC6QJpfq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y5MBeWZ8dxXVGHrOtyUA2H
          claim_id: c_HiceCJ_bAH381bVgzNO6-A
          source_id: s_XGB9gC8r39Aj1xFmkkAGHP
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XGB9gC8r39Aj1xFmkkAGHP
            source_type: api_record
            title: 中国历代人物传记资料库：王穩（CBDB 266955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266955&o=json
            external_identifier: CBDB:266955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V45WbqCNMktzeMrC6QJpfq
        status: active
        display_name: 王穩
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王朝卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝卿 | accepted |
| birth.date | 1478年 | accepted |
| bio.summary | 王朝卿（生于1478年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 201090） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ax72Y4zqcv4L6DYQUb7Eu1 | 王久壽 | accepted |
| ancestors | p_BUfZ9JvByTmN3dTk3K7qux | 王日新 | accepted |
| ancestors | p_V45WbqCNMktzeMrC6QJpfq | 王穩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝卿（CBDB 201090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201090&o=json)
- [中国历代人物传记资料库：王久壽（CBDB 266956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266956&o=json)
- [中国历代人物传记资料库：王日新（CBDB 266954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266954&o=json)
- [中国历代人物传记资料库：王穩（CBDB 266955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266955&o=json)

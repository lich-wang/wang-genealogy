---
schema: wang-person/v1
id: p_9jcDJtKf8NUzuAuUCv1226
status: active
merged_into: null
display_name: 王以文
cbdb_id: 266737
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4spECq7oRd7YLPgWoiJPsZ
        subject_person_id: p_9jcDJtKf8NUzuAuUCv1226
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以文，明人物。中国历代人物传记资料库（CBDB）以人物编号 266737 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_BGeP6wLyW_qMw1aL7pJI2-
          claim_id: c_4spECq7oRd7YLPgWoiJPsZ
          source_id: s_1CmLLgFHhcmRDPDzPaBvkT
          stance: supports
          locator: CBDB:266737
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_1CmLLgFHhcmRDPDzPaBvkT
            source_type: api_record
            title: 中国历代人物传记资料库：王以文（CBDB 266737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266737&o=json
            external_identifier: CBDB:266737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wMfXFMw97W1EyHNBouCHDc
        subject_person_id: p_9jcDJtKf8NUzuAuUCv1226
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SCEVYmQEXxsA39RdeSedLm
          claim_id: c_wMfXFMw97W1EyHNBouCHDc
          source_id: s_1CmLLgFHhcmRDPDzPaBvkT
          stance: supports
          locator: CBDB:266737
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_1CmLLgFHhcmRDPDzPaBvkT
            source_type: api_record
            title: 中国历代人物传记资料库：王以文（CBDB 266737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266737&o=json
            external_identifier: CBDB:266737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_HdahzAJqtKBNBhBgd5lj1j
        subject_person_id: p_9jcDJtKf8NUzuAuUCv1226
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kgFLtz3kAG28D2HWS4JLXe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5jNXT66IU4uBQSMxQcuiRT
          claim_id: c_HdahzAJqtKBNBhBgd5lj1j
          source_id: s_nEiDfdrEGfX5rwdGQkFz5r
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nEiDfdrEGfX5rwdGQkFz5r
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 198396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198396&o=json
            external_identifier: CBDB:198396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kgFLtz3kAG28D2HWS4JLXe
        status: active
        display_name: 王用
        merged_into_person_id: null
  other: []
---

# 王以文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以文，明人物。中国历代人物传记资料库（CBDB）以人物编号 266737 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王以文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kgFLtz3kAG28D2HWS4JLXe | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以文（CBDB 266737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266737&o=json)
- [中国历代人物传记资料库：王用（CBDB 198396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198396&o=json)

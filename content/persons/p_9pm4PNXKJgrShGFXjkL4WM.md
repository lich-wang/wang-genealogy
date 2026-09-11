---
schema: wang-person/v1
id: p_9pm4PNXKJgrShGFXjkL4WM
status: active
merged_into: null
display_name: 王思立
cbdb_id: 164671
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tW1H2toRVNehwYtY9Fua1Z
        subject_person_id: p_9pm4PNXKJgrShGFXjkL4WM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思立，唐人物。中国历代人物传记资料库（CBDB）以人物编号 164671 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_qWtTmLMDoY2TKjxN1Pc9oA
          claim_id: c_tW1H2toRVNehwYtY9Fua1Z
          source_id: s_edKnWyV3DsgVgrv8k1hh5j
          stance: supports
          locator: CBDB:164671
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_edKnWyV3DsgVgrv8k1hh5j
            source_type: api_record
            title: 中国历代人物传记资料库：王思立（CBDB 164671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164671&o=json
            external_identifier: CBDB:164671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q6LzX6G9waFD6jrvv559eS
        subject_person_id: p_9pm4PNXKJgrShGFXjkL4WM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3jGJ8jn1hq1mkf9a8bFC1w
          claim_id: c_Q6LzX6G9waFD6jrvv559eS
          source_id: s_edKnWyV3DsgVgrv8k1hh5j
          stance: supports
          locator: CBDB:164671
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_edKnWyV3DsgVgrv8k1hh5j
            source_type: api_record
            title: 中国历代人物传记资料库：王思立（CBDB 164671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164671&o=json
            external_identifier: CBDB:164671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TmujFjrypmzR1ETxLIH0Tz
        subject_person_id: p_LPehjNKkq4LDvPu7Xhf9QQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9pm4PNXKJgrShGFXjkL4WM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dgKKS-oa561Nw8ofw52TQ0
          claim_id: c_TmujFjrypmzR1ETxLIH0Tz
          source_id: s_edKnWyV3DsgVgrv8k1hh5j
          stance: supports
          locator: 唐代墓誌彙編續集，tianbao48：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LPehjNKkq4LDvPu7Xhf9QQ
        status: active
        display_name: 王神壽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思立，唐人物。中国历代人物传记资料库（CBDB）以人物编号 164671 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王思立 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LPehjNKkq4LDvPu7Xhf9QQ | 王神壽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思立（CBDB 164671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164671&o=json)

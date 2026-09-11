---
schema: wang-person/v1
id: p_GWEDQ8SKXUwN2mr8EJN8Zm
status: active
merged_into: null
display_name: 王子襄
cbdb_id: 296544
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QtoQUATbYN1WXpbDsh8MoL
        subject_person_id: p_GWEDQ8SKXUwN2mr8EJN8Zm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子襄，明人物。中国历代人物传记资料库（CBDB）以人物编号 296544 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_X4CPf2eD0I-HMYX8ZvPVaf
          claim_id: c_QtoQUATbYN1WXpbDsh8MoL
          source_id: s_zFPyjGKvhJVSyEYW72NAWC
          stance: supports
          locator: CBDB:296544
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_zFPyjGKvhJVSyEYW72NAWC
            source_type: api_record
            title: 中国历代人物传记资料库：王子襄（CBDB 296544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296544&o=json
            external_identifier: CBDB:296544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Tj94e1jZ2kRQz3DkAtGMx
        subject_person_id: p_GWEDQ8SKXUwN2mr8EJN8Zm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子襄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4EZqPEEQvKyW93oShg2yPY
          claim_id: c_5Tj94e1jZ2kRQz3DkAtGMx
          source_id: s_zFPyjGKvhJVSyEYW72NAWC
          stance: supports
          locator: CBDB:296544
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_zFPyjGKvhJVSyEYW72NAWC
            source_type: api_record
            title: 中国历代人物传记资料库：王子襄（CBDB 296544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296544&o=json
            external_identifier: CBDB:296544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
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
        id: c_snnN9ernRUBelWx4cog4Ag
        subject_person_id: p_GWEDQ8SKXUwN2mr8EJN8Zm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LWwceQGOWClo1O-3N6FL5j
          claim_id: c_snnN9ernRUBelWx4cog4Ag
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第五十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hRCDgLQBmdUDEyE1cofkQA
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 198163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198163&o=json
            external_identifier: CBDB:198163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Va27aZRgdi5W8FWJiWP4zt
        status: active
        display_name: 王琳
        merged_into_person_id: null
  other: []
---

# 王子襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子襄，明人物。中国历代人物传记资料库（CBDB）以人物编号 296544 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王子襄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Va27aZRgdi5W8FWJiWP4zt | 王琳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 198163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198163&o=json)
- [中国历代人物传记资料库：王子襄（CBDB 296544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296544&o=json)

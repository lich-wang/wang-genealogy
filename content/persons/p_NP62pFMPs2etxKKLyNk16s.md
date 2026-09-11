---
schema: wang-person/v1
id: p_NP62pFMPs2etxKKLyNk16s
status: active
merged_into: null
display_name: 王子深
cbdb_id: 232607
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xMN1oB44RS5qfGgUTrWZab
        subject_person_id: p_NP62pFMPs2etxKKLyNk16s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子深，明人物。中国历代人物传记资料库（CBDB）以人物编号 232607 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_k1LbCPMHgB30naMcDFJjoH
          claim_id: c_xMN1oB44RS5qfGgUTrWZab
          source_id: s_u4N4YJS92a8g3cdFJz41EV
          stance: supports
          locator: CBDB:232607
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_u4N4YJS92a8g3cdFJz41EV
            source_type: api_record
            title: 中国历代人物传记资料库：王子深（CBDB 232607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232607&o=json
            external_identifier: CBDB:232607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kKcMbXTEM1EdDM1at5jSiM
        subject_person_id: p_NP62pFMPs2etxKKLyNk16s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V7TmhfiQPMTY25vwMZoT4B
          claim_id: c_kKcMbXTEM1EdDM1at5jSiM
          source_id: s_u4N4YJS92a8g3cdFJz41EV
          stance: supports
          locator: CBDB:232607
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_u4N4YJS92a8g3cdFJz41EV
            source_type: api_record
            title: 中国历代人物传记资料库：王子深（CBDB 232607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232607&o=json
            external_identifier: CBDB:232607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
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
        id: c_AiRa8HXVrTDSSiUvBMBsia
        subject_person_id: p_NP62pFMPs2etxKKLyNk16s
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VFz621JQvzkevtvTagNpXa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5bKA5kLgE0HC928KMpr8-A
          claim_id: c_AiRa8HXVrTDSSiUvBMBsia
          source_id: s_u4N4YJS92a8g3cdFJz41EV
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第二甲第十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VFz621JQvzkevtvTagNpXa
        status: active
        display_name: 王編
        merged_into_person_id: null
  other: []
---

# 王子深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子深，明人物。中国历代人物传记资料库（CBDB）以人物编号 232607 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王子深 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_VFz621JQvzkevtvTagNpXa | 王編 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子深（CBDB 232607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232607&o=json)

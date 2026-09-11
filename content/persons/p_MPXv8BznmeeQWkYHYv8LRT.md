---
schema: wang-person/v1
id: p_MPXv8BznmeeQWkYHYv8LRT
status: active
merged_into: null
display_name: 王功濯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QEsaEC1P1mRVCscpxwxyNU
        subject_person_id: p_MPXv8BznmeeQWkYHYv8LRT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王功濯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2VQSui2YBQB8tUhvRLN6iz
          claim_id: c_QEsaEC1P1mRVCscpxwxyNU
          source_id: s_sjBQvssAk5Akg6S1CS3EpP
          stance: supports
          locator: CBDB:527988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527988）
          source: &a1
            id: s_sjBQvssAk5Akg6S1CS3EpP
            source_type: api_record
            title: 中国历代人物传记资料库：王功濯（CBDB 527988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527988&o=json
            external_identifier: CBDB:527988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nsAQQ3DbL8uiH2uvcN841c
        subject_person_id: p_MPXv8BznmeeQWkYHYv8LRT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rNH37CUv4PPSWkAwKokydG
          claim_id: c_nsAQQ3DbL8uiH2uvcN841c
          source_id: s_sjBQvssAk5Akg6S1CS3EpP
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
  ancestors:
    - claim:
        id: c_19IrIfdjlHB3Vzk3LZW9W3
        subject_person_id: p_Zke7ZWHkVwAUCHJzdKRrQv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MPXv8BznmeeQWkYHYv8LRT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LMsn4OfMs7mtELxt3X8lUn
          claim_id: c_19IrIfdjlHB3Vzk3LZW9W3
          source_id: s_sjBQvssAk5Akg6S1CS3EpP
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14099：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Zke7ZWHkVwAUCHJzdKRrQv
        status: active
        display_name: 王如辰
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王功濯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王功濯 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Zke7ZWHkVwAUCHJzdKRrQv | 王如辰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王功濯（CBDB 527988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527988&o=json)

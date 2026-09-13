---
schema: wang-person/v1
id: p_DVbamv1pJ41ZEV9p5nYJ7c
status: active
merged_into: null
display_name: 王需
cbdb_id: 24977
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2aNS2asLJJNau9dP895DCj
        subject_person_id: p_DVbamv1pJ41ZEV9p5nYJ7c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王需，宋人物。籍贯晉城。（中国历代人物传记资料库 CBDB 24977）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IAKWqcNeqIWmMtsdi43LlK
          claim_id: c_2aNS2asLJJNau9dP895DCj
          source_id: s_KxQX75w7CFoGQ1e4qzDXF2
          stance: supports
          locator: CBDB:24977
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KxQX75w7CFoGQ1e4qzDXF2
            source_type: api_record
            title: 中国历代人物传记资料库：王需（CBDB 24977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24977&o=json
            external_identifier: CBDB:24977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4UN8KDbrZENxD1XutkjJU
        subject_person_id: p_DVbamv1pJ41ZEV9p5nYJ7c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王需
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tff1hMgfaikVyLPMa8633z
          claim_id: c_b4UN8KDbrZENxD1XutkjJU
          source_id: s_KxQX75w7CFoGQ1e4qzDXF2
          stance: supports
          locator: CBDB:24977
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_98mhVVuPFuOt5xM2KAM17f
        subject_person_id: p_iL53NuuSgA33Ht2KRWRfLu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DVbamv1pJ41ZEV9p5nYJ7c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zhYP4jvYofYXJp6BgEzB55
          claim_id: c_98mhVVuPFuOt5xM2KAM17f
          source_id: s_ugdB4Qb9Ee4jXSruaMoQCu
          stance: supports
          locator: CBDB 双向互证（子 王需 ⇄ 父 王獻可）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ugdB4Qb9Ee4jXSruaMoQCu
            source_type: api_record
            title: 中国历代人物传记资料库：王獻可（CBDB 14303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14303&o=json
            external_identifier: CBDB:14303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iL53NuuSgA33Ht2KRWRfLu
        status: active
        display_name: 王獻可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王需

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王需，宋人物。籍贯晉城。（中国历代人物传记资料库 CBDB 24977） | accepted |
| name.primary | 王需 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iL53NuuSgA33Ht2KRWRfLu | 王獻可 | accepted |

## 外部来源

- [中国历代人物传记资料库：王獻可（CBDB 14303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14303&o=json)
- [中国历代人物传记资料库：王需（CBDB 24977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24977&o=json)

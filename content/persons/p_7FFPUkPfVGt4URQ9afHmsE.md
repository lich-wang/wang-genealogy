---
schema: wang-person/v1
id: p_7FFPUkPfVGt4URQ9afHmsE
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 689263
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9BezUBvguPLGIxxaS9UTW6
        subject_person_id: p_7FFPUkPfVGt4URQ9afHmsE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏（986—1009），宋人物。籍贯京兆府。（中国历代人物传记资料库 CBDB 689263）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LfXSudgcd46S4WcglTZqlu
          claim_id: c_9BezUBvguPLGIxxaS9UTW6
          source_id: s_BJaHF-l4MkUxTkwR0fjgCF
          stance: supports
          locator: CBDB:689263
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BJaHF-l4MkUxTkwR0fjgCF
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王漢妻)（CBDB 689263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689263&o=json
            external_identifier: CBDB:689263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jZl3BWrRA5MaTtqMcqsQMF
        subject_person_id: p_7FFPUkPfVGt4URQ9afHmsE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9gRjkpZwp2zrUx5QsEZ50r
          claim_id: c_jZl3BWrRA5MaTtqMcqsQMF
          source_id: s_BJaHF-l4MkUxTkwR0fjgCF
          stance: supports
          locator: CBDB:689263
          quotation: null
          interpretation_note: CBDB 明确记录的王漢配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_lpCIU6Ad8bUXvfygre7es_
        subject_person_id: p_ndKWNLFGB7WkVLddotc6Au
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7FFPUkPfVGt4URQ9afHmsE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E-UODbG7Zg_L981sMrOg5u
          claim_id: c_lpCIU6Ad8bUXvfygre7es_
          source_id: s_BJaHF-l4MkUxTkwR0fjgCF
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，清河張夫人墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ndKWNLFGB7WkVLddotc6Au
        status: active
        display_name: 王漢
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張氏（986—1009），宋人物。籍贯京兆府。（中国历代人物传记资料库 CBDB 689263） | accepted |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ndKWNLFGB7WkVLddotc6Au | 王漢 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王漢妻)（CBDB 689263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689263&o=json)

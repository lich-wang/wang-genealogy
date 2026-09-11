---
schema: wang-person/v1
id: p_fAinSNShUSAPALebedd6vv
status: active
merged_into: null
display_name: 王瓚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YDCXYRepUuM313adFhZWpw
        subject_person_id: p_fAinSNShUSAPALebedd6vv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BBUwZX2LoJiPzUCDDuB3ko
          claim_id: c_YDCXYRepUuM313adFhZWpw
          source_id: s_NMaDWzRiKPBxM6weg3b52d
          stance: supports
          locator: CBDB:231881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231881）
          source: &a1
            id: s_NMaDWzRiKPBxM6weg3b52d
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 231881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231881&o=json
            external_identifier: CBDB:231881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.678Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fiw569j8pQorFWztEBSDY2
        subject_person_id: p_fAinSNShUSAPALebedd6vv
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
        - id: cs_hDE4QFDY1hxr3vN7MoS53q
          claim_id: c_fiw569j8pQorFWztEBSDY2
          source_id: s_NMaDWzRiKPBxM6weg3b52d
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
        id: c_XUZUi8W-AxTRWAG-E8cZG2
        subject_person_id: p_fAinSNShUSAPALebedd6vv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AFdJ7pAjfwQ6cMiK8RCDT2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_koWMHLrmePdISz6x8pRMEV
          claim_id: c_XUZUi8W-AxTRWAG-E8cZG2
          source_id: s_NMaDWzRiKPBxM6weg3b52d
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AFdJ7pAjfwQ6cMiK8RCDT2
        status: active
        display_name: 王在晉
        merged_into_person_id: null
  other: []
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AFdJ7pAjfwQ6cMiK8RCDT2 | 王在晉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 231881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231881&o=json)

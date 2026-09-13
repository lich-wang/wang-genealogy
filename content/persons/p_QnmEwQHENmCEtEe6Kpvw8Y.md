---
schema: wang-person/v1
id: p_QnmEwQHENmCEtEe6Kpvw8Y
status: active
merged_into: null
display_name: 王弘化
cbdb_id: 232609
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CmFrihaqfBEtLWYRMc2bF4
        subject_person_id: p_QnmEwQHENmCEtEe6Kpvw8Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘化，明人物。籍贯寧鄉。（中国历代人物传记资料库 CBDB 232609）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XyA9cRGZg5lJG1Kjt6BPSH
          claim_id: c_CmFrihaqfBEtLWYRMc2bF4
          source_id: s_HcuWSVmfUMKiXdhBfSW2WW
          stance: supports
          locator: CBDB:232609
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HcuWSVmfUMKiXdhBfSW2WW
            source_type: api_record
            title: 中国历代人物传记资料库：王弘化（CBDB 232609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232609&o=json
            external_identifier: CBDB:232609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8xNxqZgJWDv5L7RQLgFpKq
        subject_person_id: p_QnmEwQHENmCEtEe6Kpvw8Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NXQxqGWLAJJFfK1vXEwSSZ
          claim_id: c_8xNxqZgJWDv5L7RQLgFpKq
          source_id: s_HcuWSVmfUMKiXdhBfSW2WW
          stance: supports
          locator: CBDB:232609
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_H_36ln7SJ-5QVXjra2lrGa
        subject_person_id: p_QnmEwQHENmCEtEe6Kpvw8Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VFz621JQvzkevtvTagNpXa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wehM3aeGB29fiIEhdXDBDD
          claim_id: c_H_36ln7SJ-5QVXjra2lrGa
          source_id: s_HcuWSVmfUMKiXdhBfSW2WW
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第二甲第十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HcuWSVmfUMKiXdhBfSW2WW
            source_type: api_record
            title: 中国历代人物传记资料库：王弘化（CBDB 232609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232609&o=json
            external_identifier: CBDB:232609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VFz621JQvzkevtvTagNpXa
        status: active
        display_name: 王編
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘化，明人物。籍贯寧鄉。（中国历代人物传记资料库 CBDB 232609） | accepted |
| name.primary | 王弘化 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VFz621JQvzkevtvTagNpXa | 王編 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘化（CBDB 232609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232609&o=json)

---
schema: wang-person/v1
id: p_AtQAeRfDFnZkhe6UwZrjme
status: active
merged_into: null
display_name: 王良
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qG8p1DL5uei8vBrS1fFe3d
        subject_person_id: p_AtQAeRfDFnZkhe6UwZrjme
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i3qJwTrzTR635vsmqJHe6K
          claim_id: c_qG8p1DL5uei8vBrS1fFe3d
          source_id: s_PXyCQEQw1Gs9KoAoNj8GFQ
          stance: supports
          locator: CBDB:256054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256054）
          source: &a1
            id: s_PXyCQEQw1Gs9KoAoNj8GFQ
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 256054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256054&o=json
            external_identifier: CBDB:256054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jq7k4HWuiJbJCksCLds6Bs
        subject_person_id: p_AtQAeRfDFnZkhe6UwZrjme
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
        - id: cs_hHF3nPtNPXN4i6GDL73fu7
          claim_id: c_jq7k4HWuiJbJCksCLds6Bs
          source_id: s_PXyCQEQw1Gs9KoAoNj8GFQ
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
        id: c_IJhNNdOdDaW3Kbh-R1JRCs
        subject_person_id: p_AtQAeRfDFnZkhe6UwZrjme
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rfrJReFGRYTCsYA5lmKNb5
          claim_id: c_IJhNNdOdDaW3Kbh-R1JRCs
          source_id: s_PXyCQEQw1Gs9KoAoNj8GFQ
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第四十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xbM9HhzDmWYWXqKqbHR7tL
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  other: []
---

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_xbM9HhzDmWYWXqKqbHR7tL | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良（CBDB 256054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256054&o=json)

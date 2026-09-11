---
schema: wang-person/v1
id: p_s1rYeF3FnM6Y6uJdHkE7L1
status: active
merged_into: null
display_name: 王元宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B6NxsSQyG1hTAv354afyzn
        subject_person_id: p_s1rYeF3FnM6Y6uJdHkE7L1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tJ6L5LoFz79kGHsDSCom7v
          claim_id: c_B6NxsSQyG1hTAv354afyzn
          source_id: s_etKkh4aaKQuNG8z1kh77JY
          stance: supports
          locator: CBDB:147705
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147705）
          source: &a1
            id: s_etKkh4aaKQuNG8z1kh77JY
            source_type: api_record
            title: 中国历代人物传记资料库：王元宗（CBDB 147705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147705&o=json
            external_identifier: CBDB:147705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cp3LsPtX7Hb2Qgt5Kbbt77
        subject_person_id: p_s1rYeF3FnM6Y6uJdHkE7L1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fj8gGgHPLQ7Kid2fLyDf4F
          claim_id: c_cp3LsPtX7Hb2Qgt5Kbbt77
          source_id: s_etKkh4aaKQuNG8z1kh77JY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jDTTs25uFD0-7SZ_gxbEOX
        subject_person_id: p_vLSVF2E29bhtHRC3R3t1gA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s1rYeF3FnM6Y6uJdHkE7L1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fOiizkvDp1oPPhDjlUqnGx
          claim_id: c_jDTTs25uFD0-7SZ_gxbEOX
          source_id: s_etKkh4aaKQuNG8z1kh77JY
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 5：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vLSVF2E29bhtHRC3R3t1gA
        status: active
        display_name: 王朗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元宗 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vLSVF2E29bhtHRC3R3t1gA | 王朗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元宗（CBDB 147705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147705&o=json)

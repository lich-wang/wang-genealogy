---
schema: wang-person/v1
id: p_hJvWmnJiF6iC5f18s19KxT
status: active
merged_into: null
display_name: 王元琰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vtgGQx8ysq6kkSHHiz2xWk
        subject_person_id: p_hJvWmnJiF6iC5f18s19KxT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ri5NyGU2kS8ELLnBMKHFp
          claim_id: c_vtgGQx8ysq6kkSHHiz2xWk
          source_id: s_PTpVrzAkgRNfqABiAB1cLa
          stance: supports
          locator: CBDB:140751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140751）
          source: &a1
            id: s_PTpVrzAkgRNfqABiAB1cLa
            source_type: api_record
            title: 中国历代人物传记资料库：王元琰（CBDB 140751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140751&o=json
            external_identifier: CBDB:140751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_M9w1AeCRHzYHr8iEJ3HVSu
        subject_person_id: p_hJvWmnJiF6iC5f18s19KxT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 671年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FGVw4QKzaAUhEHE5E18jUF
          claim_id: c_M9w1AeCRHzYHr8iEJ3HVSu
          source_id: s_PTpVrzAkgRNfqABiAB1cLa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_E7ZcSs2E8Ce3UWw3KaMv6k
        subject_person_id: p_hJvWmnJiF6iC5f18s19KxT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 736年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JBMHmDnMWKz8Sie3ByQTdi
          claim_id: c_E7ZcSs2E8Ce3UWw3KaMv6k
          source_id: s_PTpVrzAkgRNfqABiAB1cLa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iS2XJGDT8bs1uTq6hcv5b9
        subject_person_id: p_hJvWmnJiF6iC5f18s19KxT
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
        - id: cs_PLA1K9BMLHirQ5bgcL4uqK
          claim_id: c_iS2XJGDT8bs1uTq6hcv5b9
          source_id: s_PTpVrzAkgRNfqABiAB1cLa
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
        id: c_QIxlnAKTmYa9qF8t_Y3kfP
        subject_person_id: p_V8TuRPJz1LKfD6dQy8Jxkx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hJvWmnJiF6iC5f18s19KxT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_asUPOuLBDE7vIloJgGC3JH
          claim_id: c_QIxlnAKTmYa9qF8t_Y3kfP
          source_id: s_PTpVrzAkgRNfqABiAB1cLa
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 485：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V8TuRPJz1LKfD6dQy8Jxkx
        status: active
        display_name: 王方平
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Fx8QXqdT1H2Nnx76n52qHM
        subject_person_id: p_UeaYLpUuZp68RNcTFC71Ls
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hJvWmnJiF6iC5f18s19KxT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3_bGs9iG5aKctC-Y8uKI_r
          claim_id: c_Fx8QXqdT1H2Nnx76n52qHM
          source_id: s_PTpVrzAkgRNfqABiAB1cLa
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 485：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UeaYLpUuZp68RNcTFC71Ls
        status: active
        display_name: 王都
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王元琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元琰 | accepted |
| birth.date | 671年 | accepted |
| death.date | 736年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V8TuRPJz1LKfD6dQy8Jxkx | 王方平 | accepted |
| ancestors | p_UeaYLpUuZp68RNcTFC71Ls | 王都 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元琰（CBDB 140751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140751&o=json)

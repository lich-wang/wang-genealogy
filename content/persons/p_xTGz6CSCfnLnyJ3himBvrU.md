---
schema: wang-person/v1
id: p_xTGz6CSCfnLnyJ3himBvrU
status: active
merged_into: null
display_name: 王俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K65vw9qHZqgvEbC5ArC66r
        subject_person_id: p_xTGz6CSCfnLnyJ3himBvrU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jZjN1iDsr671royquK9ipx
          claim_id: c_K65vw9qHZqgvEbC5ArC66r
          source_id: s_jQDTPHJoxAsFqcykPJunU1
          stance: supports
          locator: CBDB:272753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272753）
          source: &a1
            id: s_jQDTPHJoxAsFqcykPJunU1
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 272753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272753&o=json
            external_identifier: CBDB:272753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BUFH4C72iLhsUNYNR7LDP3
        subject_person_id: p_xTGz6CSCfnLnyJ3himBvrU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。弘治十八年進士，籍贯西充，入仕監生。（中国历代人物传记资料库 CBDB 272753）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F_5Cyhtqzsxiv9s69vBT7R
          claim_id: c_BUFH4C72iLhsUNYNR7LDP3
          source_id: s_jQDTPHJoxAsFqcykPJunU1
          stance: supports
          locator: CBDB:272753
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_t6j9gCuv_9oCzW9vufhFJr
        subject_person_id: p_xTGz6CSCfnLnyJ3himBvrU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AJ36QsHYvNFFPiM32NAShM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uRKDInb9SqZvNjheR4mF_f
          claim_id: c_t6j9gCuv_9oCzW9vufhFJr
          source_id: s_jQDTPHJoxAsFqcykPJunU1
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AJ36QsHYvNFFPiM32NAShM
        status: active
        display_name: 王秉良
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。弘治十八年進士，籍贯西充，入仕監生。（中国历代人物传记资料库 CBDB 272753） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AJ36QsHYvNFFPiM32NAShM | 王秉良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 272753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272753&o=json)

---
schema: wang-person/v1
id: p_NLK3MLLCWV39uoAkjLfgCa
status: active
merged_into: null
display_name: 王豸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bEqfbp9g2cH5K8CGwCZJVT
        subject_person_id: p_NLK3MLLCWV39uoAkjLfgCa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7QuJJ1Aw2qJsAe4NppSX1S
          claim_id: c_bEqfbp9g2cH5K8CGwCZJVT
          source_id: s_ADnfSaYdZdx5PERZRMWuPE
          stance: supports
          locator: CBDB:232658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232658）
          source: &a1
            id: s_ADnfSaYdZdx5PERZRMWuPE
            source_type: api_record
            title: 中国历代人物传记资料库：王豸（CBDB 232658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232658&o=json
            external_identifier: CBDB:232658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5JHJmbd5GCetmJNQBXJFjQ
        subject_person_id: p_NLK3MLLCWV39uoAkjLfgCa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豸，明人物。籍贯陽城。（中国历代人物传记资料库 CBDB 232658）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tt5BmbPwGmW4XuJDH7EUvy
          claim_id: c_5JHJmbd5GCetmJNQBXJFjQ
          source_id: s_ADnfSaYdZdx5PERZRMWuPE
          stance: supports
          locator: CBDB:232658
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_n4Y_lvuVs-dfK-6hYzoywi
        subject_person_id: p_NLK3MLLCWV39uoAkjLfgCa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nNM44KLpmjM3JH2WvQLbx2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TYXcmwAhTC61OtEPT_nmzm
          claim_id: c_n4Y_lvuVs-dfK-6hYzoywi
          source_id: s_ADnfSaYdZdx5PERZRMWuPE
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nNM44KLpmjM3JH2WvQLbx2
        status: active
        display_name: 王家礎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王豸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豸 | accepted |
| bio.summary | 王豸，明人物。籍贯陽城。（中国历代人物传记资料库 CBDB 232658） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nNM44KLpmjM3JH2WvQLbx2 | 王家礎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王豸（CBDB 232658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232658&o=json)

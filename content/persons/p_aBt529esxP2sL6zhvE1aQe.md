---
schema: wang-person/v1
id: p_aBt529esxP2sL6zhvE1aQe
status: active
merged_into: null
display_name: 王氏
revision: 1
cbdb_id: 444908
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M5s12wVez4snGDpWt4ByDd
        subject_person_id: p_aBt529esxP2sL6zhvE1aQe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏（卒於724），唐人物。籍贯下邽，入仕冊封爲皇后，曾任皇后、王妃。（中国历代人物传记资料库 CBDB 444908）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mr1KFRIlylngdBegEPkwld
          claim_id: c_M5s12wVez4snGDpWt4ByDd
          source_id: s_LcEU3RK0Gw3d5x9D4vLwLN
          stance: supports
          locator: CBDB:444908
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LcEU3RK0Gw3d5x9D4vLwLN
            source_type: api_record
            title: 中国历代人物传记资料库：王氏(玄宗廢后)（CBDB 444908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444908&o=json
            external_identifier: CBDB:444908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gLiBXp-l4dpa2ksqn16wb-
        subject_person_id: p_aBt529esxP2sL6zhvE1aQe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4QiNtIf0_QBGsAWPjs7YoP
          claim_id: c_gLiBXp-l4dpa2ksqn16wb-
          source_id: s_LcEU3RK0Gw3d5x9D4vLwLN
          stance: supports
          locator: CBDB:444908
          quotation: null
          interpretation_note: CBDB 明确记录的唐玄宗配偶
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
        id: c_8Eh939l5KYF5ZUTXJWRz3y
        subject_person_id: p_cikw8dsZq2pT5MWXyzDmm3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aBt529esxP2sL6zhvE1aQe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wkbxFkIr1ud_-Gs-moQ2zs
          claim_id: c_8Eh939l5KYF5ZUTXJWRz3y
          source_id: s_LcEU3RK0Gw3d5x9D4vLwLN
          stance: supports
          locator: 舊唐書，2177：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cikw8dsZq2pT5MWXyzDmm3
        status: active
        display_name: 唐玄宗
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏（卒於724），唐人物。籍贯下邽，入仕冊封爲皇后，曾任皇后、王妃。（中国历代人物传记资料库 CBDB 444908） | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cikw8dsZq2pT5MWXyzDmm3 | 唐玄宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王氏(玄宗廢后)（CBDB 444908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444908&o=json)

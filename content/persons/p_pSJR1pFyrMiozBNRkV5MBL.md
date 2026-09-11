---
schema: wang-person/v1
id: p_pSJR1pFyrMiozBNRkV5MBL
status: active
merged_into: null
display_name: 王朝佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RC6MbeasctxMv19uyFXVDW
        subject_person_id: p_pSJR1pFyrMiozBNRkV5MBL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cgfyVs6jQ8sooNqUCgL1L9
          claim_id: c_RC6MbeasctxMv19uyFXVDW
          source_id: s_BEmn7RZPCvf1oGFe8FSq3L
          stance: supports
          locator: CBDB:494204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494204）
          source: &a1
            id: s_BEmn7RZPCvf1oGFe8FSq3L
            source_type: api_record
            title: 中国历代人物传记资料库：王朝佐（CBDB 494204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494204&o=json
            external_identifier: CBDB:494204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kKtPmv2mnEG15jDXoRPL1f
        subject_person_id: p_pSJR1pFyrMiozBNRkV5MBL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝佐，清人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 494204）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yur0Dmh3P85-IgrbaydrsJ
          claim_id: c_kKtPmv2mnEG15jDXoRPL1f
          source_id: s_BEmn7RZPCvf1oGFe8FSq3L
          stance: supports
          locator: CBDB:494204
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other: []
---

# 王朝佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝佐 | accepted |
| bio.summary | 王朝佐，清人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 494204） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝佐（CBDB 494204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494204&o=json)

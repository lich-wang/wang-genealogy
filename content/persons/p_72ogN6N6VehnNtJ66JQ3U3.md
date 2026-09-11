---
schema: wang-person/v1
id: p_72ogN6N6VehnNtJ66JQ3U3
status: active
merged_into: null
display_name: 王行之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XNHKhh54rkYaAJw1CXTxGE
        subject_person_id: p_72ogN6N6VehnNtJ66JQ3U3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v2AxCVY3KtUeqgjRR3wqNa
          claim_id: c_XNHKhh54rkYaAJw1CXTxGE
          source_id: s_M6wYW93FAg33LefTyieLEW
          stance: supports
          locator: CBDB:38946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38946）
          source: &a1
            id: s_M6wYW93FAg33LefTyieLEW
            source_type: api_record
            title: 中国历代人物传记资料库：王行之（CBDB 38946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38946&o=json
            external_identifier: CBDB:38946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JbTugaa1dxQVcBQShiKeG2
        subject_person_id: p_72ogN6N6VehnNtJ66JQ3U3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1119年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UWoUq5dCQcEetL5NJeYDi6
          claim_id: c_JbTugaa1dxQVcBQShiKeG2
          source_id: s_M6wYW93FAg33LefTyieLEW
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
        id: c_DEu4oiqdQ8ZxDB7Us7yeDe
        subject_person_id: p_72ogN6N6VehnNtJ66JQ3U3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行之（卒于1119年），宋人物。籍贯太平。（中国历代人物传记资料库 CBDB 38946）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zqWB8WjSC_sMscWTXf2fdT
          claim_id: c_DEu4oiqdQ8ZxDB7Us7yeDe
          source_id: s_M6wYW93FAg33LefTyieLEW
          stance: supports
          locator: CBDB:38946
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

# 王行之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行之 | accepted |
| death.date | 1119年 | accepted |
| bio.summary | 王行之（卒于1119年），宋人物。籍贯太平。（中国历代人物传记资料库 CBDB 38946） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行之（CBDB 38946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38946&o=json)

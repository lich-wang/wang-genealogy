---
schema: wang-person/v1
id: p_31fj3DYMMpcFqtcy8MYe53
status: active
merged_into: null
display_name: 杨氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fRqqPJSiB6ZZkh9Xy4PHx5
        subject_person_id: p_31fj3DYMMpcFqtcy8MYe53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 杨氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WvCRSAzLRBHEZSkkV3y5MC
          claim_id: c_fRqqPJSiB6ZZkh9Xy4PHx5
          source_id: s_2JFR7qPck3eWn6fqq9cxUm
          stance: supports
          locator: Q65830582
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_2JFR7qPck3eWn6fqq9cxUm
            source_type: api_record
            title: 维基数据：杨氏（Q65830582）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65830582
            external_identifier: Q65830582
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_6ADpNmuMYjrc5FUxAL21e7
          claim_id: c_fRqqPJSiB6ZZkh9Xy4PHx5
          source_id: s_U4AUBPKmduDYxxUn1XtYww
          stance: supports
          locator: CBDB:226565
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_U4AUBPKmduDYxxUn1XtYww
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：楊氏（226565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226565&o=json
            external_identifier: CBDB:226565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_YBPk45JE5vtR9qPbbivGze
        subject_person_id: p_31fj3DYMMpcFqtcy8MYe53
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YcgZGHB8b41JUksSD6hCbG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MYQR8L4yq82BnYPuiXi88B
          claim_id: c_YBPk45JE5vtR9qPbbivGze
          source_id: s_UEJCm4BifC222RfsPoT6b7
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_UEJCm4BifC222RfsPoT6b7
            source_type: api_record
            title: 维基数据：王宗蓁（Q45528855）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45528855
            external_identifier: Q45528855
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:48.391Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97%E8%93%81
        - id: cs_tkUPfJF17yGYz6diX6NnTz
          claim_id: c_YBPk45JE5vtR9qPbbivGze
          source_id: s_2JFR7qPck3eWn6fqq9cxUm
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_JhagbDPB6SvABf2PUsXhaw
          claim_id: c_YBPk45JE5vtR9qPbbivGze
          source_id: s_csiJ837yS4LpHosWR4nuoi
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆丙戌科進士同年總錄
          source:
            id: s_csiJ837yS4LpHosWR4nuoi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗蓁（207031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207031&o=json
            external_identifier: CBDB:207031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:48.563Z
            metadata_json: null
      object_person:
        id: p_YcgZGHB8b41JUksSD6hCbG
        status: active
        display_name: 王宗蓁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 杨氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 杨氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_YcgZGHB8b41JUksSD6hCbG | 王宗蓁 | accepted |

## 外部来源

- [维基数据：王宗蓁（Q45528855）](https://www.wikidata.org/wiki/Q45528855)
- [维基数据：杨氏（Q65830582）](https://www.wikidata.org/wiki/Q65830582)
- [CBDB 中国历代人物传记资料库：王宗蓁（207031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207031&o=json)
- [CBDB 中国历代人物传记资料库：楊氏（226565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226565&o=json)

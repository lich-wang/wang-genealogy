---
schema: wang-person/v1
id: p_yAkXXQKG1Mp5knf1Q6BGmM
status: active
merged_into: null
display_name: 王植
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9prQTtbMVq3fYeqJm6o8n8
        subject_person_id: p_yAkXXQKG1Mp5knf1Q6BGmM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bd6Vcw8XPr7aCJ4Fr2oZ6q
          claim_id: c_9prQTtbMVq3fYeqJm6o8n8
          source_id: s_J43YHLVENJGPsh6VF5LL5m
          stance: supports
          locator: CBDB:685832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685832）
          source: &a1
            id: s_J43YHLVENJGPsh6VF5LL5m
            source_type: api_record
            title: 中国历代人物传记资料库：王植（CBDB 685832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685832&o=json
            external_identifier: CBDB:685832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XM2UJ65tKNFnSpvZ6pAWQt
        subject_person_id: p_yAkXXQKG1Mp5knf1Q6BGmM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植，宋人物。籍贯東陽，入仕進士。（中国历代人物传记资料库 CBDB 685832）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8w5XV_gAqQm78NNvZWkHBt
          claim_id: c_XM2UJ65tKNFnSpvZ6pAWQt
          source_id: s_J43YHLVENJGPsh6VF5LL5m
          stance: supports
          locator: CBDB:685832
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

# 王植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王植 | accepted |
| bio.summary | 王植，宋人物。籍贯東陽，入仕進士。（中国历代人物传记资料库 CBDB 685832） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王植（CBDB 685832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685832&o=json)

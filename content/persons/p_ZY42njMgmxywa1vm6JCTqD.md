---
schema: wang-person/v1
id: p_ZY42njMgmxywa1vm6JCTqD
status: active
merged_into: null
display_name: 王雲龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AAgEFywvS1wWi4wghmSv2E
        subject_person_id: p_ZY42njMgmxywa1vm6JCTqD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vLf72FQSUTrPwthqJgYnJK
          claim_id: c_AAgEFywvS1wWi4wghmSv2E
          source_id: s_8DELRhfrFUzJ3FbMTbKE63
          stance: supports
          locator: CBDB:640825
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640825）
          source: &a1
            id: s_8DELRhfrFUzJ3FbMTbKE63
            source_type: api_record
            title: 中国历代人物传记资料库：王雲龍（CBDB 640825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640825&o=json
            external_identifier: CBDB:640825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z61KV9Qizm6f6RA7edxrhH
        subject_person_id: p_ZY42njMgmxywa1vm6JCTqD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲龍，清人物。籍贯宛平，入仕行伍，曾任巡捕左營遊擊。（中国历代人物传记资料库 CBDB 640825）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sVAzhi5aUvuCRWotfvKBWK
          claim_id: c_z61KV9Qizm6f6RA7edxrhH
          source_id: s_8DELRhfrFUzJ3FbMTbKE63
          stance: supports
          locator: CBDB:640825
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

# 王雲龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲龍 | accepted |
| bio.summary | 王雲龍，清人物。籍贯宛平，入仕行伍，曾任巡捕左營遊擊。（中国历代人物传记资料库 CBDB 640825） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲龍（CBDB 640825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640825&o=json)

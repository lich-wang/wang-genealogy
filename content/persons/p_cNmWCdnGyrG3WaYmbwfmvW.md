---
schema: wang-person/v1
id: p_cNmWCdnGyrG3WaYmbwfmvW
status: active
merged_into: null
display_name: 王仙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pGiA21XBCsYqtJivuYwPuS
        subject_person_id: p_cNmWCdnGyrG3WaYmbwfmvW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dg7YCiphgfbGnx6hNhsmBd
          claim_id: c_pGiA21XBCsYqtJivuYwPuS
          source_id: s_zVeHEp5SBBuFPRCZKJsW8K
          stance: supports
          locator: CBDB:38681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38681）
          source: &a1
            id: s_zVeHEp5SBBuFPRCZKJsW8K
            source_type: api_record
            title: 中国历代人物传记资料库：王仙（CBDB 38681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38681&o=json
            external_identifier: CBDB:38681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BVw8q1aMxbu91PnLcQ5Yda
        subject_person_id: p_cNmWCdnGyrG3WaYmbwfmvW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1281年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YQCJNdbG6opFiVc6WXrFMr
          claim_id: c_BVw8q1aMxbu91PnLcQ5Yda
          source_id: s_zVeHEp5SBBuFPRCZKJsW8K
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
        id: c_SRCtFF2DiuZAmL2Ni2bv1W
        subject_person_id: p_cNmWCdnGyrG3WaYmbwfmvW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙（卒于1281年），宋人物。曾任統制。（中国历代人物传记资料库 CBDB 38681）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g-U9clgx4R_FEM6NvbmTZE
          claim_id: c_SRCtFF2DiuZAmL2Ni2bv1W
          source_id: s_zVeHEp5SBBuFPRCZKJsW8K
          stance: supports
          locator: CBDB:38681
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

# 王仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仙 | accepted |
| death.date | 1281年 | accepted |
| bio.summary | 王仙（卒于1281年），宋人物。曾任統制。（中国历代人物传记资料库 CBDB 38681） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仙（CBDB 38681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38681&o=json)

---
schema: wang-person/v1
id: p_8Ev6pis6s8G3RgVM13WpSu
status: active
merged_into: null
display_name: 王大經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_swEoYSuS1CsiiHamDXTVcC
        subject_person_id: p_8Ev6pis6s8G3RgVM13WpSu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BwAJkdCQfvj7pX9KhZcv7z
          claim_id: c_swEoYSuS1CsiiHamDXTVcC
          source_id: s_LWyvLv6VVMmcQrT8bCn7jZ
          stance: supports
          locator: CBDB:57811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57811）
          source: &a1
            id: s_LWyvLv6VVMmcQrT8bCn7jZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大經（CBDB 57811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57811&o=json
            external_identifier: CBDB:57811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vgTLTn1jSAMiucKFuCBH3q
        subject_person_id: p_8Ev6pis6s8G3RgVM13WpSu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1811年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_75vLiUdG6V4g9CUdFkKCsW
          claim_id: c_vgTLTn1jSAMiucKFuCBH3q
          source_id: s_LWyvLv6VVMmcQrT8bCn7jZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YSCVpqbtu6E3RfPHkMGGtj
        subject_person_id: p_8Ev6pis6s8G3RgVM13WpSu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5FQsvFfCayGsJGnj511aBK
          claim_id: c_YSCVpqbtu6E3RfPHkMGGtj
          source_id: s_LWyvLv6VVMmcQrT8bCn7jZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王大經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大經 | accepted |
| birth.date | 1811年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大經（CBDB 57811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57811&o=json)

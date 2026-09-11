---
schema: wang-person/v1
id: p_eHNpyNvhgyQ97b4jrc4M1m
status: active
merged_into: null
display_name: 王維翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1NU1q1FfY6KGBUGY2hPEBK
        subject_person_id: p_eHNpyNvhgyQ97b4jrc4M1m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M7iTYE1C8zLFMjBPgkXjJA
          claim_id: c_1NU1q1FfY6KGBUGY2hPEBK
          source_id: s_jjtKNniT3J1cfNey1xt9N4
          stance: supports
          locator: CBDB:72035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72035）
          source: &a1
            id: s_jjtKNniT3J1cfNey1xt9N4
            source_type: api_record
            title: 中国历代人物传记资料库：王維翰（CBDB 72035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72035&o=json
            external_identifier: CBDB:72035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ccnqjFQ9VLe9NFW3A6zVc9
        subject_person_id: p_eHNpyNvhgyQ97b4jrc4M1m
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1894年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PpHwaCKEn2K2p3iCYh4JdA
          claim_id: c_ccnqjFQ9VLe9NFW3A6zVc9
          source_id: s_jjtKNniT3J1cfNey1xt9N4
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
        id: c_M1s6kyqCi6xXx3HBCHYL4c
        subject_person_id: p_eHNpyNvhgyQ97b4jrc4M1m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維翰（卒于1894年），清人物。籍贯東莞。（中国历代人物传记资料库 CBDB 72035）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YN_DR6e4z4EFWPcXgvjjJc
          claim_id: c_M1s6kyqCi6xXx3HBCHYL4c
          source_id: s_jjtKNniT3J1cfNey1xt9N4
          stance: supports
          locator: CBDB:72035
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

# 王維翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維翰 | accepted |
| death.date | 1894年 | accepted |
| bio.summary | 王維翰（卒于1894年），清人物。籍贯東莞。（中国历代人物传记资料库 CBDB 72035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維翰（CBDB 72035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72035&o=json)

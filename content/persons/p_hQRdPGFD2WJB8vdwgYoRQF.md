---
schema: wang-person/v1
id: p_hQRdPGFD2WJB8vdwgYoRQF
status: active
merged_into: null
display_name: 王用賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k9TUufon22WJL3pmyStbtY
        subject_person_id: p_hQRdPGFD2WJB8vdwgYoRQF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3HN87gEVJzogVBa4xjTFCA
          claim_id: c_k9TUufon22WJL3pmyStbtY
          source_id: s_qD3bRDNzCHZLbvkmaYpSsF
          stance: supports
          locator: CBDB:226925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226925）
          source: &a1
            id: s_qD3bRDNzCHZLbvkmaYpSsF
            source_type: api_record
            title: 中国历代人物传记资料库：王用賢（CBDB 226925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226925&o=json
            external_identifier: CBDB:226925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yhgkiGBe3291GxDAGzbrBR
        subject_person_id: p_hQRdPGFD2WJB8vdwgYoRQF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226925）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IBPu-h6ya3OXh3ApE4kqA_
          claim_id: c_yhgkiGBe3291GxDAGzbrBR
          source_id: s_qD3bRDNzCHZLbvkmaYpSsF
          stance: supports
          locator: CBDB:226925
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

# 王用賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賢 | accepted |
| bio.summary | 王用賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226925） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用賢（CBDB 226925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226925&o=json)
